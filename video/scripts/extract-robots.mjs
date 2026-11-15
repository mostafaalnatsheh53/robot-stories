// One-time helper: pull the BOTS array out of docs/index.html into docs/data/robots.json.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const html = fs.readFileSync(path.join(root, 'docs', 'index.html'), 'utf8');
const start = html.indexOf('const BOTS = [');
const end = html.indexOf('];', html.indexOf('// ---------- DEEP SPACE')) + 2;
const src = html.slice(start, end).replace('const BOTS =', 'return');
const IMG = (id) => `https://images-assets.nasa.gov/image/${id}/${id}~medium.jpg`;
const bots = new Function('IMG', 'IMGO', src)(IMG, IMG);
for (const b of bots) {
  b.img = b.nasaId ? `images/${b.imgFile || b.id}.jpg` : null;
  delete b.imgFile;
}
fs.mkdirSync(path.join(root, 'docs', 'data'), {recursive: true});
fs.writeFileSync(path.join(root, 'docs', 'data', 'robots.json'), JSON.stringify(bots, null, 2) + '\n');
console.log(`wrote ${bots.length} robots`);
