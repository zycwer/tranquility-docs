---
sidebar_position: 4
---

# Custom Fonts

Some areas of the theme use third-party CJK fonts for design. Because CJK font files are large, the theme extracts and packages only the glyphs actually used into a subset font.

Toggle via the `zh_font` config option.

```yml
zh_font:
  enable: true
  fontName: sourceHanSerif
  type: woff # output format: woff (recommended, ~half the size of ttf) | ttf
  style:
    - normal
    - bold
```

| Field | Description |
| --- | --- |
| `zh_font.type` | Output format: `woff` (recommended, roughly half the size of `ttf`) or `ttf` |

You can replace the font files under the `_font/` directory with your own preferred fonts. After replacing a font, the generated font's content hash changes, so the `?v=` fingerprint on its URL updates automatically — visitors' browsers never serve a stale font.

## Font loading optimization

The theme optimizes loading of custom subset fonts to reduce FOUT (flash of unstyled text) and speed up text rendering:

- `font-display: swap`: system fonts render text first while the custom font loads, then seamlessly swap in — avoiding long blank periods.
- `<link rel="preload">`: the first font file is preloaded at high priority, fetched in parallel with CSS to shorten the critical rendering path.
- Font subsetting: only the glyphs actually used are packaged, dramatically reducing font size.

No configuration needed — applied automatically when `zh_font.enable: true` is set.
