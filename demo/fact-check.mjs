// Print sentences around keywords on NASA pages (real browser, so JS-rendered pages work too).
//   node fact-check.mjs <url> <keyword> [keyword...]
import {chromium} from 'playwright';

const [url, ...kws] = process.argv.slice(2);
const browser = await chromium.launch();
const page = await browser.newPage({userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36'});
await page.goto(url, {waitUntil: 'domcontentloaded', timeout: 60000});
await page.waitForTimeout(2500);
const text = (await page.evaluate(() => document.body.innerText)).replace(/\s+/g, ' ');
console.log(`== ${url} (${text.length} chars)`);
for (const kw of kws) {
  const re = new RegExp(`[^.!?]{0,220}${kw}[^.!?]{0,220}[.!?]?`, 'gi');
  const hits = [...new Set(text.match(re) || [])].slice(0, 3);
  console.log(`-- [${kw}] ${hits.length ? hits.join(' || ') : 'NOT FOUND'}`);
}
await browser.close();
