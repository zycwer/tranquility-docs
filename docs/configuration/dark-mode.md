---
sidebar_position: 2
---

# 深色模式

主题内置运行时深色模式（基于 CSS 变量，**切换无需重建**），支持四种策略，由 `color_mode` 控制。

## 配置

```yml
color_mode: light  # light | dark | auto | time
color_mode_time:   # 仅 color_mode: time 时生效
  start: 18        # 深色开始（24h 制，含）
  end: 6           # 深色结束（24h 制，不含，支持跨午夜，如 18→6）
```

## 四种策略

| 模式 | 行为 |
| --- | --- |
| `light` | 始终浅色（默认） |
| `dark` | 始终深色 |
| `auto` | 跟随浏览器 `prefers-color-scheme`，系统切换时实时响应 |
| `time` | 在 `color_mode_time.start` ~ `end` 时段使用深色，其余浅色 |

`time` 模式支持跨午夜时段（如 `start: 18`、`end: 6` 表示 18:00 到次日 06:00 为深色）。

## 导航栏切换按钮

导航栏右侧有一个 ☾/☀ 切换按钮：点击会立即切换主题，并把选择写入 `localStorage`（`theme-override`），**手动覆盖优先于配置策略**。清除浏览器存储后会回到配置的策略。

## localStorage 持久化

用户手动切换的主题会被持久化到浏览器 `localStorage`（键名 `theme-override`）。优先级为：

1. `localStorage` 中的手动覆盖（最高）
2. 配置文件中的 `color_mode` 策略
3. 默认值 `light`

清除浏览器存储后会回到配置的策略。

## 实现要点

- **FOUC 避免**：首屏内联同步脚本在 CSS 加载前设置 `data-theme`，避免切换瞬间的样式闪烁。
- **matchMedia 监听**：`auto` 模式下监听 `matchMedia('(prefers-color-scheme: dark)')` 的 `change` 事件，系统切换时自动跟随（除非已有手动覆盖）。
- **CSS 变量**：所有颜色通过 `source/css/_theme.styl` 的 CSS 变量定义，`_variables.styl` 中把 Stylus 变量映射到 `var(--c-*)`，因此已有的样式无需逐处修改即可响应深色模式。
