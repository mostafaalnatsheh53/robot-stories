# Robot Stories: Project Page Texts (English, ready to paste)

## Project name
Robot Stories

## Team
**The Final Countdown**, Palestine Polytechnic University (PPU), Hebron. NASA Space Apps Challenge 2026, Nablus.
- Islam Akram Salem Jaradat
- Malak Emad Jawdat El-Masri
- Mostafa Wisam Al-Natsheh
- Osama Nabeel Salah Abu Al-Halaweh
- Nisreen Mohammad Khader Al-Ajlouni

## Links
- Live website (free, no account): https://mostafaalnatsheh53.github.io/robot-stories/
- Code: https://github.com/mostafaalnatsheh53/robot-stories

## High-level summary
Robot Stories is a free, bilingual (English/Arabic) website where 17 of NASA's "abandoned" machines on the Moon, on Mars and in deep space tell kids aged 9–14 their own stories, in the first person, in short story videos. The kid's mission is to rescue these forgotten stories: pick a world, tap a robot, watch its video, see what science it made possible, and answer one question to earn a badge. Every fact is linked to a NASA source and every picture is a real, credited NASA image. It turns forgotten hardware into characters kids remember, and brings this content to Arabic-speaking children, who rarely get it in their own language.

## Detailed description
**What it does.** Since the 1960s NASA has left landers, rovers, mirrors, seismometers and spacecraft across the solar system. Robot Stories introduces kids to 17 of them, taken from the hardware list in the official challenge resources:
- **The Moon (5):** the Apollo 11 lunar module "Eagle", the Apollo 11 laser reflector, the Lunar Roving Vehicles, Surveyor 3 and the Apollo seismometers.
- **Mars (7):** Viking 1, Sojourner, Spirit, Opportunity, Phoenix, InSight and Ingenuity.
- **Deep space (5):** Voyager 1, Pioneer 10, the Kepler Space Telescope, NEAR Shoemaker (resting on asteroid Eros) and Dawn (orbiting dwarf planet Ceres).

**How it works.**
1. Pick a world: the Moon, Mars or Deep Space.
2. Tap a robot on a simple map, or pick it from a timeline ordered by year.
3. Watch its story video (36–44 seconds). The robot speaks in the first person, for example: "I was supposed to work for 90 Martian days..." The video shows real NASA photos with simple animations: counters, a seismograph for the quake listeners, a planet passing in front of its star for Kepler.
4. Answer one "rescue question". A right answer earns that robot's badge; collect all 17 to become a "Master Space Explorer".
5. "What we learned" explains the science the robot made possible, such as the Moon drifting about 3.8 cm a year, 1,319 marsquakes, water ice under Mars' soil, and more than 2,600 planets found around other stars. The full story text is one tap away.
6. A collapsed "For teachers and parents" box on every robot lists the NASA sources and the credit for every picture in the video.

**How the stories are written.** Each story follows the "Story Spine" structure (once upon a time, every day, until one day, because of that, until finally, ever since), told by the robot itself and ending with a question for the kid. The sentence in the video is exactly the sentence on the page, checked against the NASA source for that robot. The stories read at about a US grade 4 level.

**Why it matters.** Kids usually meet space history as dates and names. Hearing it from the machines themselves makes it personal and memorable, while every fact stays tied to NASA sources. A one-click Arabic version (right-to-left layout, Arabic on-screen text and Arabic subtitles) opens the content to Arabic-speaking children, who have very little space content like this in their own language.

**How we built it.**
- **Website:** one page in plain HTML, CSS and JavaScript (no frameworks, no sign-in), hosted free on GitHub Pages, so it loads fast on phones and school computers. Badges are saved in the browser.
- **Videos:** 18 story videos (17 robots + an introduction), each in an English and an Arabic version, so 36 in total, made with Remotion and FFmpeg from the same text as the website. Narration is a computer voice in English (Piper), with English and Arabic subtitles.
- **Design:** a playful "candy space" style for ages 9–14. Each robot has its own color. Everything you can press is a big rounded button, with high-contrast text. Subtitles and the full story text are always available, and animations switch off for users who ask their device for reduced motion.

## NASA data used
- **NASA Space Science Data Coordinated Archive (NSSDCA)**, https://nssdc.gsfc.nasa.gov/. 3 spacecraft records: Apollo 11 Lunar Module (1969-059C), Lunar Roving Vehicle (1971-063C), Apollo 12 ALSEP (1969-099C).
- **NASA Science and NASA JPL mission pages.** In total, the robots link to 28 NASA source pages (17 on science.nasa.gov, plus jpl.nasa.gov, nasa.gov, NSSDCA and images.nasa.gov pages), used to write and fact-check every story.
- **NASA Image and Video Library (images.nasa.gov):** 67 NASA images and 1 NASA video clip (Ingenuity's first flight) are used in the site and the videos. 13 of them are NASA artist's concepts and are labeled that way.
- **Lunar Reconnaissance Orbiter Camera (NASA/GSFC/Arizona State University):** 1 image showing the Apollo 15 rover tracks from orbit, https://lroc.im-ldi.com/images/491.

Every one of these 69 pictures and clips is credited on screen and listed with its NASA ID, title and credit line in the site's About page (`docs/data/credits.json`).

## Space agency partner data
None.

## References / other data and tools (with licenses)
- HTML, CSS, JavaScript (no libraries); GitHub Pages hosting.
- Fonts: Fredoka, Nunito, Baloo Bhaijaan 2 (SIL Open Font License 1.1), served from the site itself.
- Remotion (remotion.dev/license) and FFmpeg (LGPL/GPL) for the videos.
- Piper text-to-speech (MIT license) with the LJSpeech voice (public-domain dataset). No music.
- Emoji characters are rendered by the user's device.
- NASA images are used under NASA's media usage guidelines, credited individually. Their use does not imply NASA endorsement, and the NASA logo is not used. This is not an official NASA website.

## Use of Artificial Intelligence
We used Claude (Anthropic), an AI assistant, to help:
- write and debug the website and video code,
- draft the robots' first-person stories, translate them into Arabic, and cut them into video scripts,
- choose and credit NASA pictures for the videos,
- design the site and draft the presentation and these texts.

The team chose the robots and the story format, checked every fact against the NASA sources listed above, and reviewed all text. All pictures are real NASA images; no AI-generated images are used.

## What's next
- **Arabic narration recorded by the team.** Right now the Arabic videos use the English computer voice with Arabic subtitles; the video pipeline already accepts our own recordings.
- **Test with real kids and teachers.** We have not run a classroom test yet; this is the first step after the hackathon.
- **More robots,** such as Curiosity, Perseverance and the other Apollo lunar modules.
- **Classroom use:** printable teacher worksheets, starting with schools in Palestine.
