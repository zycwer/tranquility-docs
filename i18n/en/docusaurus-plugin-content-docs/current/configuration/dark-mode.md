---
sidebar_position: 2
---

# Dark Mode

The theme ships with runtime dark mode (built on CSS variables — **no rebuild needed to switch**). Four strategies are supported, controlled by `color_mode`:

```yml
color_mode: light  # light | dark | auto | time
color_mode_time:   # only effective when color_mode: time
  start: 18        # dark starts (24h, inclusive)
  end: 6           # dark ends (24h, exclusive; cross-midnight supported, e.g. 18→6)
```

| Mode | Behavior |
| --- | --- |
| `light` | Always light (default) |
| `dark` | Always dark |
| `auto` | Follows the browser's `prefers-color-scheme`; reacts in real time when the system theme changes |
| `time` | Dark during the `color_mode_time.start` ~ `end` window; light otherwise |

## Manual toggle

A ☾/☀ toggle button sits on the right side of the navbar: clicking it instantly switches the theme and persists the choice to `localStorage` (`theme-override`). **Manual override takes precedence over the configured strategy.** Clearing browser storage reverts to the configured strategy.

## Implementation notes

- An inline synchronous script in the head sets `data-theme` before CSS loads, preventing FOUC (flash of unstyled content on switch).
- In `auto` mode, the script listens to `matchMedia('(prefers-color-scheme: dark)')` `change` events, so the theme follows system changes automatically (unless a manual override exists).
- All colors are defined as CSS variables in `source/css/_theme.styl`. `_variables.styl` maps Stylus variables to `var(--c-*)`, so existing styles respond to dark mode without per-rule changes.
