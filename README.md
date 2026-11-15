# Robot Stories 🤖

**Live site:** https://mostafaalnatsheh53.github.io/robot-stories/

A free, bilingual (English / Arabic) website where 17 NASA machines left on the Moon, on Mars and in deep space
tell kids aged 9–14 their own stories, in the first person, with a short story video, a quiz and badges.

- **Event:** NASA Space Apps Challenge 2026 (Nablus local event)
- **Challenge:** *Abandoned but not Forgotten*
- **Team:** The Final Countdown, Palestine Polytechnic University (PPU), Hebron:
  Islam Akram Salem Jaradat, Malak Emad Jawdat El-Masri, Mostafa Wisam Al-Natsheh,
  Osama Nabeel Salah Abu Al-Halaweh, Nisreen Mohammad Khader Al-Ajlouni.

This is not an official NASA website. Use of NASA images does not imply NASA endorsement.

## NASA data used
- NASA Space Science Data Coordinated Archive (NSSDCA): mission facts and final resting places.
- NASA Science and NASA JPL mission pages: every story and quiz fact is checked against the page linked for that robot
  (listed on each robot's page under "For teachers and parents" and in the site's About page).
- NASA Image and Video Library (images.nasa.gov): all photos and the one video clip used on the site and in the videos.
- Lunar Reconnaissance Orbiter Camera (NASA/GSFC/Arizona State University): Apollo 15 rover tracks seen from orbit.

## Image and video credits
Every picture is a real NASA image, credited on screen in the videos and listed with its NASA ID, title and credit line in
[`docs/data/credits.json`](docs/data/credits.json) (also shown in the site's About page). Pictures that are artist's concepts
made by NASA are labeled that way.

## Tools and licenses
| What | Used for | License |
|---|---|---|
| HTML, CSS, JavaScript (no libraries) | the website | our code |
| Fredoka, Nunito, Baloo Bhaijaan 2 (Google Fonts, self-hosted) | text | SIL Open Font License 1.1 |
| Remotion + FFmpeg | making the story videos | Remotion license (remotion.dev/license), FFmpeg LGPL/GPL |
| Piper text-to-speech, voice `en_US-ljspeech-high` | English narration | Piper: MIT; LJSpeech dataset: public domain |
| GitHub Pages | hosting | free static hosting |

No music is used. NASA images follow NASA's media usage guidelines.

## Use of AI
We used Claude (Anthropic), an AI assistant, to help write and debug the code, split the stories into video scripts,
draft the Arabic translation and these texts, and build the videos and design. The team chose the robots and the story
format, checked every fact against the NASA sources listed above, and reviewed all text.
All pictures are real NASA images; no AI-generated images are used.

## Folders
| folder | what |
|---|---|
| `docs/` | the website (GitHub Pages serves this folder). `data/robots.json` holds every text (EN + AR) for the site **and** the videos. |
| `video/` | Remotion project that turns a robot's script + NASA images into its story video. |
| `media/` | `credits.json` (NASA ID, title, credit line for every image); raw downloads are not in git. |
| `voice/` | place for the team's own recordings, one WAV per sentence (not used now). |
| `demo/` | local server and browser checks. |

## Run the site locally
```
cd demo
node serve.mjs
```
Open http://localhost:8080. (Opening `docs/index.html` by double-click will not work, because the site loads its data with `fetch`.)

## Build a robot's video
```
cd video
npm install
node scripts/fetch-images.mjs <NASA IDs...>   # downloads the pictures into video/public/img (not in git)
node scripts/build-robot.mjs opp              # EN + AR videos, subtitles, posters → docs/
```
Needs `ffmpeg` on PATH and Piper in `tts/piper/` (not in git; see the Piper releases page).
Edit the look of a video in `video/src/shots/<id>.jsx`; preview with `npx remotion studio src/index.jsx`.
