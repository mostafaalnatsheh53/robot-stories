// Story Spine rewrite for the 11 text-only robots (15 Nov 2026). Every fact was re-checked on the source pages listed
// in `sources`; details from the old texts that were NOT found on a NASA page were removed:
//  - Viking 1 "built for 90 days", Phoenix "saw snow falling", NEAR "never built to land",
//    Apollo 11 seismometer "about three weeks", Surveyor 3 "only robot ever visited", Sojourner "microwave oven".
//  - Corrected: Sojourner rolled down the ramp on July 5 (landing July 4); Spirit's soil is "about 90 percent silica".
import fs from 'node:fs';

const FILE = '../docs/data/robots.json';
const bots = JSON.parse(fs.readFileSync(FILE, 'utf8'));

const S = {
  sv3: {
    sources: ['https://science.nasa.gov/mission/surveyor-3/'],
    en: {
      story: "I landed on the Moon in 1967, before any human walked there! I'm Surveyor 3. My job was to test the lunar ground. My tests showed the surface was solid enough to hold a lunar module. Then, in November 1969, Apollo 12 landed about 180 meters away from me! The astronauts walked over to visit. They took my camera and scoop back to Earth, so scientists could study how the Moon had changed them. Can you imagine getting visitors on the Moon?",
      science: 'My sampling tests showed the lunar surface was <b>solid enough to hold a lunar module</b>, a key step before sending people. Apollo 12 astronauts brought my <b>camera and scoop</b> back to Earth, so scientists could study the effects of <b>nearly two and a half years</b> on the Moon.',
    },
    ar: {
      story: 'هبطت على القمر سنة 1967، قبل أن يمشي عليه أي إنسان! أنا سيرفيور 3. كانت مهمتي أن أختبر أرض القمر. وأظهرت اختباراتي أن السطح صلب بما يكفي ليحمل مركبة قمرية. ثم في تشرين الثاني 1969 هبطت أبولو 12 على بُعد حوالي 180 مترًا مني! ومشى الرواد لزيارتي، وأخذوا الكاميرا والمجرفة الخاصة بي إلى الأرض، ليدرس العلماء كيف غيّرها القمر. هل تتخيّل أن يزورك أحد على القمر؟',
      science: 'أظهرت اختبارات أخذ العيّنات التي قمت بها أن سطح القمر <b>صلب بما يكفي ليحمل مركبة قمرية</b>، وهذه خطوة مهمة قبل إرسال البشر. وأعاد رواد أبولو 12 <b>الكاميرا والمجرفة</b> إلى الأرض، ليدرس العلماء أثر <b>قرابة سنتين ونصف</b> على القمر.',
    },
  },
  seis: {
    sources: ['https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-099C', 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C'],
    en: {
      story: "Shhh... I'm listening to the Moon! We're the Apollo seismometers, super-sensitive listeners. Astronauts set us up at their landing sites, starting with Apollo 11 in 1969. Every day, we felt for tiny shakes in the ground. And we found them: moonquakes! We even recorded the first artificial moonquake. The stations from Apollo 12, 14, 15 and 16 kept listening until September 30, 1977. Our recordings helped scientists study the Moon's crust and interior. What do you think makes the Moon shake?",
      science: 'We recorded <b>moonquakes</b>, and even the <b>first artificial moonquake</b> ever recorded. Our data helped scientists study the Moon\'s <b>crust and interior</b>. The Apollo 12, 14, 15 and 16 stations worked until <b>30 September 1977</b>.',
    },
    ar: {
      story: 'هسسس… أنا أستمع إلى القمر! نحن أجهزة رصد الزلازل من أبولو، مستمعون حسّاسون جدًا. وضعنا الرواد في أماكن هبوطهم، بدءًا من أبولو 11 سنة 1969. كل يوم كنا نتحسّس أي اهتزاز صغير في الأرض. ووجدناها: زلازل القمر! بل وسجّلنا أول زلزال قمري صناعي. واستمرت محطات أبولو 12 و14 و15 و16 في الاستماع حتى 30 أيلول 1977. وساعدت تسجيلاتنا العلماء على دراسة قشرة القمر وباطنه. برأيك، ما الذي يجعل القمر يهتز؟',
      science: 'سجّلنا <b>زلازل القمر</b>، وسجّلنا أيضًا <b>أول زلزال قمري صناعي</b>. وساعدت بياناتنا العلماء على دراسة <b>قشرة القمر وباطنه</b>. وعملت محطات أبولو 12 و14 و15 و16 حتى <b>30 أيلول 1977</b>.',
    },
  },
  lm: {
    sources: ['https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C'],
    en: {
      story: "I helped the first people ever land on another world! I'm the bottom half of Eagle, Apollo 11's lunar module. On July 20, 1969, I carried Neil Armstrong and Buzz Aldrin down to the Moon's Sea of Tranquility. Near me, they set up a seismometer and a laser reflector. When it was time to go home, I became the launch platform for my top half, and I was left behind. I'm still on the Moon today. If you landed on the Moon, what would you do first?",
      science: 'Eagle\'s landing was the <b>first time humans landed on another world</b>. Near me, the astronauts set up a <b>seismometer</b> and the <b>laser reflector</b> that scientists still use today.',
    },
    ar: {
      story: 'ساعدت أول بشر في التاريخ على الهبوط على عالم آخر! أنا النصف السفلي من «النسر»، المركبة القمرية لأبولو 11. في 20 تموز 1969 أنزلت نيل أرمسترونغ وباز ألدرين إلى بحر الهدوء على القمر. وبالقرب مني وضعا جهازًا لرصد الزلازل وعاكسًا لليزر. وعندما حان وقت العودة، صرت منصّة لإطلاق نصفي العلوي، وبقيت أنا هنا. وما زلت على القمر حتى اليوم. لو هبطت على القمر، ماذا ستفعل أولًا؟',
      science: 'كان هبوط «النسر» <b>أول مرة يهبط فيها بشر على عالم آخر</b>. وبالقرب مني وضع الرواد <b>جهازًا لرصد الزلازل</b> و<b>عاكس الليزر</b> الذي ما زال العلماء يستعملونه حتى اليوم.',
    },
  },
  vik: {
    sources: ['https://science.nasa.gov/mission/viking-1/'],
    en: {
      story: "Click! I sent back the very first pictures from the surface of Mars! I'm the Viking 1 Lander. On July 20, 1976, I made NASA's first successful landing on Mars. Every day, I sent weather reports home. With my robot arm, I scooped up soil and tested it for signs of life. One test looked hopeful, but the main test found no organic compounds. I kept working for more than six years, until November 1982. Do you think Mars was ever home to life?",
      science: 'I sent the <b>first pictures from the surface of Mars</b> and years of <b>weather reports</b>. I tested the soil for life: one test looked hopeful, but the main test found <b>no organic compounds</b>. Scientists are still asking whether Mars was ever <b>home to life</b>.',
    },
    ar: {
      story: 'كليك! أرسلت أول صور على الإطلاق من سطح المريخ! أنا مسبار فايكنغ 1. في 20 تموز 1976 قمت بأول هبوط ناجح لناسا على المريخ. كل يوم كنت أرسل تقارير عن الطقس. وبذراعي الآلية جرفت التربة واختبرتها بحثًا عن علامات حياة. أحد الاختبارات بدا مبشّرًا، لكن الاختبار الرئيسي لم يجد مركّبات عضوية. وواصلت العمل أكثر من ست سنوات، حتى تشرين الثاني 1982. برأيك، هل كان المريخ يومًا موطنًا للحياة؟',
      science: 'أرسلت <b>أول صور من سطح المريخ</b> وتقارير <b>عن الطقس</b> لسنوات. واختبرت التربة بحثًا عن حياة: أحد الاختبارات بدا مبشّرًا، لكن الاختبار الرئيسي <b>لم يجد مركّبات عضوية</b>. وما زال العلماء يسألون: هل كان المريخ يومًا <b>موطنًا للحياة</b>؟',
    },
  },
  soj: {
    sources: ['https://science.nasa.gov/mission/mars-pathfinder/'],
    en: {
      story: "I was the very first robot rover on another planet, and I was only about 30 centimeters tall, the length of a school ruler! I'm Sojourner. My lander, Pathfinder, touched down on Mars on July 4, 1997. The next day, I stood up and rolled down a ramp onto the red ground. Every day, I drove slowly to the rocks to study them. Together, we sent home 16,500 lander pictures and 550 of mine! If you had a tiny rover, where would you send it?",
      science: 'Pathfinder showed a <b>new way to land safely</b> on Mars, and I was the <b>first robot rover</b> there. We studied Mars\' rocks, soil and weather, and sent back more than <b>16,500 lander images</b> and <b>550 rover images</b>.',
      q: 'How tall was Sojourner when it stood up?',
      opts: ['About 30 cm, like a school ruler', 'As tall as a house', 'As tall as a bus'],
    },
    ar: {
      story: 'كنت أول عربة آلية على كوكب آخر، وكان طولي حوالي 30 سنتيمترًا فقط، بطول مسطرة المدرسة! أنا سوجورنر. هبط مسباري باثفايندر على المريخ في 4 تموز 1997. وفي اليوم التالي وقفت ونزلت على منحدر إلى الأرض الحمراء. كل يوم كنت أتحرك ببطء نحو الصخور لأدرسها. ومعًا أرسلنا إلى الأرض 16,500 صورة من المسبار و550 صورة مني! لو كانت عندك عربة صغيرة، إلى أين سترسلها؟',
      science: 'أظهر باثفايندر <b>طريقة جديدة للهبوط بأمان</b> على المريخ، وكنت أنا <b>أول عربة آلية</b> هناك. درسنا صخور المريخ وتربته وطقسه، وأرسلنا أكثر من <b>16,500 صورة من المسبار</b> و<b>550 صورة من العربة</b>.',
      q: 'كم كان طول سوجورنر عندما وقفت؟',
      opts: ['حوالي 30 سم، مثل مسطرة المدرسة', 'بطول بيت', 'بطول حافلة'],
    },
    a: 0,
  },
  spi: {
    sources: ['https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/', 'https://science.nasa.gov/photojournal/silica-rich-soil-found-by-spirit/'],
    en: {
      story: "A broken wheel helped me make my biggest discovery! I'm Spirit, Opportunity's twin rover. I landed in Gusev Crater on Mars in 2004. Every day, I drove across the crater, studying rocks and soil. Then one of my six wheels stopped turning. So I dragged it through the soil, leaving a deep track. Because of that, I uncovered bright soil that was about 90% silica! Scientists think it could have come from a hot spring or from steam. Have you ever turned a problem into a discovery?",
      science: 'My stuck wheel dug up bright soil that was <b>about 90% silica</b>. Scientists think it could have come from water in a <b>hot spring</b>, or from <b>steam</b>.',
    },
    ar: {
      story: 'عجلة معطّلة ساعدتني على أكبر اكتشافاتي! أنا سبيريت، توأم أوبورتيونيتي. هبطت في فوهة غوسيف على المريخ سنة 2004. كل يوم كنت أتجوّل في الفوهة وأدرس الصخور والتربة. ثم توقفت إحدى عجلاتي الست عن الدوران. فصرت أسحبها في التربة، فتترك أثرًا عميقًا. وبسبب ذلك كشفت تربة لامعة فيها حوالي 90% سيليكا! ويعتقد العلماء أنها ربما تكوّنت من ماء في ينبوع ساخن، أو من البخار. هل حوّلت يومًا مشكلة إلى اكتشاف؟',
      science: 'عجلتي العالقة كشفت تربة لامعة فيها <b>حوالي 90% سيليكا</b>. ويعتقد العلماء أنها ربما تكوّنت من ماء في <b>ينبوع ساخن</b>، أو من <b>البخار</b>.',
    },
  },
  ins: {
    sources: ['https://science.nasa.gov/mission/insight/', 'https://www.jpl.nasa.gov/news/nasa-retires-insight-mars-lander-mission-after-years-of-science'],
    en: {
      story: "I never drove anywhere. I just listened to Mars! I'm InSight, a lander. I launched in 2018 and set a super-sensitive seismometer on the ground. Every day, I felt for tiny shakes. And Mars rumbled: I detected 1,319 marsquakes! Because of that, scientists could study Mars' crust, mantle and core. Slowly, dust covered my solar panels, and my power faded until my mission ended in 2022. What do you think is deep inside Mars?",
      science: 'My seismometer detected <b>1,319 marsquakes</b>. Their signals gave scientists a way to study Mars\' <b>crust, mantle and core</b>.',
    },
    ar: {
      story: 'لم أتجوّل في أي مكان، بل استمعت إلى المريخ! أنا إنسايت، مسبار هبوط. انطلقت سنة 2018 ووضعت جهازًا حسّاسًا جدًا لرصد الزلازل على الأرض. كل يوم كنت أتحسّس أي اهتزاز صغير. وارتجف المريخ: رصدت 1,319 زلزالًا! وبفضل ذلك استطاع العلماء دراسة قشرة المريخ ووشاحه ولبّه. وببطء غطّى الغبار ألواحي الشمسية، وضعفت طاقتي حتى انتهت مهمتي سنة 2022. برأيك، ماذا يوجد في أعماق المريخ؟',
      science: 'رصد جهازي <b>1,319 زلزالًا على المريخ</b>. وأعطت إشاراتها العلماء طريقة لدراسة <b>قشرة المريخ ووشاحه ولبّه</b>.',
    },
  },
  phx: {
    sources: ['https://science.nasa.gov/mission/mars-phoenix/'],
    en: {
      story: "I dug into the arctic ground of Mars, and I found ice! I'm Phoenix. On May 25, 2008, I landed on the arctic plains near Mars' North Pole. Every day, I used my robotic arm to dig up soil. Then I tested the samples in tiny ovens. Because of that, scientists verified that water ice is hidden just under the surface. I also found a chemical called perchlorate. My mission ended in November 2008. What would you look for in Martian ice?",
      science: 'I verified that <b>water ice</b> is hidden just under the Martian soil. I also found <b>perchlorate</b>, a chemical that could be an energy source for tiny microbes and a useful resource for future explorers.',
      q: 'What did Phoenix find just under the soil near Mars\' North Pole?',
    },
    ar: {
      story: 'حفرت في الأرض القطبية للمريخ، ووجدت جليدًا! أنا فينيكس. في 25 أيار 2008 هبطت على السهول القطبية قرب القطب الشمالي للمريخ. كل يوم كنت أستعمل ذراعي الآلية لأحفر التربة. ثم اختبرت العيّنات في أفران صغيرة. وبفضل ذلك تأكّد العلماء أن جليد الماء مختبئ تحت السطح مباشرة. ووجدت أيضًا مادة كيميائية اسمها البيركلورات. انتهت مهمتي في تشرين الثاني 2008. ماذا كنت ستبحث عنه في جليد المريخ؟',
      science: 'تأكّدت أن <b>جليد الماء</b> مختبئ تحت تربة المريخ مباشرة. ووجدت أيضًا <b>البيركلورات</b>، وهي مادة كيميائية قد تكون مصدر طاقة لكائنات دقيقة، ومادة مفيدة لمستكشفي المستقبل.',
      q: 'ماذا وجد فينيكس تحت التربة مباشرة قرب القطب الشمالي للمريخ؟',
    },
  },
  pio: {
    sources: ['https://science.nasa.gov/mission/pioneer-10/'],
    en: {
      story: "I was the first spacecraft ever to fly through the asteroid belt! I'm Pioneer 10. I launched on March 2, 1972. Then I became the first spacecraft to fly past Jupiter. I was designed for a 21-month mission, but I lasted more than 30 years! My last signal reached Earth on January 23, 2003. Now I'm heading toward the red star Aldebaran. I should pass it in about two million years! Where would you go if you could travel forever?",
      science: 'I was the <b>first spacecraft to fly through the asteroid belt</b> and the <b>first to fly past Jupiter</b>. I was also the first human-made object to go <b>beyond Neptune\'s orbit</b>.',
    },
    ar: {
      story: 'كنت أول مركبة فضائية على الإطلاق تعبر حزام الكويكبات! أنا بايونير 10. انطلقت في 2 آذار 1972. ثم أصبحت أول مركبة تمر بجانب المشتري. صُمّمت لمهمة مدتها 21 شهرًا، لكنني بقيت أعمل أكثر من 30 سنة! ووصلت آخر إشارة مني إلى الأرض في 23 كانون الثاني 2003. والآن أتجه نحو النجم الأحمر الدبران، ويُتوقّع أن أمرّ بجانبه بعد حوالي مليوني سنة! إلى أين كنت ستذهب لو استطعت السفر إلى الأبد؟',
      science: 'كنت <b>أول مركبة تعبر حزام الكويكبات</b> و<b>أول مركبة تمر بجانب المشتري</b>. وكنت أيضًا أول شيء صنعه الإنسان يتجاوز <b>مدار نبتون</b>.',
    },
  },
  kep: {
    sources: ['https://science.nasa.gov/mission/kepler/'],
    en: {
      story: "I helped show that our night sky has more planets than stars! I'm Kepler, a space telescope. I launched in 2009. Every day, I stared at the same patch of sky, watching 150,000 stars. When a planet crossed in front of its star, the starlight dipped a tiny bit, and I noticed! Because of that, I found more than 2,600 planets. In 2018, I ran out of fuel. Do you think one of those planets could be like Earth?",
      science: 'I watched for <b>tiny dips in starlight</b> when planets crossed in front of their stars. I left a legacy of <b>more than 2,600 planets</b>, and helped show that our night sky has <b>more planets than stars</b>.',
    },
    ar: {
      story: 'ساعدت في إظهار أن سماء الليل فيها كواكب أكثر من النجوم! أنا كبلر، تلسكوب فضائي. انطلقت سنة 2009. كل يوم كنت أحدّق في الجزء نفسه من السماء وأراقب 150,000 نجم. وعندما يمر كوكب أمام نجمه، ينخفض ضوء النجم قليلًا جدًا، فألاحظ ذلك! وبفضل ذلك وجدت أكثر من 2,600 كوكب. وفي سنة 2018 نفد وقودي. برأيك، هل يمكن أن يكون أحد هذه الكواكب مثل الأرض؟',
      science: 'كنت أراقب <b>انخفاضات صغيرة في ضوء النجوم</b> عندما تمر الكواكب أمامها. وتركت إرثًا من <b>أكثر من 2,600 كوكب</b>، وساعدت في إظهار أن سماء الليل فيها <b>كواكب أكثر من النجوم</b>.',
    },
  },
  near: {
    sources: ['https://science.nasa.gov/mission/near-shoemaker/'],
    en: {
      story: "I was the first spacecraft to orbit an asteroid, and the first to land on one! I'm NEAR Shoemaker. I launched in 1996. On Valentine's Day, February 14, 2000, I went into orbit around the asteroid Eros. Every day, I studied it and took pictures: 160,000 of them! Then, on February 12, 2001, my team gently set me down on its surface. My last contact with Earth was on February 28, 2001. What would you name your own asteroid?",
      science: 'I sent back about <b>10 times more data</b> than planned, including <b>160,000 images</b>. My data showed that Eros has <b>no magnetic field</b>.',
    },
    ar: {
      story: 'كنت أول مركبة فضائية تدور حول كويكب، وأول مركبة تهبط على كويكب! أنا نير شوميكر. انطلقت سنة 1996. وفي يوم عيد الحب، 14 شباط 2000، دخلت في مدار حول الكويكب إيروس. كل يوم كنت أدرسه وألتقط له الصور: 160,000 صورة! ثم في 12 شباط 2001 أنزلني فريقي بلطف على سطحه. وكان آخر اتصال لي بالأرض في 28 شباط 2001. ماذا كنت ستسمّي كويكبك الخاص؟',
      science: 'أرسلت حوالي <b>10 أضعاف البيانات</b> المخطط لها، ومنها <b>160,000 صورة</b>. وأظهرت بياناتي أن إيروس <b>ليس له مجال مغناطيسي</b>.',
    },
  },
};

for (const [id, p] of Object.entries(S)) {
  const b = bots.find((x) => x.id === id);
  b.sources = p.sources;
  b.src = p.sources[0];
  if ('a' in p) b.a = p.a;
  Object.assign(b.en, p.en);
  Object.assign(b.ar, p.ar);
  console.log(`${id}: ${b.en.story.split(/\s+/).length} words EN`);
}
fs.writeFileSync(FILE, JSON.stringify(bots, null, 2) + '\n');
