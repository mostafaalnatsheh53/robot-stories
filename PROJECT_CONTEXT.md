# Robot Stories: Project Context

> One self-contained briefing for anyone (human or AI) joining this project. Everything below describes what is
> really in the repository as of **15 Nov 2026**. Where something is unknown or unfinished, it says so.

---

## 1. Summary

**Robot Stories** is a free, bilingual (English/Arabic) website where 17 NASA machines that were left behind on the
Moon, on Mars and in deep space tell kids aged 9–14 their own stories, in the first person. Each robot has a
36–44 second story video made from real NASA images, a "What we learned" science box, and one quiz question.
Answering it "rescues" the story and earns a badge; rescuing all 17 makes the kid a "Master Space Explorer".
Every fact is linked to a NASA source and every picture is credited. It is a static site on GitHub Pages: no
account, no install, works on phones.

---

## 2. The hackathon

- **Event:** NASA Space Apps Challenge 2026, Nablus local event.
- **Challenge:** *Abandoned but not Forgotten: Storytelling about NASA's Discarded Equipment on the Moon and Mars.*
  In short, it asks teams to tell the stories of hardware NASA left behind, so that it is remembered. Our robot list
  comes from the hardware list in the challenge resources. (The official challenge page text is not saved in this
  repo; read it on the Space Apps site for the exact wording.)
- **Submission deadline:** Sunday 15 Nov 2026, 11:59 PM local time.
- **Official submission fields:** High-Level Summary · Project Demo (a deck of **7 slides max** OR a video of
  **30 seconds max**) · Final Project Link · Project Details · Use of NASA Data · References.
- NASA data use is required to be eligible for Global Awards.
- Ready-to-paste texts for these fields are in `robot-stories-project-page.md`.

---

## 3. The team

**The Final Countdown**, Palestine Polytechnic University (PPU), Hebron:

- Islam Akram Salem Jaradat
- Malak Emad Jawdat El-Masri
- Mostafa Wisam Al-Natsheh
- Osama Nabeel Salah Abu Al-Halaweh
- Nisreen Mohammad Khader Al-Ajlouni

(Use these exact spellings everywhere. The Arabic About page writes the names in Arabic script; the team still needs
to confirm those spellings.)

---

## 4. Audience and goals

- **Who:** kids aged 9–14 who speak English or Arabic, plus their teachers and parents.
- **Why Arabic:** Arabic-speaking kids have very little space content like this in their own language.
- **Goal:** turn forgotten hardware into characters kids remember, with every fact tied to NASA sources.
- **Target awards:** Best Storytelling, Most Inspirational, Local Impact.

---

## 5. The experience (user flow)

1. **Intro page.** A floating 🤖 and the title "Abandoned but not Forgotten". Three short boxes (And / But / mission)
   explain the idea, followed by the intro video (ABT, about 24 s).
2. **Worlds.** Three big world cards, each with a planet drawing: the Moon (5 robots), Mars (7) and Deep Space (5).
3. **World page.**
   - A simple map with one colored, pulsing dot per robot (positions are simplified, and the page says so).
   - A timeline of robot buttons, ordered by year.
   - World tabs at the top to switch worlds.
4. **Robot page**, in this order (on phones the page scrolls to the video by itself):
   - the **story video** with EN/AR subtitles;
   - the name, year, place and status ("💤 Resting forever", "✅ Still useful today" or "🚀 Still traveling");
   - the **rescue question**: 3 big answer buttons.
     - Right answer: cyan ✓, a star burst, the badge, and confetti the first time.
     - Wrong answer: orange ✗ and "Try again!".
     - When the video ends, the question glows and the page scrolls to it.
   - "📜 **Read the story**" (collapsed), the full story text;
   - "🔬 **What we learned**", the science the robot made possible;
   - "🔎 **For teachers and parents**" (collapsed): the narration note, the credited NASA pictures in the video, and
     the NASA source links;
   - the badge shelf, x / 17.
5. **Mission and finale.** "⭐ x / 17 Stories rescued" in the top bar. Rescuing all 17 opens the "Master Space
   Explorer!" window with a big confetti celebration. Progress is saved in the browser (`localStorage`).
6. **About & Sources** (ℹ️): the project, how it works, NASA data, every image credit, tools, AI use, and the team.
7. **Language toggle.** "العربية" / "English" switches all text and the layout direction (RTL). Each video has an
   EN and an AR version.
8. **Light theme.** ☀️/🌙 for classroom projectors. It is hidden on phones.

---

## 6. Storytelling system

- **Story Spine for every robot:**
  - **the beats:** once upon a time → every day → until one day → because of that → until finally → ever since;
  - **the hook rule:** the first sentence is a hook, a surprising fact or question (e.g. "I was designed for only 5
    flights, but I flew 72 times!");
  - **the ending:** the last sentence is a question to the kid;
  - **the voice:** the robot speaks in the first person.
- **ABT** (And / But / Therefore) for the intro video and the pitch deck's problem slide.
- **One emotion or theme per robot:**

  | Robot | Theme |
  |---|---|
  | Opportunity | never giving up |
  | Lunar Roving Vehicle | adventure and fun |
  | Laser Reflector | the quiet helper that still works |
  | Ingenuity | surprise, beating expectations |
  | Voyager 1 | wonder, very far from home |
  | Dawn | curiosity, two worlds |
  | Surveyor 3 | the robot that got visitors |
  | Seismometers | listening to the Moon |
  | Eagle | the launch pad left behind |
  | Viking 1 | the first pictures from Mars |
  | Sojourner | the first rover, small as a ruler |
  | Spirit | a problem that became a discovery |
  | InSight | the listener |
  | Phoenix | the ice hunter |
  | Pioneer 10 | still traveling |
  | Kepler | the planet hunter |
  | NEAR Shoemaker | the first to orbit and land on an asteroid |

- **Kid comparisons** are used only for facts already in the NASA source, e.g. "longer than a marathon" (45 km) and
  "the length of a school ruler" (30 cm).
- **One text everywhere:** the story on the page is the video script joined into one text. The video's
  sentences = the subtitles = the page text. The quiz and "What we learned" say the same thing in EN and AR.
- **Facts the team removed:** the 11 later stories were re-checked against their NASA pages, and details not found
  there were removed. For example: Viking "built for 90 days", Phoenix "saw snow falling", the Sojourner "microwave
  oven". Sojourner's ramp date was corrected to July 5.
- **Reading level:** the English stories average about US grade 4.2 (Flesch-Kincaid, our own calculation), range
  2.2–5.6. They are 74–90 words each.

---

## 7. Content: the 17 robots

All 17 have a video in EN and AR. Data: `docs/data/robots.json`.

| id | world | name | years | status | video | main NASA source |
|---|---|---|---|---|---|---|
| rr | moon | Apollo 11 Laser Reflector | 1969 | useful | yes | jpl.nasa.gov/news/the-apollo-experiment-that-keeps-on-giving/ |
| lrv | moon | Lunar Roving Vehicle | 1971–1972 | silent | yes | nssdc.gsfc.nasa.gov … id=1971-063C |
| sv3 | moon | Surveyor 3 | 1967 | silent | yes | science.nasa.gov/mission/surveyor-3/ |
| seis | moon | Apollo Seismometers | 1969–1977 | silent | yes | nssdc.gsfc.nasa.gov … id=1969-099C |
| lm | moon | Apollo 11 Lunar Module "Eagle" | 1969 | silent | yes | nssdc.gsfc.nasa.gov … id=1969-059C |
| vik | mars | Viking 1 Lander | 1976–1982 | silent | yes | science.nasa.gov/mission/viking-1/ |
| soj | mars | Sojourner | 1997 | silent | yes | science.nasa.gov/mission/mars-pathfinder/ |
| spi | mars | Spirit | 2004–2011 | silent | yes | science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/ |
| opp | mars | Opportunity | 2004–2019 | silent | yes | science.nasa.gov/mission/mer-opportunity/ |
| ins | mars | InSight | 2018–2022 | silent | yes | science.nasa.gov/mission/insight/ |
| ing | mars | Ingenuity | 2021–2024 | silent | yes | science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/ |
| phx | mars | Phoenix | 2008 | silent | yes | science.nasa.gov/mission/mars-phoenix/ |
| voy | deep | Voyager 1 | 1977–today | travel | yes | science.nasa.gov/mission/voyager/where-are-voyager-1-and-voyager-2-now/ |
| pio | deep | Pioneer 10 | 1972–2003 | travel | yes | science.nasa.gov/mission/pioneer-10/ |
| kep | deep | Kepler Space Telescope | 2009–2018 | silent | yes | science.nasa.gov/mission/kepler/ |
| near | deep | NEAR Shoemaker | 1996–2001 | silent | yes | science.nasa.gov/mission/near-shoemaker/ |
| dawn | deep | Dawn | 2007–2018 | silent | yes | science.nasa.gov/mission/dawn/ |

Several robots list 2–4 sources (28 unique NASA pages in total); see `sources` in each entry.

**Key facts per story** (exactly as in the stories):

**The Moon**
- **rr:** a box of mirrors with no batteries, set down by Apollo 11 in 1969. Earth lasers bounce off it, and the
  timing shows the Moon drifts away about 3.8 cm a year.
- **lrv:** folded to fit in the lunar module. It drove on Apollo 15 in 1971, about 27.9 km together. Three Moon cars
  are still parked (Apollo 15, 16, 17), and LRO still sees the tire tracks.
- **sv3:** landed in 1967 before any human, and tested the ground (solid enough for a lunar module). Apollo 12 landed
  about 180 m away in Nov 1969, and the astronauts took its camera and scoop back to Earth.
- **seis:** set up starting with Apollo 11 (1969) and found moonquakes, including the first artificial one. The
  Apollo 12/14/15/16 stations listened until 30 Sep 1977, helping study the crust and interior.
- **lm:** the bottom half of Eagle. It landed Armstrong and Aldrin on 20 Jul 1969 in the Sea of Tranquility, became
  the launch platform for its top half, and is still on the Moon.

**Mars**
- **vik:** sent the first pictures from Mars' surface, and made NASA's first successful Mars landing (20 Jul 1976). It
  sent weather reports and tested soil for life (one test hopeful, the main test found no organic compounds), and
  worked until Nov 1982.
- **soj:** the first rover on another planet, about 30 cm tall. Pathfinder landed on 4 Jul 1997. Together they sent
  16,500 lander pictures and 550 rover pictures.
- **spi:** Opportunity's twin, in Gusev Crater, 2004. A stuck wheel dragged through the soil and uncovered soil about
  90% silica, possibly from a hot spring or steam.
- **opp:** planned for 90 Martian days, it worked almost 15 years and about 45 km. It found "blueberries" (clues of
  past water), and fell silent in the June 2018 dust storm. Mars *may once have been able to* support tiny life.
- **ins:** a lander that listened. It launched in 2018 and detected 1,319 marsquakes (crust, mantle, core). Dust
  covered its solar panels, and the mission ended in 2022.
- **ing:** designed for 5 flights, it flew 72. Its first powered flight on another planet was on 19 Apr 2021. Its
  rotor blades were damaged in Jan 2024.
- **phx:** landed on 25 May 2008 near Mars' North Pole. It dug soil and tested it in tiny ovens, verified water ice
  just under the surface, and found perchlorate. Mission ended in Nov 2008.

**Deep space**
- **voy:** launched in 1977, visited Jupiter and Saturn, and reached interstellar space in 2012. It carries the Golden
  Record, is still talking to Earth, and will be one light-day away around 18 Nov 2026.
- **pio:** launched on 2 Mar 1972. It was the first through the asteroid belt and the first past Jupiter. Built for 21
  months, it lasted 30+ years. Last signal on 23 Jan 2003; it is heading toward Aldebaran (about 2 million years).
- **kep:** launched in 2009 and watched 150,000 stars in one patch of sky. Starlight dips when a planet passes in
  front, and it found 2,600+ planets. Out of fuel in 2018.
- **near:** launched in 1996, orbited Eros on 14 Feb 2000 and took 160,000 pictures. It landed on 12 Feb 2001; last
  contact 28 Feb 2001.
- **dawn:** launched in 2007 with an ion engine. It orbited Vesta, then Ceres: the first to orbit two worlds beyond
  Earth and the first to visit a dwarf planet. Out of fuel in 2018, still circling Ceres; dwarf planets *could have
  had* oceans.

---

## 8. Design system ("candy space")

**Rule:** color is for fun; **shape shows what you can press.**

- **Background and text:**

  | Token | Hex | Use |
  |---|---|---|
  | bg | `#140F33` | page background, with soft pink/blue/purple nebula blobs and twinkling stars |
  | panel | `#241B55` | cards and panels (20px+ corners) |
  | panel2 | `#1D1647` | inner boxes (quiz, science, teachers box) |
  | soft | `#2E2366` | flat labels, story text box |
  | text | `#F5F3FF` | main text |
  | muted | `#CFC8F5` | secondary text |

- **Candy colors, each with its dark text for buttons:**

  | Color | Hex | Dark text |
  |---|---|---|
  | cyan | `#4FD1FF` | `#062B3A` |
  | pink | `#FF7AB6` | `#3D0A22` |
  | lime | `#A3E635` | `#1A2E05` |
  | orange | `#FF9F5A` | `#3A1A05` |
  | light purple | `#C4B5FD` | `#1E1240` |
  | yellow | `#FFD23F` | `#2A1D00` |

  All of them are 7.6:1 or more on the background, and every dark-text pair is 6.9:1 or more.
- **World colors:** Moon `#9EC5FF`, Mars `#FF9F5A`, Deep Space `#C4B5FD`. Each world page is softly tinted with its
  color.
- **Robot colors** (map dot, avatar ring, card border, video frame, timeline button, badge ring):
  - rr yellow, lrv pink, sv3 lime, seis purple, lm orange;
  - vik cyan, soj pink, spi lime, opp cyan, ins purple, ing yellow, phx lime;
  - voy cyan, pio pink, kep lime, near orange, dawn purple.

  Neighbors on a map differ; there is no cyan on the Moon and no orange on Mars.
- **Feedback colors (color-blind safe, no red/green):** right = cyan + ✓ + star burst; wrong = orange + ✗ + "Try
  again!".
- **Fonts** (self-hosted in `docs/fonts/`, SIL OFL): Fredoka (headings) and Nunito (body) for English; Baloo
  Bhaijaan 2 for Arabic.
- **Buttons:** everything clickable shares one shape: chunky, very rounded, 48px+ tall, with a solid darker 3D bottom
  edge that pushes down on tap. A selected item stays pressed and gets a white outline. Non-clickable things
  (status, counters, info boxes) are flat.
- **Animations:**
  - floating robot, twinkling stars, pulsing map dots;
  - button press, star burst on a right answer, multicolor confetti for a badge (bigger for all 17);
  - badge pop, quiz glow after the video;
  - inside the videos: Ken Burns photo moves, counters, a seismograph, a planet passing its star, orbits and more.
- **Accessibility:**
  - text contrast 4.5:1+ everywhere (in practice 6.9:1+);
  - kid text 18px+;
  - never color alone (✓/✗, outlines, ✓ in labels);
  - all animations off under `prefers-reduced-motion`;
  - subtitles in EN and AR, plus the full story text;
  - keyboard-focusable map pins;
  - no sideways scroll at 360–390px.

---

## 9. Tech

```
nasa project/
├─ docs/                      ← the website (GitHub Pages serves this folder)
│  ├─ index.html              one page: HTML + CSS + JS, no libraries
│  ├─ .nojekyll
│  ├─ data/robots.json        all 17 robots, EN + AR (site text AND video scripts)
│  ├─ data/intro.json         intro video script (ABT), EN + AR
│  ├─ data/videos.json        video manifest per robot/lang: src, poster, subs, narration, seconds
│  ├─ data/credits.json       69 credited NASA pictures/clips: title, credit, date, concept flag, page
│  ├─ videos/  (36 .mp4)      <id>.<en|ar>.mp4, 1280×720, H.264, 1.35–3.3 MB each
│  ├─ subs/    (72 .vtt)      <id>.<videoLang>.<subLang>.vtt (both subtitle languages for each video)
│  ├─ posters/ (36 .jpg)      title-card poster per video
│  ├─ images/  (12 .jpg)      robot photos used by the site
│  ├─ fonts/                  woff2 files + fonts.css
│  └─ pitch/                  pitch deck: index.html, img/ (live-site screenshots), robot-stories-pitch.pdf
├─ video/                     ← Remotion project that makes the story videos
│  ├─ src/Root.jsx, Robot.jsx composition; Ken Burns shots, credits, sentence audio
│  ├─ src/overlays.jsx        animated overlays: Title, big, counter, Lifetime, Dust, Laser, LightDay, Orbit, quake, Transit, EndCard
│  ├─ src/shots/<id>.jsx      per robot: which NASA image when, which overlay per sentence, EN/AR labels
│  ├─ scripts/build-robot.mjs end-to-end build (narration → timeline → MP4 → subtitles → poster → videos.json)
│  ├─ scripts/fetch-images.mjs download NASA Library images by NASA ID (into media/raw + video/public/img)
│  ├─ scripts/make-credits.mjs build docs/data/credits.json + media/credits.json
│  ├─ scripts/patch-*.mjs     one-off content updates of robots.json (Story Spine rewrites, phase 3, phase 4)
│  └─ public/                 NOT in git: img/, clips/, audio/ (re-downloadable / regenerated)
├─ demo/
│  ├─ serve.mjs               tiny local static server for docs/
│  ├─ check-all.mjs           every video EN+AR loads, subtitles load, no errors
│  ├─ check-live.mjs          32 checks on the live site (worlds, videos, quiz, badge, About, Arabic, phone 375px, fonts)
│  ├─ pitch-shots.mjs         re-shoot live-site screenshots for the deck
│  └─ pitch-check.mjs         check every slide (1920×1080 and phone), keys/swipe, export the PDF
├─ media/credits.json         copy of the credits (raw downloads in media/raw are NOT in git)
├─ tts/                       NOT in git: Piper engine + voice + license notes
├─ voice/README.md            place for the team's own recordings (not used now)
├─ README.md, robot-stories-project-page.md (submission texts), PROJECT_CONTEXT.md (this file)
```

**robots.json entry fields:**

| Field | Meaning |
|---|---|
| `id`, `world`, `emoji` | identity |
| `x`, `y` | map position (simplified) |
| `year`, `years` | first year; years shown on the video end card |
| `status` | `silent` / `useful` / `travel` |
| `a` | index of the right quiz answer |
| `img`, `nasaId`, `credit` | the site photo, or `null` |
| `src`, `sources` | NASA pages |
| `media` | NASA IDs used in its video |
| `video` | `true` when it has a video |
| `en` / `ar` | `name`, `short`, `place`, `story`, `science` (with `<b>`), `q`, `opts`, `cap` (photo caption), `script` (array of sentences) |

Example (shortened):

```json
{"id":"dawn","world":"deep","x":238,"y":238,"emoji":"🌀","year":2007,"years":"2007–2018","status":"silent","a":1,
 "src":"https://science.nasa.gov/mission/dawn/","img":null,"video":true,
 "media":["PIA19598","KSC-07PD-2590","PIA18922","PIA15678","PIA21078"],
 "sources":["https://science.nasa.gov/mission/dawn/","https://www.nasa.gov/news-release/nasas-dawn-mission-to-asteroid-belt-comes-to-end/"],
 "en":{"name":"Dawn","short":"Dawn","place":"Orbiting the dwarf planet Ceres",
       "story":"Why visit one world when you can visit two? I'm Dawn, ...",
       "science":"With my <b>ion engine</b>, I became the <b>first spacecraft to orbit two worlds beyond Earth</b>, ...",
       "q":"What was special about Dawn?","opts":["It landed on the Sun","It orbited two different worlds","It carried astronauts"],
       "script":["Why visit one world when you can visit two?", "..."]},
 "ar":{ "...same keys in Arabic..." }}
```

**How the site loads data.** `index.html` fetches `data/robots.json`, `data/videos.json` and `data/credits.json`,
then renders everything with plain JS. That's why opening the file by double-click does not work; it needs a server.

**Video pipeline** (`video/scripts/build-robot.mjs`):
1. **Narration.** For each sentence of `<id>.<lang>.script`, use the team's recording `voice/<id>.<lang>.<nn>.wav` if
   every sentence is recorded. Otherwise generate it with **Piper** (`en_US-ljspeech-high`, `--length_scale 1.08`).
   There is no Arabic voice, so Arabic videos fall back to English narration.
2. **Audio cleanup.** ffmpeg trims silence and normalizes loudness, then measures each sentence.
3. **Timeline.** 0.9 s lead, 0.45 s gap between sentences, 3.2 s tail.
4. **Render.** Remotion renders the `Robot` composition (1280×720, 30 fps, H.264 CRF 28, AAC 96k).
5. **Outputs.**
   - `.vtt` subtitles in EN and AR, timed to the audio (no `.srt` files are produced);
   - a poster (frame 48 = the title card);
   - the `docs/data/videos.json` entry.

**Commands**
```bash
# run the site locally → http://localhost:8080
cd demo && node serve.mjs

# render one robot's videos (needs ffmpeg on PATH + Piper in tts/piper/ + tts/voices/en_US-ljspeech-high.onnx)
cd video && npm install
node scripts/fetch-images.mjs <NASA IDs used in src/shots/<id>.jsx>   # pictures → video/public/img (not in git)
node scripts/build-robot.mjs opp            # EN + AR; or several ids; --lang ar; --no-render
node scripts/make-credits.mjs               # refresh docs/data/credits.json

# deploy: GitHub Pages builds main:/docs automatically (about 1 minute)
git add -A && git commit -m "..." && git push

# checks (Playwright, in demo/: npm install first)
node demo/check-live.mjs https://mostafaalnatsheh53.github.io/robot-stories/
node demo/check-all.mjs . http://localhost:8082/      # starts its own server on 8082
node demo/pitch-check.mjs http://localhost:8080/pitch/ <screenshotDir>   # also rewrites the PDF
```

---

## 10. Hosting and links

- **Live site:** https://mostafaalnatsheh53.github.io/robot-stories/
- **Repository (public):** https://github.com/mostafaalnatsheh53/robot-stories
- **Pitch deck (7 slides, site design):** https://mostafaalnatsheh53.github.io/robot-stories/pitch/
- **Pitch PDF:** https://mostafaalnatsheh53.github.io/robot-stories/pitch/robot-stories-pitch.pdf
- **Demo video (30 s):** not done yet. The 7-slide deck can be used instead for the "Project Demo" field.

---

## 11. NASA data and credits

**Sources**
- **NSSDCA:** 3 records: 1969-059C (Apollo 11 LM), 1971-063C (LRV), 1969-099C (Apollo 12 ALSEP).
- **Mission pages:** 28 unique NASA source pages across the robots: 17 on science.nasa.gov, plus jpl.nasa.gov,
  nasa.gov news releases, NSSDCA and images.nasa.gov pages.
- **NASA Image and Video Library:** 67 images + 1 video clip (Ingenuity's first flight).
- **LROC:** 1 image (Apollo 15 rover tracks, NASA/GSFC/Arizona State University).
- In total, **69 credited items**. 13 are NASA artist's concepts and are labeled that way. The full list with titles
  is in `docs/data/credits.json` and the site's About page.

**Credit lines → NASA IDs** (`*` = artist's concept)
- **NASA:** 7021093, as15-86-11603, as15-88-11901, as17-147-22527, as11-40-5948, KSC-07PD-2590, as16-110-17960,
  as12-48-7121, as12-48-7110, AS12-48-7133, AS12-48-7134, as16-113-18347, as11-40-5942, as12-47-6918, S69-39587,
  as11-40-5927, as11-40-5903, as11-44-6642, KSC-2009-1783, PIA18177*
- **NASA/JPL-Caltech:** PIA23882, PIA23720*, PIA26243, PIA17046*, PIA14113, PIA19598*, PIA18922*, PIA04318,
  PIA22876, PIA22977, PIA25286, PIA25287
- **NASA/JPL:** PIA04495*, PIA00029, PIA00024, PIA00381, PIA00563, PIA00766, PIA01121, PIA00633
- **NASA/JPL-Caltech/University of Arizona:** PIA09703, PIA09942*, PIA10666*
- **NASA Ames Research Center:** ARC-1973-AC73-4247*, ARC-1972-AC72-2135, ARC-1972-AC72-2140
- **NASA Ames Research Center/University of Arizona:** ARC-1973-AC73-9278
- **NASA/Ames/JPL-Caltech:** PIA13351*, PIA11824*, PIA11984
- **NASA/JPL-Caltech/MSSS:** PIA23178, PIA22329
- **NASA/JPL-Caltech/UCLA/MPS/DLR/IDA:** PIA15678, PIA21078
- **NASA/JPL/Cornell:** PIA05283, PIA09491
- **NASA/JPL/JHUAPL:** PIA02467, PIA03148
- **Single credit lines:**

  | Credit line | NASA ID |
  |---|---|
  | NASA/JPL-Caltech/Cornell Univ./Arizona State Univ. | PIA17759 |
  | NASA/JPL/Cornell University | PIA04413* |
  | NASA/JPL-Caltech/Cornell Univ./USGS | PIA18885 |
  | NASA/JPL/Cornell/USGS | PIA05273 |
  | NASA/JPL-Caltech/ASU/MSSS | PIA25970 |
  | NASA/JPL/Cornell University/Maas Digital | PIA04928* |
  | NASA/JPL-Caltech/University of Arizona/Texas A&M | PIA10693 |
  | NASA/JPL-Caltech/University of Arizona/Max Planck Institute | PIA10745 |
  | NASA/JPL-Caltech/University of Arizona/Texas A&M University | PIA10910 |
  | NASA/GSFC/Arizona State University | lroc-a15-tracks |
  | NASA/JPL-Caltech/ASU (video clip) | ing-first-flight |

**Site photos** (`docs/images/`, one per robot where available):
- rr and lm: as11-40-5948
- lrv: as15-86-11603
- sv3: AS12-48-7134
- seis: as11-40-5942
- vik: PIA00563
- soj: PIA04318
- spi: PIA04928*
- opp: PIA17759
- ins: PIA25287
- ing: PIA23882
- voy: PIA04495*
- pio: ARC-1972-AC72-2135
- phx, kep, near and dawn have no site photo (an emoji tile is shown if there's no video). They do have NASA images
  in their videos.

**Rules we follow**
- No NASA logo.
- Credit every image on screen (videos), on the robot page (teachers box) and in About.
- Label artist's concepts.
- Show "Not an official NASA website" and "use of NASA images does not imply endorsement" in the footer, the About
  page and the deck.

---

## 12. Tools and licenses

| Tool | Use | License |
|---|---|---|
| HTML/CSS/JavaScript (no libraries) | website | our code |
| Fredoka, Nunito, Baloo Bhaijaan 2 | fonts (self-hosted) | SIL Open Font License 1.1 |
| Remotion 4.0.543 (+ React 19) | video rendering | Remotion license (remotion.dev/license) |
| FFmpeg | audio cleanup, video tools | LGPL/GPL |
| Piper 2023.11.14-2 | English text-to-speech | MIT |
| Voice `en_US-ljspeech-high` | narration voice | LJSpeech dataset: public domain |
| Playwright | checks, screenshots, PDF export | Apache-2.0 |
| qrcode (npm) | QR code on the last slide (generated once, not shipped) | MIT |
| GitHub Pages | hosting | free static hosting |

**Rejected voices** (license problems): Arabic `ar_JO-kareem` (no clear dataset license); English `lessac`
(research license), `hfc_female` (non-commercial) and `amy` (unclear). Emoji are drawn by the user's device. There
is no music.

---

## 13. Use of AI

We used Claude (Anthropic), an AI assistant, to help:
- write and debug the website, video and test code;
- draft the first-person stories, translate them into Arabic, and cut them into video scripts;
- choose and credit NASA pictures for the videos;
- design the site and the pitch deck, and draft the submission texts.

The team chose the robots and the story format, checked every fact against the NASA sources, and reviewed all text.
All pictures are real NASA images; no AI-generated images are used.

---

## 14. Decisions we made and why

- **English narration + Arabic subtitles.** No Arabic Piper voice has a clear license (`ar_JO-kareem` was rejected).
  Team decision on 15 Nov 2026. The pipeline still accepts the team's own Arabic recordings later.
- **No music,** to avoid copyright problems and keep the files small.
- **Built on the first site instead of starting again.** The working site, its data and its checks were kept; videos
  and design were added on top.
- **"Candy space" design** for ages 9–14: more color and fun, with one strict rule (shape = clickable) so it stays
  simple. Color-blind-safe feedback (cyan/orange, not green/red).
- **"Where is it now?" skipped** for time.
- **Hedging words kept as in the NASA sources:** Opportunity, "Mars *may once have been able to* support tiny life";
  Dawn, "dwarf planets *could have had* oceans". They are never turned into certainties.
- **Same text everywhere:** the story = the video script = the subtitles, so one fact-check covers all of them.
- **Only facts found on NASA pages.** Details from older drafts that weren't found on a NASA page were removed (see
  section 6).
- **Real photos only.** Artist's concepts are labeled; no AI images.
- **Light mode** is kept for classroom projectors, but hidden on phones to keep the top bar simple.

---

## 15. Status (15 Nov 2026)

**Done**
- **Live site:**
  - 17 robots in EN/AR, with quiz, badges, About, teachers box and RTL;
  - candy-space design;
  - phone layout tested at 360–390px.
- **Videos:** 36 story videos (17 robots + intro, EN and AR), with EN/AR subtitles.
- **Checks:** the live site passes 32/32 checks. One earlier run gave 31/32 and the failing check was not identified;
  it didn't repeat in three reruns.
- **Pitch deck:** 7 slides plus a 7-page PDF. Every slide is checked at 1920×1080 and on a phone, and the QR code is
  verified to open the live link.
- **Text:** README and `robot-stories-project-page.md` (submission texts) updated with the team, real counts and
  links.

**Not done / known issues**
- **Demo video (30 s):** not made. The deck can be submitted instead.
- **Arabic narration:** the Arabic videos are narrated in English; young Arabic-speaking kids must read the subtitles.
- **Testing:** no testing with real kids or teachers yet; no user numbers exist.
- **Arabic names:** the team must confirm the Arabic spelling of the members' names on the Arabic About page.
- **Site photos:** phx, kep, near and dawn have no site photo (fine because each has a video).
- **SUBMISSION.md:** this file does not exist; the submission texts are in `robot-stories-project-page.md`.
- **Short outage:** on 15 Nov the live site was broken for about 10 minutes by a quote typo in the Arabic footer; it
  was fixed and re-tested.

**Next steps before the deadline**
1. Paste the texts from `robot-stories-project-page.md` into the submission fields.
2. Choose the Project Demo: the deck link/PDF, or make the 30-second video.
3. Confirm the Arabic name spellings.
4. Open the live site once on a real phone.

---

## 16. Rules for any AI working on this project

1. **Never invent** facts, numbers, dates, quotes, test results or user numbers. Every fact must be on a NASA
   source page. If unsure, say so and leave it out.
2. **Keep EN and AR consistent** across the story, video script, subtitles, "What we learned", the quiz and
   on-screen labels. `story` must equal `script` joined, and EN and AR must have the same number of sentences.
3. **Keep NASA's hedging words** ("may", "could have"). Don't turn them into certainties.
4. **Credit every NASA image** (NASA ID + credit line), label artist's concepts, never use the NASA logo, and keep
   "Not an official NASA website".
5. **Accessibility:** keep text contrast at 4.5:1 or more (current pairs are 6.9:1+). Never rely on color alone. Respect
   `prefers-reduced-motion`. Keep subtitles and the story text. Buttons stay 48px+ tall.
6. **Keep the design system:** only clickable things look like buttons; use the tokens in section 8.
7. **Demo video: 30 seconds or less. Deck: 7 slides max** (including the title).
8. **Don't break the live site.** It is served from `docs/` on `main`. Check the JavaScript still parses, keep
   paths relative and file names in exact case, then run `demo/check-live.mjs` after every push.
9. **Don't commit** `tts/`, `media/raw/`, `video/public/`, `node_modules/` or temp files. Keep each file under
   100 MB.
