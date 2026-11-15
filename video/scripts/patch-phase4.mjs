// Phase 4: video scripts for the remaining 11 robots (docs/data/robots.json).
// The scripts are the stories already on the site (already fact-checked by the team), cut into sentences.
// Rule kept from phase 3: story on the page == script joined. Only two Arabic sentences were split in two
// (sv3, pio) so EN and AR have the same number of sentences; the words are unchanged.
//   cd video && node scripts/patch-phase4.mjs
import fs from 'node:fs';

const FILE = '../docs/data/robots.json';
const bots = JSON.parse(fs.readFileSync(FILE, 'utf8'));

// years shown on the end card; media = every NASA picture used in the video (for the credits under the player).
const PLAN = {
  sv3: {years: '1967', media: ['as12-48-7121', 'as12-48-7110', 'AS12-48-7133', 'AS12-48-7134']},
  seis: {years: '1969–1977', media: ['as16-113-18347', 'as11-40-5942', 'as12-47-6918', 'S69-39587']},
  lm: {years: '1969', media: ['as11-40-5927', 'as11-40-5903', 'as11-40-5948', 'as11-44-6642']},
  vik: {years: '1976–1982', media: ['PIA00381', 'PIA09703', 'PIA00563']},
  soj: {years: '1997', media: ['PIA00766', 'PIA01121', 'PIA00633', 'PIA04318']},
  spi: {years: '2004–2011', media: ['PIA04928', 'PIA05283', 'PIA09491']},
  ins: {years: '2018–2022', media: ['PIA22876', 'PIA22977', 'PIA25286', 'PIA25287']},
  phx: {years: '2008', media: ['PIA09942', 'PIA10666', 'PIA10693', 'PIA10745', 'PIA10910']},
  pio: {years: '1972–2003', media: ['ARC-1973-AC73-4247', 'ARC-1972-AC72-2135', 'ARC-1972-AC72-2140', 'ARC-1973-AC73-9278']},
  kep: {years: '2009–2018', media: ['PIA13351', 'PIA11824', 'KSC-2009-1783', 'PIA11984']},
  near: {years: '1996–2001', media: ['PIA18177', 'PIA02467', 'PIA03148']},
};

// Sentence ends: . ! ? (and Arabic ؟), but not "..." / "…" inside "Shhh..." / "هسسس…".
const splitEN = (s) => s.split(/(?<=[^.][.!?])\s+(?=[A-Z"])/);
const splitAR = (s) => s.split(/(?<=[.!؟])\s+/);
const FIX = {
  // EN "I never drove anywhere. I just listened to Mars!" is one sentence in Arabic.
  ins: {en: (a) => [`${a[0]} ${a[1]}`, ...a.slice(2)]},
  // Arabic joins two English sentences with a comma; split at the same place.
  sv3: {ar: (a) => a.flatMap((x) => x.startsWith('ومشى الرواد') ? x.replace('لزيارتي، ', 'لزيارتي.\n').split('\n') : [x])},
  pio: {ar: (a) => a.flatMap((x) => x.startsWith('والآن أتجه') ? x.replace('الدبران، ', 'الدبران.\n').split('\n') : [x])},
};

for (const [id, plan] of Object.entries(PLAN)) {
  const b = bots.find((x) => x.id === id);
  if (!b) throw new Error(id);
  const en = (FIX[id]?.en || ((a) => a))(splitEN(b.en.story));
  const ar = (FIX[id]?.ar || ((a) => a))(splitAR(b.ar.story));
  if (en.length !== ar.length) throw new Error(`${id}: ${en.length} EN vs ${ar.length} AR sentences\n${en.join('\n')}\n${ar.join('\n')}`);
  b.en.script = en;
  b.ar.script = ar;
  b.en.story = en.join(' ');
  b.ar.story = ar.join(' ');
  b.years = plan.years;
  b.media = plan.media;
  b.video = true;
  console.log(`\n== ${id} (${en.length})`);
  en.forEach((s, i) => console.log(`  ${i}  ${s}\n     ${ar[i]}`));
}

fs.writeFileSync(FILE, JSON.stringify(bots, null, 2) + '\n');
