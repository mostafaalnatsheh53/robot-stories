// List the downloadable files (and sizes) of NASA library videos found by a search query.
//   node scripts/nasa-video-info.mjs "ingenuity first video" 2
const [q, n = '3'] = process.argv.slice(2);
const s = await (await fetch(`https://images-api.nasa.gov/search?media_type=video&q=${encodeURIComponent(q)}`)).json();
for (const it of s.collection.items.slice(0, +n)) {
  const d = it.data[0];
  console.log(`== ${d.nasa_id}\n   ${d.title} | ${d.center} | ${d.date_created.slice(0, 10)}\n   ${(d.description || '').slice(0, 400).replace(/\s+/g, ' ')}`);
  const a = await (await fetch(`https://images-api.nasa.gov/asset/${encodeURIComponent(d.nasa_id)}`)).json();
  for (const {href} of a.collection.items) {
    if (!/\.(mp4|mov)$/i.test(href)) continue;
    const url = href.replace(/^http:/, 'https:').replace(/ /g, '%20');
    const h = await fetch(url, {method: 'HEAD'});
    console.log(`   ${(+(h.headers.get('content-length') || 0) / 1e6).toFixed(0)} MB  ${url}`);
  }
}
