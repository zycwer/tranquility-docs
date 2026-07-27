---
sidebar_position: 2
---

# 自定义布局模板

主题使用 Nunjucks（`.njk`）作为模板引擎。当配置项无法满足需求时，你可以通过覆盖模板文件来深度定制页面结构。Hexo 的模板查找机制允许你在**博客根目录**下放置同名文件来覆盖主题模板，升级主题时不会被覆盖。

## Hexo 模板覆盖机制

Hexo 渲染页面时会按以下顺序查找模板：

1. 博客根目录 `layout/` 下的同名模板（**最高优先级**）
2. 主题 `layout/` 下的同名模板
3. Hexo 默认模板

因此，要覆盖某个主题模板，只需在博客根目录创建相同路径的文件：

```bash
mkdir -p layout/_partials/components
cp themes/tranquility/layout/_partials/components/reward.njk layout/_partials/components/reward.njk
```

随后编辑 `layout/_partials/components/reward.njk` 即可，主题升级不会影响你的自定义版本。

## 主题模板结构

```
layout/
├── _partials/
│   ├── components/       # 可复用组件
│   │   ├── foot.njk              # 页脚
│   │   ├── font.njk              # 字体加载
│   │   ├── post-nav.njk          # 文章导航
│   │   ├── recent-updates.njk    # 最近更新卡片
│   │   ├── related-post.njk      # 相关文章
│   │   ├── reward.njk            # 赞赏
│   │   └── search-btn.njk        # 搜索按钮
│   ├── macros/           # Nunjucks 宏
│   │   ├── group-link.njk
│   │   ├── post-list.njk
│   │   └── tags.njk
│   ├── scripts/          # 内联脚本
│   │   ├── HeartCurve.njk       # 首页心形曲线动画
│   │   └── Timeline.njk         # 时间线
│   └── layout.njk        # 全局布局（<head> / 导航 / 页脚）
├── about.njk             # 关于页
├── category.njk          # 子页 / 标签云
├── index.njk             # 首页
├── post.njk              # 文章页
└── tag.njk               # 标签归档页
```

## 常见自定义场景

### 场景 1：在页脚添加备案信息

复制 `foot.njk` 到博客 `layout/_partials/components/foot.njk`，在底部添加：

```html
<div class="foot__beian">
  <a href="https://beian.miit.gov.cn/">京ICP备XXXXXXXX号</a>
</div>
```

### 场景 2：修改首页心形曲线

`_partials/scripts/HeartCurve.njk` 控制首页心形曲线动画的参数（颜色、点数、速度等）。复制后修改其中的变量即可，例如调整曲线颜色或关闭动画。

### 场景 3：在 `<head>` 中注入内容

全局 `<head>` 由 `_partials/layout.njk` 控制。如需在 head 中注入 meta 标签、验证代码或第三方脚本，参考[注入自定义 Head 代码](./inject-head.md)，无需直接修改 layout.njk。

## 注意事项

- **升级兼容**：覆盖模板后，主题升级时若该模板有重要更新（如修复 bug 或新增功能），你的自定义版本不会自动同步。建议升级前对比主题版本差异，手动合并必要变更。
- **Nunjucks 语法**：模板使用 Nunjucks 语法（`{{ }}`、`{% %}`），修改时注意保持语法正确。主题已开启 `autoescape`，输出的变量会自动转义防 XSS；如需输出原始 HTML，使用 `{{ value | safe }}`。
- **保留引用**：覆盖组件模板时，注意保留对其他 partial 的引用（如 `{% include '_partials/components/xxx.njk' %}`），否则会导致渲染异常。
