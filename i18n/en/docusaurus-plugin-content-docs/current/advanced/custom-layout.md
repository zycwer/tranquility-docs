---
sidebar_position: 2
---

# Custom Layout Templates

The theme uses Nunjucks (`.njk`) as its template engine. When config options aren't enough, you can override template files for deep customization. Hexo's template lookup lets you place files in your **blog root** to override theme templates — they survive theme upgrades.

## Hexo template override mechanism

Hexo looks up templates in this order:

1. Same-named template in the blog root `layout/` (**highest priority**)
2. Same-named template in the theme `layout/`
3. Hexo default template

To override a theme template, create a file at the same path in your blog root:

```bash
mkdir -p layout/_partials/components
cp themes/tranquility/layout/_partials/components/reward.njk layout/_partials/components/reward.njk
```

Then edit `layout/_partials/components/reward.njk` — theme upgrades won't touch your custom version.

## Theme template structure

```
layout/
├── _partials/
│   ├── components/       # Reusable components
│   │   ├── foot.njk              # Footer
│   │   ├── font.njk              # Font loading
│   │   ├── post-nav.njk          # Post navigation
│   │   ├── recent-updates.njk    # Recent updates cards
│   │   ├── related-post.njk      # Related posts
│   │   ├── reward.njk            # Reward
│   │   └── search-btn.njk        # Search button
│   ├── macros/           # Nunjucks macros
│   │   ├── group-link.njk
│   │   ├── post-list.njk
│   │   └── tags.njk
│   ├── scripts/          # Inline scripts
│   │   ├── HeartCurve.njk       # Homepage heart curve animation
│   │   └── Timeline.njk         # Timeline
│   └── layout.njk        # Global layout (<head> / navbar / footer)
├── about.njk             # About page
├── category.njk          # Subpage / tag cloud
├── index.njk             # Homepage
├── post.njk              # Post page
└── tag.njk               # Tag archive
```

## Common scenarios

### Scenario 1: Add ICP filing info to the footer

Copy `foot.njk` to your blog's `layout/_partials/components/foot.njk` and append:

```html
<div class="foot__beian">
  <a href="https://beian.miit.gov.cn/">ICP Filing No. XXXXXXXX</a>
</div>
```

### Scenario 2: Modify the homepage heart curve

`_partials/scripts/HeartCurve.njk` controls the heart curve animation parameters (color, point count, speed). Copy it and tweak the variables, e.g. change the curve color or disable the animation.

### Scenario 3: Inject content into `<head>`

The global `<head>` is controlled by `_partials/layout.njk`. To inject meta tags, verification codes, or third-party scripts into the head, see [Inject Custom Head Code](./inject-head.md) — no need to edit layout.njk directly.

## Notes

- **Upgrade compatibility**: When you override a template, theme upgrades won't auto-sync important changes (bug fixes, new features) to that template. Compare diffs before upgrading and manually merge necessary changes.
- **Nunjucks syntax**: Templates use Nunjucks syntax (`{{ }}`, `{% %}`). The theme enables `autoescape`, so variables are auto-escaped for XSS safety; to output raw HTML use `{{ value | safe }}`.
- **Preserve includes**: When overriding component templates, keep references to other partials (e.g. `{% include '_partials/components/xxx.njk' %}`), otherwise rendering will break.
