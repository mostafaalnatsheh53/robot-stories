// Viking 1 Lander: the first pictures from Mars' surface. Story Spine, robots.json → vik.<lang>.script
//  0 Click!
//  1 I sent back the very first pictures from the surface of Mars!
//  2 I'm the Viking 1 Lander.
//  3 On July 20, 1976, I made NASA's first successful landing on Mars.
//  4 Every day, I sent weather reports home.
//  5 With my robot arm, I scooped up soil and tested it for signs of life.
//  6 One test looked hopeful, but the main test found no organic compounds.
//  7 I kept working for more than six years, until November 1982.
//  8 Do you think Mars was ever home to life?
import {Title, big, EndCard} from '../overlays.jsx';

const MODEL = 'NASA/JPL-Caltech/University of Arizona';

export default {
  shots: [
    {at: 0, img: 'PIA00381', credit: 'NASA/JPL', fit: 'contain', kb: [{s: 1.0, x: 0, y: 0}, {s: 1.1, x: 0, y: 0}], dim: 0.15},
    {at: 2, img: 'PIA09703', credit: MODEL, kb: [{s: 1.05, x: 0, y: 0}, {s: 1.2, x: 0, y: 2}]},
    {at: 3, img: 'PIA00563', credit: 'NASA/JPL', kb: [{s: 1.05, x: 0, y: 0}, {s: 1.25, x: 0, y: 3}]},
    {at: 5, img: 'PIA09703', credit: MODEL, kb: [{s: 1.2, x: -6, y: 0}, {s: 1.5, x: -12, y: -6}]},
    {at: 6, img: 'PIA00563', credit: 'NASA/JPL', dim: 0.25, kb: [{s: 1.25, x: 0, y: 0}, {s: 1.05, x: 0, y: 0}]},
    {at: 7, img: 'PIA00381', credit: 'NASA/JPL', fit: 'contain', kb: [{s: 1.0, x: 0, y: 0}, {s: 1.12, x: 0, y: 0}]},
  ],
  overlays: [
    {at: 0, until: 1, C: Title},
    {at: 2, until: 2, C: big('model')},
    {at: 3, until: 3, C: big('landing')},
    {at: 4, until: 4, C: big('weather')},
    {at: 5, until: 5, C: big('arm')},
    {at: 6, until: 6, C: big('test')},
    {at: 7, until: 7, C: big('years')},
    {at: 8, until: 'end', C: EndCard},
  ],
  labels: {
    en: {
      subtitle: '🔴 First pictures from Mars · click!',
      model: {text: '🦿 Viking 1 Lander', sub: '(photo of a model on Earth)'},
      landing: {text: 'July 20, 1976', sub: "NASA's first successful Mars landing"},
      weather: {text: '🌡️ Weather report', sub: 'sent home every day'},
      arm: {text: '🦾 Robot arm', sub: 'scooping soil to test for life'},
      test: {text: '🧪 No organic compounds', sub: 'in the main test'},
      years: {text: '6+ years', sub: 'working until November 1982'},
      status: '💤 Silent since 1982',
      next: 'Answer the quiz to rescue this story! 🏅',
    },
    ar: {
      subtitle: '🔴 أول صور من المريخ · كليك!',
      model: {text: '🦿 مسبار فايكنغ 1', sub: '(صورة نموذج على الأرض)'},
      landing: {text: '20 تموز 1976', sub: 'أول هبوط ناجح لناسا على المريخ'},
      weather: {text: '🌡️ نشرة الطقس', sub: 'أرسلها إلى الأرض كل يوم'},
      arm: {text: '🦾 ذراع آلية', sub: 'تجرف التربة لتبحث عن حياة'},
      test: {text: '🧪 لا مركّبات عضوية', sub: 'في الاختبار الرئيسي'},
      years: {text: 'أكثر من 6 سنوات', sub: 'من العمل حتى تشرين الثاني 1982'},
      status: '💤 صامت منذ 1982',
      next: 'أجب عن السؤال لتنقذ هذه القصة! 🏅',
    },
  },
};
