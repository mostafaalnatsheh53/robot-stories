// Fonts are stored in public/fonts (see scripts/fetch-fonts.mjs), so rendering needs no internet.
import {continueRender, delayRender, staticFile} from 'remotion';
import list from './fonts.json';

if (typeof document !== 'undefined') {
  const handle = delayRender('Loading local fonts');
  Promise.all(list.map(({family, weight, file, range}) => {
    const face = new FontFace(family, `url(${staticFile(`fonts/${file}`)}) format('woff2')`, {weight, unicodeRange: range || undefined});
    document.fonts.add(face);
    return face.load();
  })).then(() => continueRender(handle)).catch((e) => { console.error(e); continueRender(handle); });
}

export const fonts = (lang) =>
  lang === 'ar'
    ? {head: "'Baloo Bhaijaan 2'", body: "'Baloo Bhaijaan 2'"}
    : {head: 'Fredoka', body: 'Nunito'};
