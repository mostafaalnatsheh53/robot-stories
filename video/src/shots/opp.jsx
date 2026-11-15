// Opportunity: never giving up. Story Spine, robots.json → opp.<lang>.script
//  0 I'm Opportunity, and I was supposed to work for only 90 Martian days!   (hook / once upon a time)
//  1 Every day, I looked for clues about water.                               (every day)
//  2 One day, I found tiny round rocks nicknamed "blueberries."               (until one day)
//  3 They were clues that this place was wet long ago!                        (because of that)
//  4 I kept going for almost 15 years and about 45 kilometers, longer than a marathon!
//  5 In June 2018, a dust storm covered Mars, and I fell silent.              (until finally)
//  6 Now we know Mars may once have been able to support tiny life.           (ever since)
//  7 What do you think we'll find on Mars next?                               (question)
import {Title, big, Lifetime, Dust, EndCard} from '../overlays.jsx';

const OPP = 'NASA/JPL-Caltech/Cornell Univ./Arizona State Univ.';

export default {
  shots: [
    {at: 0, img: 'PIA17759', credit: OPP, kb: [{s: 1.25, x: 0, y: 6}, {s: 1.05, x: 0, y: 0}], dim: 0.15},
    {at: 1, img: 'PIA04413', credit: 'NASA/JPL/Cornell University', concept: true, kb: [{s: 1.05, x: 0, y: 0}, {s: 1.18, x: 2, y: -2}]},
    {at: 2, img: 'PIA05273', credit: 'NASA/JPL/Cornell/USGS', kb: [{s: 1.05, x: -3, y: 0}, {s: 1.3, x: 3, y: 0}]},
    {at: 3, img: 'PIA18885', credit: 'NASA/JPL-Caltech/Cornell Univ./USGS', kb: [{s: 1.1, x: 0, y: 0}, {s: 1.35, x: -2, y: 1}]},
    {at: 4, img: 'PIA23178', credit: 'NASA/JPL-Caltech/MSSS', fit: 'contain', kb: [{s: 1.0, x: 0, y: 0}, {s: 1.12, x: 0, y: 2}], dim: 0.35},
    {at: 5, img: 'PIA22329', credit: 'NASA/JPL-Caltech/MSSS', kb: [{s: 1.05, x: 0, y: 0}, {s: 1.2, x: 0, y: 0}]},
    {at: 6, img: 'PIA17759', credit: OPP, kb: [{s: 1.3, x: 0, y: 4}, {s: 1.0, x: 0, y: 0}]},
  ],
  overlays: [
    {at: 0, until: 0, C: Title},
    {at: 1, until: 1, C: big('water')},
    {at: 2, until: 2, C: big('berries')},
    {at: 3, until: 3, C: big('wet')},
    {at: 4, until: 4, C: Lifetime},
    {at: 5, until: 5, C: Dust},
    {at: 6, until: 6, C: big('life')},
    {at: 7, until: 'end', C: EndCard},
  ],
  labels: {
    en: {
      subtitle: '🔴 Mars rover · never gives up',
      water: {text: '🔍 Clues about water', sub: 'every single day'},
      berries: {text: '“blueberries”', sub: 'tiny round rocks'},
      wet: {text: '💧 Clue!', sub: 'This place was wet long ago'},
      lifetime: {planned: 'Planned', plannedV: '90 Martian days', actual: 'Actually worked', actualV: 'almost 15 years', km: 'km', marathon: 'longer than a marathon'},
      storm: {text: 'June 2018', sub: 'A dust storm covers Mars'},
      life: {text: '🦠❓', sub: 'Mars may once have been able to support tiny life'},
      status: '💤 Mission ended: February 2019',
      next: 'Answer the quiz to rescue this story! 🏅',
    },
    ar: {
      subtitle: '🔴 عربة على المريخ · لا تستسلم',
      water: {text: '🔍 أدلة على الماء', sub: 'كل يوم'},
      berries: {text: '«التوت الأزرق»', sub: 'حصى صغيرة مستديرة'},
      wet: {text: '💧 دليل!', sub: 'كان في هذا المكان ماء منذ زمن بعيد'},
      lifetime: {planned: 'المخطط', plannedV: '90 يومًا مريخيًا', actual: 'عملت فعلًا', actualV: 'قرابة 15 سنة', km: 'كم', marathon: 'أطول من سباق ماراثون'},
      storm: {text: 'حزيران 2018', sub: 'عاصفة غبار تغطّي المريخ'},
      life: {text: '🦠❓', sub: 'ربما كان المريخ قادرًا يومًا ما على دعم حياة صغيرة'},
      status: '💤 انتهت المهمة: شباط 2019',
      next: 'أجب عن السؤال لتنقذ هذه القصة! 🏅',
    },
  },
};
