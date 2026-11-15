// Copy the local fonts (from fetch-fonts.mjs) into docs/fonts and write docs/fonts/fonts.css,
// so the website needs no Google Fonts request either.
import fs from 'node:fs';

const list = JSON.parse(fs.readFileSync('src/fonts.json', 'utf8'));
fs.mkdirSync('../docs/fonts', {recursive: true});
const css = list.map(({family, weight, file, range}) => {
  fs.copyFileSync(`public/fonts/${file}`, `../docs/fonts/${file}`);
  return `@font-face{font-family:'${family}';font-style:normal;font-weight:${weight};font-display:swap;src:url(${file}) format('woff2');${range ? `unicode-range:${range};` : ''}}`;
}).join('\n');
fs.writeFileSync('../docs/fonts/fonts.css', `/* Fredoka, Nunito, Baloo Bhaijaan 2: SIL Open Font License 1.1 (Google Fonts) */\n${css}\n`);
console.log(`${list.length} faces → docs/fonts/fonts.css`);
