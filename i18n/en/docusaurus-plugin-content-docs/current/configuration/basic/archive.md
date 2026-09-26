---
sidebar_position: 14
---

# Archive Page

The theme ships a timeline-style archive page (`/archives/`) that groups all posts by **year** — ideal for readers who want to browse your content chronologically.

![Archive page: timeline-style post list grouped by year](/img/archive.png)

## Configuration

The archive page is provided by Hexo's native `archive` generator (no extra plugin needed); the theme renders it. Whether to show a navbar entry is controlled by `nav.archive`:

```yml
nav:
  archive: true # show an "Archive" entry in the navbar, pointing to /archives/
```

Even with the navbar entry disabled, the page still exists and can be linked manually (e.g. from the footer).

## Page Structure

- "Archive" title and total post count at the top
- Posts grouped by year, with a divider line extending from each year heading
- One post per line: `MM-DD date + post title`, with a timeline on the left (vertical line + dot)
- Hovering highlights the timeline and dot in the theme color
- Automatic pagination when there are many posts

## Notes

- The archive URL is determined by Hexo's `archive_dir` site config (default `archives`)
- Complements "Subpages": subpages aggregate by **domain**, the archive aggregates by **time**
- Adapts to both light and dark modes
