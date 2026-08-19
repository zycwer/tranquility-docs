---
sidebar_position: 4
---

# 自定义字体

主题的部分区域为了设计感使用了第三方的汉字字体。但由于汉字字体包太大，因此本主题对用户使用的部分字体进行了提取打包成子字体。

## 配置

通过 `zh_font` 配置项进行开启或关闭：

```yml
zh_font:
  enable: true
  fontName: sourceHanSerif
  type: woff # 输出格式：woff（推荐，体积约为 ttf 一半）| ttf
  style:
    - normal
    - bold
```

## 配置项说明

| 字段 | 说明 |
| --- | --- |
| `zh_font.enable` | 是否开启自定义字体 |
| `zh_font.fontName` | 字体名称 |
| `zh_font.type` | 输出格式：`woff`（推荐，体积约为 `ttf` 的一半）或 `ttf` |
| `zh_font.style` | 启用的字重，如 `normal`、`bold` |

## 替换字体文件

可以通过替换主题目录下 `_font/` 目录中的字体文件来使用自己喜欢的字体。主题内置 `_font/` 目录中包含以下文件：

- `normal.ttf` —— 常规字重
- `bold.ttf` —— 粗体字重
- `regular.ttf` —— 另一种字重

构建时主题会自动从这些字体文件中提取页面实际用到的字形并打包成子字体。替换字体后，产物字体的内容哈希会随之变化，引用 URL 的 `?v=` 指纹自动更新，访客浏览器缓存不会残留旧字体。

## font-display: swap 与 preload 优化

主题对自定义子字体做了加载优化，减少字体闪烁（FOUT）并加快文字渲染：

- **`font-display: swap`**：字体加载完成前先用系统字体渲染文字，加载完成后无缝替换，避免长时间空白。
- **`<link rel="preload">`**：首个字体文件高优先级预加载，与 CSS 并行请求，缩短关键渲染路径。
- **字体子集化**：仅打包页面用到的字形，大幅减小字体体积。

无需配置，开启 `zh_font.enable: true` 后自动应用。
