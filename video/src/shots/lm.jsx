// Apollo 11 Lunar Module "Eagle" (descent stage): the launch pad left behind. Story Spine, robots.json → lm.<lang>.script
//  0 I helped the first people ever land on another world!
//  1 I'm the bottom half of Eagle, Apollo 11's lunar module.
//  2 On July 20, 1969, I carried Neil Armstrong and Buzz Aldrin down to the Moon's Sea of Tranquility.
//  3 Near me, they set up a seismometer and a laser reflector.
//  4 When it was time to go home, I became the launch platform for my top half, and I was left behind.
//  5 I'm still on the Moon today.
//  6 If you landed on the Moon, what would you do first?
import {Title, big, EndCard} from '../overlays.jsx';

export default {
  shots: [
    {at: 0, img: 'as11-40-5927', credit: 'NASA', kb: [{s: 1.3, x: 0, y: 2}, {s: 1.08, x: 0, y: 0}], dim: 0.15},
    {at: 1, img: 'as11-40-5927', credit: 'NASA', kb: [{s: 1.1, x: 0, y: 0}, {s: 1.45, x: 0, y: -10}]},
    {at: 2, img: 'as11-40-5903', credit: 'NASA', kb: [{s: 1.05, x: 0, y: 0}, {s: 1.2, x: 0, y: 2}]},
    {at: 3, img: 'as11-40-5948', credit: 'NASA', kb: [{s: 1.05, x: 0, y: 0}, {s: 1.2, x: 3, y: 0}]},
    {at: 4, img: 'as11-44-6642', credit: 'NASA', kb: [{s: 1.0, x: 0, y: 0}, {s: 1.25, x: 0, y: -6}]},
    {at: 5, img: 'as11-40-5927', credit: 'NASA', kb: [{s: 1.25, x: 0, y: -4}, {s: 1.05, x: 0, y: 0}]},
  ],
  overlays: [
    {at: 0, until: 0, C: Title},
    {at: 1, until: 1, C: big('half')},
    {at: 2, until: 2, C: big('date')},
    {at: 3, until: 3, C: big('tools')},
    {at: 4, until: 4, C: big('pad')},
    {at: 5, until: 5, C: big('still')},
    {at: 6, until: 'end', C: EndCard},
  ],
  labels: {
    en: {
      subtitle: '🌕 First landing with people',
      half: {text: '🦅 Bottom half', sub: 'of the lunar module Eagle'},
      date: {text: 'July 20, 1969', sub: 'Sea of Tranquility'},
      tools: {text: '📈 + 🪞', sub: 'a seismometer and a laser reflector'},
      pad: {text: '🚀 Launch pad', sub: 'my top half lifted off with the astronauts'},
      still: {text: '📍 Still here', sub: 'on the Moon today'},
      status: '💤 Resting on the Moon',
      next: 'Answer the quiz to rescue this story! 🏅',
    },
    ar: {
      subtitle: '🌕 أول هبوط مع بشر',
      half: {text: '🦅 النصف السفلي', sub: 'من المركبة القمرية «النسر»'},
      date: {text: '20 تموز 1969', sub: 'بحر الهدوء'},
      tools: {text: '📈 + 🪞', sub: 'جهاز لرصد الزلازل وعاكس لليزر'},
      pad: {text: '🚀 منصّة إطلاق', sub: 'نصفي العلوي انطلق ومعه الروّاد'},
      still: {text: '📍 ما زلت هنا', sub: 'على القمر حتى اليوم'},
      status: '💤 يرتاح على القمر',
      next: 'أجب عن السؤال لتنقذ هذه القصة! 🏅',
    },
  },
};
