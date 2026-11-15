// Phoenix: digging for ice near Mars' North Pole. Story Spine, robots.json → phx.<lang>.script
//  0 I dug into the arctic ground of Mars, and I found ice!
//  1 I'm Phoenix.
//  2 On May 25, 2008, I landed on the arctic plains near Mars' North Pole.
//  3 Every day, I used my robotic arm to dig up soil.
//  4 Then I tested the samples in tiny ovens.
//  5 Because of that, scientists verified that water ice is hidden just under the surface.
//  6 I also found a chemical called perchlorate.
//  7 My mission ended in November 2008.
//  8 What would you look for in Martian ice?
import {Title, big, EndCard} from '../overlays.jsx';

const UA = 'NASA/JPL-Caltech/University of Arizona';

export default {
  shots: [
    {at: 0, img: 'PIA09942', credit: UA, concept: true, kb: [{s: 1.25, x: 0, y: 0}, {s: 1.05, x: 0, y: 0}], dim: 0.15},
    {at: 2, img: 'PIA10666', credit: UA, concept: true, kb: [{s: 1.05, x: 0, y: 0}, {s: 1.2, x: 0, y: 3}]},
    {at: 2, frac: 0.55, img: 'PIA10693', credit: 'NASA/JPL-Caltech/University of Arizona/Texas A&M', fit: 'contain', kb: [{s: 1.0, x: 0, y: 0}, {s: 1.1, x: 0, y: 0}]},
    {at: 3, img: 'PIA10745', credit: 'NASA/JPL-Caltech/University of Arizona/Max Planck Institute', fit: 'contain', kb: [{s: 1.0, x: 0, y: 0}, {s: 1.12, x: 0, y: 0}]},
    {at: 5, img: 'PIA10910', credit: 'NASA/JPL-Caltech/University of Arizona/Texas A&M University', fit: 'contain', kb: [{s: 1.0, x: 0, y: 0}, {s: 1.1, x: 0, y: 0}]},
    {at: 7, img: 'PIA09942', credit: UA, concept: true, kb: [{s: 1.05, x: 0, y: 0}, {s: 1.2, x: 0, y: 0}]},
  ],
  overlays: [
    {at: 0, until: 0, C: Title},
    {at: 1, until: 1, C: big('hunter')},
    {at: 2, until: 2, C: big('landing')},
    {at: 3, until: 3, C: big('dig')},
    {at: 4, until: 4, C: big('ovens')},
    {at: 5, until: 5, C: big('ice')},
    {at: 6, until: 6, C: big('perchlorate')},
    {at: 7, until: 7, C: big('end')},
    {at: 8, until: 'end', C: EndCard},
  ],
  labels: {
    en: {
      subtitle: '🔴 Mars lander · ice hunter',
      hunter: {text: '🧊 Ice hunter', sub: 'a lander near the North Pole'},
      landing: {text: 'May 25, 2008', sub: "arctic plains near Mars' North Pole"},
      dig: {text: '🦾 Dig, dig, dig!', sub: 'with my robotic arm'},
      ovens: {text: '🔥 Tiny ovens', sub: 'to test the soil'},
      ice: {text: '🧊 Water ice!', sub: 'hidden just under the surface'},
      perchlorate: {text: '🧪 Perchlorate', sub: 'a chemical in the soil'},
      end: {text: 'November 2008', sub: 'my mission ends'},
      status: '💤 Mission ended: November 2008',
      next: 'Answer the quiz to rescue this story! 🏅',
    },
    ar: {
      subtitle: '🔴 مسبار على المريخ · صائد الجليد',
      hunter: {text: '🧊 صائد الجليد', sub: 'مسبار قرب القطب الشمالي'},
      landing: {text: '25 أيار 2008', sub: 'السهول القطبية قرب القطب الشمالي للمريخ'},
      dig: {text: '🦾 أحفر وأحفر!', sub: 'بذراعي الآلية'},
      ovens: {text: '🔥 أفران صغيرة', sub: 'لاختبار التربة'},
      ice: {text: '🧊 جليد ماء!', sub: 'مختبئ تحت السطح مباشرة'},
      perchlorate: {text: '🧪 البيركلورات', sub: 'مادة كيميائية في التربة'},
      end: {text: 'تشرين الثاني 2008', sub: 'انتهاء مهمتي'},
      status: '💤 انتهت المهمة: تشرين الثاني 2008',
      next: 'أجب عن السؤال لتنقذ هذه القصة! 🏅',
    },
  },
};
