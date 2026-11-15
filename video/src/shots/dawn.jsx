// Dawn: curiosity, visiting two worlds. Story Spine, robots.json → dawn.<lang>.script
//  0 Why visit one world when you can visit two?
//  1 I'm Dawn, and I launched in 2007 with a special ion engine.
//  2 First, I orbited giant asteroid Vesta.
//  3 Then I flew to dwarf planet Ceres.
//  4 That made me the first spacecraft to orbit two worlds beyond Earth, and the first to visit a dwarf planet!
//  5 In 2018, I ran out of fuel, but I'm still circling Ceres.
//  6 I helped show that dwarf planets could have had oceans for much of their history.
//  7 What would you look for on a faraway world?
import {Title, big, Orbit, EndCard} from '../overlays.jsx';

const DAWN = 'NASA/JPL-Caltech/UCLA/MPS/DLR/IDA';

export default {
  shots: [
    {at: 0, img: 'PIA19598', credit: 'NASA/JPL-Caltech', concept: true, kb: [{s: 1.2, x: 0, y: 0}, {s: 1.04, x: 0, y: 0}], dim: 0.15},
    {at: 1, img: 'KSC-07PD-2590', credit: 'NASA', kb: [{s: 1.0, x: 0, y: 6}, {s: 1.15, x: 0, y: -4}]},
    {at: 1, frac: 0.5, img: 'PIA18922', credit: 'NASA/JPL-Caltech', concept: true, kb: [{s: 1.05, x: 0, y: 0}, {s: 1.2, x: 3, y: 0}]},
    {at: 2, img: 'PIA15678', credit: DAWN, fit: 'contain', kb: [{s: 0.85, x: 0, y: 0}, {s: 0.95, x: 0, y: 0}]},
    {at: 3, img: 'PIA21078', credit: DAWN, kb: [{s: 1.05, x: 0, y: 0}, {s: 1.2, x: 2, y: 2}]},
    {at: 4, img: 'PIA19598', credit: 'NASA/JPL-Caltech', concept: true, kb: [{s: 1.05, x: 0, y: 0}, {s: 1.18, x: 0, y: 0}]},
    {at: 5, img: 'PIA21078', credit: DAWN, dim: 0.2, kb: [{s: 1.2, x: 0, y: 0}, {s: 1.0, x: 0, y: 0}]},
  ],
  overlays: [
    {at: 0, until: 0, C: Title},
    {at: 1, until: 1, C: big('launch')},
    {at: 2, until: 2, C: big('vesta')},
    {at: 3, until: 3, C: big('ceres')},
    {at: 4, until: 4, C: big('first')},
    {at: 5, until: 5, C: Orbit},
    {at: 6, until: 6, C: big('oceans')},
    {at: 7, until: 'end', C: EndCard},
  ],
  labels: {
    en: {
      subtitle: '🌌 Curious explorer · two worlds',
      launch: {text: '2007', sub: 'Ion engine 💙'},
      vesta: {text: '1. Vesta', sub: 'giant asteroid'},
      ceres: {text: '2. Ceres', sub: 'dwarf planet'},
      first: {text: '🥇 First!', sub: 'to orbit two worlds beyond Earth'},
      oceans: {text: '🌊❓', sub: 'Dwarf planets could have had oceans'},
      status: '💤 Still circling Ceres',
      next: 'Answer the quiz to rescue this story! 🏅',
    },
    ar: {
      subtitle: '🌌 مستكشفة فضولية · عالمان',
      launch: {text: '2007', sub: 'محرّك أيوني 💙'},
      vesta: {text: '1. فيستا', sub: 'كويكب عملاق'},
      ceres: {text: '2. سيريس', sub: 'كوكب قزم'},
      first: {text: '🥇 الأولى!', sub: 'تدور حول عالمين بعيدين عن الأرض'},
      oceans: {text: '🌊❓', sub: 'الكواكب القزمة ربما كانت فيها محيطات'},
      status: '💤 ما زالت تدور حول سيريس',
      next: 'أجب عن السؤال لتنقذ هذه القصة! 🏅',
    },
  },
};
