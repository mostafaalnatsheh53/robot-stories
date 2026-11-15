// Intro video, ABT structure (docs/data/intro.json → <lang>.script)
//  0 NASA left robots on the Moon, on Mars and in deep space.                        (And)
//  1 And each one made important discoveries.                                         (And)
//  2 But most kids have never heard their stories.                                    (But)
//  3 Your mission, Space Explorer: meet the robots, hear their stories, and rescue them from being forgotten!  (Therefore)
//  4 Pick a world to begin!
import {AbsoluteFill, useCurrentFrame, spring} from 'remotion';
import {Title, big} from '../overlays.jsx';
import {C} from '../theme.js';

// All robot emojis pop in as a grid (they come from robots.json through props.emojis).
const EmojiGrid = ({emojis = [], fps, t, labels}) => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', paddingBottom: 80}}>
      <div style={{fontFamily: t.head, fontSize: 54, fontWeight: 700, color: C.yellow, marginBottom: 24}}>{labels.grid}</div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(9, 92px)', gap: 14, direction: 'ltr'}}>
        {emojis.map((e, i) => {
          const a = spring({frame: f - 4 - i * 3, fps, config: {damping: 12}});
          return <div key={i} style={{width: 92, height: 92, borderRadius: '50%', background: '#1a2147', border: `3px solid ${C.gold}`, display: 'flex',
            alignItems: 'center', justifyContent: 'center', fontSize: 50, transform: `scale(${a})`}}>{e}</div>;
        })}
      </div>
    </AbsoluteFill>
  );
};

// The three worlds as big cards (same as the site's world picker).
const Worlds = ({fps, t, labels}) => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', paddingBottom: 80}}>
      <div style={{fontFamily: t.head, fontSize: 64, fontWeight: 700, color: C.text, marginBottom: 30}}>{labels.pick}</div>
      <div style={{display: 'flex', gap: 34}}>
        {labels.worlds.map(([e, name, col], i) => {
          const a = spring({frame: f - 6 - i * 8, fps, config: {damping: 12}});
          const bob = Math.sin((f + i * 20) / 14) * 6;
          return (
            <div key={i} style={{width: 280, padding: '28px 10px', borderRadius: 28, background: 'linear-gradient(180deg,#141a33,#10152b)', border: `4px solid ${col}`,
              textAlign: 'center', transform: `scale(${a}) translateY(${bob}px)`}}>
              <div style={{fontSize: 96}}>{e}</div>
              <div style={{fontFamily: t.head, fontSize: 40, fontWeight: 700, color: C.text}}>{name}</div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

export default {
  shots: [
    {at: 0, img: 'as15-86-11603', credit: 'NASA', dim: 0.35, kb: [{s: 1.1, x: 0, y: 0}, {s: 1.25, x: 2, y: 0}]},
    {at: 0, frac: 0.38, img: 'PIA17759', credit: 'NASA/JPL-Caltech/Cornell Univ./Arizona State Univ.', dim: 0.35, kb: [{s: 1.1, x: 0, y: 0}, {s: 1.25, x: 0, y: 2}]},
    {at: 0, frac: 0.72, img: 'PIA04495', credit: 'NASA/JPL', concept: true, dim: 0.35, kb: [{s: 1.05, x: 0, y: 0}, {s: 1.2, x: -2, y: 0}]},
    {at: 1, img: 'PIA05273', credit: 'NASA/JPL/Cornell/USGS', dim: 0.3, kb: [{s: 1.05, x: 0, y: 0}, {s: 1.2, x: 0, y: 0}]},
    {at: 2, img: 'PIA22329', credit: 'NASA/JPL-Caltech/MSSS', dim: 0.45, kb: [{s: 1.05, x: 0, y: 0}, {s: 1.15, x: 0, y: 0}]},
    {at: 3, img: null},
  ],
  overlays: [
    {at: 0, until: 0, C: Title},
    {at: 1, until: 1, C: big('discover')},
    {at: 2, until: 2, C: big('but')},
    {at: 3, until: 3, C: EmojiGrid},
    {at: 4, until: 'end', C: Worlds},
  ],
  labels: {
    en: {
      subtitle: '🌕 Moon · 🔴 Mars · 🌌 Deep Space',
      discover: {text: '🔬 Big discoveries', sub: 'every single robot'},
      but: {text: '🤫 But…', sub: 'most kids never heard their stories'},
      grid: '🚀 Your mission: rescue 17 stories!',
      pick: 'Pick a world!',
      worlds: [['🌕', 'The Moon', '#FFCF4A'], ['🔴', 'Mars', '#FF8A5B'], ['🌌', 'Deep Space', '#B39CFF']],
    },
    ar: {
      subtitle: '🌕 القمر · 🔴 المريخ · 🌌 الفضاء البعيد',
      discover: {text: '🔬 اكتشافات كبيرة', sub: 'من كل روبوت'},
      but: {text: '🤫 لكن…', sub: 'معظم الأطفال لم يسمعوا قصصها'},
      grid: '🚀 مهمتك: أنقذ 17 قصة!',
      pick: 'اختر عالمًا!',
      worlds: [['🌕', 'القمر', '#FFCF4A'], ['🔴', 'المريخ', '#FF8A5B'], ['🌌', 'الفضاء البعيد', '#B39CFF']],
    },
  },
};
