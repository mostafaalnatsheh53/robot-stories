// Story Spine rewrite for the 6 video robots + ABT intro (approved by the team, 15 Nov 2026).
// Rule: story == video script (joined); "What we learned" and the quiz say the same thing, EN and AR.
// Hedging words are kept exactly as in the NASA sources ("may once have been able to", "could have").
import fs from 'node:fs';

const FILE = '../docs/data/robots.json';
const bots = JSON.parse(fs.readFileSync(FILE, 'utf8'));

const SRC = {
  opp: [
    'https://science.nasa.gov/mission/mer-opportunity/',
    'https://www.nasa.gov/news-release/nasas-record-setting-opportunity-rover-mission-on-mars-comes-to-end/',
    'https://images.nasa.gov/details/PIA18885',
  ],
  lrv: [
    'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C',
    'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C',
    'https://images.nasa.gov/details/7021093',
    'https://lroc.im-ldi.com/images/491',
  ],
  rr: [
    'https://www.jpl.nasa.gov/news/the-apollo-experiment-that-keeps-on-giving/',
    'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C',
  ],
  ing: [
    'https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/',
    'https://images.nasa.gov/details/PIA26243',
  ],
  voy: [
    'https://science.nasa.gov/mission/voyager/where-are-voyager-1-and-voyager-2-now/',
    'https://science.nasa.gov/mission/voyager/voyager-1/',
    'https://science.nasa.gov/mission/voyager/voyager-golden-record-overview/',
    'https://science.nasa.gov/mission/voyager/mission-overview/',
  ],
  dawn: [
    'https://science.nasa.gov/mission/dawn/',
    'https://www.nasa.gov/news-release/nasas-dawn-mission-to-asteroid-belt-comes-to-end/',
  ],
};

const STORIES = {
  opp: {
    en: {
      script: [
        "I'm Opportunity, and I was supposed to work for only 90 Martian days!",
        'Every day, I looked for clues about water.',
        'One day, I found tiny round rocks nicknamed "blueberries."',
        'They were clues that this place was wet long ago!',
        'I kept going for almost 15 years and about 45 kilometers, longer than a marathon!',
        'In June 2018, a dust storm covered Mars, and I fell silent.',
        'Now we know Mars may once have been able to support tiny life.',
        "What do you think we'll find on Mars next?",
      ],
      science: 'The tiny round <b>"blueberries"</b> I found were clues that this place was <b>wet long ago</b>. Now we know Mars <b>may once have been able to support tiny life</b>. That doesn\'t mean life was found: it means Mars may once have had the right conditions.',
      q: 'Opportunity was planned to work for 90 Martian days. How long did it really work?',
      opts: ['Exactly 90 Martian days', 'About 1 year', 'Almost 15 years'],
    },
    ar: {
      script: [
        'أنا أوبورتيونيتي، وكان من المفروض أن أعمل 90 يومًا مريخيًا فقط!',
        'كل يوم كنت أبحث عن أدلة على وجود الماء.',
        'وذات يوم وجدت حصى صغيرة مستديرة سمّاها العلماء «حبات التوت الأزرق».',
        'كانت دليلًا على أن هذا المكان كان فيه ماء منذ زمن بعيد!',
        'فواصلت طريقي قرابة 15 سنة، وقطعت حوالي 45 كيلومترًا، أطول من سباق ماراثون!',
        'وفي حزيران 2018 غطّت عاصفة غبار المريخ كله، فصمتُّ.',
        'والآن نعرف أن المريخ ربما كان قادرًا يومًا ما على دعم حياة صغيرة جدًا.',
        'برأيك، ماذا سنكتشف على المريخ في المرة القادمة؟',
      ],
      science: 'حبات <b>«التوت الأزرق»</b> الصغيرة التي وجدتها كانت دليلًا على أن هذا المكان <b>كان فيه ماء منذ زمن بعيد</b>. والآن نعرف أن المريخ <b>ربما كان قادرًا يومًا ما على دعم حياة صغيرة جدًا</b>. هذا لا يعني أننا وجدنا حياة، بل يعني أن الظروف على المريخ ربما كانت مناسبة لها يومًا ما.',
      q: 'خُطط لأوبورتيونيتي أن تعمل 90 يومًا مريخيًا. كم عملت فعلًا؟',
      opts: ['90 يومًا مريخيًا بالضبط', 'سنة تقريبًا', 'قرابة 15 سنة'],
    },
  },
  lrv: {
    en: {
      script: [
        "Vroom! I'm the Lunar Roving Vehicle, a car that drove on the Moon!",
        'I was built to fold up and fit inside the lunar module.',
        'On Apollo 15 in 1971, astronauts drove me across the Moon.',
        'With me, they could explore much farther from their lander.',
        'Together we drove about 27.9 kilometers!',
        'Now three Moon cars are parked here, from Apollo 15, 16 and 17.',
        "And NASA's Lunar Reconnaissance Orbiter can still see our tire tracks from space!",
        'If you could drive on the Moon, where would you go?',
      ],
      science: "With a car, astronauts could explore <b>much farther</b> from their lander. On Apollo 15, we drove about <b>27.9 km</b>. Today, NASA's Lunar Reconnaissance Orbiter can still see our <b>tire tracks</b> from space!",
      q: 'How many Moon cars did NASA leave on the Moon?',
      opts: ['One', 'Three', 'Ten'],
    },
    ar: {
      script: [
        'برررم! أنا مركبة القمر الجوّالة، سيارة تجوّلت على القمر!',
        'صُنعت لأُطوى وأدخل داخل المركبة القمرية.',
        'في رحلة أبولو 15 سنة 1971 قادني رواد الفضاء على سطح القمر.',
        'ومعي استطاعوا أن يستكشفوا أماكن أبعد بكثير عن مركبتهم.',
        'قطعنا معًا حوالي 27.9 كيلومترًا!',
        'والآن ثلاث سيارات قمرية مركونة هنا، من أبولو 15 و16 و17.',
        'والمسبار المداري القمري التابع لناسا ما زال يرى آثار عجلاتنا من الفضاء!',
        'لو استطعت أن تقود سيارة على القمر، إلى أين ستذهب؟',
      ],
      science: 'بالسيارة استطاع الرواد أن يستكشفوا أماكن <b>أبعد بكثير</b> عن مركبتهم. في رحلة أبولو 15 قطعنا حوالي <b>27.9 كيلومترًا</b>. واليوم ما زال المسبار المداري القمري التابع لناسا يرى <b>آثار عجلاتنا</b> من الفضاء!',
      q: 'كم سيارة قمرية تركت ناسا على القمر؟',
      opts: ['واحدة', 'ثلاث', 'عشر'],
    },
  },
  rr: {
    en: {
      script: [
        "I have no batteries and no power, but I'm still helping scientists today!",
        "I'm a box of mirrors on the Moon.",
        'Apollo 11 astronauts set me down in 1969.',
        'I just sit here quietly.',
        'Then scientists on Earth shine a laser at me, and I bounce the light right back!',
        "By timing the light's trip, they measure how far away the Moon is.",
        'They found that the Moon is slowly drifting away from Earth, about 3.8 centimeters every year.',
        'What would you like to measure in space?',
      ],
      science: "By timing the laser light's trip to me and back, scientists measure how far away the Moon is. They found that the Moon is slowly drifting away from Earth: about <b>3.8 cm every year</b>. The reflectors left by Apollo 11 and 14 each have <b>100 small glass prisms</b>, and Apollo 15's has <b>300</b>.",
      q: 'What do scientists on Earth still do with this reflector?',
      opts: ['Take selfies with it', "Bounce lasers off it to measure the Moon's distance", 'Use it as a solar panel'],
    },
    ar: {
      script: [
        'ليس عندي بطاريات ولا أي طاقة، لكنني ما زلت أساعد العلماء حتى اليوم!',
        'أنا صندوق من المرايا على القمر.',
        'وضعني رواد أبولو 11 هنا سنة 1969.',
        'أنا فقط أجلس هنا بهدوء.',
        'ثم يطلق العلماء على الأرض ضوء الليزر نحوي، وأنا أعيده إليهم فورًا!',
        'وعندما يقيسون وقت رحلة الضوء، يعرفون كم يبعد القمر.',
        'واكتشفوا أن القمر يبتعد عن الأرض ببطء: حوالي 3.8 سنتيمتر كل سنة.',
        'ما الشيء الذي تحب أن تقيسه في الفضاء؟',
      ],
      science: 'عندما يقيس العلماء وقت رحلة ضوء الليزر إليّ وعودته، يعرفون كم يبعد القمر. واكتشفوا أن القمر يبتعد عن الأرض ببطء: حوالي <b>3.8 سنتيمتر كل سنة</b>. في كل من عاكسَي أبولو 11 و14 <b>100 منشور زجاجي صغير</b>، وفي عاكس أبولو 15 <b>300</b>.',
      q: 'ماذا يفعل العلماء على الأرض بهذا العاكس حتى اليوم؟',
      opts: ['يلتقطون معه صورًا', 'يطلقون عليه الليزر ليقيسوا بُعد القمر', 'يستعملونه لوحًا شمسيًا'],
    },
  },
  ing: {
    en: {
      script: [
        'I was designed for only 5 flights, but I flew 72 times!',
        "I'm Ingenuity, a tiny helicopter on Mars.",
        "Mars' air is less than 1% as thick as Earth's, so flying there is hard.",
        'On April 19, 2021, I made the first powered flight on another planet!',
        'I kept flying for nearly 3 years, higher and faster than expected.',
        'In January 2024, my rotor blades were damaged, and I landed for the last time.',
        'Now we know flying on Mars is possible.',
        'What would you explore with a Mars helicopter?',
      ],
      science: "Mars' air is <b>less than 1% as thick as Earth's</b>, so flying there is hard. On April 19, 2021, I made the <b>first powered flight on another planet</b>. Then I made <b>72 flights</b>, higher and faster than expected. Now we know <b>flying on Mars is possible</b>.",
      q: 'How many flights did Ingenuity make?',
      opts: ['5', '72', '1,000'],
    },
    ar: {
      script: [
        'صُمّمت لخمس رحلات طيران فقط، لكنني طرت 72 مرة!',
        'أنا إنجينيويتي، مروحية صغيرة على المريخ.',
        'هواء المريخ أخف من 1% من هواء الأرض، لذلك الطيران هناك صعب جدًا.',
        'وفي 19 نيسان 2021 قمت بأول طيران بمحرّك على كوكب آخر!',
        'وواصلت الطيران قرابة 3 سنوات، أعلى وأسرع مما توقّع أي أحد.',
        'في كانون الثاني 2024 تضرّرت شفراتي، وهبطت للمرة الأخيرة.',
        'والآن نعرف أن الطيران على المريخ ممكن.',
        'ماذا كنت ستستكشف بمروحية على المريخ؟',
      ],
      science: 'هواء المريخ <b>أخف من 1% من هواء الأرض</b>، لذلك الطيران هناك صعب جدًا. في 19 نيسان 2021 قمت <b>بأول طيران بمحرّك على كوكب آخر</b>. ثم طرت <b>72 مرة</b>، أعلى وأسرع مما توقّع أي أحد. والآن نعرف أن <b>الطيران على المريخ ممكن</b>.',
      q: 'كم رحلة طيران قامت بها إنجينيويتي؟',
      opts: ['5', '72', '1,000'],
    },
  },
  voy: {
    en: {
      script: [
        "Right now, I'm farther from home than any human-made thing has ever been.",
        "I'm Voyager 1, and I left Earth in 1977.",
        'First, I visited Jupiter and Saturn.',
        "In 2012, I crossed into interstellar space, outside the Sun's bubble.",
        'I carry a Golden Record with sounds and pictures from Earth.',
        "And I'm still talking to Earth today.",
        "Around November 18, 2026, I'll be one light-day away: my messages will take a whole day to reach you!",
        'What sound from Earth would you put on the Golden Record?',
      ],
      science: "At Jupiter and Saturn, I showed us <b>active volcanoes on Jupiter's moon Io</b> and the details of <b>Saturn's rings</b>. Then I crossed into <b>interstellar space</b>, outside the Sun's bubble, and I'm still sending data back to Earth.",
      q: 'What does Voyager 1 carry?',
      opts: ["A golden record of Earth's sounds", 'A flag from every country', 'A small garden'],
    },
    ar: {
      script: [
        'أنا الآن أبعد عن البيت من أي شيء صنعه الإنسان على الإطلاق.',
        'أنا فوياجر 1، وغادرت الأرض سنة 1977.',
        'زرت أولًا المشتري وزحل.',
        'وفي سنة 2012 عبرت إلى الفضاء بين النجوم، خارج فقاعة الشمس.',
        'أحمل معي أسطوانة ذهبية فيها أصوات وصور من الأرض.',
        'وما زلت أتواصل مع الأرض حتى اليوم.',
        'وفي حوالي 18 تشرين الثاني 2026 سأكون على بُعد يوم ضوئي: رسائلي ستحتاج يومًا كاملًا لتصل إليكم!',
        'أي صوت من الأرض كنت ستضعه على الأسطوانة الذهبية؟',
      ],
      science: 'عند المشتري وزحل أريتكم <b>براكين نشطة على قمر المشتري آيو</b> وتفاصيل <b>حلقات زحل</b>. ثم عبرت إلى <b>الفضاء بين النجوم</b> خارج فقاعة الشمس، وما زلت أرسل البيانات إلى الأرض.',
      q: 'ماذا يحمل فوياجر 1 معه؟',
      opts: ['أسطوانة ذهبية فيها أصوات الأرض', 'علمًا لكل دولة', 'حديقة صغيرة'],
    },
  },
  dawn: {
    en: {
      script: [
        'Why visit one world when you can visit two?',
        "I'm Dawn, and I launched in 2007 with a special ion engine.",
        'First, I orbited giant asteroid Vesta.',
        'Then I flew to dwarf planet Ceres.',
        'That made me the first spacecraft to orbit two worlds beyond Earth, and the first to visit a dwarf planet!',
        "In 2018, I ran out of fuel, but I'm still circling Ceres.",
        'I helped show that dwarf planets could have had oceans for much of their history.',
        'What would you look for on a faraway world?',
      ],
      science: 'With my <b>ion engine</b>, I became the <b>first spacecraft to orbit two worlds beyond Earth</b>, Vesta and Ceres, and the first to visit a dwarf planet. I helped show that dwarf planets <b>could have had oceans</b> for much of their history.',
      q: 'What was special about Dawn?',
      opts: ['It landed on the Sun', 'It orbited two different worlds', 'It carried astronauts'],
    },
    ar: {
      script: [
        'لماذا تزور عالمًا واحدًا إذا كان بإمكانك أن تزور عالمين؟',
        'أنا داون، وانطلقت سنة 2007 بمحرّك أيوني خاص.',
        'أولًا دُرت حول الكويكب العملاق فيستا.',
        'ثم طرت إلى الكوكب القزم سيريس.',
        'وبهذا أصبحت أول مركبة تدور حول عالمين بعيدين عن الأرض، وأول مركبة تزور كوكبًا قزمًا!',
        'في سنة 2018 نفد وقودي، لكنني ما زلت أدور حول سيريس.',
        'وساعدت في إظهار أن الكواكب القزمة ربما كانت فيها محيطات لفترة طويلة من تاريخها.',
        'ما الذي كنت ستبحث عنه على عالم بعيد؟',
      ],
      science: 'بفضل <b>محرّكي الأيوني</b> أصبحت <b>أول مركبة تدور حول عالمين بعيدين عن الأرض</b>، فيستا وسيريس، وأول مركبة تزور كوكبًا قزمًا. وساعدت في إظهار أن الكواكب القزمة <b>ربما كانت فيها محيطات</b> لفترة طويلة من تاريخها.',
      q: 'ما الشيء المميز في داون؟',
      opts: ['هبطت على الشمس', 'دارت حول عالمين مختلفين', 'حملت رواد فضاء'],
    },
  },
};

for (const [id, langs] of Object.entries(STORIES)) {
  const b = bots.find((x) => x.id === id);
  b.sources = SRC[id];
  b.src = SRC[id][0];
  for (const lang of ['en', 'ar']) {
    Object.assign(b[lang], langs[lang]);
    b[lang].story = langs[lang].script.join(' ');
  }
  const words = b.en.story.split(/\s+/).length;
  if (b.en.script.length !== b.ar.script.length) throw new Error(`${id}: sentence count differs`);
  console.log(`${id}: ${b.en.script.length} sentences, ${words} words EN`);
}
// every other robot keeps its single source as a list too
for (const b of bots) if (!b.sources) b.sources = [b.src];
fs.writeFileSync(FILE, JSON.stringify(bots, null, 2) + '\n');

// ABT intro
const INTRO = '../docs/data/intro.json';
const intro = JSON.parse(fs.readFileSync(INTRO, 'utf8'));
intro.en.script = [
  'NASA left robots on the Moon, on Mars and in deep space.',
  'And each one made important discoveries.',
  'But most kids have never heard their stories.',
  'Your mission, Space Explorer: meet the robots, hear their stories, and rescue them from being forgotten!',
  'Pick a world to begin!',
];
intro.ar.script = [
  'تركت ناسا روبوتات على القمر وعلى المريخ وفي الفضاء البعيد.',
  'وكل واحد منها حقّق اكتشافات مهمة.',
  'لكن معظم الأطفال لم يسمعوا قصصها أبدًا.',
  'مهمتك أيها المستكشف: تعرّف على الروبوتات، واسمع قصصها، وأنقذها من النسيان!',
  'اختر عالمًا لتبدأ!',
];
fs.writeFileSync(INTRO, JSON.stringify(intro, null, 2) + '\n');
console.log('intro: 5 sentences (ABT)');
