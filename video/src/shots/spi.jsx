// Spirit: a problem that became a discovery. Story Spine, robots.json → spi.<lang>.script
//  0 A broken wheel helped me make my biggest discovery!
//  1 I'm Spirit, Opportunity's twin rover.
//  2 I landed in Gusev Crater on Mars in 2004.
//  3 Every day, I drove across the crater, studying rocks and soil.
//  4 Then one of my six wheels stopped turning.
//  5 So I dragged it through the soil, leaving a deep track.
//  6 Because of that, I uncovered bright soil that was about 90% silica!
//  7 Scientists think it could have come from a hot spring or from steam.
//  8 Have you ever turned a problem into a discovery?
import {Title, big, counter, EndCard} from '../overlays.jsx';

const MER = 'NASA/JPL/Cornell University/Maas Digital';

export default {
  shots: [
    {at: 0, img: 'PIA04928', credit: MER, concept: true, kb: [{s: 1.25, x: 0, y: 0}, {s: 1.05, x: 0, y: 0}], dim: 0.15},
    {at: 2, img: 'PIA05283', credit: 'NASA/JPL/Cornell', kb: [{s: 1.05, x: 0, y: 0}, {s: 1.25, x: 3, y: 2}]},
    {at: 4, img: 'PIA04928', credit: MER, concept: true, kb: [{s: 1.2, x: 0, y: -14}, {s: 1.5, x: 0, y: -22}]},
    {at: 5, img: 'PIA09491', credit: 'NASA/JPL/Cornell', kb: [{s: 1.05, x: 0, y: 0}, {s: 1.25, x: 0, y: -3}]},
    {at: 7, img: 'PIA09491', credit: 'NASA/JPL/Cornell', dim: 0.25, kb: [{s: 1.25, x: 0, y: -3}, {s: 1.05, x: 0, y: 0}]},
  ],
  overlays: [
    {at: 0, until: 0, C: Title},
    {at: 1, until: 1, C: big('twin')},
    {at: 2, until: 2, C: big('gusev')},
    {at: 3, until: 3, C: big('explore')},
    {at: 4, until: 4, C: big('wheel')},
    {at: 5, until: 5, C: big('drag')},
    {at: 6, until: 6, C: counter('silica')},
    {at: 7, until: 7, C: big('spring')},
    {at: 8, until: 'end', C: EndCard},
  ],
  labels: {
    en: {
      subtitle: '🔴 Mars rover · problem → discovery',
      twin: {text: '👯 Twin rovers', sub: 'Spirit and Opportunity'},
      gusev: {text: 'Gusev Crater', sub: '2004'},
      explore: {text: '🔍 Rocks and soil', sub: 'every day'},
      wheel: {text: '🛞 1 of 6 wheels', sub: 'stopped turning!'},
      drag: {text: '↩️ Drag it!', sub: 'leaving a deep track'},
      silica: {from: 0, to: 90, suffix: '%', sub: 'silica in the bright soil'},
      spring: {text: '♨️ Hot spring or steam?', sub: 'where the silica may have come from'},
      status: '💤 Mission ended: May 2011',
      next: 'Answer the quiz to rescue this story! 🏅',
    },
    ar: {
      subtitle: '🔴 عربة على المريخ · مشكلة ← اكتشاف',
      twin: {text: '👯 عربتان توأمان', sub: 'سبيريت وأوبورتيونيتي'},
      gusev: {text: 'فوهة غوسيف', sub: '2004'},
      explore: {text: '🔍 صخور وتربة', sub: 'كل يوم'},
      wheel: {text: '🛞 عجلة من 6', sub: 'توقفت عن الدوران!'},
      drag: {text: '↩️ أسحبها!', sub: 'وتترك أثرًا عميقًا'},
      silica: {from: 0, to: 90, suffix: '%', sub: 'سيليكا في التربة اللامعة'},
      spring: {text: '♨️ ينبوع ساخن أم بخار؟', sub: 'من أين ربما جاءت السيليكا'},
      status: '💤 انتهت المهمة: أيار 2011',
      next: 'أجب عن السؤال لتنقذ هذه القصة! 🏅',
    },
  },
};
