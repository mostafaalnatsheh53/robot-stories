// InSight: the lander that listened to Mars. Story Spine, robots.json → ins.<lang>.script
//  0 I never drove anywhere. I just listened to Mars!
//  1 I'm InSight, a lander.
//  2 I launched in 2018 and set a super-sensitive seismometer on the ground.
//  3 Every day, I felt for tiny shakes.
//  4 And Mars rumbled: I detected 1,319 marsquakes!
//  5 Because of that, scientists could study Mars' crust, mantle and core.
//  6 Slowly, dust covered my solar panels, and my power faded until my mission ended in 2022.
//  7 What do you think is deep inside Mars?
import {Title, big, quake, Dust, EndCard} from '../overlays.jsx';

const JPL = 'NASA/JPL-Caltech';

export default {
  shots: [
    {at: 0, img: 'PIA22876', credit: JPL, kb: [{s: 1.25, x: 0, y: 0}, {s: 1.05, x: 0, y: 0}], dim: 0.15},
    {at: 2, img: 'PIA22977', credit: JPL, kb: [{s: 1.05, x: 0, y: 6}, {s: 1.2, x: 0, y: -2}]},
    {at: 3, img: 'PIA22876', credit: JPL, kb: [{s: 1.05, x: 0, y: 0}, {s: 1.15, x: 0, y: 0}]},
    {at: 5, img: 'PIA22876', credit: JPL, dim: 0.3, kb: [{s: 1.15, x: 0, y: 0}, {s: 1.0, x: 0, y: 0}]},
    {at: 6, img: 'PIA25286', credit: JPL, kb: [{s: 1.05, x: 0, y: 0}, {s: 1.2, x: 0, y: 3}]},
    {at: 6, frac: 0.55, img: 'PIA25287', credit: JPL, kb: [{s: 1.05, x: 0, y: 0}, {s: 1.2, x: 0, y: 0}]},
  ],
  overlays: [
    {at: 0, until: 0, C: Title},
    {at: 1, until: 1, C: big('lander')},
    {at: 2, until: 2, C: big('seis')},
    {at: 3, until: 4, C: quake('quake')},
    {at: 5, until: 5, C: big('layers')},
    {at: 6, until: 6, C: Dust},
    {at: 7, until: 'end', C: EndCard},
  ],
  labels: {
    en: {
      subtitle: '🔴 Mars lander · the listener',
      lander: {text: '🎧 A lander', sub: 'it stays in one place and listens'},
      seis: {text: '2018', sub: 'a seismometer set on the ground'},
      quake: {steps: [
        {text: '〰️ Listening…', sub: 'every day, for tiny shakes'},
        {text: '💥 1,319 marsquakes!', sub: 'Mars rumbles'},
      ]},
      layers: {text: '🔴 Crust · Mantle · Core', sub: 'the layers inside Mars'},
      storm: {text: '2022', sub: 'dust covers my solar panels'},
      status: '💤 Mission ended: 2022',
      next: 'Answer the quiz to rescue this story! 🏅',
    },
    ar: {
      subtitle: '🔴 مسبار على المريخ · المستمع',
      lander: {text: '🎧 مسبار هبوط', sub: 'يبقى في مكانه ويستمع'},
      seis: {text: '2018', sub: 'جهاز رصد زلازل على الأرض'},
      quake: {steps: [
        {text: '〰️ أستمع…', sub: 'كل يوم، لأي اهتزاز صغير'},
        {text: '💥 1,319 زلزالًا!', sub: 'المريخ يرتجف'},
      ]},
      layers: {text: '🔴 قشرة · وشاح · لبّ', sub: 'طبقات باطن المريخ'},
      storm: {text: '2022', sub: 'الغبار يغطّي ألواحي الشمسية'},
      status: '💤 انتهت المهمة: 2022',
      next: 'أجب عن السؤال لتنقذ هذه القصة! 🏅',
    },
  },
};
