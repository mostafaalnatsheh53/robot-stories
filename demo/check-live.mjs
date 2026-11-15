// Full test of the LIVE site: worlds, video + subtitles (EN/AR), quiz + badge, About, Arabic RTL, phone 375px, fonts, errors.
//   node check-live.mjs <baseUrl> [screenshotDir]
import {chromium} from 'playwright';
import path from 'node:path';

const base = process.argv[2] || 'https://mostafaalnatsheh53.github.io/robot-stories/';
const out = process.argv[3] || '.';
const browser = await chromium.launch();
const errors = [], results = [];
const ok = (name, pass, info = '') => { results.push(pass); console.log(`${pass ? 'PASS' : 'FAIL'}  ${name}${info ? '  ' + info : ''}`); };

for (const [dev, viewport] of [['desktop', {width: 1280, height: 900}], ['phone', {width: 375, height: 812}]]) {
  const ctx = await browser.newContext({viewport, isMobile: dev === 'phone', hasTouch: dev === 'phone'});
  const page = await ctx.newPage();
  page.on('console', (m) => m.type() === 'error' && errors.push(`${dev}: ${m.text()}`));
  page.on('pageerror', (e) => errors.push(`${dev}: ${e.message}`));
  page.on('response', (r) => r.status() >= 400 && errors.push(`${dev}: ${r.status()} ${r.url()}`));
  await page.goto(base, {waitUntil: 'networkidle'});
  await page.evaluate(() => localStorage.clear());
  await page.reload({waitUntil: 'networkidle'});

  ok(`${dev} home loads`, await page.locator('.wcard').count() === 3);
  const fonts = await page.evaluate(async () => { await document.fonts.ready; return ['Fredoka', 'Nunito'].map((f) => document.fonts.check(`600 20px "${f}"`)); });
  ok(`${dev} fonts loaded`, fonts.every(Boolean), JSON.stringify(fonts));
  const sw = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  ok(`${dev} no sideways scroll (home)`, sw <= 0, `extra=${sw}`);
  await page.screenshot({path: path.join(out, `live-home-${dev}.png`), fullPage: true});

  for (const w of ['moon', 'mars', 'deep']) {
    await page.click('#brand');
    await page.click(`.wcard[data-w="${w}"]`);
    const pins = await page.locator('.pin').count();
    ok(`${dev} world ${w}`, pins >= 5, `${pins} robots`);
  }

  // one robot: video + subtitles, quiz + badge (Mars → Opportunity)
  await page.click('.tab[data-w="mars"]');
  await page.click('.tli[data-id="opp"]');
  const vid = await page.evaluate(async () => {
    const v = document.querySelector('#story video'); v.preload = 'metadata'; v.load();
    await new Promise((r) => { if (v.readyState >= 1) r(); v.addEventListener('loadedmetadata', r, {once: true}); setTimeout(r, 10000); });
    const t = [...v.textTracks].find((x) => x.mode === 'showing');
    await new Promise((r) => setTimeout(r, 800));
    return {dur: v.duration, cues: t?.cues?.length || 0, lang: t?.language};
  });
  ok(`${dev} EN video + subtitles`, vid.dur > 30 && vid.cues > 0 && vid.lang === 'en', JSON.stringify(vid));
  if (dev === 'phone') {
    const top = await page.evaluate(() => document.querySelector('#story').getBoundingClientRect().top);
    ok('phone auto-scroll to the video', Math.abs(top) < 120, `top=${Math.round(top)}`);
  }
  const answer = await page.evaluate(() => fetch('data/robots.json').then((r) => r.json()).then((b) => b.find((x) => x.id === 'opp').a));
  const wrong = answer === 0 ? 1 : 0;
  await page.locator('.opt').nth(wrong).click();
  ok(`${dev} wrong answer → orange ✗ + try again`, await page.locator('.opt.wrong').count() === 1 && /Try again/.test(await page.textContent('#fb')));
  await page.locator('.opt').nth(answer).click();
  ok(`${dev} right answer → ✓ + badge`, await page.locator('.opt.right').count() === 1 && await page.locator('.badge.got').count() === 1,
    await page.textContent('#pCount'));
  await page.click('#story details.teach summary');
  ok(`${dev} teachers box opens`, await page.locator('#story .teachbox').isVisible());
  await page.screenshot({path: path.join(out, `live-robot-${dev}.png`), fullPage: true});

  // About page
  await page.click('#aboutBtn');
  ok(`${dev} About opens`, await page.locator('#ov.show h3').isVisible(), await page.textContent('#ov h3'));
  await page.click('#ov .x');

  // Arabic RTL + Arabic video
  await page.click('#langBtn');
  const dir = await page.evaluate(() => document.documentElement.dir);
  const arVid = await page.evaluate(async () => {
    const v = document.querySelector('#story video'); v.preload = 'metadata'; v.load();
    await new Promise((r) => { if (v.readyState >= 1) r(); v.addEventListener('loadedmetadata', r, {once: true}); setTimeout(r, 10000); });
    const t = [...v.textTracks].find((x) => x.mode === 'showing');
    await new Promise((r) => setTimeout(r, 800));
    return {src: v.currentSrc.split('/').pop(), cues: t?.cues?.length || 0, lang: t?.language};
  });
  ok(`${dev} Arabic RTL`, dir === 'rtl');
  ok(`${dev} AR video + Arabic subtitles`, arVid.src === 'opp.ar.mp4' && arVid.cues > 0 && arVid.lang === 'ar', JSON.stringify(arVid));
  const arFont = await page.evaluate(async () => { await document.fonts.ready; return document.fonts.check('600 20px "Baloo Bhaijaan 2"', 'مرحبا'); });
  ok(`${dev} Arabic font loaded`, arFont);
  const sw2 = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  ok(`${dev} no sideways scroll (Arabic robot page)`, sw2 <= 0, `extra=${sw2}`);
  await page.screenshot({path: path.join(out, `live-ar-${dev}.png`), fullPage: true});
  await ctx.close();
}
ok('no console errors / failed requests', errors.length === 0, errors.join(' | '));
console.log(`\n${results.filter(Boolean).length}/${results.length} passed`);
await browser.close();
