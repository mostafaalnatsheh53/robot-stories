// Sojourner: the first rover on another planet, small as a ruler. Story Spine, robots.json → soj.<lang>.script
//  0 I was the very first robot rover on another planet, and I was only about 30 centimeters tall, the length of a school ruler!
//  1 I'm Sojourner.
//  2 My lander, Pathfinder, touched down on Mars on July 4, 1997.
//  3 The next day, I stood up and rolled down a ramp onto the red ground.
//  4 Every day, I drove slowly to the rocks to study them.
//  5 Together, we sent home 16,500 lander pictures and 550 of mine!
//  6 If you had a tiny rover, where would you send it?
import {Title, big, counter, EndCard} from '../overlays.jsx';

export default {
  shots: [
    {at: 0, img: 'PIA00766', credit: 'NASA/JPL', kb: [{s: 1.05, x: 0, y: 0}, {s: 1.35, x: 10, y: -8}], dim: 0.1},
    {at: 2, img: 'PIA01121', credit: 'NASA/JPL', fit: 'contain', kb: [{s: 0.95, x: 0, y: 0}, {s: 1.05, x: 0, y: 0}]},
    {at: 3, img: 'PIA00633', credit: 'NASA/JPL', fit: 'contain', kb: [{s: 0.95, x: 0, y: 0}, {s: 1.05, x: 0, y: 0}]},
    {at: 4, img: 'PIA04318', credit: 'NASA/JPL-Caltech', fit: 'contain', kb: [{s: 1.0, x: 0, y: 0}, {s: 1.15, x: 3, y: -4}]},
    {at: 5, img: 'PIA00766', credit: 'NASA/JPL', dim: 0.2, kb: [{s: 1.3, x: 8, y: -6}, {s: 1.05, x: 0, y: 0}]},
  ],
  overlays: [
    {at: 0, until: 0, C: Title},
    {at: 1, until: 1, C: big('ruler')},
    {at: 2, until: 2, C: big('landing')},
    {at: 3, until: 3, C: big('ramp')},
    {at: 4, until: 4, C: big('rocks')},
    {at: 5, until: 5, C: counter('pics')},
    {at: 6, until: 'end', C: EndCard},
  ],
  labels: {
    en: {
      subtitle: '🔴 The first rover on another planet',
      ruler: {text: '📏 30 cm', sub: 'as tall as a school ruler'},
      landing: {text: 'July 4, 1997', sub: 'Pathfinder lands on Mars'},
      ramp: {text: '⬇️ Down the ramp', sub: 'onto the red ground'},
      rocks: {text: '🐢 Slow and steady', sub: 'driving to the rocks'},
      pics: {from: 0, to: 16500, sep: true, unit: '📷', sub: 'lander pictures, plus 550 of mine!'},
      status: '💤 Silent since 1997',
      next: 'Answer the quiz to rescue this story! 🏅',
    },
    ar: {
      subtitle: '🔴 أول عربة على كوكب آخر',
      ruler: {text: '📏 30 سم', sub: 'بطول مسطرة المدرسة'},
      landing: {text: '4 تموز 1997', sub: 'باثفايندر يهبط على المريخ'},
      ramp: {text: '⬇️ نزول على المنحدر', sub: 'إلى الأرض الحمراء'},
      rocks: {text: '🐢 ببطء وثبات', sub: 'نحو الصخور'},
      pics: {from: 0, to: 16500, sep: true, unit: '📷', sub: 'صورة من المسبار، و550 صورة مني!'},
      status: '💤 صامتة منذ 1997',
      next: 'أجب عن السؤال لتنقذ هذه القصة! 🏅',
    },
  },
};
