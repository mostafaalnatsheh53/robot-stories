// Apollo seismometers: listening to the Moon. Story Spine, robots.json → seis.<lang>.script
//  0 Shhh... I'm listening to the Moon!
//  1 We're the Apollo seismometers, super-sensitive listeners.
//  2 Astronauts set us up at their landing sites, starting with Apollo 11 in 1969.
//  3 Every day, we felt for tiny shakes in the ground.
//  4 And we found them: moonquakes!
//  5 We even recorded the first artificial moonquake.
//  6 The stations from Apollo 12, 14, 15 and 16 kept listening until September 30, 1977.
//  7 Our recordings helped scientists study the Moon's crust and interior.
//  8 What do you think makes the Moon shake?
import {Title, big, quake, EndCard} from '../overlays.jsx';

export default {
  shots: [
    {at: 0, img: 'as16-113-18347', credit: 'NASA', kb: [{s: 1.3, x: 0, y: 3}, {s: 1.08, x: 0, y: 0}], dim: 0.15},
    {at: 2, img: 'as11-40-5942', credit: 'NASA', kb: [{s: 1.05, x: 0, y: 0}, {s: 1.2, x: 0, y: -3}]},
    {at: 3, img: 'as12-47-6918', credit: 'NASA', kb: [{s: 1.05, x: 0, y: 0}, {s: 1.2, x: -3, y: 0}]},
    {at: 6, img: 'as16-113-18347', credit: 'NASA', kb: [{s: 1.05, x: 0, y: 0}, {s: 1.22, x: 0, y: 4}]},
    {at: 7, img: 'S69-39587', credit: 'NASA', fit: 'contain', kb: [{s: 1.0, x: 0, y: 0}, {s: 1.1, x: 0, y: 0}]},
  ],
  overlays: [
    {at: 0, until: 0, C: Title},
    {at: 1, until: 1, C: big('listeners')},
    {at: 2, until: 2, C: big('apollo11')},
    {at: 3, until: 5, C: quake('quake')},
    {at: 6, until: 6, C: big('until')},
    {at: 7, until: 7, C: big('inside')},
    {at: 8, until: 'end', C: EndCard},
  ],
  labels: {
    en: {
      subtitle: '🌕 Listening to the Moon · shhh!',
      listeners: {text: '👂 Super-sensitive', sub: 'Apollo seismometers'},
      apollo11: {text: 'Apollo 11', sub: '1969 · the first one'},
      quake: {steps: [
        {text: '〰️ Listening…', sub: 'every day, for tiny shakes'},
        {text: '💥 Moonquakes!', sub: 'the Moon shakes too'},
        {text: '🚀 Made by people', sub: 'the first artificial moonquake'},
      ]},
      until: {text: 'September 30, 1977', sub: 'Apollo 12, 14, 15 & 16 stations stop listening'},
      inside: {text: "🌕 The Moon's insides", sub: 'crust and interior'},
      status: '💤 Switched off in 1977',
      next: 'Answer the quiz to rescue this story! 🏅',
    },
    ar: {
      subtitle: '🌕 نستمع إلى القمر · هسسس!',
      listeners: {text: '👂 حسّاسة جدًا', sub: 'أجهزة رصد الزلازل من أبولو'},
      apollo11: {text: 'أبولو 11', sub: '1969 · أول جهاز'},
      quake: {steps: [
        {text: '〰️ نستمع…', sub: 'كل يوم، لأي اهتزاز صغير'},
        {text: '💥 زلازل القمر!', sub: 'القمر يهتز أيضًا'},
        {text: '🚀 من صنع البشر', sub: 'أول زلزال قمري صناعي'},
      ]},
      until: {text: '30 أيلول 1977', sub: 'محطات أبولو 12 و14 و15 و16 تتوقف عن الاستماع'},
      inside: {text: '🌕 باطن القمر', sub: 'القشرة وما تحتها'},
      status: '💤 أُطفئت سنة 1977',
      next: 'أجب عن السؤال لتنقذ هذه القصة! 🏅',
    },
  },
};
