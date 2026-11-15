// Kepler Space Telescope: planet hunter. Story Spine, robots.json → kep.<lang>.script
//  0 I helped show that our night sky has more planets than stars!
//  1 I'm Kepler, a space telescope.
//  2 I launched in 2009.
//  3 Every day, I stared at the same patch of sky, watching 150,000 stars.
//  4 When a planet crossed in front of its star, the starlight dipped a tiny bit, and I noticed!
//  5 Because of that, I found more than 2,600 planets.
//  6 In 2018, I ran out of fuel.
//  7 Do you think one of those planets could be like Earth?
import {Title, big, counter, Transit, EndCard} from '../overlays.jsx';

const AMES = 'NASA/Ames/JPL-Caltech';

export default {
  shots: [
    {at: 0, img: 'PIA13351', credit: AMES, concept: true, kb: [{s: 1.25, x: 0, y: 0}, {s: 1.05, x: 0, y: 0}], dim: 0.15},
    {at: 1, img: 'PIA11824', credit: AMES, concept: true, kb: [{s: 1.05, x: 0, y: 0}, {s: 1.2, x: -3, y: 0}]},
    {at: 2, img: 'KSC-2009-1783', credit: 'NASA', fit: 'contain', kb: [{s: 1.0, x: 0, y: 0}, {s: 1.1, x: 0, y: 3}]},
    {at: 3, img: 'PIA11984', credit: AMES, kb: [{s: 1.0, x: 0, y: 0}, {s: 1.3, x: 0, y: 0}]},
    {at: 4, img: null},
    {at: 5, img: 'PIA13351', credit: AMES, concept: true, dim: 0.3, kb: [{s: 1.05, x: 0, y: 0}, {s: 1.2, x: 3, y: 0}]},
    {at: 6, img: 'PIA11824', credit: AMES, concept: true, dim: 0.2, kb: [{s: 1.2, x: -3, y: 0}, {s: 1.0, x: 0, y: 0}]},
  ],
  overlays: [
    {at: 0, until: 0, C: Title},
    {at: 1, until: 1, C: big('telescope')},
    {at: 2, until: 2, C: big('launch')},
    {at: 3, until: 3, C: counter('stars')},
    {at: 4, until: 4, C: Transit},
    {at: 5, until: 5, C: counter('planets')},
    {at: 6, until: 6, C: big('fuel')},
    {at: 7, until: 'end', C: EndCard},
  ],
  labels: {
    en: {
      subtitle: '🌌 Space telescope · planet hunter',
      telescope: {text: '🔭 Space telescope', sub: 'looking for planets'},
      launch: {text: '2009', sub: 'launch!'},
      stars: {from: 0, to: 150000, sep: true, unit: '⭐', sub: 'stars in one patch of sky'},
      transit: {text: '🪐 Starlight dips', sub: 'when a planet passes in front of its star'},
      planets: {from: 0, to: 2600, sep: true, suffix: '+', unit: '🪐', sub: 'planets found'},
      fuel: {text: '⛽ 2018', sub: 'out of fuel'},
      status: '💤 Retired in 2018',
      next: 'Answer the quiz to rescue this story! 🏅',
    },
    ar: {
      subtitle: '🌌 تلسكوب فضائي · صائد الكواكب',
      telescope: {text: '🔭 تلسكوب فضائي', sub: 'يبحث عن الكواكب'},
      launch: {text: '2009', sub: 'الانطلاق!'},
      stars: {from: 0, to: 150000, sep: true, unit: '⭐', sub: 'نجم في جزء واحد من السماء'},
      transit: {text: '🪐 ضوء النجم ينخفض', sub: 'عندما يمر كوكب أمام نجمه'},
      planets: {from: 0, to: 2600, sep: true, suffix: '+', unit: '🪐', sub: 'كوكب اكتشفته'},
      fuel: {text: '⛽ 2018', sub: 'نفد الوقود'},
      status: '💤 تقاعد سنة 2018',
      next: 'أجب عن السؤال لتنقذ هذه القصة! 🏅',
    },
  },
};
