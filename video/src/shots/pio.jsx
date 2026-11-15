// Pioneer 10: the first through the asteroid belt, still traveling. Story Spine, robots.json → pio.<lang>.script
//  0 I was the first spacecraft ever to fly through the asteroid belt!
//  1 I'm Pioneer 10.
//  2 I launched on March 2, 1972.
//  3 Then I became the first spacecraft to fly past Jupiter.
//  4 I was designed for a 21-month mission, but I lasted more than 30 years!
//  5 My last signal reached Earth on January 23, 2003.
//  6 Now I'm heading toward the red star Aldebaran.
//  7 I should pass it in about two million years!
//  8 Where would you go if you could travel forever?
import {Title, big, counter, Lifetime, EndCard} from '../overlays.jsx';

const ARC = 'NASA Ames Research Center';

export default {
  shots: [
    {at: 0, img: 'ARC-1973-AC73-4247', credit: ARC, concept: true, kb: [{s: 1.25, x: 0, y: 0}, {s: 1.05, x: 0, y: 0}], dim: 0.15},
    {at: 1, img: 'ARC-1972-AC72-2135', credit: ARC, kb: [{s: 1.05, x: 0, y: 0}, {s: 1.2, x: 0, y: -3}]},
    {at: 2, img: 'ARC-1972-AC72-2140', credit: ARC, fit: 'contain', kb: [{s: 1.0, x: 0, y: 0}, {s: 1.1, x: 0, y: -2}]},
    {at: 3, img: 'ARC-1973-AC73-9278', credit: 'NASA Ames Research Center/University of Arizona', fit: 'contain', kb: [{s: 1.0, x: 0, y: 0}, {s: 1.12, x: 0, y: 4}]},
    {at: 4, img: 'ARC-1973-AC73-4247', credit: ARC, concept: true, dim: 0.3, kb: [{s: 1.05, x: 0, y: 0}, {s: 1.2, x: 4, y: 0}]},
    {at: 5, img: null},
  ],
  overlays: [
    {at: 0, until: 0, C: Title},
    {at: 1, until: 1, C: big('belt')},
    {at: 2, until: 2, C: big('launch')},
    {at: 3, until: 3, C: big('jupiter')},
    {at: 4, until: 4, C: Lifetime},
    {at: 5, until: 5, C: big('signal')},
    {at: 6, until: 6, C: big('star')},
    {at: 7, until: 7, C: counter('years')},
    {at: 8, until: 'end', C: EndCard},
  ],
  labels: {
    en: {
      subtitle: '🌌 Explorer · still traveling',
      belt: {text: '☄️ Asteroid belt', sub: 'the first to fly through it'},
      launch: {text: 'March 2, 1972', sub: 'launch!'},
      jupiter: {text: '🪐 Jupiter', sub: 'the first spacecraft to fly past it'},
      lifetime: {planned: 'Designed for', plannedV: '21 months', actual: 'Actually lasted', actualV: 'more than 30 years'},
      signal: {text: '📡 January 23, 2003', sub: 'my last signal reaches Earth'},
      star: {text: '⭐ Aldebaran', sub: 'a red star, far, far away'},
      years: {from: 0, to: 2000000, sep: true, unit: '⏳', sub: 'about two million years until I pass it'},
      status: '🚀 Still traveling',
      next: 'Answer the quiz to rescue this story! 🏅',
    },
    ar: {
      subtitle: '🌌 مستكشف · ما زال مسافرًا',
      belt: {text: '☄️ حزام الكويكبات', sub: 'أول من عبره'},
      launch: {text: '2 آذار 1972', sub: 'الانطلاق!'},
      jupiter: {text: '🪐 المشتري', sub: 'أول مركبة تمر بجانبه'},
      lifetime: {planned: 'صُمّم لـ', plannedV: '21 شهرًا', actual: 'عمل فعلًا', actualV: 'أكثر من 30 سنة'},
      signal: {text: '📡 23 كانون الثاني 2003', sub: 'آخر إشارة مني تصل إلى الأرض'},
      star: {text: '⭐ الدبران', sub: 'نجم أحمر بعيد جدًا'},
      years: {from: 0, to: 2000000, sep: true, unit: '⏳', sub: 'حوالي مليوني سنة حتى أمرّ بجانبه'},
      status: '🚀 ما زال مسافرًا',
      next: 'أجب عن السؤال لتنقذ هذه القصة! 🏅',
    },
  },
};
