// Build story videos end to end:
//   node scripts/build-robot.mjs opp                 (one robot, EN + AR)
//   node scripts/build-robot.mjs lrv rr ing voy dawn  (several robots, bundled once)
//   node scripts/build-robot.mjs intro               (intro video, text in docs/data/intro.json)
//   node scripts/build-robot.mjs opp --lang ar       (one language, e.g. after recording voices)
//   node scripts/build-robot.mjs opp --no-render     (audio + subtitles only)
//
// For every sentence of <id>.<lang>.script:
//   1. take the team's recording voice/<id>.<lang>.<nn>.wav if it exists,
//      otherwise generate it with Piper (English voice only; see tts/README.md),
//   2. normalise loudness, measure its length,
// then lay the sentences on a timeline, render the MP4 with Remotion,
// write .vtt subtitles (EN + AR) timed to that audio, a poster, and docs/data/videos.json.
import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

const VIDEO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ROOT = path.resolve(VIDEO, '..');
const DOCS = path.join(ROOT, 'docs');
const PUB = path.join(VIDEO, 'public');
const PIPER = path.join(ROOT, 'tts', 'piper', 'piper.exe');
const VOICES = {en: path.join(ROOT, 'tts', 'voices', 'en_US-ljspeech-high.onnx')}; // no Arabic voice with a clear license yet
const FPS = 30, LEAD = 0.9, GAP = 0.45, TAIL = 3.2;

const args = process.argv.slice(2);
const only = args.includes('--lang') ? args[args.indexOf('--lang') + 1] : null;
const noRender = args.includes('--no-render');
const ids = args.filter((a, i) => !a.startsWith('--') && args[i - 1] !== '--lang');
if (!ids.length) throw new Error('usage: node scripts/build-robot.mjs <id> [<id>...] [--lang en|ar] [--no-render]');

const robots = JSON.parse(fs.readFileSync(path.join(DOCS, 'data', 'robots.json'), 'utf8'));
const intro = JSON.parse(fs.readFileSync(path.join(DOCS, 'data', 'intro.json'), 'utf8'));
const emojis = robots.map((b) => b.emoji);

// Find ffmpeg/ffprobe even when winget's PATH change hasn't reached this terminal yet.
(function addWingetFfmpeg() {
  if (spawnSync('ffprobe', ['-version']).status === 0) return;
  const pk = path.join(process.env.LOCALAPPDATA || '', 'Microsoft', 'WinGet', 'Packages');
  const dir = fs.existsSync(pk) && fs.readdirSync(pk).find((d) => d.startsWith('Gyan.FFmpeg'));
  const build = dir && fs.readdirSync(path.join(pk, dir)).find((d) => d.startsWith('ffmpeg-'));
  if (build) process.env.PATH = `${path.join(pk, dir, build, 'bin')}${path.delimiter}${process.env.PATH}`;
})();

const run = (cmd, argv, opts = {}) => {
  const r = spawnSync(cmd, argv, {encoding: 'utf8', ...opts});
  if (r.status !== 0) throw new Error(`${cmd} failed: ${r.stderr || r.error}`);
  return r.stdout;
};
const nn = (i) => String(i + 1).padStart(2, '0');
const duration = (file) => parseFloat(run('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', file]).trim());

function prepareAudio(bot, lang) {
  const recording = (l, i) => path.join(ROOT, 'voice', `${bot.id}.${l}.${nn(i)}.wav`);
  // Recordings are used only when every sentence of that language is recorded (no language mixing).
  const pick = (l) => {
    if (bot[l].script.every((_, i) => fs.existsSync(recording(l, i)))) return {lang: l, source: 'recorded'};
    if (VOICES[l]) return {lang: l, source: 'tts'};
    return {...pick('en'), fallback: true};
  };
  const choice = pick(lang);
  const outDir = path.join(PUB, 'audio', bot.id, lang);
  fs.rmSync(outDir, {recursive: true, force: true});
  fs.mkdirSync(outDir, {recursive: true});
  return {
    ...choice,
    clips: bot[choice.lang].script.map((text, i) => {
      let src = recording(choice.lang, i);
      if (choice.source === 'tts') {
        src = path.join(outDir, `raw-${nn(i)}.wav`);
        run(PIPER, ['--model', VOICES[choice.lang], '--length_scale', '1.08', '--output_file', src], {input: text});
      }
      const out = path.join(outDir, `${nn(i)}.wav`);
      run('ffmpeg', ['-y', '-v', 'error', '-i', src, '-af', 'silenceremove=start_periods=1:start_threshold=-50dB,areverse,silenceremove=start_periods=1:start_threshold=-50dB,areverse,loudnorm=I=-16:TP=-1.5:LRA=11', '-ar', '48000', '-ac', '2', out]);
      if (choice.source === 'tts') fs.rmSync(src);
      return {file: `audio/${bot.id}/${lang}/${nn(i)}.wav`, sec: duration(out)};
    }),
  };
}

function timeline(clips) {
  let t = LEAD;
  const sentences = clips.map((c) => {
    const s = {audio: c.file, from: Math.round(t * FPS), dur: Math.ceil(c.sec * FPS), sec: c.sec, start: t};
    t += c.sec + GAP;
    return s;
  });
  return {sentences, total: Math.round((t - GAP + TAIL) * FPS)};
}

const ts = (sec) => {
  const ms = Math.round(sec * 1000), h = Math.floor(ms / 3600000), m = Math.floor(ms / 60000) % 60, s = Math.floor(ms / 1000) % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${String(ms % 1000).padStart(3, '0')}`;
};
function writeVtt(file, sentences, lines) {
  const cues = sentences.map((s, i) => {
    const next = sentences[i + 1];
    const end = next ? Math.min(s.start + s.sec + GAP * 0.8, next.start - 0.05) : s.start + s.sec + 0.6;
    return `${i + 1}\n${ts(s.start)} --> ${ts(end)} line:85%\n${lines[i]}`;
  });
  fs.writeFileSync(file, `WEBVTT\n\n${cues.join('\n\n')}\n`);
}

const langs = only ? [only] : ['en', 'ar'];
const manifestFile = path.join(DOCS, 'data', 'videos.json');
const manifest = fs.existsSync(manifestFile) ? JSON.parse(fs.readFileSync(manifestFile, 'utf8')) : {};
const jobs = [];
for (const d of ['videos', 'subs', 'posters']) fs.mkdirSync(path.join(DOCS, d), {recursive: true});

for (const id of ids) {
  const bot = id === 'intro' ? intro : robots.find((b) => b.id === id);
  if (!bot?.en?.script || !bot?.ar?.script) throw new Error(`${id}: needs en.script and ar.script`);
  if (bot.en.script.length !== bot.ar.script.length) throw new Error(`${id}: en and ar scripts must have the same number of sentences`);
  manifest[id] = manifest[id] || {};
  for (const lang of langs) {
    const audio = prepareAudio(bot, lang);
    const {sentences, total} = timeline(audio.clips);
    for (const sub of ['en', 'ar']) writeVtt(path.join(DOCS, 'subs', `${id}.${lang}.${sub}.vtt`), sentences, bot[sub].script);
    jobs.push({
      id, lang, world: bot.world, emoji: bot.emoji, name: bot[lang].name, emojis,
      years: bot.years || String(bot.year), total,
      sentences: sentences.map((s, i) => ({text: bot[lang].script[i], audio: s.audio, from: s.from, dur: s.dur})),
    });
    manifest[id][lang] = {
      src: `videos/${id}.${lang}.mp4`, poster: `posters/${id}.${lang}.jpg`,
      subs: {en: `subs/${id}.${lang}.en.vtt`, ar: `subs/${id}.${lang}.ar.vtt`},
      narration: {lang: audio.lang, source: audio.source}, seconds: +(total / FPS).toFixed(1),
    };
    console.log(`${id}.${lang}: ${audio.source} narration (${audio.lang})${audio.fallback ? ' [fallback]' : ''}, ${(total / FPS).toFixed(1)} s`);
  }
}

if (!noRender) {
  const {bundle} = await import('@remotion/bundler');
  const {renderMedia, renderStill, selectComposition} = await import('@remotion/renderer');
  const serveUrl = await bundle({entryPoint: path.join(VIDEO, 'src', 'index.jsx'), publicDir: PUB});
  for (const props of jobs) {
    const composition = await selectComposition({serveUrl, id: 'Robot', inputProps: props});
    const out = path.join(DOCS, 'videos', `${props.id}.${props.lang}.mp4`);
    let last = -1;
    await renderMedia({
      composition, serveUrl, codec: 'h264', outputLocation: out, inputProps: props,
      crf: 28, x264Preset: 'veryfast', audioCodec: 'aac', audioBitrate: '96k', imageFormat: 'jpeg', jpegQuality: 90,
      onProgress: ({progress}) => { const p = Math.floor(progress * 10); if (p !== last) { last = p; process.stdout.write(`  ${props.id}.${props.lang} ${p * 10}%\r`); } },
    });
    // Poster = the title card, about 1.6 s in.
    await renderStill({composition, serveUrl, inputProps: props, frame: Math.min(48, props.total - 1), output: path.join(DOCS, 'posters', `${props.id}.${props.lang}.jpg`), imageFormat: 'jpeg', jpegQuality: 82});
    console.log(`\n  → ${path.relative(ROOT, out)} (${(fs.statSync(out).size / 1e6).toFixed(1)} MB)`);
  }
}

fs.writeFileSync(manifestFile, JSON.stringify(manifest, null, 2) + '\n');
