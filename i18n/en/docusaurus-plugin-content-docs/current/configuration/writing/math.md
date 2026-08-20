---
sidebar_position: 7
---

# Math Formulas

The theme offers two ways to enable LaTeX math formula support. Both require the following setup first:

- **Remove** Hexo's default markdown renderer `hexo-renderer-marked` and install `hexo-renderer-pandoc`. Remove any other markdown renderers as well!

  ```bash
  npm uninstall hexo-renderer-marked
  npm install hexo-renderer-pandoc
  ```

- Install pandoc from [pandoc.org](https://www.pandoc.org/).

## Method 1: Built-in LaTeX renderer

Use the theme's built-in LaTeX renderer. Enable `mathjax` in the config:

```yml
mathjax: true # load the LaTeX math library (from the jsDelivr CDN by default)
```

You can also pass a full script URL to override the default CDN (jsDelivr is unreachable in some networks such as mainland China direct connection, which leaves formulas stuck as raw `$...$` text):

```yml
# Local file (recommended: download tex-svg.js into source/vendors/ — zero external
# dependencies; the SVG output build needs no extra font files)
mathjax: /vendors/tex-svg.js

# Or a full URL of another CDN
mathjax: https://registry.npmmirror.com/mathjax/3.2.2/files/es5/tex-svg.js
```

When the script source is unreachable, the theme shows a visible failure notice at the top of the post body (instead of waiting forever), keeping the raw text readable.

## Method 2: Third-party plugin (recommended)

Use the third-party plugin [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax) for server-side rendering. Set `mathjax: false` in the config.

For performance, Method 2 is recommended.
