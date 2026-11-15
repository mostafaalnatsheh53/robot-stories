// Apollo 11 Laser Reflector: the quiet helper that still works. Story Spine, robots.json → rr.<lang>.script
//  0 I have no batteries and no power, but I'm still helping scientists today!
//  1 I'm a box of mirrors on the Moon.
//  2 Apollo 11 astronauts set me down in 1969.
//  3 I just sit here quietly.
//  4 Then scientists on Earth shine a laser at me, and I bounce the light right back!
//  5 By timing the light's trip, they measure how far away the Moon is.
//  6 They found that the Moon is slowly drifting away from Earth, about 3.8 centimeters every year.
//  7 What would you like to measure in space?
import {Title, big, Laser, EndCard} from '../overlays.jsx';

export default {
  shots: [
    {at: 0, img: 'as11-40-5948', credit: 'NASA', kb: [{s: 1.35, x: 6, y: 4}, {s: 1.1, x: 2, y: 2}], dim: 0.15},
    {at: 1, img: 'as11-40-5948', credit: 'NASA', kb: [{s: 1.1, x: 0, y: 0}, {s: 1.25, x: -3, y: 0}]},
    {at: 4, img: null},
  ],
  overlays: [
    {at: 0, until: 0, C: Title},
    {at: 1, until: 1, C: big('mirrors')},
    {at: 2, until: 2, C: big('apollo11')},
    {at: 3, until: 3, C: big('quiet')},
    {at: 4, until: 6, C: Laser},
    {at: 7, until: 'end', C: EndCard},
  ],
  labels: {
    en: {
      subtitle: '🌕 The quiet helper · still working',
      mirrors: {text: '🪞 Box of mirrors', sub: 'no batteries, no power'},
      apollo11: {text: 'Apollo 11', sub: 'July 1969'},
      quiet: {text: '🤫', sub: 'just sitting quietly…'},
      laser: 'Earth 🔦 → Moon 🪞 → Earth',
      drift: '+3.8 cm every year',
      status: '✅ Still useful today',
      next: 'Answer the quiz to rescue this story! 🏅',
    },
    ar: {
      subtitle: '🌕 المساعد الهادئ · ما زال يعمل',
      mirrors: {text: '🪞 صندوق مرايا', sub: 'لا بطاريات ولا طاقة'},
      apollo11: {text: 'أبولو 11', sub: 'تموز 1969'},
      quiet: {text: '🤫', sub: 'أجلس هنا بهدوء…'},
      laser: 'الأرض 🔦 ← القمر 🪞 ← الأرض',
      drift: '+3.8 سم كل سنة',
      status: '✅ ما زال مفيدًا اليوم',
      next: 'أجب عن السؤال لتنقذ هذه القصة! 🏅',
    },
  },
};
