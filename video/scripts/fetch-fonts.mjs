// Download the Google Fonts we use (OFL licensed) into public/fonts so renders work offline.
import fs from 'node:fs';

const FAMILIES = {
  Fredoka: {weights: [500, 600, 700], subsets: ['latin']},
  Nunito: {weights: [600, 700, 800], subsets: ['latin']},
  'Baloo Bhaijaan 2': {weights: [500, 600, 700], subsets: ['arabic', 'latin']},
};
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36';
fs.mkdirSync('public/fonts', {recursive: true});
const list = [];
for (const [fam, {weights, subsets}] of Object.entries(FAMILIES)) {
  const url = `https://fonts.googleapis.com/css2?family=${fam.replace(/ /g, '+')}:wght@${weights.join(';')}&display=block`;
  const css = await (await fetch(url, {headers: {'User-Agent': UA}})).text();
  // blocks look like: /* latin */ @font-face { ... font-weight: 500; src: url(...) format('woff2'); unicode-range: ...; }
  for (const m of css.matchAll(/\/\*\s*([\w-]+)\s*\*\/\s*@font-face\s*{([^}]*)}/g)) {
    const [, subset, body] = m;
    if (!subsets.includes(subset)) continue;
    const weight = /font-weight:\s*(\d+)/.exec(body)[1];
    const src = /url\((https:[^)]+\.woff2)\)/.exec(body)[1];
    const range = /unicode-range:\s*([^;]+);/.exec(body)?.[1] || '';
    const file = `${fam.replace(/ /g, '')}-${weight}-${subset}.woff2`;
    fs.writeFileSync(`public/fonts/${file}`, Buffer.from(await (await fetch(src)).arrayBuffer()));
    list.push({family: fam, weight, file, range});
  }
}
fs.writeFileSync('src/fonts.json', JSON.stringify(list, null, 1));
console.log(`${list.length} font files`);
