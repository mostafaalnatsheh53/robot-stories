// Reusable animated overlays. Every overlay receives:
// {lang, t (fonts), accent, dur, marks (sentence start frames relative to the overlay), labels, fps, name, emoji, years}
import {AbsoluteFill, Img, staticFile, useCurrentFrame, interpolate, spring, Easing} from 'remotion';
import {C} from './theme.js';

const useIn = (delay = 0, fps = 30) => {
  const f = useCurrentFrame();
  return spring({frame: f - delay, fps, config: {damping: 14, stiffness: 120}});
};
const useOut = (dur, len = 10) => {
  const f = useCurrentFrame();
  return interpolate(f, [dur - len, dur], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
};

const Pill = ({children, style}) => (
  <div style={{background: 'rgba(11,16,36,.82)', border: '2px solid rgba(255,255,255,.12)', borderRadius: 26,
    padding: '14px 28px', boxShadow: '0 10px 40px rgba(0,0,0,.45)', ...style}}>{children}</div>
);

// Robot name card at the start.
export const Title = ({t, accent, dur, fps, name, emoji, labels}) => {
  const a = useIn(4, fps), out = useOut(dur);
  return (
    <AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', opacity: out}}>
      <div style={{transform: `scale(${0.6 + 0.4 * a}) translateY(${(1 - a) * 40}px)`, opacity: a, textAlign: 'center'}}>
        <div style={{fontSize: 96}}>{emoji}</div>
        <div style={{fontFamily: t.head, fontSize: 92, fontWeight: 700, color: C.text, textShadow: '0 4px 30px rgba(0,0,0,.8)', lineHeight: 1.1}}>{name}</div>
        <Pill style={{display: 'inline-block', marginTop: 14, fontFamily: t.body, fontSize: 30, fontWeight: 700, color: accent}}>{labels.subtitle}</Pill>
      </div>
    </AbsoluteFill>
  );
};

// One big word/number that pops in (a year, a nickname...). Use {text, sub} from labels[key].
export const big = (key) => {
  const Big = ({t, accent, dur, fps, labels}) => {
    const a = useIn(2, fps), out = useOut(dur);
    const L = labels[key];
    return (
      <AbsoluteFill style={{alignItems: 'center', justifyContent: 'flex-start', paddingTop: 150, opacity: out}}>
        <Pill style={{transform: `scale(${0.5 + 0.5 * a})`, opacity: a, textAlign: 'center', padding: '20px 44px'}}>
          <div style={{fontFamily: t.head, fontSize: 84, fontWeight: 700, color: accent, lineHeight: 1.1}}>{L.text}</div>
          {L.sub && <div style={{fontFamily: t.body, fontSize: 32, fontWeight: 700, color: C.text, marginTop: 4}}>{L.sub}</div>}
        </Pill>
      </AbsoluteFill>
    );
  };
  return Big;
};

// "Planned vs. actual" bar: 90 sols is tiny next to almost 15 years. Then a km counter.
// Spans two sentences: marks[2] = planned sentence, marks[3] = "kept going" sentence.
export const Lifetime = ({t, accent, dur, fps, marks, at, labels}) => {
  const f = useCurrentFrame();
  const m1 = Math.max(0, marks[at]), m2 = m1 + 14;
  const a = useIn(m1 + 2, fps), out = useOut(dur);
  const grow = interpolate(f, [m2 + 4, m2 + 46], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic)});
  const L = labels.lifetime;
  const km = Math.round(interpolate(f, [m2 + 20, m2 + 70], [0, L.kmTo ?? 45], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}));
  const showKm = L.km ? spring({frame: f - (m2 + 16), fps, config: {damping: 14}}) : 0;
  const W = 900, plannedW = 46; // planned bar drawn wider than true scale so kids can see it
  return (
    <AbsoluteFill style={{alignItems: 'center', justifyContent: 'flex-start', paddingTop: 130, opacity: out}}>
      <Pill style={{width: W + 80, opacity: a, transform: `translateY(${(1 - a) * 30}px)`}}>
        <Row label={L.planned} value={L.plannedV} color={C.yellow} t={t}>
          <div style={{width: plannedW, height: 34, borderRadius: 10, background: C.yellow}} />
        </Row>
        <div style={{height: 18}} />
        <Row label={L.actual} value={L.actualV} color={C.teal} t={t} dim={grow === 0}>
          <div style={{width: plannedW + (W - 260 - plannedW) * grow, height: 34, borderRadius: 10, background: C.teal, opacity: grow > 0 ? 1 : 0}} />
        </Row>
      </Pill>
      <div style={{marginTop: 26, opacity: showKm, transform: `scale(${0.6 + 0.4 * showKm})`}}>
        <Pill style={{fontFamily: t.head, fontSize: 60, fontWeight: 700, color: accent, textAlign: 'center'}}>
          🛞 {km} {L.km}
          {L.marathon && <div style={{fontFamily: t.body, fontSize: 28, fontWeight: 800, color: C.text}}>🏃 {L.marathon}</div>}
        </Pill>
      </div>
    </AbsoluteFill>
  );
};
const Row = ({label, value, color, t, children, dim}) => (
  <div>
    <div style={{display: 'flex', justifyContent: 'space-between', fontFamily: t.body, fontSize: 28, fontWeight: 800, color: C.text, opacity: dim ? 0.35 : 1}}>
      <span>{label}</span><span style={{color}}>{value}</span>
    </div>
    <div style={{marginTop: 8, height: 34, background: 'rgba(255,255,255,.08)', borderRadius: 10}}>{children}</div>
  </div>
);

// Dust storm: the picture slowly disappears behind moving orange dust.
export const Dust = ({t, accent, dur, fps, labels}) => {
  const f = useCurrentFrame();
  const k = interpolate(f, [0, dur * 0.8], [0, 1], {extrapolateRight: 'clamp'});
  const a = useIn(4, fps), out = useOut(dur, 8);
  const blobs = [[20, 30, 0.9], [70, 55, 1.2], [40, 80, 1.0], [85, 20, 0.8], [10, 70, 1.1]];
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{background: `rgba(120,60,25,${0.55 * k})`}} />
      {blobs.map(([x, y, s], i) => (
        <AbsoluteFill key={i} style={{opacity: 0.85 * k, background: `radial-gradient(circle at ${x + Math.sin((f + i * 40) / 30) * 6}% ${y + Math.cos((f + i * 25) / 35) * 5}%, rgba(214,140,80,.9) 0%, transparent ${28 * s}%)`}} />
      ))}
      <AbsoluteFill style={{background: `rgba(5,8,20,${0.45 * k})`}} />
      <AbsoluteFill style={{alignItems: 'center', justifyContent: 'flex-start', paddingTop: 150, opacity: out}}>
        <Pill style={{opacity: a, transform: `scale(${0.6 + 0.4 * a})`, textAlign: 'center'}}>
          <div style={{fontFamily: t.head, fontSize: 72, fontWeight: 700, color: accent}}>{labels.storm.text}</div>
          <div style={{fontFamily: t.body, fontSize: 30, fontWeight: 700, color: C.text}}>{labels.storm.sub}</div>
        </Pill>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Star field (used when a shot has no photo, and behind "contain" photos).
const STARS = Array.from({length: 140}, (_, i) => {
  const r = (n) => { const x = Math.sin(i * 9301 + n * 49297) * 233280; return x - Math.floor(x); };
  return {x: r(1) * 100, y: r(2) * 100, s: 1 + r(3) * 2.2, p: r(4) * 6.28};
});
export const Stars = ({dim}) => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{background: dim ? 'transparent' : 'radial-gradient(ellipse at 30% 20%, #1b2350 0%, #0b1024 60%)', opacity: dim ? 0.5 : 1}}>
      {STARS.map((s, i) => (
        <div key={i} style={{position: 'absolute', left: `${s.x}%`, top: `${s.y}%`, width: s.s, height: s.s, borderRadius: '50%', background: '#fff',
          opacity: 0.35 + 0.45 * (0.5 + 0.5 * Math.sin(f / 18 + s.p))}} />
      ))}
    </AbsoluteFill>
  );
};

// Animated number. labels[key] = {from, to, dec, unit, sub, sep (1,319 style), suffix (glued after the number, e.g. "+")}
export const counter = (key) => {
  const Counter = ({t, accent, dur, fps, labels}) => {
    const f = useCurrentFrame();
    const L = labels[key], a = useIn(2, fps), out = useOut(dur);
    const v = interpolate(f, [8, Math.max(20, Math.min(dur - 12, 70))], [L.from ?? 0, L.to], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic)});
    return (
      <AbsoluteFill style={{alignItems: 'center', justifyContent: 'flex-start', paddingTop: 140, opacity: out}}>
        <Pill style={{transform: `scale(${0.5 + 0.5 * a})`, opacity: a, textAlign: 'center', padding: '18px 44px'}}>
          <div style={{fontFamily: t.head, fontSize: 96, fontWeight: 700, color: accent, lineHeight: 1.05}}>
            <span style={{direction: 'ltr', unicodeBidi: 'isolate'}}>
              {L.sep ? Math.round(v).toLocaleString('en-US') : v.toFixed(L.dec || 0)}{L.suffix || ''}
            </span>{L.unit ? ` ${L.unit}` : ''}
          </div>
          {L.sub && <div style={{fontFamily: t.body, fontSize: 32, fontWeight: 700, color: C.text, marginTop: 4}}>{L.sub}</div>}
        </Pill>
      </AbsoluteFill>
    );
  };
  return Counter;
};

// Three photos side by side, popping in one after another. labels[key] = {items: [{img, label}], credit}
export const triptych = (key) => {
  const Trip = ({t, accent, dur, fps, labels}) => {
    const f = useCurrentFrame();
    const L = labels[key], out = useOut(dur);
    return (
      <AbsoluteFill style={{background: `rgba(5,8,20,${interpolate(f, [0, 12], [0, 0.85], {extrapolateRight: 'clamp'})})`, opacity: out,
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 26, paddingBottom: 90}}>
        {L.items.map((it, i) => {
          const a = spring({frame: f - 6 - i * 14, fps, config: {damping: 13}});
          return (
            <div key={i} style={{width: 360, opacity: a, transform: `translateY(${(1 - a) * 60}px) scale(${0.8 + 0.2 * a})`, textAlign: 'center'}}>
              <div style={{width: 360, height: 300, borderRadius: 20, overflow: 'hidden', border: `4px solid ${accent}`, boxShadow: '0 10px 40px rgba(0,0,0,.5)'}}>
                <Img src={staticFile(`img/${it.img}.jpg`)} style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: it.pos || 'center'}} />
              </div>
              <div style={{fontFamily: t.head, fontSize: 36, fontWeight: 700, color: C.text, marginTop: 10}}>🚙 {it.label}</div>
            </div>
          );
        })}
        <div style={{position: 'absolute', top: 18, left: 20, right: 20, textAlign: 'center', color: C.muted, fontFamily: t.body, fontSize: 17, fontWeight: 700}}>📷 {L.credit}</div>
      </AbsoluteFill>
    );
  };
  return Trip;
};

const Earth = ({size}) => (
  <div style={{width: size, height: size, borderRadius: '50%', background: 'radial-gradient(circle at 35% 30%, #9fe3ff 0%, #2f7fd8 35%, #1b4f9c 70%, #0c2a5c 100%)',
    boxShadow: '0 0 40px rgba(80,160,255,.55)', position: 'relative', overflow: 'hidden'}}>
    <div style={{position: 'absolute', left: '22%', top: '30%', width: '35%', height: '28%', borderRadius: '50%', background: '#3fae6a', opacity: 0.85}} />
    <div style={{position: 'absolute', left: '55%', top: '55%', width: '25%', height: '22%', borderRadius: '50%', background: '#3fae6a', opacity: 0.8}} />
  </div>
);
const MoonBall = ({size}) => (
  <div style={{width: size, height: size, borderRadius: '50%', background: 'radial-gradient(circle at 35% 30%, #f1f1f1 0%, #b9bcc4 50%, #6d717c 100%)', boxShadow: '0 0 30px rgba(255,255,255,.3)'}} />
);

// Earth shoots a laser at the Moon; the light bounces back. From the next sentence on, the Moon drifts away.
export const Laser = ({t, accent, dur, fps, marks, at, labels}) => {
  const f = useCurrentFrame();
  const m2 = marks[at + 2] ?? dur;
  const cycle = 50, ph = (f % cycle) / cycle; // 0..1: out (0-.5) and back (.5-1)
  const ex = 250, mx0 = 1000;
  const drift = interpolate(f, [m2, dur], [0, 70], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const mx = mx0 + drift;
  const pos = ph < 0.5 ? ex + (mx - ex) * (ph * 2) : mx - (mx - ex) * ((ph - 0.5) * 2);
  const a = useIn(2, fps), b = spring({frame: f - m2 - 6, fps, config: {damping: 14}});
  return (
    <AbsoluteFill>
      <Stars />
      <div style={{position: 'absolute', left: ex - 110, top: 250, opacity: a}}><Earth size={220} /></div>
      <div style={{position: 'absolute', left: mx - 50, top: 310, opacity: a}}><MoonBall size={100} /></div>
      <div style={{position: 'absolute', left: ex, top: 359, width: mx - ex - 40, height: 2, background: 'rgba(255,90,90,.25)'}} />
      <div style={{position: 'absolute', left: pos - 40, top: 354, width: 80, height: 12, borderRadius: 6, background: '#ff4d4d', boxShadow: '0 0 20px #ff4d4d, 0 0 40px #ff8080'}} />
      <div style={{position: 'absolute', left: 0, right: 0, top: 120, textAlign: 'center', opacity: a}}>
        <Pill style={{display: 'inline-block', fontFamily: t.head, fontSize: 44, fontWeight: 700, color: accent}}>{labels.laser}</Pill>
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 470, textAlign: 'center', opacity: b, transform: `scale(${0.6 + 0.4 * b})`}}>
        <Pill style={{display: 'inline-block', fontFamily: t.head, fontSize: 64, fontWeight: 700, color: C.teal}}>{labels.drift}</Pill>
      </div>
    </AbsoluteFill>
  );
};

// Voyager's message travels slowly to Earth: one light-day ≈ 24 hours.
export const LightDay = ({t, accent, dur, fps, labels}) => {
  const f = useCurrentFrame();
  const p = interpolate(f, [10, dur - 20], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const vx = 1080, ex = 200, x = vx - (vx - ex) * p;
  const a = useIn(2, fps);
  return (
    <AbsoluteFill>
      <Stars />
      <div style={{position: 'absolute', left: ex - 70, top: 300, opacity: a}}><Earth size={140} /></div>
      <div style={{position: 'absolute', left: vx - 40, top: 330, fontSize: 80, opacity: a}}>🛰️</div>
      <div style={{position: 'absolute', left: ex + 80, top: 369, width: vx - ex - 120, borderTop: '3px dashed rgba(179,156,255,.5)'}} />
      <div style={{position: 'absolute', left: x - 18, top: 352, width: 36, height: 36, borderRadius: '50%', background: accent, boxShadow: `0 0 24px ${accent}`}} />
      <div style={{position: 'absolute', left: 0, right: 0, top: 120, textAlign: 'center', opacity: a}}>
        <Pill style={{display: 'inline-block', textAlign: 'center'}}>
          <div style={{fontFamily: t.head, fontSize: 60, fontWeight: 700, color: accent}}>{labels.lightday.text}</div>
          <div style={{fontFamily: t.body, fontSize: 30, fontWeight: 700, color: C.text}}>⏱️ {Math.round(p * 24)} / 24 {labels.lightday.hours}</div>
        </Pill>
      </div>
    </AbsoluteFill>
  );
};

// A glowing dot circling the middle of the frame (Dawn around Ceres).
export const Orbit = ({dur, fps, accent}) => {
  const f = useCurrentFrame();
  const ang = f / 40, a = useIn(2, fps), out = useOut(dur, 12);
  const cx = 640, cy = 330, rx = 430, ry = 120;
  const x = cx + rx * Math.cos(ang), y = cy + ry * Math.sin(ang);
  return (
    <AbsoluteFill style={{opacity: a * out}}>
      <div style={{position: 'absolute', left: cx - rx, top: cy - ry, width: rx * 2, height: ry * 2, borderRadius: '50%', border: `3px dashed ${accent}`, opacity: 0.6}} />
      <div style={{position: 'absolute', left: x - 14, top: y - 14, width: 28, height: 28, borderRadius: '50%', background: accent, boxShadow: `0 0 24px ${accent}`}} />
    </AbsoluteFill>
  );
};

// Seismograph: a pen trace scrolls left. Quiet at first, then quakes from the next sentence on.
// labels[key] = {steps: [{text, sub}, ...]}: step i shows from sentence (at + i).
const wobble = (t) => Math.sin(t * 0.9) * 0.5 + Math.sin(t * 2.3 + 1) * 0.3 + Math.sin(t * 5.1 + 2) * 0.2;
export const quake = (key) => {
  const Quake = ({t, accent, dur, fps, marks, at, labels}) => {
    const f = useCurrentFrame();
    const L = labels[key], a = useIn(2, fps), out = useOut(dur);
    const starts = L.steps.map((_, i) => (i === 0 ? 0 : marks[at + i] ?? dur));
    const step = starts.filter((s) => f >= s).length - 1;
    const W = 1000, H = 220, mid = H / 2, speed = 5;
    const amp = (tt) => {
      let A = 5;
      if (tt >= starts[1]) {
        const k = (tt - starts[1]) % 55;
        A += 95 * Math.exp(-k / 9) * (k < 40 ? 1 : 0.15);
      }
      return Math.min(A, mid - 8);
    };
    const pts = [];
    for (let x = 0; x <= W; x += 3) {
      const tt = f - (W - x) / speed;
      if (tt < 0) continue;
      pts.push(`${x},${(mid + wobble(tt * 1.7) * amp(tt)).toFixed(1)}`);
    }
    const s = L.steps[step];
    const pop = spring({frame: f - starts[step], fps, config: {damping: 13}});
    return (
      <AbsoluteFill style={{background: `rgba(5,8,20,${0.55 * a})`, alignItems: 'center', justifyContent: 'center', opacity: out, paddingBottom: 40}}>
        <Pill style={{opacity: a, textAlign: 'center', marginBottom: 26, transform: `scale(${0.85 + 0.15 * pop})`}}>
          <div style={{fontFamily: t.head, fontSize: 64, fontWeight: 700, color: accent, lineHeight: 1.1}}>{s.text}</div>
          {s.sub && <div style={{fontFamily: t.body, fontSize: 30, fontWeight: 700, color: C.text}}>{s.sub}</div>}
        </Pill>
        <div style={{opacity: a, background: 'rgba(238,241,255,.92)', borderRadius: 18, padding: 10, boxShadow: '0 10px 40px rgba(0,0,0,.5)', direction: 'ltr'}}>
          <svg width={W} height={H} style={{display: 'block'}}>
            {[1, 2, 3].map((i) => <line key={i} x1={0} x2={W} y1={(H / 4) * i} y2={(H / 4) * i} stroke="#c9cfe6" strokeWidth={1} />)}
            <polyline points={pts.join(' ')} fill="none" stroke="#1b2350" strokeWidth={3} strokeLinejoin="round" />
            <circle cx={W} cy={pts.length ? +pts[pts.length - 1].split(',')[1] : mid} r={7} fill="#ff4d4d" />
          </svg>
        </div>
      </AbsoluteFill>
    );
  };
  return Quake;
};

// A planet crosses its star; the light curve below dips while it does. labels.transit = {text, sub}
export const Transit = ({t, accent, dur, fps, labels}) => {
  const f = useCurrentFrame();
  const a = useIn(2, fps), out = useOut(dur);
  const cx = 640, cy = 250, R = 120, r = 30;
  const span = Math.max(60, dur - 30);
  const px = interpolate(f, [10, 10 + span], [cx - 330, cx + 330], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  // 0 = full starlight, 1 = planet fully in front (the dip is drawn much deeper than real so kids can see it)
  const cover = (x) => {
    const d = Math.abs(x - cx);
    if (d >= R + r) return 0;
    if (d <= R - r) return 1;
    return (R + r - d) / (2 * r);
  };
  const GW = 760, GH = 120, gx = cx - GW / 2;
  const pts = [];
  for (let k = 10; k <= Math.min(f, 10 + span); k += 2) {
    const x = interpolate(k, [10, 10 + span], [cx - 330, cx + 330]);
    const prog = (k - 10) / span;
    pts.push(`${(prog * GW).toFixed(1)},${(20 + cover(x) * (GH - 45)).toFixed(1)}`);
  }
  const b = useIn(14, fps);
  return (
    <AbsoluteFill style={{opacity: out}}>
      <Stars />
      <div style={{position: 'absolute', left: cx - R, top: cy - R, width: R * 2, height: R * 2, borderRadius: '50%', opacity: a,
        background: 'radial-gradient(circle at 45% 40%, #fff7d6 0%, #ffd36b 45%, #ff9f3a 100%)', boxShadow: '0 0 80px rgba(255,190,90,.7)'}} />
      <div style={{position: 'absolute', left: px - r, top: cy - r + 20, width: r * 2, height: r * 2, borderRadius: '50%', background: '#141a33', opacity: a}} />
      <div style={{position: 'absolute', left: gx - 20, top: 430, width: GW + 40, opacity: b, direction: 'ltr'}}>
        <Pill style={{padding: '12px 20px'}}>
          <svg width={GW} height={GH} style={{display: 'block'}}>
            <line x1={0} x2={GW} y1={20} y2={20} stroke="rgba(255,255,255,.15)" strokeWidth={2} strokeDasharray="6 6" />
            <polyline points={pts.join(' ')} fill="none" stroke={accent} strokeWidth={5} strokeLinejoin="round" />
          </svg>
        </Pill>
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 50, textAlign: 'center', opacity: b}}>
        <Pill style={{display: 'inline-block', textAlign: 'center', padding: '10px 28px'}}>
          <div style={{fontFamily: t.head, fontSize: 46, fontWeight: 700, color: accent}}>{labels.transit.text}</div>
          {labels.transit.sub && <div style={{fontFamily: t.body, fontSize: 26, fontWeight: 700, color: C.text}}>{labels.transit.sub}</div>}
        </Pill>
      </div>
    </AbsoluteFill>
  );
};

// Closing card: the question to the kid (last sentence), then name, years, status.
export const EndCard = ({t, accent, dur, fps, name, emoji, years, labels, sentences}) => {
  const f = useCurrentFrame();
  const bg = interpolate(f, [0, 20], [0, 0.78], {extrapolateRight: 'clamp'});
  const q = useIn(4, fps), a = useIn(10, fps), b = useIn(22, fps);
  const question = sentences?.[sentences.length - 1]?.text;
  return (
    <AbsoluteFill style={{background: `rgba(5,8,20,${bg})`, alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingBottom: 60}}>
      {question && (
        <div style={{opacity: q, transform: `scale(${0.8 + 0.2 * q})`, marginBottom: 18, maxWidth: 1000}}>
          <Pill style={{display: 'inline-block', fontFamily: t.head, fontSize: 40, fontWeight: 600, color: C.yellowText, background: C.yellow, border: 'none'}}>🤔 {question}</Pill>
        </div>
      )}
      <div style={{opacity: a, transform: `scale(${0.7 + 0.3 * a})`}}>
        <div style={{fontSize: 64}}>{emoji}</div>
        <div style={{fontFamily: t.head, fontSize: 64, fontWeight: 700, color: C.text, lineHeight: 1.1}}>{name}</div>
        <div style={{fontFamily: t.head, fontSize: 40, fontWeight: 600, color: accent, marginTop: 6, direction: 'ltr'}}>{years}</div>
      </div>
      <div style={{opacity: b, marginTop: 22}}>
        <Pill style={{display: 'inline-block', fontFamily: t.body, fontSize: 30, fontWeight: 800, color: C.text}}>{labels.status}</Pill>
        <div style={{fontFamily: t.body, fontSize: 26, fontWeight: 700, color: C.text, marginTop: 16}}>{labels.next}</div>
      </div>
    </AbsoluteFill>
  );
};
