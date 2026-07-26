---
sidebar_position: 14
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
mathjax: true # load the LaTeX math library
```

## Method 2: Third-party plugin (recommended)

Use the third-party plugin [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax) for server-side rendering. Set `mathjax: false` in the config.

For performance, Method 2 is recommended.
