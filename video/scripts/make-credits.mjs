// Build docs/data/credits.json (served to the site) + media/credits.json from the NASA API metadata
// saved next to the raw downloads, plus the few media that don't come from images.nasa.gov.
// Only media actually present in video/public (img/ or clips/) are listed.
import fs from 'node:fs';

const meta = JSON.parse(fs.readFileSync('../media/raw/_meta.json', 'utf8').replace(/^﻿/, ''));
const out = {};
for (const x of meta) {
  if (!fs.existsSync(`public/img/${x.file}`)) continue;
  out[x.nasa_id] = {
    title: x.title.trim(), credit: x.credit, date: x.date,
    concept: /artist/i.test(x.title),
    page: `https://images.nasa.gov/details/${x.nasa_id}`,
  };
}

// Some library entries have only their ID as a title; titles below are taken from their NASA descriptions.
const FIX = {
  'ARC-1972-AC72-2135': {title: 'Pioneer 10 spacecraft being readied for launch at Cape Kennedy', credit: 'NASA Ames Research Center'},
  'ARC-1972-AC72-2140': {title: 'Pioneer 10 on its Atlas-Centaur rocket before launch', credit: 'NASA Ames Research Center'},
  'ARC-1973-AC73-4247': {title: 'Pioneer 10 passing Jupiter (artist: Rick Guidice)', credit: 'NASA Ames Research Center', concept: true},
  'ARC-1973-AC73-9278': {title: 'Jupiter as seen by Pioneer 10, December 3, 1973', credit: 'NASA Ames Research Center/University of Arizona'},
  'KSC-2009-1783': {title: "Kepler spacecraft being placed on its Delta II rocket", credit: 'NASA'},
  'as11-44-6642': {title: 'The Apollo 11 lunar module ascent stage returns from the Moon, with Earth behind', credit: 'NASA'},
  'PIA09942': {credit: 'NASA/JPL-Caltech/University of Arizona'},
};
for (const [id, f] of Object.entries(FIX)) if (out[id]) Object.assign(out[id], f);

const EXTRA = {
  'lroc-a15-tracks': {
    file: 'public/img/lroc-a15-tracks.jpg', title: 'Apollo 15 LRV tracks seen by the Lunar Reconnaissance Orbiter Camera',
    credit: 'NASA/GSFC/Arizona State University', date: '', concept: false, page: 'https://lroc.im-ldi.com/images/491',
  },
  'ing-first-flight': {
    file: 'public/clips/ing-first-flight.mp4', video: true,
    title: "First Video of NASA's Ingenuity Mars Helicopter in Flight (cropped, no sound)",
    credit: 'NASA/JPL-Caltech/ASU', date: '2021-04-19', concept: false,
    page: 'https://images.nasa.gov/details/JPL-20210419-TECHf-0001-First%20Video%20of%20NASA%E2%80%99s%20Ingenuity%20Mars%20Helicopter%20in%20Flight',
  },
};
for (const [id, e] of Object.entries(EXTRA)) {
  if (!fs.existsSync(e.file)) continue;
  const {file, ...rest} = e;
  out[id] = rest;
}

const json = JSON.stringify(out, null, 2) + '\n';
fs.writeFileSync('../docs/data/credits.json', json);
fs.writeFileSync('../media/credits.json', json);
console.log(`${Object.keys(out).length} credits: ${Object.keys(out).join(' ')}`);
