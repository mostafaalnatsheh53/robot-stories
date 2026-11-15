// Surveyor 3: the robot that got visitors. Story Spine, robots.json → sv3.<lang>.script
//  0 I landed on the Moon in 1967, before any human walked there!
//  1 I'm Surveyor 3.
//  2 My job was to test the lunar ground.
//  3 My tests showed the surface was solid enough to hold a lunar module.
//  4 Then, in November 1969, Apollo 12 landed about 180 meters away from me!
//  5 The astronauts walked over to visit.
//  6 They took my camera and scoop back to Earth, so scientists could study how the Moon had changed them.
//  7 Can you imagine getting visitors on the Moon?
import {Title, big, counter, EndCard} from '../overlays.jsx';

export default {
  shots: [
    {at: 0, img: 'as12-48-7121', credit: 'NASA', kb: [{s: 1.3, x: 0, y: 4}, {s: 1.08, x: 0, y: 0}], dim: 0.15},
    {at: 2, img: 'as12-48-7110', credit: 'NASA', kb: [{s: 1.05, x: 0, y: 0}, {s: 1.25, x: 3, y: -4}]},
    {at: 4, img: 'AS12-48-7133', credit: 'NASA', kb: [{s: 1.05, x: 0, y: 0}, {s: 1.3, x: -4, y: 8}]},
    {at: 5, img: 'AS12-48-7134', credit: 'NASA', kb: [{s: 1.15, x: 0, y: 0}, {s: 1.4, x: -6, y: 0}]},
    {at: 6, img: 'as12-48-7121', credit: 'NASA', kb: [{s: 1.1, x: 0, y: 0}, {s: 1.4, x: 4, y: 4}]},
  ],
  overlays: [
    {at: 0, until: 0, C: Title},
    {at: 1, until: 1, C: big('first')},
    {at: 2, until: 2, C: big('test')},
    {at: 3, until: 3, C: big('solid')},
    {at: 4, until: 4, C: counter('meters')},
    {at: 5, until: 5, C: big('visit')},
    {at: 6, until: 6, C: big('back')},
    {at: 7, until: 'end', C: EndCard},
  ],
  labels: {
    en: {
      subtitle: '🌕 Moon lander · got visitors!',
      first: {text: '1967', sub: 'before any human walked on the Moon'},
      test: {text: '🧪 Ground test', sub: 'Is the Moon safe to land on?'},
      solid: {text: '✅ Solid enough!', sub: 'to hold a lunar module'},
      meters: {from: 0, to: 180, unit: 'm', sub: 'Apollo 12 lands this close · November 1969'},
      visit: {text: '👋 Visitors!', sub: 'the Apollo 12 astronauts'},
      back: {text: '📷 + 🥄 → 🌍', sub: 'my camera and scoop went back to Earth'},
      status: '💤 Resting on the Moon',
      next: 'Answer the quiz to rescue this story! 🏅',
    },
    ar: {
      subtitle: '🌕 مسبار على القمر · جاءه زوّار!',
      first: {text: '1967', sub: 'قبل أن يمشي أي إنسان على القمر'},
      test: {text: '🧪 اختبار الأرض', sub: 'هل الهبوط على القمر آمن؟'},
      solid: {text: '✅ صلبة بما يكفي!', sub: 'لتحمل مركبة قمرية'},
      meters: {from: 0, to: 180, unit: 'م', sub: 'هبطت أبولو 12 على هذا البُعد · تشرين الثاني 1969'},
      visit: {text: '👋 زوّار!', sub: 'روّاد أبولو 12'},
      back: {text: '📷 + 🥄 ← 🌍', sub: 'عادت الكاميرا والمجرفة إلى الأرض'},
      status: '💤 يرتاح على القمر',
      next: 'أجب عن السؤال لتنقذ هذه القصة! 🏅',
    },
  },
};
