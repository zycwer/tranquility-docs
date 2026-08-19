---
sidebar_position: 12
---

# Skills Display

Display skills in groups on the homepage. A skill with a `level` (0-100) is rendered as a **proficiency bar**; without `level`, it is shown as a **tag**.

## Configuration

```yml
skills:
  enable: true
  title: Skills
  groups:
    - name: Frontend
      items:
        - name: JavaScript
          level: 85      # 0-100 proficiency, rendered as a bar
        - name: CSS
          level: 70
    - name: Backend
      items:
        - name: Node.js
          level: 60
    - name: Tools
      items:
        - name: Git      # no level — rendered as a tag
        - name: Docker
```

## Options

| Field | Description |
| --- | --- |
| `skills.enable` | Enable the skills section |
| `skills.title` | Section title |
| `groups` | Array of skill groups |
| `groups[].name` | Group name |
| `groups[].items` | Skills in the group, each with `name` and optional `level` |
| `items[].level` | Proficiency from 0 to 100; omitted or out-of-range values fall back to tag display |

## Notes

- Bars animate over 400ms and respect the global `prefers-reduced-motion` degradation
- Groups adapt to multiple columns based on screen width (single column on mobile)
- Bars carry `aria-label` so screen readers announce "skill name + proficiency"
