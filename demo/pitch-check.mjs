// Check the pitch deck and export the PDF.
//   node pitch-check.mjs [deckUrl] [screenshotDir]
// - every slide at 1920×1080: screenshot + nothing spills outside the slide
// - every slide on a phone (390×844, portrait): screenshot + no sideways scroll
// - keyboard and swipe navigation, console errors
// - PDF: docs/pitch/robot-stories-pitch.pdf (one 1920×1080 page per slide)
import {chromium} from 'playwright';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const url = process.argv[2] || 'http://localhost:8080/pitch/';
const out = process.argv[3] && !process.argv[3].startsWith('--') ? process.argv[3] : '.';
const pdf = fileURLToPath(new URL('../docs/pitch/robot-stories-pitch.pdf', import.meta.url));
const b = await browserLaunch();
const errors = [];
let fails = 0;
const ok = (name, pass, info = '') => { if(!pass) fails++; console.log(`${pass ? 'PASS' : 'FAIL'}  ${name}${info ? '  ' + info : ''}`); };
async function browserLaunch(){ return chromium.launch(); }
const watch = (p, tag) => {
  p.on('console', (m) => m.type() === 'error' && errors.push(`${tag}: ${m.text()}`));
  p.on('pageerror', (e) => errors.push(`${tag}: ${e.message}`));
  p.on('response', (r) => r.status() >= 400 && errors.push(`${tag}: ${r.status()} ${r.url()}`));
};

// ---- desktop 1920×1080 ----
const d = await b.newPage({viewport: {width: 1920, height: 1080}, reducedMotion: 'reduce'});
watch(d, 'desktop');
await d.goto(url, {waitUntil: 'networkidle'});
await d.evaluate(() => document.fonts.ready);
const n = await d.locator('.slide').count();
ok('7 slides max', n <= 7, `${n} slides`);
for (let k = 1; k <= n; k++) {
  await d.evaluate((k) => { location.hash = `#${k}`; }, k);
  await d.waitForTimeout(250);
  // anything (except decorations) sticking out of the slide box?
  const spill = await d.evaluate(() => {
    const s = document.querySelector('.slide.on'), r = s.getBoundingClientRect(), bad = [];
    for (const el of s.querySelectorAll('*')) {
      const q = el.getBoundingClientRect();
      if (!q.width || !q.height || el.closest('.burst')) continue;
      if (q.right > r.right + 1 || q.bottom > r.bottom + 1 || q.left < r.left - 1 || q.top < r.top - 1) bad.push(`${el.tagName}.${el.className} ${Math.round(q.bottom - r.bottom)}px`);
    }
    const imgs = [...s.querySelectorAll('img')].filter((i) => !i.complete || !i.naturalWidth).map((i) => i.src);
    return {bad: bad.slice(0, 4), imgs};
  });
  ok(`desktop slide ${k} fits 1920×1080`, spill.bad.length === 0, spill.bad.join(' | '));
  ok(`desktop slide ${k} images load`, spill.imgs.length === 0, spill.imgs.join(' '));
  await d.screenshot({path: path.join(out, `deck-${k}-desktop.png`)});
}
// keyboard
await d.evaluate(() => { location.hash = '#1'; });
await d.waitForTimeout(200);
await d.keyboard.press('ArrowRight');
await d.keyboard.press('ArrowRight');
ok('arrow keys move slides', (await d.textContent('#count')).startsWith('3 /'));
await d.keyboard.press('ArrowLeft');
ok('left arrow goes back', (await d.textContent('#count')).startsWith('2 /'));
// fonts really used
const fonts = await d.evaluate(() => ['Fredoka', 'Nunito'].map((f) => document.fonts.check(`600 20px "${f}"`)));
ok('site fonts loaded', fonts.every(Boolean));

// ---- PDF ----
if (!process.argv.includes('--no-pdf')) {
await d.emulateMedia({media: 'print'});
await d.pdf({path: pdf, width: '1920px', height: '1080px', printBackground: true, preferCSSPageSize: true});
ok('PDF written', true, pdf);
}
await d.close();

// ---- phone 390×844 portrait ----
const ctx = await b.newContext({viewport: {width: 390, height: 844}, deviceScaleFactor: 2, isMobile: true, hasTouch: true, reducedMotion: 'reduce'});
const p = await ctx.newPage();
watch(p, 'phone');
await p.goto(url, {waitUntil: 'networkidle'});
await p.evaluate(() => document.fonts.ready);
for (let k = 1; k <= n; k++) {
  await p.evaluate((k) => { location.hash = `#${k}`; }, k);
  await p.waitForTimeout(250);
  const sw = await p.evaluate(() => { const s = document.querySelector('.slide.on'); return {page: document.documentElement.scrollWidth - innerWidth, slide: s.scrollWidth - s.clientWidth}; });
  ok(`phone slide ${k} no sideways scroll`, sw.page <= 0 && sw.slide <= 0, JSON.stringify(sw));
  // full height of the slide (it scrolls inside on a phone)
  const h = await p.evaluate(() => document.querySelector('.slide.on').scrollHeight);
  await p.setViewportSize({width: 390, height: Math.max(844, h)});
  await p.screenshot({path: path.join(out, `deck-${k}-phone.png`)});
  await p.setViewportSize({width: 390, height: 844});
}
// swipe
await p.evaluate(() => { location.hash = '#2'; });
await p.waitForTimeout(200);
await p.evaluate(() => {
  const t = (type, x) => document.dispatchEvent(new TouchEvent(type, {changedTouches: [new Touch({identifier: 1, target: document.body, clientX: x, clientY: 400})], touches: type === 'touchstart' ? [new Touch({identifier: 1, target: document.body, clientX: x, clientY: 400})] : []}));
  t('touchstart', 320); t('touchend', 60);
});
ok('swipe left → next slide', (await p.textContent('#count')).startsWith('3 /'));
await ctx.close();

ok('no console errors / failed requests', errors.length === 0, errors.join(' | '));
console.log(fails ? `\n${fails} FAILED` : '\nall passed');
await b.close();
