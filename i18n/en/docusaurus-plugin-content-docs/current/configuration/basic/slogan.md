---
sidebar_position: 3
---

# Hitokoto Slogan

The `slogan` shown at the top of the homepage (e.g. "宁静致远" — "Tranquility Begets Distance"). When `slogan_hitokoto` is enabled, this spot will fetch from the [hitokoto.cn](https://v1.hitokoto.cn) API in the browser, displaying a random quote that may change on every refresh:

```yml
slogan: "宁静致远"        # static slogan, used as fallback when hitokoto fails / JS disabled
slogan_hitokoto: false   # enable to show a random hitokoto quote at the slogan position
```

## Notes

- The hitokoto content is fetched client-side from `https://v1.hitokoto.cn/`. At build time, the static `slogan` is still rendered into the HTML, so it's **SEO-friendly and visible even without JS or on fetch failure** (automatic fallback to the static slogan).
- 5-second timeout; failures fall back silently without affecting the rest of the page.
- When enabled, this position automatically switches to system Song serif fonts (not the extracted subset font) to avoid font interleaving caused by random characters not present in the subset.
