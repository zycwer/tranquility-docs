---
sidebar_position: 28
---

# Accessibility

## Back-to-Top Button

The theme provides a "back to top" button in the bottom-right corner of every page: it fades in after scrolling past one viewport height, and smoothly scrolls back to the top on click.

- No configuration needed — enabled automatically.
- Scroll listening is throttled with `requestAnimationFrame` to avoid high-frequency callbacks affecting scroll performance.
- Click scrolling respects the accessibility setting below: when "reduce motion" is on, it uses instant positioning (`behavior: auto`) instead of smooth scrolling.

## Accessibility (prefers-reduced-motion)

The theme respects the OS "reduce motion" preference (`prefers-reduced-motion: reduce`), making it friendlier for users with vestibular sensitivity or motion sickness:

- Global degradation: all CSS animation and transition durations are compressed to `0.01ms`, and `scroll-behavior` is set to `auto`.
- Heart curve (HeartCurve): when this preference is detected, the `requestAnimationFrame` animation loop is skipped and only a single static frame is drawn.
- Back-to-top button: smooth scrolling degrades to instant positioning.

This behavior is automatic — no configuration needed. Enable "reduce motion" in your system settings to activate it.
