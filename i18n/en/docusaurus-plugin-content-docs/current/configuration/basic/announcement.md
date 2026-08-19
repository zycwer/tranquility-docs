---
sidebar_position: 13
---

# Announcement Banner

Show a dismissible announcement bar below the navbar **site-wide** — great for site notices, article teasers, or events.

## Configuration

```yml
announcement:
  enable: true
  content: Welcome to my personal site    # announcement text (plain text)
  link: https://example.com/post/1        # optional "learn more" link
  link_text: Learn more                   # link text
```

## Options

| Field | Description |
| --- | --- |
| `announcement.enable` | Enable the banner |
| `announcement.content` | Announcement text, plain text (HTML is escaped) |
| `announcement.link` | Optional link; external links open in a new tab |
| `announcement.link_text` | Link text, defaults to "Learn more" |

## Behavior

- After a visitor clicks × to dismiss, the state is stored in their browser's `localStorage` — the banner won't show again on refresh or revisit
- When the announcement content (or link) changes, its fingerprint changes and the banner **automatically reappears** for all visitors
- No manual action needed — just edit the text

## Notes

- The banner appears on all pages (home, posts, subpages, etc.)
- It ships hidden and is revealed by JS, so visitors who dismissed it or have JS disabled never see a layout flash
