---
sidebar_position: 11
---

# Projects Showcase

Display project cards on the homepage — ideal for a personal site portfolio. Data is rendered statically **at build time** with no external requests.

## Configuration

```yml
projects:
  enable: true
  title: My Projects
  items:
    - name: Project Name
      description: A one-line description
      link: https://github.com/you/repo       # project homepage (optional)
      repo: https://github.com/you/repo       # repository link (optional, shown as ↗)
      tags:                                    # tech tags (optional)
        - JavaScript
        - Node.js
```

## Options

| Field | Description |
| --- | --- |
| `projects.enable` | Enable the projects section |
| `projects.title` | Section title |
| `items` | Array of projects |
| `items[].name` | Project name (required) |
| `items[].description` | Project description |
| `items[].link` | Project homepage link; the name is not clickable when omitted |
| `items[].repo` | Repository link, shown as ↗ in the top-right corner |
| `items[].tags` | Array of tech tags |

## Notes

- Cards adapt to multiple columns based on screen width (single column on mobile)
- External `link` / `repo` automatically get `target="_blank" rel="noopener noreferrer"`
- HTML in text fields is escaped — please use plain text
