---
sidebar_position: 7
---

# Sakura Falling

A site-wide decorative animation: petals drift gently from the top of the page, floating above the content to add a touch of atmosphere.

![Sakura petals falling on the homepage](/img/sakura.png)

## Configuration

```yml
sakura:
  enable: true
  density: 16 # petals on screen; automatically halved on mobile
```

## Options

| Field | Description |
| --- | --- |
| `sakura.enable` | Enable the sakura animation |
| `sakura.density` | Number of petals on screen (default 16); automatically halved on mobile (< 768px) |

## Performance & Accessibility

The animation puts "non-interference" first:

- **Pure CSS with hardware acceleration**: animated only via `transform` / `opacity` — no reflow or repaint, scrolling and input stay smooth
- **Zero interaction blocking**: the petal layer is `pointer-events: none`; links, buttons and text selection work as usual
- **Accessibility degradation**: automatically disabled for visitors with `prefers-reduced-motion` enabled
- **Mobile reduction**: petal count is halved on small screens to balance visuals and battery

## Notes

- The petal layer sits above the content and below the navbar, active on every page
- Each petal gets randomized size, fall duration, sway amplitude, rotation and opacity for a natural look
- Visible in both light and dark modes
