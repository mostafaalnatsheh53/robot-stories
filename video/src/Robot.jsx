import {
  AbsoluteFill, Sequence, Img, Audio, OffthreadVideo, staticFile,
  useCurrentFrame, useVideoConfig, interpolate, Easing,
} from 'remotion';
import {Stars} from './overlays.jsx';
import {C, WORLD} from './theme.js';
import {fonts} from './fonts.js';
import {SHOTS} from './shots/index.js';

const FADE = 14; // cross-fade length in frames

// Slow zoom/pan on a still photo. `kb` = [start, end], each {s: scale, x: %, y: %}.
// A shot is a NASA still (img), a NASA video clip (clip, always muted) or a star field (img: null).
const KenBurns = ({img, clip, kb, dur, fit = 'cover', dim = 0}) => {
  const f = useCurrentFrame();
  const p = interpolate(f, [0, dur], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.inOut(Easing.sin)});
  const [a, b] = kb || [{s: 1.04, x: 0, y: 0}, {s: 1.16, x: 0, y: -2}];
  const s = a.s + (b.s - a.s) * p, x = a.x + (b.x - a.x) * p, y = a.y + (b.y - a.y) * p;
  const move = {position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: fit, transform: `scale(${s}) translate(${x}%, ${y}%)`};
  const src = img && staticFile(`img/${img}.jpg`);
  return (
    <AbsoluteFill style={{overflow: 'hidden'}}>
      {!img && !clip && <Stars />}
      {fit === 'contain' && src && (
        <Img src={src} style={{position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(28px) brightness(.45)', transform: 'scale(1.15)'}} />
      )}
      {fit === 'contain' && src && <Stars dim />}
      {src && <Img src={src} style={move} />}
      {clip && <OffthreadVideo src={staticFile(`clips/${clip}.mp4`)} muted style={move} />}
      {/* soft vignette so overlays and subtitles stay readable */}
      <AbsoluteFill style={{background: `radial-gradient(ellipse at 50% 45%, transparent 45%, rgba(5,8,20,.55) 100%), linear-gradient(180deg, rgba(5,8,20,.35) 0%, transparent 22%, transparent 70%, rgba(5,8,20,.6) 100%)`}} />
      {dim > 0 && <AbsoluteFill style={{background: `rgba(5,8,20,${dim})`}} />}
    </AbsoluteFill>
  );
};

const Credit = ({credit, concept, lang, t, video}) => {
  const ar = lang === 'ar';
  const label = video ? (ar ? 'الفيديو:' : 'Video:') : (ar ? 'الصورة:' : 'Image:');
  const conceptTxt = concept ? (ar ? ' (رسم فني)' : " (artist's concept)") : '';
  return (
    <div style={{position: 'absolute', top: 18, [ar ? 'right' : 'left']: 20, direction: ar ? 'rtl' : 'ltr',
      background: 'rgba(5,8,20,.62)', color: C.muted, fontFamily: t.body, fontSize: 17, fontWeight: 700,
      padding: '5px 12px', borderRadius: 20}}>
      📷 {label} <span style={{direction: 'ltr', unicodeBidi: 'isolate'}}>{credit}</span>{conceptTxt}
    </div>
  );
};

const Brand = ({lang, t, accent}) => (
  <div style={{position: 'absolute', top: 16, [lang === 'ar' ? 'left' : 'right']: 20, fontFamily: t.head, fontSize: 22,
    fontWeight: 600, color: C.text, background: 'rgba(5,8,20,.55)', padding: '4px 14px', borderRadius: 20, direction: 'ltr'}}>
    🤖 Robot <span style={{color: accent}}>Stories</span>
  </div>
);

export const Robot = (props) => {
  const {id, lang, sentences, total, world} = props;
  const {fps} = useVideoConfig();
  const t = fonts(lang);
  const theme = WORLD[world] || WORLD.mars;
  const def = SHOTS[id];
  // `at` = sentence index; optional `frac` starts a shot part-way through that sentence.
  const startOf = (i, frac = 0) => (i === 0 && !frac ? 0 : Math.round(sentences[i].from - 6 + frac * sentences[i].dur));
  const endOfSentence = (i) => sentences[i].from + sentences[i].dur;

  const shots = def.shots.map((s, k) => {
    const from = startOf(s.at, s.frac);
    const next = def.shots[k + 1];
    const to = next ? startOf(next.at, next.frac) : total;
    return {...s, from, to};
  });

  const overlays = def.overlays.map((o) => {
    const from = startOf(o.at, o.frac);
    const to = o.until === 'end' ? total : Math.min(total, endOfSentence(o.until) + 8);
    const marks = sentences.map((s) => s.from - from);
    return {...o, from, to, marks};
  });

  return (
    <AbsoluteFill style={{background: theme.bg, direction: lang === 'ar' ? 'rtl' : 'ltr'}}>
      {shots.map((s, k) => {
        const from = k === 0 ? 0 : s.from - FADE;
        const dur = s.to - from;
        return (
          <Sequence key={`shot${k}`} from={from} durationInFrames={dur}>
            <FadeIn enabled={k > 0}>
              <KenBurns img={s.img} clip={s.clip} kb={s.kb} dur={dur} fit={s.fit} dim={s.dim} />
              {s.credit && <Credit credit={s.credit} concept={s.concept} lang={lang} t={t} video={!!s.clip} />}
            </FadeIn>
          </Sequence>
        );
      })}

      {overlays.map((o, k) => {
        const O = o.C;
        return (
          <Sequence key={`ov${k}`} from={o.from} durationInFrames={o.to - o.from}>
            <O {...props} t={t} accent={theme.accent} dur={o.to - o.from} marks={o.marks} at={o.at} labels={def.labels[lang]} fps={fps} />
          </Sequence>
        );
      })}

      <Brand lang={lang} t={t} accent={theme.accent} />

      {sentences.map((s, i) => s.audio && (
        <Sequence key={`a${i}`} from={s.from} durationInFrames={s.dur + 2}>
          <Audio src={staticFile(s.audio)} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

const FadeIn = ({enabled, children}) => {
  const f = useCurrentFrame();
  const o = enabled ? interpolate(f, [0, FADE], [0, 1], {extrapolateRight: 'clamp'}) : 1;
  return <AbsoluteFill style={{opacity: o}}>{children}</AbsoluteFill>;
};
