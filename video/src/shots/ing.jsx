// Ingenuity: surprise, beating expectations. Story Spine, robots.json → ing.<lang>.script
//  0 I was designed for only 5 flights, but I flew 72 times!
//  1 I'm Ingenuity, a tiny helicopter on Mars.
//  2 Mars' air is less than 1% as thick as Earth's, so flying there is hard.
//  3 On April 19, 2021, I made the first powered flight on another planet!
//  4 I kept flying for nearly 3 years, higher and faster than expected.
//  5 In January 2024, my rotor blades were damaged, and I landed for the last time.
//  6 Now we know flying on Mars is possible.
//  7 What would you explore with a Mars helicopter?
import {Title, big, counter, EndCard} from '../overlays.jsx';

const JPL = 'NASA/JPL-Caltech';

export default {
  shots: [
    {at: 0, img: 'PIA23882', credit: JPL, kb: [{s: 1.2, x: 0, y: 2}, {s: 1.05, x: 0, y: 0}], dim: 0.2},
    {at: 1, img: 'PIA23720', credit: JPL, concept: true, kb: [{s: 1.05, x: 0, y: 0}, {s: 1.22, x: 2, y: 0}]},
    {at: 3, clip: 'ing-first-flight', credit: 'NASA/JPL-Caltech/ASU', kb: [{s: 1.0, x: 0, y: 0}, {s: 1.12, x: 0, y: 2}]},
    {at: 4, img: 'PIA25970', credit: 'NASA/JPL-Caltech/ASU/MSSS', kb: [{s: 1.05, x: 0, y: 0}, {s: 1.2, x: -2, y: 2}]},
    {at: 5, img: 'PIA26243', credit: JPL, kb: [{s: 1.05, x: 0, y: 0}, {s: 1.22, x: -3, y: 2}]},
    {at: 6, img: 'PIA23882', credit: JPL, kb: [{s: 1.25, x: 0, y: 2}, {s: 1.0, x: 0, y: 0}]},
  ],
  overlays: [
    {at: 0, until: 0, C: counter('flights')},
    {at: 1, until: 1, C: Title},
    {at: 2, until: 2, C: big('air')},
    {at: 3, until: 3, C: big('first')},
    {at: 4, until: 4, C: big('faster')},
    {at: 5, until: 5, C: big('blade')},
    {at: 6, until: 6, C: big('possible')},
    {at: 7, until: 'end', C: EndCard},
  ],
  labels: {
    en: {
      subtitle: '🔴 Mars helicopter · full of surprises',
      flights: {from: 5, to: 72, unit: '✈️', sub: 'designed for 5 flights… flew 72!'},
      air: {text: '💨 < 1%', sub: "Mars' air vs. Earth's air"},
      first: {text: 'April 19, 2021', sub: 'First powered flight on another planet'},
      faster: {text: '🚀 Higher & faster', sub: 'for nearly 3 years'},
      blade: {text: 'January 2024', sub: 'Shadow of a damaged rotor blade'},
      possible: {text: '✅ Possible!', sub: 'flying on Mars'},
      status: '💤 Resting on Mars',
      next: 'Answer the quiz to rescue this story! 🏅',
    },
    ar: {
      subtitle: '🔴 مروحية على المريخ · مليئة بالمفاجآت',
      flights: {from: 5, to: 72, unit: '✈️', sub: 'صُمّمت لخمس رحلات… وطارت 72!'},
      air: {text: '💨 < 1%', sub: 'هواء المريخ مقارنة بهواء الأرض'},
      first: {text: '19 نيسان 2021', sub: 'أول طيران بمحرّك على كوكب آخر'},
      faster: {text: '🚀 أعلى وأسرع', sub: 'قرابة 3 سنوات'},
      blade: {text: 'كانون الثاني 2024', sub: 'ظل شفرة مروحة متضرّرة'},
      possible: {text: '✅ ممكن!', sub: 'الطيران على المريخ'},
      status: '💤 ترتاح على المريخ',
      next: 'أجب عن السؤال لتنقذ هذه القصة! 🏅',
    },
  },
};
