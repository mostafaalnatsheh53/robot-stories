// Smoke test for phase 2: Opportunity page in EN and AR, desktop + phone. Screenshots → argv[2].
import {chromium} from 'playwright';
import path from 'node:path';
import {serve} from './serve.mjs';

const out = process.argv[2] || '.';
const server = await serve(8081);
const browser = await chromium.launch();
const errors = [];

for (const [label, vp] of [['desktop', {width: 1280, height: 900}], ['phone', {width: 390, height: 844}]]) {
  const ctx = await browser.newContext({viewport: vp, deviceScaleFactor: label === 'phone' ? 2 : 1});
  const page = await ctx.newPage();
  page.on('console', (m) => m.type() === 'error' && errors.push(`${label}: ${m.text()}`));
  page.on('pageerror', (e) => errors.push(`${label}: ${e.message}`));
  // media elements cancel open-ended range requests when they seek/switch source: that's normal
  page.on('requestfailed', (r) => { const why = r.failure()?.errorText || ''; if (!/ERR_ABORTED/.test(why)) errors.push(`${label}: failed ${r.url()} ${why}`); });
  await page.goto('http://localhost:8081/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.click('.wcard[data-w="mars"]');
  await page.click('.tli[data-id="opp"]');
  await page.waitForSelector('#story video');

  // play a few seconds, check time advances and a subtitle cue is active
  const v = await page.evaluate(async () => {
    const vid = document.querySelector('#story video');
    vid.muted = true; await vid.play(); await new Promise((r) => setTimeout(r, 5000)); vid.pause();
    const tr = [...vid.textTracks].find((t) => t.mode === 'showing');
    return {t: vid.currentTime.toFixed(1), dur: vid.duration.toFixed(1), w: vid.videoWidth, track: tr?.language, cues: tr?.cues?.length, active: tr?.activeCues?.[0]?.text};
  });
  console.log(label, 'en video', JSON.stringify(v));
  await page.screenshot({path: path.join(out, `${label}-en-video.png`), fullPage: label === 'desktop'});

  await page.click('.opt[data-i="0"]'); // wrong first
  await page.click('.opt[data-i="2"]'); // right
  await page.waitForTimeout(400);
  console.log(label, 'feedback:', await page.textContent('#fb'), '| passport:', await page.textContent('#pCount'));
  await page.locator('.quiz').screenshot({path: path.join(out, `${label}-en-quiz.png`)});

  await page.click('#themeBtn'); await page.waitForTimeout(300); await page.screenshot({path: path.join(out, `${label}-light.png`), fullPage: label === 'desktop'}); await page.click('#themeBtn');
  await page.click('#langBtn');
  await page.waitForSelector('#story video');
  const a = await page.evaluate(() => ({dir: document.documentElement.dir, src: document.querySelector('#story video source').src.split('/').pop(), note: document.querySelector('.vnote').textContent}));
  console.log(label, 'ar', JSON.stringify(a));
  await page.evaluate(async () => { const vid = document.querySelector('#story video'); vid.muted = true; vid.currentTime = 12; await vid.play(); await new Promise((r) => setTimeout(r, 1500)); vid.pause(); });
  await page.screenshot({path: path.join(out, `${label}-ar-video.png`), fullPage: label === 'desktop'});
  await ctx.close();
}
console.log('errors:', errors.length ? errors : 'none');
await browser.close();
server.close();
