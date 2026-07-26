---
sidebar_position: 9
---

# Versioning

This theme follows [Semantic Versioning](https://semver.org/) (SemVer). The version number is formatted as `MAJOR.MINOR.PATCH`, where each segment has a specific meaning and upgrade impact:

| Segment | Name | When it increments | Upgrade impact |
| --- | --- | --- | --- |
| `MAJOR` | Major | **Incompatible breaking changes** (API / config / template structure overhaul) | Requires manual migration of config or templates — **not a smooth upgrade** |
| `MINOR` | Minor | **Backward-compatible new features** or non-breaking adjustments | `git pull`, then review the release notes and check the config |
| `PATCH` | Patch | **Bug fixes / security hardening / performance optimizations** only, no new features | Upgrade directly, no config changes needed |

## Naming rules

- Version numbers are prefixed with `v` (e.g. `v1.6.1`), consistent with the Git tag.
- Each release is accompanied by full release notes on [GitHub Releases](https://github.com/zycwer/hexo-theme-tranquility/releases).
- When a release **includes both** new features and bug fixes, only `MINOR` is incremented (features take precedence; fixes are bundled).
- When a release **contains only** bug fixes / security hardening, `PATCH` is incremented.
- No separate pre-release versions (alpha / beta / rc) are published. All releases are considered stable.

## Historical versions

The table below explains how each segment was decided, based on the actual release history from v1.4.0 to v1.6.1:

| Version | Type | Incremented segment | Rationale |
| --- | --- | --- | --- |
| `v1.4.0` | Theme refactor | `MINOR` | Added Hitokoto toggle, article-driven timeline, Hexo-native about page, RSS recent updates; removed the CV feature. Although it contained breaking config changes, it was the first independent release after the fork, so `MAJOR` was not bumped. |
| `v1.5.0` | SEO & discoverability | `MINOR` | Added 6 features (dark mode / Open Graph / JSON-LD / sitemap / PWA / image lazy loading), all backward-compatible. |
| `v1.5.1` | Performance & bug fixes | `PATCH` | Scroll throttling, template cache optimization, 6 functional bug fixes, no new features. |
| `v1.5.2` | Security hardening | `PATCH` | 16 XSS / injection protection, robustness, and SEO compliance fixes, no new features. |
| `v1.6.0` | New features & Gitalk removal | `MINOR` | Added 5 features (back-to-top / reduced-motion / RSS auto-discovery / robots.txt / font loading); removed Gitalk comments. |
| `v1.6.1` | Robustness fixes | `PATCH` | 4 robustness fixes (RSS auto-discovery, JSON-LD image, carousel arrows, search no-result branch), no new features. |

## Upgrade recommendations

- **PATCH releases (e.g. `v1.6.0` → `v1.6.1`)**: just `git pull`, no config changes required.
- **MINOR releases (e.g. `v1.5.2` → `v1.6.0`)**: after `git pull`, read the release notes and compare your config against `_config-template.yml` to check for new options.
- **MAJOR releases**: read the full release notes and the [Upgrade Guide](./upgrade.md) carefully — manual migration of config or custom templates may be required.

## Differences from strict SemVer

As a Hexo theme (frontend templates + scripts) rather than a traditional library / API, this theme makes the following practical adjustments to SemVer:

1. **`MAJOR` is rarely incremented**: breaking changes to templates or config are clearly marked in the release notes but are still released as `MINOR` to avoid the psychological burden of frequent major version bumps. The main criterion for a `MAJOR` bump is "whether the user's config file can be smoothly migrated."
2. **No alpha / beta / rc distinction**: all releases are considered stable. Tags are only created after complete self-testing.
3. **Deprecated config options do not immediately trigger `MAJOR`**: deprecated options are kept for a compatibility window of 1–2 `MINOR` releases (during which a deprecation warning is logged) and then removed — the removal is highlighted in the release notes.

> For the full version history summary, see the [Changelog](./changelog.md).
