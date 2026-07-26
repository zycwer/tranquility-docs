---
sidebar_position: 12
---

# PWA

The theme can generate the `manifest.json` and Service Worker (`sw.js`) required by Progressive Web Apps, enabling "Add to Home Screen", offline access, and static asset caching.

```yml
pwa:
  enable: false       # disabled by default; enable to generate manifest.json and sw.js
  name:               # full app name (defaults to site title if empty)
  short_name:         # short name under the home-screen icon (defaults to first 12 chars of name)
  description:        # app description
  display: standalone # standalone | fullscreen | minimal-ui | browser
  theme_color: "#fcfcfb"        # app theme color (matches the dark-mode light palette)
  background_color: "#fcfcfb"   # splash screen background color
```

## When enabled

- `manifest.json` generates its `icons` array from the `favicon` config (apple-touch-icon 180×180, favicon-32×32, svg).
- `sw.js` uses a "cache-first for static assets, network-first with cache fallback for HTML" strategy: JS/CSS/images/fonts are read from cache first; HTML pages prefer the network and fall back to cache on failure (so users can revisit pages they've already seen, even offline).
- The page automatically registers the Service Worker (only in production, HTTPS, or `localhost`) and sets `<meta name="theme-color">`.

:::note
PWA Service Workers can only be registered under **HTTPS** (except `localhost`). GitHub Pages, Vercel, Netlify, Cloudflare Pages, and most modern hosting platforms provide HTTPS by default, so they work out of the box.
:::
