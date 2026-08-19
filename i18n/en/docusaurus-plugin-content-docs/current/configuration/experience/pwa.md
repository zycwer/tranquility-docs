---
sidebar_position: 2
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
- `sw.js` uses a "network-first for HTML, stale-while-revalidate for static assets" strategy:
  - **HTML pages** prefer the network for freshness and cache successful responses; on network failure they fall back to cache, and when no cache exists, an auto-generated **offline page** (`offline.html`) is served.
  - **Static assets** (JS / CSS / images / fonts) return from cache instantly while refreshing the cache in the background — the latest version is served on the next visit.
  - **Precache**: the homepage, core stylesheet, and offline page are precached when the SW installs, making the site fully offline-capable after the first visit.
  - **Versioned cache**: cache names carry a version, so old caches are purged automatically after a new deployment — no mixed stale/fresh assets.
- The page automatically registers the Service Worker (only in production, HTTPS, or `localhost`) and sets `<meta name="theme-color">`. The SW is never registered under `hexo server`, keeping local development cache-free.

:::note
PWA Service Workers can only be registered under **HTTPS** (except `localhost`). GitHub Pages, Vercel, Netlify, Cloudflare Pages, and most modern hosting platforms provide HTTPS by default, so they work out of the box.
:::
