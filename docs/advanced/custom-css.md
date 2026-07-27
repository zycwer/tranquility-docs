---
sidebar_position: 1
---

# 自定义样式

主题所有颜色通过 CSS 变量（Custom Properties）定义在 `source/css/_theme.styl` 中，深色模式即通过切换这些变量实现。你可以通过覆盖这些变量来定制配色，**无需修改主题源码**，升级主题时自定义样式也不会丢失。

## 方式一：覆盖 CSS 变量（推荐）

主题在博客根目录的 `source/css/` 下留有自定义样式入口。在博客根目录创建 `source/css/_custom.styl`（若主题已支持引入）或在 `source/css/custom.css` 中写入覆盖规则：

```css
/* source/css/custom.css */
:root {
  /* 覆盖主题色：用于链接、按钮、强调元素 */
  --c-accent: #c0392b;
  --c-accent-hover: #e74c3c;
  --c-accent-soft: #e17055;

  /* 覆盖页面背景 */
  --c-bg: #faf9f6;
  --c-bg-card: #ffffff;
}

/* 深色模式下的覆盖 */
[data-theme="dark"] {
  --c-accent: #e74c3c;
  --c-bg: #1a1a1a;
}
```

### 引入自定义 CSS

在博客根目录 `_config.yml` 或主题配置中，将自定义文件注入页面。最简单的做法是在 `source/_data/` 下创建 `custom-head.njk` 并在其中引入：

```html
<!-- source/_data/custom-head.njk -->
<link rel="stylesheet" href="/css/custom.css">
```

> 详细的 Head 注入方法参考[注入自定义 Head 代码](./inject-head.md)。

## 可覆盖的常用变量

以下是 `source/css/_theme.styl` 中定义的主要 CSS 变量，覆盖后即可全局生效：

| 变量 | 用途 | 默认值（浅色） |
| --- | --- | --- |
| `--c-bg` | 页面 / 墙覆盖底色 | `#fcfcfb` |
| `--c-bg-soft` | 次级背景 | `#eff2f3` |
| `--c-bg-card` | 卡片背景 | `#ffffff` |
| `--c-text` | 正文文字 | `#555` |
| `--c-text-heading` | 标题文字 | `#222` |
| `--c-text-muted` | 静音文字 | `#888` |
| `--c-border` | 边框 | `#eee` |
| `--c-link` | 链接 | `#555` |
| `--c-link-hover` | 链接悬停 | `#222` |
| `--c-accent` | 主题强调色 | `#2c5fa5` |
| `--c-accent-hover` | 强调色悬停 | `#2472e7` |
| `--c-footer-bg` | 页脚背景 | `#000` |
| `--c-code-bg` | 行内代码背景 | `#f7f7f7` |

> 完整变量列表请直接查看主题目录下的 `source/css/_theme.styl`，浅色定义在 `:root`，深色定义在 `[data-theme="dark"]`。

## 方式二：覆盖 Stylus 变量

主题在 `source/css/_variables.styl` 中定义了非颜色的 Stylus 变量（如间距、圆角、字号）。若需调整这些值，可在博客中创建同名 Stylus 文件并覆盖：

```stylus
/* 自定义圆角与间距 */
$radius-card = 12px
$gap-section = 32px
```

> 注意：Stylus 变量在**构建时**编译，修改后需重新 `hexo generate`；而 CSS 变量在**运行时**生效，修改后刷新即可（深色模式切换也无需重建）。这也是主题深色模式选择 CSS 变量方案的原因。

## 方式三：直接添加自定义样式

除覆盖变量外，你也可以在自定义 CSS 文件中直接编写任意样式规则，覆盖主题默认样式：

```css
/* 放大文章正文字号 */
.post-content__body {
  font-size: 17px;
  line-height: 1.8;
}

/* 隐藏某个模块 */
.recent-updates {
  display: none;
}
```

## 注意事项

- **优先级**：自定义 CSS 通过 `<link>` 在主题样式之后加载，因此相同选择器的规则会覆盖主题默认值。如遇优先级不足，可使用更具体的选择器或 `!important`（不推荐滥用）。
- **深色模式联动**：若你覆盖了浅色配色，请同步在 `[data-theme="dark"]` 下覆盖深色配色，否则深色模式下可能不可读。参考[深色模式](../configuration/experience/dark-mode.md)。
- **升级保留**：自定义样式文件放在**博客根目录**的 `source/` 下，不要放在 `themes/tranquility/` 内，这样 `git pull` 升级主题时不会被覆盖或冲突。
