---
sidebar_position: 1
---

# 一言（Slogan）

首页顶部展示的 `slogan`（如「宁静致远」）。开启 `slogan_hitokoto` 后，该位置会在浏览器端请求 [hitokoto.cn](https://v1.hitokoto.cn) 的「一言」接口，随机展示一句话，每次刷新都可能不同。

## 配置

```yml
slogan: "宁静致远"        # 静态 slogan，作为一言请求失败 / JS 未执行时的回退
slogan_hitokoto: false   # 开启后首页 slogan 处展示随机一言
```

## 工作原理

- 一言内容由客户端请求 `https://v1.hitokoto.cn/`，构建时仍把静态 `slogan` 渲染进 HTML，因此 **SEO 友好、无 JS 或请求失败时仍可见**（自动回退到静态 slogan）。
- 接口 5 秒超时，失败静默回退，不会影响页面其他部分。
- 开启后该位置字体自动切换为系统宋体（不使用提取子字体），避免随机字符不在子字体中导致的字体交错问题。

## 回退策略

| 情况 | 表现 |
| --- | --- |
| 正常请求成功 | 展示一言接口返回的随机语句 |
| 5 秒内未返回 | 静默回退到静态 `slogan` |
| 浏览器未执行 JS | 展示静态 `slogan`（已写入 HTML） |
| 关闭 `slogan_hitokoto` | 始终展示静态 `slogan` |
