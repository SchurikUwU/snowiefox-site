# Schurik's Cabin (snowiefox.com)

Static site. Everything except `src/` and this README goes on the host (Netlify / Cloudflare Pages / GitHub Pages), then point snowiefox.com at it.

## No rebuild needed
- `config.js`: name, tagline, status, links, music, sketchbook, the start screen notice and every other word on the site. Empty url hides a link (toyhouse is still empty).
- Page title and share text: top of `index.html`.
- Version: `<meta name="version">` in `index.html`.
- Link preview pic: `assets/og.jpg` (1200x630). Tab icon: `favicon.svg`.
- Drawings go in `assets/drawings/`, mp3s in `assets/music/`, then list them in `config.js`.

## Local test
Models need http, so opening index.html directly won't work:
`python -m http.server 8000` then http://localhost:8000

`?lite` links page, `?low` phone quality, `?noao` no ambient occlusion, `?debug` test shortcuts (`__app`).

## Rebuild after changing src/main.js
`npm i three@0.169.0 esbuild`
`npx esbuild src/main.js --bundle --format=esm --minify --outfile=app.js`

## Credits (CC BY 4.0, also on the links page and `cat credits.txt`)
- Fox: PixelMannen (CC0), rig tomkranis (CC BY 4.0), glTF AsoboStudio + scurest (CC BY 4.0)
- Potted plant: Darmstadt Graphics Group (CC BY 4.0)
- Barn lamp, candle holder: Wayfair (CC BY 4.0)
- Boombox, lantern: Microsoft (CC0). Sheen chair: Wayfair (CC0). Teacup: Poly Haven (CC0)
- Wood and brick textures: three.js examples
- Fonts: Caveat, JetBrains Mono, Space Grotesk (SIL OFL, licenses in `assets/fonts/`)
- Tiger shark plush: fan model via The Models Resource (Changed Customs). Changed belongs to DragonSnow. Not CC licensed, model creator still unknown.
Other models via KhronosGroup/glTF-Sample-Assets, compressed for web (modified). License: https://creativecommons.org/licenses/by/4.0/
