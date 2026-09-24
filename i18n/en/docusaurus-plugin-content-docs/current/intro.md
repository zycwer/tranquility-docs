---
sidebar_position: 1
---

# Introduction

Tranquility is a Hexo theme designed for personal homepages and multi-discipline bloggers. Guided by the design philosophy of "tranquility and distance" (宁静致远), it focuses on personal branding and clear domain boundaries across blog content.

## Design Philosophy at a Glance

Unlike most Hexo themes, Tranquility's **homepage shows no article list** — instead it displays identity-focused modules like About, Timeline, Projects, and Skills. The concept of "**Subpage**" replaces "Category": each subpage maps to a broad discipline and gets a top-level navbar entry; within a subpage, posts are aggregated by tags.

This design serves two needs: a **homepage that showcases personal identity**, and **clear domain boundaries** for multi-discipline content. See [Design Philosophy](./design.md) for details.

## Key Features

**Personal homepage**

- Identity-focused homepage: [About](./configuration/basic/about.md), [Timeline](./configuration/basic/timeline.md), [Projects](./configuration/basic/projects.md), [Skills](./configuration/basic/skills.md)
- Supports a [pure homepage mode](./configuration/basic/homepage.md) (no articles, aggregates external blog RSS)
- ["Subpage" design](./configuration/basic/subpage.md) for multi-discipline writing
- [Recent Updates](./configuration/basic/recent-updates.md) cards aggregating external blog RSS at build time — stable loading in mainland China
- [Announcement banner](./configuration/basic/announcement.md), site uptime counter, [Hitokoto slogan](./configuration/basic/slogan.md), [reward](./configuration/basic/reward.md)

**Writing**

- [Post cover](./configuration/writing/post-cover.md), [TOC](./configuration/writing/post-toc.md), [sticky posts](./configuration/writing/post-pin.md), [excerpt](./configuration/writing/post-excerpt.md)
- [Related posts](./configuration/writing/related-post.md), [tag cloud](./configuration/writing/tagcloud.md), [code highlighting](./configuration/writing/code-highlight.md)
- [Math formulas](./configuration/writing/math.md) (MathJax), [Mermaid diagrams](./configuration/writing/mermaid.md)

**SEO & discoverability**

- [Open Graph](./configuration/seo/open-graph.md) / Twitter Card social cards, [JSON-LD](./configuration/seo/json-ld.md) structured data
- [Sitemap](./configuration/seo/sitemap.md), [robots.txt](./configuration/seo/robots.md), [RSS auto-discovery](./configuration/seo/rss.md)
- [Search](./configuration/seo/search.md): local search with no external service, optional Algolia DocSearch

**Performance / experience / security**

- [Dark mode](./configuration/experience/dark-mode.md) with four strategies (light/dark/scheduled/follow-browser)
- [PWA](./configuration/experience/pwa.md) offline access, [content-fingerprinted](./configuration/experience/fingerprint.md) asset caching, [font subsetting](./configuration/experience/font.md)
- [Back-to-top button](./configuration/experience/accessibility.md), `prefers-reduced-motion` accessibility degradation, lazy image loading, responsive across desktop/tablet/mobile
- [CSP security policy](./configuration/experience/security.md), build-time URL validation, XSS injection protection

## Demo Sites

- [Tranquility Demo](https://zycwer.github.io/hexo-theme-tranquility/) (full feature showcase, rebuilt automatically on every commit)
- [Tranquility](https://theme.hozen.site/tranquility/) (original theme demo)
- [Hozen's Homepage](https://www.hozen.site)

## Fork Notice

This repository is a fork of [hooozen/hexo-theme-tranquility](https://github.com/hooozen/hexo-theme-tranquility). The original repository was archived in June 2026 and is no longer maintained. This fork continues maintenance, adding features and fixing bugs on top of the original, including: Hitokoto slogan, article-driven timeline, Hexo native about page, build-time RSS-aggregated "Recent Updates", runtime dark mode, Open Graph / JSON-LD / sitemap / robots.txt / RSS auto-discovery, PWA, lazy image loading, back-to-top button, accessibility degradation, font loading optimization, security hardening (XSS / CSP / injection protection), projects showcase, skills display, announcement banner, site uptime counter, and more.

See the [Changelog](./changelog.md) and [Releases](https://github.com/zycwer/hexo-theme-tranquility/releases) for the full version history.

## Next Steps

- [Install the theme](./installation.md) — up and running with npm in a minute
- [Configuration](./configuration/basic/homepage.md) — personalize your site
- [Design Philosophy](./design.md) — understand the "Subpage" and "Tag" split
