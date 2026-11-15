// Voyager 1: wonder, very far from home. Story Spine, robots.json → voy.<lang>.script
//  0 Right now, I'm farther from home than any human-made thing has ever been.
//  1 I'm Voyager 1, and I left Earth in 1977.
//  2 First, I visited Jupiter and Saturn.
//  3 In 2012, I crossed into interstellar space, outside the Sun's bubble.
//  4 I carry a Golden Record with sounds and pictures from Earth.
//  5 And I'm still talking to Earth today.
//  6 Around November 18, 2026, I'll be one light-day away: my messages will take a whole day to reach you!
//  7 What sound from Earth would you put on the Golden Record?
import {Title, big, LightDay, EndCard} from '../overlays.jsx';

export default {
  shots: [
    {at: 0, img: 'PIA04495', credit: 'NASA/JPL', concept: true, kb: [{s: 1.2, x: 0, y: 0}, {s: 1.04, x: 0, y: 0}], dim: 0.15},
    {at: 1, img: 'PIA04495', credit: 'NASA/JPL', concept: true, kb: [{s: 1.0, x: 0, y: 0}, {s: 0.8, x: 8, y: -6}]},
    {at: 2, img: 'PIA00029', credit: 'NASA/JPL', fit: 'contain', kb: [{s: 0.9, x: 0, y: 0}, {s: 1.0, x: 0, y: 0}]},
    {at: 2, frac: 0.5, img: 'PIA00024', credit: 'NASA/JPL', fit: 'contain', kb: [{s: 0.95, x: 0, y: 0}, {s: 1.05, x: 0, y: 0}]},
    {at: 3, img: 'PIA17046', credit: 'NASA/JPL-Caltech', concept: true, fit: 'contain', kb: [{s: 1.0, x: 0, y: 0}, {s: 1.25, x: -8, y: 0}]},
    {at: 4, img: 'PIA14113', credit: 'NASA/JPL-Caltech', fit: 'contain', kb: [{s: 1.0, x: 0, y: 0}, {s: 1.12, x: 0, y: 0}]},
    {at: 5, img: 'PIA04495', credit: 'NASA/JPL', concept: true, kb: [{s: 1.1, x: 0, y: 0}, {s: 1.25, x: -3, y: 0}]},
    {at: 6, img: null},
  ],
  overlays: [
    {at: 0, until: 0, C: Title},
    {at: 1, until: 1, C: big('launch')},
    {at: 2, until: 2, C: big('planets')},
    {at: 3, until: 3, C: big('interstellar')},
    {at: 4, until: 4, C: big('record')},
    {at: 5, until: 5, C: big('talking')},
    {at: 6, until: 6, C: LightDay},
    {at: 7, until: 'end', C: EndCard},
  ],
  labels: {
    en: {
      subtitle: '🌌 Farther from home than anything',
      launch: {text: '1977', sub: 'leaving Earth'},
      planets: {text: '🪐 Jupiter & Saturn', sub: 'first stops'},
      interstellar: {text: '2012', sub: "Outside the Sun's bubble"},
      record: {text: '📀 Golden Record', sub: 'sounds and pictures from Earth'},
      talking: {text: '📡 Still talking', sub: 'to Earth, today'},
      lightday: {text: '1 light-day away', hours: 'hours'},
      status: '🚀 Still traveling',
      next: 'Answer the quiz to rescue this story! 🏅',
    },
    ar: {
      subtitle: '🌌 أبعد عن البيت من أي شيء',
      launch: {text: '1977', sub: 'مغادرة الأرض'},
      planets: {text: '🪐 المشتري وزحل', sub: 'أول المحطات'},
      interstellar: {text: '2012', sub: 'خارج فقاعة الشمس'},
      record: {text: '📀 الأسطوانة الذهبية', sub: 'أصوات وصور من الأرض'},
      talking: {text: '📡 ما زلت أتواصل', sub: 'مع الأرض حتى اليوم'},
      lightday: {text: 'على بُعد يوم ضوئي', hours: 'ساعة'},
      status: '🚀 ما زال مسافرًا',
      next: 'أجب عن السؤال لتنقذ هذه القصة! 🏅',
    },
  },
};
