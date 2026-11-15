// Lunar Roving Vehicle: adventure and fun. Story Spine, robots.json → lrv.<lang>.script
//  0 Vroom! I'm the Lunar Roving Vehicle, a car that drove on the Moon!
//  1 I was built to fold up and fit inside the lunar module.
//  2 On Apollo 15 in 1971, astronauts drove me across the Moon.
//  3 With me, they could explore much farther from their lander.
//  4 Together we drove about 27.9 kilometers!
//  5 Now three Moon cars are parked here, from Apollo 15, 16 and 17.
//  6 And NASA's Lunar Reconnaissance Orbiter can still see our tire tracks from space!
//  7 If you could drive on the Moon, where would you go?
import {Title, big, counter, triptych, EndCard} from '../overlays.jsx';

export default {
  shots: [
    {at: 0, img: 'as15-86-11603', credit: 'NASA', kb: [{s: 1.3, x: 0, y: 4}, {s: 1.08, x: 0, y: 0}], dim: 0.15},
    {at: 1, img: '7021093', credit: 'NASA', fit: 'contain', kb: [{s: 1.0, x: 0, y: 0}, {s: 1.1, x: 0, y: 0}]},
    {at: 2, img: 'as15-88-11901', credit: 'NASA', kb: [{s: 1.05, x: -2, y: 0}, {s: 1.25, x: 2, y: -2}]},
    {at: 6, img: 'lroc-a15-tracks', credit: 'NASA/GSFC/Arizona State University (LROC)', fit: 'contain', kb: [{s: 1.0, x: 0, y: 0}, {s: 1.12, x: 0, y: 0}]},
  ],
  overlays: [
    {at: 0, until: 0, C: Title},
    {at: 1, until: 1, C: big('folded')},
    {at: 2, until: 2, C: big('apollo15')},
    {at: 3, until: 3, C: big('farther')},
    {at: 4, until: 4, C: counter('km')},
    {at: 5, until: 5, C: triptych('three')},
    {at: 6, until: 6, C: big('lro')},
    {at: 7, until: 'end', C: EndCard},
  ],
  labels: {
    en: {
      subtitle: '🌕 Car on the Moon · adventure!',
      folded: {text: '📦 Folded up', sub: 'to fit in the lunar module'},
      apollo15: {text: 'Apollo 15', sub: '1971'},
      farther: {text: '🗺️ Much farther!', sub: 'explore far from the lander'},
      km: {from: 0, to: 27.9, dec: 1, unit: 'km', sub: 'driven together on Apollo 15'},
      three: {credit: 'Images: NASA', items: [{img: 'as15-88-11901', label: 'Apollo 15'}, {img: 'as16-110-17960', label: 'Apollo 16', pos: '30% 72%'}, {img: 'as17-147-22527', label: 'Apollo 17'}]},
      lro: {text: '🛰️ Seen from orbit', sub: 'arrows = tire tracks'},
      status: '💤 Parked on the Moon',
      next: 'Answer the quiz to rescue this story! 🏅',
    },
    ar: {
      subtitle: '🌕 سيارة على القمر · مغامرة!',
      folded: {text: '📦 مطويّة', sub: 'لتدخل داخل المركبة القمرية'},
      apollo15: {text: 'أبولو 15', sub: '1971'},
      farther: {text: '🗺️ أبعد بكثير!', sub: 'استكشاف بعيدًا عن المركبة'},
      km: {from: 0, to: 27.9, dec: 1, unit: 'كم', sub: 'قطعناها معًا في أبولو 15'},
      three: {credit: 'الصور: NASA', items: [{img: 'as15-88-11901', label: 'أبولو 15'}, {img: 'as16-110-17960', label: 'أبولو 16', pos: '30% 72%'}, {img: 'as17-147-22527', label: 'أبولو 17'}]},
      lro: {text: '🛰️ من المدار', sub: 'الأسهم = آثار العجلات'},
      status: '💤 مركونة على القمر',
      next: 'أجب عن السؤال لتنقذ هذه القصة! 🏅',
    },
  },
};
