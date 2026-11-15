// Real screenshots of the LIVE site for the pitch deck → docs/pitch/img/
//   node pitch-shots.mjs [baseUrl]
import {chromium} from 'playwright';
import fs from 'node:fs';
import {fileURLToPath} from 'node:url';

const base = process.argv[2] || 'https://mostafaalnatsheh53.github.io/robot-stories/';
const out = new URL('../docs/pitch/img/', import.meta.url);
fs.mkdirSync(out, {recursive: true});
const file = (n) => fileURLToPath(new URL(n, out));
const shot = {type: 'jpeg', quality: 86};
const b = await chromium.launch();

// Desktop robot page (Mars → Opportunity), question answered right, badge earned
{
  const p = await b.newPage({viewport: {width: 1440, height: 900}, deviceScaleFactor: 1, reducedMotion: 'reduce'});
  await p.goto(base, {waitUntil: 'networkidle'});
  await p.evaluate(() => localStorage.clear());
  await p.reload({waitUntil: 'networkidle'});
  await p.locator('.wcard').first().screenshot({...shot, path: file('world-card-moon.jpg')});
  await p.locator('#worldpick').screenshot({...shot, path: file('worlds.jpg')});
  await p.click('.wcard[data-w="mars"]');
  await p.click('.tli[data-id="opp"]');
  await p.waitForTimeout(800);
  await p.evaluate(() => window.scrollTo(0, 0));
  await p.screenshot({...shot, path: file('desk-robot.jpg')});
  await p.locator('.grid > .card').first().screenshot({...shot, path: file('map-mars.jpg')});
  const a = await p.evaluate(() => fetch('data/robots.json').then((r) => r.json()).then((x) => x.find((y) => y.id === 'opp').a));
  await p.locator('.opt').nth(a).click();
  await p.waitForTimeout(500);
  await p.locator('#story .quiz').screenshot({...shot, path: file('quiz-right.jpg')});
  await p.click('#story details.teach summary');
  await p.locator('#story .teachbox').screenshot({...shot, path: file('teachers-box.jpg')});
  await p.locator('#story .badgebox').screenshot({...shot, path: file('badges.jpg')});
  await p.close();
}
// Phones: English and Arabic robot page (the page scrolls to the video by itself)
for (const lang of ['en', 'ar']) {
  const p = await b.newPage({viewport: {width: 390, height: 844}, deviceScaleFactor: 2, isMobile: true, hasTouch: true, reducedMotion: 'reduce'});
  await p.goto(base, {waitUntil: 'networkidle'});
  await p.evaluate((l) => { localStorage.clear(); localStorage.setItem('rs_lang', l); }, lang);
  await p.reload({waitUntil: 'networkidle'});
  if (lang === 'ar') await p.screenshot({...shot, path: file('phone-home-ar.jpg')});
  await p.click('.wcard[data-w="mars"]');
  await p.click('.tli[data-id="opp"]');
  await p.waitForTimeout(1200);
  await p.screenshot({...shot, path: file(`phone-robot-${lang}.jpg`)});
  await p.close();
}
await b.close();
console.log(fs.readdirSync(out).join('  '));
