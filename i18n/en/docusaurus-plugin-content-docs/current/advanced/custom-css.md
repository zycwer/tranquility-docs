---
sidebar_position: 1
---

# Custom Styles

All theme colors are defined as CSS Custom Properties in `source/css/_theme.styl`. Dark mode works by toggling these variables. You can override them to customize the color scheme **without touching the theme source** — your customizations survive theme upgrades.

## Option 1: Override CSS variables (recommended)

Create a custom CSS file in your blog's `source/css/` directory:

```css
/* source/css/custom.css */
:root {
  /* Override the accent color: used by links, buttons, and emphasis */
  --c-accent: #c0392b;
  --c-accent-hover: #e74c3c;
  --c-accent-soft: #e17055;

  /* Override the page background */
  --c-bg: #faf9f6;
  --c-bg-card: #ffffff;
}

/* Override in dark mode */
[data-theme="dark"] {
  --c-accent: #e74c3c;
  --c-bg: #1a1a1a;
}
```

### Loading the custom CSS

Inject the file into the page head. The simplest way is to create `source/_data/custom-head.njk`:

```html
<!-- source/_data/custom-head.njk -->
<link rel="stylesheet" href="/css/custom.css">
```

> See [Inject Custom Head Code](./inject-head.md) for the full injection methods.

## Overridable variables

The main CSS variables defined in `source/css/_theme.styl`:

| Variable | Purpose | Default (light) |
| --- | --- | --- |
| `--c-bg` | Page / wall background | `#fcfcfb` |
| `--c-bg-soft` | Secondary background | `#eff2f3` |
| `--c-bg-card` | Card background | `#ffffff` |
| `--c-text` | Body text | `#555` |
| `--c-text-heading` | Heading text | `#222` |
| `--c-text-muted` | Muted text | `#888` |
| `--c-border` | Borders | `#eee` |
| `--c-link` | Links | `#555` |
| `--c-link-hover` | Link hover | `#222` |
| `--c-accent` | Accent color | `#2c5fa5` |
| `--c-accent-hover` | Accent hover | `#2472e7` |
| `--c-footer-bg` | Footer background | `#000` |
| `--c-code-bg` | Inline code background | `#f7f7f7` |

> For the full list, see `source/css/_theme.styl` in the theme directory. Light values are under `:root`, dark values under `[data-theme="dark"]`.

## Option 2: Override Stylus variables

Non-color Stylus variables (spacing, radius, font sizes) are defined in `source/css/_variables.styl`. To adjust them, create a Stylus file in your blog and override:

```stylus
/* Custom radius and spacing */
$radius-card = 12px
$gap-section = 32px
```

> Stylus variables are compiled at **build time** (requires `hexo generate`); CSS variables take effect at **runtime** (just refresh). This is why the theme uses CSS variables for dark mode — switching requires no rebuild.

## Option 3: Add custom style rules

Beyond overriding variables, you can write arbitrary CSS rules to override theme defaults:

```css
/* Larger post body font */
.post-content__body {
  font-size: 17px;
  line-height: 1.8;
}

/* Hide a module */
.recent-updates {
  display: none;
}
```

## Notes

- **Specificity**: Custom CSS loaded via `<link>` after theme styles will override defaults with equal specificity. If insufficient, use a more specific selector or `!important` (avoid overusing).
- **Dark mode sync**: If you override light colors, also override the dark counterparts under `[data-theme="dark"]`, otherwise dark mode may be unreadable. See [Dark Mode](../configuration/experience/dark-mode.md).
- **Upgrade safety**: Keep custom style files in your **blog root** `source/`, not inside `themes/tranquility/`, so `git pull` upgrades won't conflict.
