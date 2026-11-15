// List the images on a page with their size and alt text (to pick an official image + its caption).
import {chromium} from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(process.argv[2], {waitUntil: 'networkidle', timeout: 60000});
const imgs = await page.evaluate(() => [...document.images].map((i) => ({src: i.currentSrc || i.src, w: i.naturalWidth, h: i.naturalHeight, alt: i.alt,
  link: i.closest('a')?.href || ''})).filter((i) => i.w > 300));
console.log(JSON.stringify(imgs, null, 1));
await browser.close();
