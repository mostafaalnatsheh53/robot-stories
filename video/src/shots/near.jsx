// NEAR Shoemaker: first to orbit and land on an asteroid. Story Spine, robots.json → near.<lang>.script
//  0 I was the first spacecraft to orbit an asteroid, and the first to land on one!
//  1 I'm NEAR Shoemaker.
//  2 I launched in 1996.
//  3 On Valentine's Day, February 14, 2000, I went into orbit around the asteroid Eros.
//  4 Every day, I studied it and took pictures: 160,000 of them!
//  5 Then, on February 12, 2001, my team gently set me down on its surface.
//  6 My last contact with Earth was on February 28, 2001.
//  7 What would you name your own asteroid?
import {Title, big, counter, Orbit, EndCard} from '../overlays.jsx';

const APL = 'NASA/JPL/JHUAPL';

export default {
  shots: [
    {at: 0, img: 'PIA18177', credit: 'NASA', concept: true, kb: [{s: 1.25, x: 0, y: 0}, {s: 1.05, x: 0, y: 0}], dim: 0.15},
    {at: 2, img: null},
    {at: 3, img: 'PIA02467', credit: APL, fit: 'contain', kb: [{s: 0.8, x: 0, y: 0}, {s: 0.9, x: 0, y: 0}]},
    {at: 4, img: 'PIA02467', credit: APL, fit: 'contain', kb: [{s: 1.0, x: 0, y: 0}, {s: 1.3, x: 4, y: 0}]},
    {at: 5, img: 'PIA03148', credit: APL, fit: 'contain', kb: [{s: 1.0, x: 0, y: 0}, {s: 1.15, x: 0, y: 0}]},
    {at: 6, img: 'PIA18177', credit: 'NASA', concept: true, dim: 0.3, kb: [{s: 1.05, x: 0, y: 0}, {s: 1.2, x: 0, y: 0}]},
  ],
  overlays: [
    {at: 0, until: 0, C: Title},
    {at: 1, until: 1, C: big('firsts')},
    {at: 2, until: 2, C: big('launch')},
    {at: 3, until: 3, C: Orbit},
    {at: 3, until: 3, C: big('eros')},
    {at: 4, until: 4, C: counter('pics')},
    {at: 5, until: 5, C: big('landing')},
    {at: 6, until: 6, C: big('last')},
    {at: 7, until: 'end', C: EndCard},
  ],
  labels: {
    en: {
      subtitle: '🌌 Asteroid explorer · two firsts',
      firsts: {text: '🥇 🥇', sub: 'first to orbit and first to land on an asteroid'},
      launch: {text: '1996', sub: 'launch!'},
      eros: {text: '💘 February 14, 2000', sub: 'orbiting asteroid Eros'},
      pics: {from: 0, to: 160000, sep: true, unit: '📷', sub: 'pictures of Eros'},
      landing: {text: '⬇️ February 12, 2001', sub: 'gently landed · my last, closest picture'},
      last: {text: '📡 February 28, 2001', sub: 'last contact with Earth'},
      status: '💤 Resting on asteroid Eros',
      next: 'Answer the quiz to rescue this story! 🏅',
    },
    ar: {
      subtitle: '🌌 مستكشف الكويكبات · إنجازان أوّلان',
      firsts: {text: '🥇 🥇', sub: 'أول من دار حول كويكب وأول من هبط عليه'},
      launch: {text: '1996', sub: 'الانطلاق!'},
      eros: {text: '💘 14 شباط 2000', sub: 'في مدار حول الكويكب إيروس'},
      pics: {from: 0, to: 160000, sep: true, unit: '📷', sub: 'صورة للكويكب إيروس'},
      landing: {text: '⬇️ 12 شباط 2001', sub: 'هبوط بلطف · آخر وأقرب صورة لي'},
      last: {text: '📡 28 شباط 2001', sub: 'آخر اتصال بالأرض'},
      status: '💤 يرتاح على الكويكب إيروس',
      next: 'أجب عن السؤال لتنقذ هذه القصة! 🏅',
    },
  },
};
