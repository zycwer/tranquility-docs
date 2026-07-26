---
sidebar_position: 1
---

# Introduction

Tranquility is a Hexo theme designed for personal homepages and multi-discipline bloggers. It changes Hexo's default design logic to focus on personal branding and clear domain boundaries across blog content.

## Fork Notice

This repository is a fork of [hooozen/hexo-theme-tranquility](https://github.com/hooozen/hexo-theme-tranquility). The original repository was archived in June 2026 and is no longer maintained. This fork continues maintenance, adding features and fixing bugs on top of the original.

Major changes compared to the original repo:

- Hitokoto Slogan toggle
- Article-driven timeline (replaces config-defined events)
- Hexo native about page (replaces config-defined content)
- Build-time RSS-aggregated "Recent Updates" cards
- Runtime dark mode (CSS variables — no rebuild needed to switch)
- Open Graph / Twitter Card / JSON-LD structured data
- Sitemap (sitemap.xml), robots.txt, RSS auto-discovery
- PWA (manifest.json + Service Worker), lazy image loading
- Back-to-top button, `prefers-reduced-motion` accessibility degradation
- Font loading optimization (`font-display: swap` + preload)
- Code simplification (scripts directory -23%); removed the CV feature (duplicated by the about page)
- Security hardening (fixed XSS / `</script>` injection / localStorage fallback, etc.)
- Removed the deprecated Gitalk comments feature

See [Releases](https://github.com/zycwer/hexo-theme-tranquility/releases) for details.

## Version Evolution (v1.4.0 ~ v1.6.1)

Since the fork, the theme has iterated through the following versions:

| Version | Date | Theme |
| --- | --- | --- |
| v1.4.0 | 2026-07-16 | Personalization enhanced — first fork release: Hitokoto slogan, article-driven timeline, native about page, build-time RSS recent updates |
| v1.5.0 | 2026-07-18 | Modernization — runtime dark mode, Open Graph/Twitter Card, JSON-LD, sitemap, PWA, image lazy loading |
| v1.5.1 | 2026-07-19 | Performance optimization and bug fixes — TOC throttling, template caching, 6 defect fixes |
| v1.5.2 | 2026-07-22 | Security hardening and robustness — XSS fixes, functional defects, error handling, SEO improvements |
| v1.6.0 | 2026-07-22 | Accessibility / performance / experience — back-to-top button, prefers-reduced-motion, RSS auto-discovery, robots.txt, font loading optimization |
| v1.6.1 | 2026-07-26 | Robustness fixes — RSS auto-discovery config read, JSON-LD image URL, carousel null checks |

See the [Changelog](./changelog.md) for per-version details.

## Demo Sites

- [Tranquility](https://theme.hozen.site/tranquility/) (original theme demo)
- [Hozen's Homepage](https://www.hozen.site)

## Features

- Homepage-style layout focused on personal branding
- Supports a [pure homepage mode](./configuration/homepage.md) (no articles, aggregates external blog RSS)
- ["Subpage" design](./configuration/subpage.md) for multi-discipline writing
- [Recent Updates](./configuration/recent-updates.md) cards aggregating external blog RSS at build time — stable loading in mainland China
- [About page](./configuration/about.md) (Hexo native page) and [Timeline](./configuration/timeline.md) (article-driven, click to view details)
- [Hitokoto](./configuration/slogan.md) slogan that refreshes on every page load
- [Dark mode](./configuration/dark-mode.md) (light/dark/scheduled/follow-browser, one-click toggle in the navbar)
- [Open Graph](./configuration/open-graph.md) social cards, [JSON-LD](./configuration/json-ld.md) structured data, [sitemap](./configuration/sitemap.md), [robots.txt](./configuration/robots.md), [RSS auto-discovery](./configuration/rss.md), and [PWA](./configuration/pwa.md) support
- [Back-to-top button](./configuration/accessibility.md), [accessibility motion degradation](./configuration/accessibility.md), [font loading optimization](./configuration/font.md)
- Responsive across desktop, tablet, and mobile for comfortable reading
- Custom font extraction and subsetting, balancing aesthetics and performance
- [Related posts](./configuration/related-post.md), [math formulas](./configuration/math.md), [reward](./configuration/reward.md), [SEO](./configuration/others.md)
- and more
