---
sidebar_position: 4
---

# Navigation

`nav` configures the navbar:

```yml
nav:
  sticky: false
  about: false   # whether to show an "About" entry in the navbar (page content from source/about/index.md)
  archive: false # whether to show an "Archive" entry in the navbar (points to /archives/)
```

## Options

| Field | Description |
| --- | --- |
| `nav.sticky` | Whether the navbar sticks to the top |
| `nav.about` | Whether to show an "About" entry pointing to `/about/`; page content comes from `source/about/index.md` |
| `nav.archive` | Whether to show an "Archive" entry pointing to `/archives/` |

## nav.sticky

When set to `true`, the navbar stays fixed at the top while scrolling — handy for jumping around long pages. When `false`, it scrolls with the page.

## nav.about

When set to `true`, the navbar shows an "About" entry linking to `/about/`. See [About page](./about.md) for details.

## nav.archive

When set to `true`, the navbar shows an "Archive" entry linking to the timeline-style archive page at `/archives/`. See [Archive page](./archive.md) for details.
