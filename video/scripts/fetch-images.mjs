// Download NASA Image Library pictures (the "~large" version, else "~orig") into media/raw/,
// copy them to video/public/img/, and merge their metadata into media/raw/_meta.json.
//   node scripts/fetch-images.mjs PIA00029 as15-88-11901 ...
import fs from 'node:fs';
import path from 'node:path';

const RAW = path.resolve('../media/raw');
const PUB = path.resolve('public/img');
fs.mkdirSync(PUB, {recursive: true});
const metaFile = path.join(RAW, '_meta.json');
const meta = fs.existsSync(metaFile) ? JSON.parse(fs.readFileSync(metaFile, 'utf8').replace(/^﻿/, '')) : [];
const list = Array.isArray(meta) ? meta : [meta];

const get = async (url, tries = 3) => {
  for (let i = 1; ; i++) {
    try { const r = await fetch(url); if (!r.ok) throw new Error(`${r.status} ${url}`); return r; }
    catch (e) { if (i >= tries) throw e; await new Promise((ok) => setTimeout(ok, 1500 * i)); }
  }
};

for (const id of process.argv.slice(2)) {
  if (list.some((x) => x.nasa_id === id) && fs.existsSync(path.join(PUB, `${id}.jpg`))) { console.log(`${id} already here`); continue; }
  const a = await (await get(`https://images-api.nasa.gov/asset/${encodeURIComponent(id)}`)).json();
  const hrefs = a.collection.items.map((x) => x.href);
  let url = hrefs.find((h) => /~large\.jpg$/i.test(h)) || hrefs.find((h) => /~orig\.(jpg|jpeg|png)$/i.test(h)) || hrefs.find((h) => /~medium\.jpg$/i.test(h));
  if (!url) { console.log(`!! ${id}: no image file`); continue; }
  url = url.replace(/^http:/, 'https:').replace(/ /g, '%20');
  const buf = Buffer.from(await (await get(url)).arrayBuffer());
  const file = `${id}.jpg`;
  fs.writeFileSync(path.join(RAW, file), buf);
  fs.copyFileSync(path.join(RAW, file), path.join(PUB, file));
  const s = await (await get(`https://images-api.nasa.gov/search?nasa_id=${encodeURIComponent(id)}`)).json();
  const d = s.collection.items[0].data[0];
  const entry = {nasa_id: id, title: d.title, credit: d.secondary_creator || (d.center === 'JPL' ? 'NASA/JPL' : 'NASA'), date: (d.date_created || '').slice(0, 10), url, file};
  const i = list.findIndex((x) => x.nasa_id === id);
  if (i >= 0) list[i] = entry; else list.push(entry);
  fs.writeFileSync(metaFile, JSON.stringify(list, null, 2));
  console.log(`${id}  ${(buf.length / 1024).toFixed(0)} KB  | ${d.title} | ${entry.credit}`);
}
