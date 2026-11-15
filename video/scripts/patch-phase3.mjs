// Phase 3 content update for docs/data/robots.json.
// Rule: the story on the page == the video script (joined), and "What we learned" never contradicts it.
// Every fact below was checked on 14 Nov 2026 against the NASA page noted next to it.
import fs from 'node:fs';

const FILE = '../docs/data/robots.json';
const bots = JSON.parse(fs.readFileSync(FILE, 'utf8'));
const set = (id, patch) => {
  const b = bots.find((x) => x.id === id);
  if (!b) throw new Error(id);
  for (const [k, v] of Object.entries(patch)) {
    if (k === 'en' || k === 'ar') {
      Object.assign(b[k], v);
      if (v.script) b[k].story = v.script.join(' ');
    } else b[k] = v;
  }
  b.video = true;
};

// Opportunity: NASA release 19-004 (13 Feb 2019) "Opportunity rover mission is at an end".
set('opp', {
  years: '2004–2019',
  en: {script: [
    "Hi, I'm Opportunity, a rover on Mars.",
    'I landed in 2004.',
    'I was supposed to work for 90 Martian days.',
    'I kept going for almost 15 years and drove about 45 kilometers!',
    'Along the way, I found tiny round rocks that scientists nicknamed "blueberries."',
    'They were clues that this place was wet long ago.',
    'In June 2018, a dust storm covered the whole planet, and I fell silent.',
    'In February 2019, NASA announced that my mission was over.',
    'But my discoveries are still here.',
  ]},
  ar: {script: [
    'مرحبًا، أنا أوبورتيونيتي، عربة على المريخ.',
    'هبطت سنة 2004.',
    'كان من المفروض أن أعمل 90 يومًا مريخيًا فقط.',
    'لكنني استمررت قرابة 15 سنة، وقطعت حوالي 45 كيلومترًا!',
    'وفي طريقي وجدت حصى صغيرة مستديرة سمّاها العلماء «حبات التوت الأزرق».',
    'كانت هذه الحصى دليلًا على أن هذا المكان كان فيه ماء منذ زمن بعيد.',
    'وفي حزيران 2018 غطّت عاصفة غبار الكوكب كله، فصمتُّ.',
    'وفي شباط 2019 أعلنت ناسا انتهاء مهمتي.',
    'لكن اكتشافاتي ما زالت هنا.',
  ]},
});

// Lunar Roving Vehicle: NSSDCA 1971-063C ("covered 27.9 km"), NSSDCA 1969-059C (rover stowed in the LM descent stage),
// NASA image 7021093 ("folded configuration ... collapsible"), LROC images/491 (LRV tracks seen by LRO).
set('lrv', {
  years: '1971–1972',
  media: ['as15-86-11603', '7021093', 'as15-88-11901', 'as16-110-17960', 'as17-147-22527', 'lroc-a15-tracks'],
  en: {
    script: [
      "Vroom! I'm the Lunar Roving Vehicle, a car on the Moon!",
      'I was built to fold up so I could fit inside the lunar module.',
      'On Apollo 15 in 1971, astronauts drove me across the Moon.',
      'My three drives added up to about 27.9 kilometers!',
      'Three Moon cars are still parked up here, from Apollo 15, 16 and 17.',
      "And NASA's Lunar Reconnaissance Orbiter can still see our tire tracks from space!",
    ],
    science: "Driving let astronauts travel <b>much farther</b> from their lander and explore many more places. On Apollo 15 alone, my crew drove about <b>27.9 km</b>! Today, NASA's Lunar Reconnaissance Orbiter can still see our <b>tire tracks</b> from space!",
  },
  ar: {
    script: [
      'برررم! أنا مركبة القمر الجوّالة، سيارة على القمر!',
      'صُنعت لأُطوى حتى أدخل داخل المركبة القمرية.',
      'في رحلة أبولو 15 سنة 1971 قادني رواد الفضاء على سطح القمر.',
      'ورحلاتي الثلاث بلغت معًا حوالي 27.9 كيلومترًا!',
      'ما زالت ثلاث سيارات قمرية مركونة هنا، من أبولو 15 و16 و17.',
      'والمسبار المداري القمري التابع لناسا ما زال يرى آثار عجلاتنا من الفضاء!',
    ],
    science: 'القيادة سمحت للرواد بالابتعاد <b>كثيرًا</b> عن مركبتهم واستكشاف أماكن أكثر بكثير. في رحلة أبولو 15 وحدها قادني الرواد حوالي <b>27.9 كيلومترًا</b>! واليوم ما زال المسبار المداري القمري التابع لناسا يرى <b>آثار عجلاتنا</b> من الفضاء!',
  },
});

// Laser reflector: JPL "The Apollo experiment that keeps on giving" (3.8 cm a year; Apollo 11 crew placed reflectors;
// results "to this day"; 100 / 100 / 300 corner cubes), NSSDCA 1969-059C ("required no power").
set('rr', {
  years: '1969',
  media: ['as11-40-5948'],
  en: {
    script: [
      "Hello! I'm a box of mirrors.",
      'Apollo 11 astronauts set me down on the Moon in 1969.',
      'I have no batteries and no power at all.',
      'But scientists on Earth still shine lasers at me today, and I bounce the light right back!',
      "By timing the light's trip, they found that the Moon is slowly drifting away from Earth, about 3.8 centimeters every year.",
    ],
    science: 'By timing how long the laser light takes to come back, scientists learned the Moon is slowly drifting away from Earth: about <b>3.8 cm every year</b>. The reflectors left by Apollo 11 and 14 each have <b>100 small glass prisms</b>, and Apollo 15\'s has <b>300</b>.',
  },
  ar: {
    script: [
      'مرحبًا! أنا صندوق من المرايا.',
      'وضعني رواد أبولو 11 على القمر سنة 1969.',
      'ليس عندي بطاريات ولا أي طاقة.',
      'لكن العلماء على الأرض ما زالوا يطلقون الليزر نحوي حتى اليوم، وأنا أعيد الضوء إليهم!',
      'وعندما قاسوا الوقت الذي تستغرقه رحلة الضوء، اكتشفوا أن القمر يبتعد عن الأرض ببطء: حوالي 3.8 سنتيمتر كل سنة.',
    ],
    science: 'عندما يقيس العلماء الوقت الذي يحتاجه ضوء الليزر ليعود، عرفوا أن القمر يبتعد عن الأرض ببطء: حوالي <b>3.8 سنتيمتر كل سنة</b>. في كل من عاكسَي أبولو 11 و14 <b>100 منشور زجاجي صغير</b>، وفي عاكس أبولو 15 <b>300</b>.',
  },
});

// Ingenuity: science.nasa.gov Ingenuity page (no more than five flights in 30 days; 72 flights across nearly three years;
// first powered, controlled flight April 19, 2021; atmosphere < 1% as dense as Earth's; higher and faster than imagined;
// last flight Jan 18, 2024), PIA26243 (rotor blade damaged during a rough landing).
set('ing', {
  years: '2021–2024',
  media: ['PIA23882', 'ing-first-flight', 'PIA23720', 'PIA25970', 'PIA26243'],
  en: {
    script: [
      "Hi! I'm Ingenuity, a tiny helicopter on Mars.",
      'On April 19, 2021, I made the first powered, controlled flight on another planet!',
      'I was designed for up to 5 flights in 30 days.',
      'But I kept flying, again and again: 72 flights in nearly 3 years!',
      'In January 2024, my rotor blades were damaged, and my flying days were over.',
      'Now explorers know that flying on Mars is possible.',
    ],
    science: "On April 19, 2021, I made the <b>first powered, controlled flight on another planet</b>. Mars' air is <b>less than 1% as thick as Earth's</b>, so flying there is really hard. I flew higher and faster than anyone had imagined!",
  },
  ar: {
    script: [
      'مرحبًا! أنا إنجينيويتي، مروحية صغيرة على المريخ.',
      'في 19 نيسان 2021 قمت بأول طيران بمحرّك ومُتحكَّم به على كوكب آخر!',
      'صُمّمت لخمس رحلات طيران على الأكثر خلال 30 يومًا.',
      'لكنني واصلت الطيران مرة بعد مرة: 72 رحلة خلال قرابة 3 سنوات!',
      'في كانون الثاني 2024 تضرّرت شفراتي وانتهت أيام طيراني.',
      'والآن يعرف المستكشفون أن الطيران على المريخ ممكن.',
    ],
    science: 'في 19 نيسان 2021 قمت <b>بأول طيران بمحرّك ومُتحكَّم به على كوكب آخر</b>. هواء المريخ <b>أخف من 1% من هواء الأرض</b>، لذلك الطيران هناك صعب جدًا. وطرت أعلى وأسرع مما توقّع أي أحد!',
  },
});

// Voyager 1: science.nasa.gov "Where are Voyager 1 and 2 now" (one light-day on Nov. 18, 2026; MAG + PWS on),
// Voyager 1 page (interstellar space in August 2012), Golden Record overview ("sounds and images"),
// mission overview (volcanoes on Io, intricacies of Saturn's rings).
set('voy', {
  years: '1977–today',
  media: ['PIA04495', 'PIA00029', 'PIA00024', 'PIA17046', 'PIA14113'],
  en: {
    script: [
      "Hello from far, far away! I'm Voyager 1.",
      'I launched in 1977 and visited Jupiter and Saturn.',
      'Then I just kept going.',
      'In 2012, I became the first human-made object to reach interstellar space.',
      'I carry a Golden Record with sounds and pictures from Earth.',
      "I'm still talking to Earth today, with 2 instruments still on.",
      "Around November 18, 2026, I'll be about one light-day away: my messages will take a whole day to reach you!",
    ],
  },
  ar: {
    script: [
      'مرحبًا من مكان بعيد جدًا! أنا فوياجر 1.',
      'انطلقت سنة 1977 وزرت المشتري وزحل.',
      'ثم واصلت السفر.',
      'في سنة 2012 أصبحت أول شيء صنعه الإنسان يصل إلى الفضاء بين النجوم.',
      'أحمل معي أسطوانة ذهبية فيها أصوات وصور من الأرض.',
      'وما زلت أتواصل مع الأرض اليوم، وجهازان من أجهزتي ما زالا يعملان.',
      'وفي حوالي 18 تشرين الثاني 2026 سأكون على بُعد يوم ضوئي تقريبًا: رسائلي ستحتاج يومًا كاملًا لتصل إليكم!',
    ],
  },
});

// Dawn: NASA release 18-087 (1 Nov 2018): ion propulsion; first to visit a dwarf planet and orbit two destinations
// beyond Earth; ran out of hydrazine; will remain in orbit around Ceres for decades; dwarf planets could have hosted oceans.
set('dawn', {
  years: '2007–2018',
  media: ['PIA19598', 'KSC-07PD-2590', 'PIA18922', 'PIA15678', 'PIA21078'],
  en: {
    script: [
      "Hi, I'm Dawn!",
      'I launched in 2007 with a special engine called an ion engine.',
      'I was the first spacecraft to orbit two worlds beyond Earth: first Vesta, then the dwarf planet Ceres.',
      'That also made me the first spacecraft to visit a dwarf planet!',
      'In 2018, I ran out of fuel.',
      "I'm quiet now, but I'm still circling Ceres, far out in space.",
    ],
    science: 'I used <b>ion propulsion</b> to explore the two largest bodies in the asteroid belt, Vesta and Ceres. I helped show that dwarf planets like Ceres <b>could have had oceans</b> for a long part of their history, and maybe <b>still do</b>!',
  },
  ar: {
    script: [
      'مرحبًا، أنا داون!',
      'انطلقت سنة 2007 ومعي محرّك خاص اسمه المحرّك الأيوني.',
      'كنت أول مركبة فضائية تدور حول عالمين بعيدين عن الأرض: أولًا فيستا، ثم الكوكب القزم سيريس.',
      'وبهذا أصبحت أيضًا أول مركبة تزور كوكبًا قزمًا!',
      'في سنة 2018 نفد وقودي.',
      'أنا صامتة الآن، لكنني ما زلت أدور حول سيريس، بعيدًا في الفضاء.',
    ],
    science: 'استعملت <b>الدفع الأيوني</b> لأستكشف أكبر جسمين في حزام الكويكبات: فيستا وسيريس. وساعدت في إظهار أن الكواكب القزمة مثل سيريس <b>ربما كانت فيها محيطات</b> لفترة طويلة من تاريخها، وربما <b>ما زالت</b>!',
  },
});

fs.writeFileSync(FILE, JSON.stringify(bots, null, 2) + '\n');
for (const b of bots.filter((x) => x.video)) {
  if (b.en.script.length !== b.ar.script.length) throw new Error(`${b.id}: sentence count differs`);
  console.log(`${b.id}: ${b.en.script.length} sentences, ${b.en.story.split(/\s+/).length} words EN`);
}
