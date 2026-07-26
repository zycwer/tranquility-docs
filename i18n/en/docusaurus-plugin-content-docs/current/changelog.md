---
sidebar_position: 10
---

# Changelog

This page summarizes the per-version changes since the fork (v1.4.0 ~ v1.6.1). For the full diff between versions, see the [GitHub Releases](https://github.com/zycwer/hexo-theme-tranquility/releases) page.

## v1.6.1 — Robustness Fixes

Released 2026-07-26. Four fixes:

- **RSS auto-discovery config read error** (functional bug): `layout.njk` incorrectly read `theme.feed` to decide RSS auto-discovery, but `hexo-generator-feed`'s config lives in the site `_config.yml` (`config.feed`). For users who installed that plugin, the RSS auto-discovery branch never triggered and fell back to the `recent_updates.rss_url` branch. Now reads `config.feed`.
- **JSON-LD image protocol-relative URL inconsistency**: JSON-LD `Article.image` only checked URLs starting with `http`, missing `//`-prefixed protocol-relative URLs, inconsistent with the `og:image` logic in the same file. Added the `indexOf('//') == 0` branch.
- **Recent Updates carousel arrows missing null checks**: `recent.js` called `addEventListener` directly on `querySelector('.recent-updates__arrow--prev/next')` results; template render errors or missing elements would throw `TypeError`. Extracted variables and added null checks with early return.
- **Search no-result branch missing early return**: `renderSearchResult` in `search.js` did not exit after setting `innerHTML` in the "no results" case, continuing to `appendChild` an empty fragment (redundant logic, no side effect but non-standard). Added `return`.

Full Changelog: [v1.6.0...v1.6.1](https://github.com/zycwer/hexo-theme-tranquility/compare/v1.6.0...v1.6.1)

## v1.6.0 — Accessibility / Performance / Experience

Released 2026-07-22.

### New features (5)

- **Back-to-top button**: fades in at the bottom-right after scrolling past one viewport height; click smoothly scrolls back to top. Scroll listening throttled with `requestAnimationFrame`; degrades to instant positioning under `prefers-reduced-motion`.
- **prefers-reduced-motion accessibility degradation**: respects the OS "reduce motion" preference — global CSS animation/transition durations compressed to `0.01ms`, HeartCurve draws a single static frame, back-to-top uses instant positioning.
- **RSS auto-discovery**: injects `<link rel="alternate" type="application/rss+xml">` into every page `<head>` so browsers and RSS readers can auto-discover the feed.
- **robots.txt auto-generation**: generates `robots.txt` at build time — allows crawlers full-site access, blocks CSS/JS/font directories, declares the sitemap URL.
- **Font loading optimization**: `font-display: swap` to reduce FOUT + `<link rel="preload">` high-priority preload (MIME mapped dynamically for woff2/woff/ttf).

### Removed

- **Gitalk comments**: the Gitalk comments feature built into the original theme has been removed (the original repo is archived, Gitalk is unmaintained and depends on GitHub OAuth). For comments, we recommend [giscus](https://giscus.app/) or [Waline](https://waline.js.org/).

### Fixes (8)

- HeartCurve was completely blank under `prefers-reduced-motion` (now draws a single static frame).
- Back-to-top button did not appear on page refresh when already scrolled (added initial visibility check).
- `font.njk` preload type hardcoded as `font/ttf` (now dynamically mapped).
- `robots.js` URL concatenation could produce double slashes (normalize trailing slash of `config.url`).
- `og:locale` used `config.language` directly (`zh-cn` → `zh_CN` underscore conversion).
- `post.njk` `mermaid.run()` had no legacy fallback (added `mermaid.init()` for 9.x compatibility).
- `theme.js` localStorage privacy-mode exception fallback + `aria-pressed`.
- `_nunjucks.js` disables cache in server mode for easier hot-reload.

### Other

- Removed unused Stylus variables and mixins.
- `scripts/index.js` explicitly registers stylus/lazy-img/robots submodules.
- README / README_EN rewritten: added 5 feature doc sections, removed Gitalk description, updated fork notice.

Full Changelog: [v1.5.2...v1.6.0](https://github.com/zycwer/hexo-theme-tranquility/compare/v1.5.2...v1.6.0)

## v1.5.2 — Security Hardening and Robustness

Released 2026-07-22. This release focuses on **security hardening (XSS fixes)**, **functional defect fixes**, **error handling improvements**, and **SEO/spec compliance**, fixing 16 issues across 18 files.

### Security fixes (XSS / injection protection)

| File | Issue | Fix |
| --- | --- | --- |
| `recent-updates.njk` | RSS external content (title/excerpt/date/link) was not escaped — XSS risk | Added `\| escape` to all RSS fields |
| `Timeline.njk` | innerHTML concatenation of post data (title/path/date/icon) — injectable | Switched to DOM API (createElement + textContent) |
| `Timeline.njk` | `{{ data \| dump }}` did not escape `</script>`, breaking script context | After dump, replace `</` → `<\/` |
| `search.js` | Search excerpts written via innerHTML — `< > &` parsed as tags | Escape HTML before writing, then highlight keywords |
| `htmlGenerator.js` | Related-post list dynamic content (title/path/img/excerpt/date) not escaped | Added `escapeHtml()` for unified escaping |

### Functional defects

| File | Issue | Fix |
| --- | --- | --- |
| `category.njk` | `{% set fancy %}` outside `{% extends %}` — fancy tag cloud **never worked** | Removed set; use `theme.tagcloud.fancy` directly |
| `category.njk` | tagcanvas config `textColour: null` duplicated; `fadIn` typo (should be `fadeIn`) — fade-in never worked | Removed duplicate; fixed typo |
| `subpage.js` | `posts.data.sort()` mutated Warehouse Query original array — data pollution | Use `toArray()` to sort a copy |
| `tagcloud.js` | Directly mutated the passed config object — polluted original theme config | Use `Object.assign()` to create a copy |
| `related-post.njk` | Class name `realated__body` typo (should be `related__body`) | Fixed typo |

### Error handling / robustness

| File | Issue | Fix |
| --- | --- | --- |
| `search.js` | fetch had no `res.ok` check or `.catch()` — silent failure on network errors | Added `res.ok` check + `.catch()` error log |
| `search.js` | Regex `d` flag (hasIndices) poor compatibility (Safari < 16.4) — search completely broken | Removed `d` flag; use `match.index + match[0].length` |
| `copy-code.js` | Sync `try/catch` cannot catch async `navigator.clipboard.writeText()` — showed "copied" on failure | Switched to `async/await` |
| `HeartCurve.njk` | Constructor errors uncaught, aborted subsequent scripts; hover listeners accumulated; console.log leftovers | Added try-catch; `hoverBound` flag prevents duplicate binding; removed console.log |
| `recent.js` | Global keydown listener interfered with arrow keys in input fields | Check whether target is INPUT/TEXTAREA/contentEditable |
| `font.js` | Destructuring crashed on missing config fields; `undefined.map` crashed in `getSubText`; `console.log` instead of `hexo.log` | Added config validation + defensive `\|\|` fallbacks; use `hexo.log.info` |
| `recent.js` (generator) | `fetchText` recursive redirect with no limit (infinite redirects → stack overflow); response stream missing `error` listener | Added `maxRedirects` limit (default 5) + `res.on('error')` |
| `filters/stylus.js` + `lazy-img.js` | Non-standard registration (executed at module load, depended on global `hexo`) | Changed to `module.exports = hexo => {}` standard form |

### SEO / spec improvements

| File | Issue | Fix |
| --- | --- | --- |
| `layout.njk` | Missing `<link rel="canonical">` — affects search engine deduplication | Added canonical link |
| `layout.njk` | `<html lang="zh-cn">` hardcoded — unsuitable for multilingual sites | Use `{{ config.language or 'zh-cn' }}` |
| `layout.njk` | `mask-icon` color referenced non-existent `theme.android_chrome_color` — always empty | Fall back to `theme.pwa.theme_color` |
| `group-link.njk` | `width="20px"` / `height="20px"` misused units (HTML attributes should be unitless integers); float division | Removed px; use `round(0, 'ceil')` |
| `reward.njk` | SVG `width/height` attributes misused px units | Removed px |
| `category.njk` | `window.onload =` overwrote other load handlers; DEBUG text rendered directly to visitors | Use `addEventListener`; friendlier copy |

Full Changelog: [v1.5.1...v1.5.2](https://github.com/zycwer/hexo-theme-tranquility/compare/v1.5.1...v1.5.2)

## v1.5.1 — Performance Optimization and Bug Fixes

Released 2026-07-19. Includes routine maintenance performance optimization and 6 functional defect fixes. Recommended for all v1.5.0 users.

### Performance optimization

#### Runtime

- **`toc.js` scroll throttling**: `scroll` / `resize` events now use `requestAnimationFrame` throttling + `{ passive: true }` listeners, avoiding multiple reflows per frame.
- **CSS `transition: all` → specific properties**: 8 occurrences of `transition: all` replaced with specific properties (`background` / `color` / `transform` / `opacity`), avoiding unnecessary layout / paint.

#### Build

- **Nunjucks template caching**: `noCache: true` → `false`; templates are no longer recompiled within a single build (measured: 51-file build dropped from 533ms to 399ms).

#### Resource loading

- **`preconnect`**: adds `preconnect` for `v1.hitokoto.cn` / `hm.baidu.com` on demand.
- **SVG `width`/`height`**: filled in `width`/`height` attributes for `normal.svg` and Timeline dynamic icons to prevent CLS (Cumulative Layout Shift).

#### Incidental potential-bug fixes

- `normal.styl` removed duplicate `@import '_variables'`.
- Fixed two variable typos: `$whitesoke-light` → `$whitesmoke-light`, `$blak-lighter` → `$black-lighter` (the original variables were undefined, causing table odd-row background and figcaption color to silently fall back to defaults).

### Functional defect fixes (6)

1. **`toc.js` completely broken (severe)** — Symptom: post TOC scroll positioning never worked. Root cause: selectors `#toc` / `#postBody` did not exist in the template (actual: `.post-toc` / `.post-content__body`); all element lookups returned `null` and the entire IIFE returned early. Also `post.njk` never loaded `toc.js`. Fix: switched to class selectors + `.toc-outer` anchor, and load the script in `post.njk` based on `page.toc`.
2. **`HeartCurve.njk` syntax error broke the entire script** — Symptom: homepage heart curve animation didn't work. Root cause: `mobileAdjust(window.matchMedia("(hover:none"))` had mismatched parentheses; the browser threw a syntax error and the entire `<script>` failed. Fix: closed parentheses; also fixed implicit globals in `r = 2 * a * ...` (throws in strict mode); replaced deprecated `addListener` with `addEventListener('change', ...)`; added null-safe check for missing `#wall-main`.
3. **`search.js` close logic and highlight bugs** — `closeSearchDialog` set `overflow = 'inherit'` (should be `''`); `display = 'None'` was wrong case (should be `'none'`); `trimeContent` reassigned `content` inside `forEach`, causing multi-keyword highlight corruption on the next iteration; `new RegExp` threw on regex metacharacters (e.g. `( ) *`) — added escaping.
4. **`post.njk` image attributes and links** — post cover `<img width="auto" height="auto">` (HTML attributes must be numeric) — removed (controlled by CSS), added `loading="lazy"` `decoding="async"`; "back to top" `href="{{ page.link }}#"` output `"#"` when `page.link` undefined (previously empty string + `#`) — changed to `"#"`.
5. **`foot.njk` repo link** — "Tranquility" link pointed to the archived original repo `hooozen/hexo-theme-tranquility` — changed to the fork repo `zycwer/hexo-theme-tranquility`.
6. **`category.styl` `.post-title-pined` invisible in dark mode** — hardcoded color `rgb(75, 5, 5)` with `border: 1px solid` (no color) was invisible in dark mode — switched to `var(--c-accent)`.

Full Changelog: [v1.5.0...v1.5.1](https://github.com/zycwer/hexo-theme-tranquility/compare/v1.5.0...v1.5.1)

## v1.5.0 — Modernization Enhanced

Released 2026-07-18. Focused on **site infrastructure** and **user experience** modernization — 6 out-of-the-box features with no extra dependencies.

### New features

1. **Dark Mode** — runtime dark mode built on CSS variables (**no rebuild needed to switch**), four strategies (`light` / `dark` / `auto` / `time`). Navbar ☾/☀ toggle persisted to `localStorage`; inline sync script in head sets `data-theme` before CSS loads to prevent FOUC; manual override takes precedence; full-site adaptation including code highlight dual themes (GitHub Light / GitHub Dark).
2. **Open Graph & Twitter Card** — auto-injects social share meta tags on every page (`og:type`, `og:title`, `og:description`, `og:url`, `og:site_name`, `og:image`, `twitter:card`). Cover priority: post `cover` → homepage `index.photo` → `logo`; auto-converts to absolute URLs.
3. **JSON-LD structured data** — auto-injects [schema.org](https://schema.org/) JSON-LD by page type: about page → `Person`, post page → `Article` (with `datePublished` / `dateModified` / `author` / `image` / `keywords`), other pages → `WebSite`. All string fields JSON-escaped.
4. **Sitemap** — built-in `sitemap.xml` generator: homepage (priority=1.0, daily), all posts (priority=0.8, weekly, with lastmod), all pages (priority=0.6, monthly), category/tag archives (priority=0.4, weekly). Uses root URL `/` to avoid duplicating `/index.html`.
5. **PWA (installable app)** — optional `manifest.json` + Service Worker (`sw.js`); auto-generates icons array (including 192×192 and 512×512 for Chrome install prompt, plus `maskable` purpose); Service Worker strategy: static assets cache-first, HTML network-first with cache fallback; auto-registered (production / HTTPS / localhost only) + `<meta name="theme-color">`.
6. **Image lazy loading** — `after_post_render` filter auto-injects `loading="lazy"` and `decoding="async"` into post `<img>` tags; native browser support, no extra JS; existing `loading` attributes are not overwritten.

Full Changelog: [v1.4.0...v1.5.0](https://github.com/zycwer/hexo-theme-tranquility/compare/v1.4.0...v1.5.0)

## v1.4.0 — Personalization Enhanced

Released 2026-07-16. First independent release after forking from upstream 1.3.6. Added multiple personalization features and slimmed down the code.

### New features

- **Hitokoto Slogan toggle**: enables the Hitokoto API at the slogan position, fetched client-side in real time with an SEO-friendly static fallback. Config: `slogan_hitokoto: true`.
- **Article-driven timeline**: events are no longer hardcoded in the config; instead driven by the post front-matter `timeline: event` field. The homepage shows the event title; click to open the post for details.
- **Hexo native about page**: implemented via `source/about/index.md` + `layout: about` template, no longer dependent on the config file. Provides the [about.njk](https://github.com/zycwer/hexo-theme-tranquility/blob/main/layout/about.njk) page template.
- **Build-time RSS Recent Updates**: fetches external blog RSS at build time to generate card data — SEO-friendly, stable loading in mainland China, no CORS issues.

### Removed

- **CV feature**: duplicated by the about page; deleted.
- **Timeline config events**: `timeline.events` config deprecated; now driven by articles.

### Code simplification (no functional impact)

The `scripts` directory dropped from 506 lines to 389 lines (**-23%**):

| File | Change | Main edits |
| --- | --- | --- |
| `search.js` | 102→41 | Extracted `pluck()` helper |
| `recent.js` | 156→109 | Merged `parseRss`/`parseAtom` into `parseFeed` |
| `subpage.js` | 95→68 | Extracted `sortBySticky`, `Set`+`forEach` |
| `font.js` | 68→61 | Removed unused `_utils` dependency |
| `htmlGenerator.js` | 34→15 | Rewrote with template strings |
| `tagcloud.js` | 19→9 | Fixed `<canvas>` closing-tag bug |
| `_timeline.js` | 29→27 | Inlined function |
| `_utils.js` | deleted | `getObjValues` had no callers |

### Breaking changes

Before upgrading, note:

1. Timeline events are now driven by post front-matter; the original `timeline.events` config no longer takes effect.
2. The about page now uses Hexo's native page; the original `about` config block is no longer used.
3. The CV feature has been removed.

### Fixes

- Fixed Serif/Sans font interleaving in Recent Updates card titles.
- Fixed the `<canvas>` closing-tag error in `tagcloud.js`.

Full Changelog: [fork (1.3.6)...v1.4.0](https://github.com/zycwer/hexo-theme-tranquility/commits/v1.4.0)
