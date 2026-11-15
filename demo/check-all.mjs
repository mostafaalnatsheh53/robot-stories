// Check every story video on the site (EN + AR): video loads, subtitles load, no console errors.
//   node check-all.mjs [screenshotDir] [baseUrl]
import {chromium} from 'playwright';
import path from 'node:path';
import {serve} from './serve.mjs';

const out = process.argv[2] || '.';
const base = process.argv[3] || 'http://localhost:8082/';
const server = base.includes('localhost:8082') ? await serve(8082) : null;
const browser = await chromium.launch();
const ctx = await browser.newContext({viewport: {width: 1280, height: 900}});
const page = await ctx.newPage();
const errors = [];
page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
page.on('pageerror', (e) => errors.push(e.message));
page.on('requestfailed', (r) => { const why = r.failure()?.errorText || ''; if (!/ERR_ABORTED/.test(why)) errors.push(`failed ${r.url()} ${why}`); });
page.on('response', (r) => r.status() >= 400 && errors.push(`${r.status()} ${r.url()}`));

const probe = (sel = '#story video') => page.evaluate(async (sel) => {
  const v = document.querySelector(sel);
  if (!v) return null;
  v.preload = 'metadata'; v.load();
  await new Promise((ok) => { if (v.readyState >= 1) ok(); v.addEventListener('loadedmetadata', ok, {once: true}); setTimeout(ok, 8000); });
  const tr = [...v.textTracks].find((t) => t.mode === 'showing');
  if (tr && !tr.cues?.length) await new Promise((ok) => setTimeout(ok, 800));
  return {src: v.currentSrc.split('/').pop(), dur: +v.duration.toFixed(1), w: v.videoWidth, cues: tr?.cues?.length ?? 0, track: tr?.language};
}, sel);

await page.goto(base);
await page.evaluate(() => localStorage.clear());
for (const lang of ['en', 'ar']) {
  await page.reload();
  if (lang === 'ar') await page.click('#langBtn');
  console.log(lang, 'intro', JSON.stringify(await probe('#introVid video')));
  await page.screenshot({path: path.join(out, `intro-${lang}.png`)});
  const vids = await page.evaluate(() => fetch('data/videos.json').then((r) => r.json()));
  const bots = await page.evaluate(() => fetch('data/robots.json').then((r) => r.json()));
  for (const id of Object.keys(vids).filter((k) => k !== 'intro')) {
    const w = bots.find((b) => b.id === id).world;
    await page.click('#brand');
    await page.click(`.wcard[data-w="${w}"]`);
    await page.click(`.tli[data-id="${id}"]`);
    console.log(lang, id, JSON.stringify(await probe()));
    if (lang === 'en' || id === 'voy') await page.screenshot({path: path.join(out, `${id}-${lang}.png`)});
  }
}
console.log('errors:', errors.length ? errors : 'none');
await browser.close();
server?.close();
