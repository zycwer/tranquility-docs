---
sidebar_position: 1
---

# Site Mode

Switch the overall site form via `homepage_mode`:

```yml
# blog    = default blog theme (navigation shows subpage/blog entries)
# landing = pure personal homepage mode (hides blog/subpage entries, focuses on about, timeline, and recent updates)
homepage_mode: blog
```

The `landing` mode suits the scenario of "this site has no articles; articles are hosted on a separate blog": the navigation no longer shows blog/subpage entries, and the homepage focuses on the personal intro (about block), recent updates (aggregated from an external blog RSS — see [Recent Updates](./recent-updates.md)), and timeline (see [Timeline](./timeline.md)). Best used together with [About page](./about.md) and [Recent Updates](./recent-updates.md).

:::note
`landing` mode only hides navigation entries. Existing article pages are still generated (just not linked). If you want to skip generating blog pages entirely, point `source` to an empty directory or remove `source/_posts` in your blog's root `_config.yml`.
:::
