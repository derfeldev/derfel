# DERFEL

[derfel.dev](https://derfel.dev) — DERFEL's open-source solutions, part of the [DIMOV](https://www.dimov.xyz) ecosystem.

A small static site: no build step, no framework, no dependencies. Plain HTML, CSS and a couple of edge functions, deployed on [Cloudflare Pages](https://pages.cloudflare.com/).

## Structure

```
index.html            the site
styles/                style.scss (source) + compiled style.css
images/                brand mark, favicons, OG image, PWA icons
functions/_middleware.js   redirects derfel.pages.dev → derfel.dev
_headers               security headers + CORS for the Matrix well-known files
.well-known/matrix/    Matrix homeserver federation delegation (client/server/support)
site.webmanifest       PWA manifest for "Add to Home Screen"
```

## Brand

- Mark: three vertical axes, a looping curve, a pulsing core node — `images/derfel-mark.svg`
- Type: [Geist](https://vercel.com/font) for text, [JetBrains Mono](https://www.jetbrains.com/lp/mono/) for the wordmark
- Light and dark themes follow `prefers-color-scheme` automatically, no JS — the SVG mark and favicon carry their own embedded dark-mode styles so they theme correctly even loaded through `<img>`

## Local development

No build tooling needed — open `index.html` directly, or serve the directory with anything static:

```bash
python3 -m http.server 8000
```

If you edit `styles/style.scss`, recompile with [Dart Sass](https://sass-lang.com/dart-sass/):

```bash
sass styles/style.scss styles/style.css
```

## License

[MIT](LICENSE)
