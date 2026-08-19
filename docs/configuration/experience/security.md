---
sidebar_position: 5
---

# 安全策略

主题内置内容安全策略（CSP）与两项隐私策略头，为静态托管环境（GitHub Pages、Vercel 等）提供浏览器层防护。默认开启。

## 背景

静态托管通常无法自定义 HTTP 响应头，因此主题通过 `<meta>` 标签落地以下策略：

- **Content-Security-Policy**：限制脚本、样式、图片、字体等资源的加载来源，大幅压缩 XSS 注入面
- **Referrer-Policy**（默认 `strict-origin-when-cross-origin`）：跨域请求只发送 origin，防止完整 URL 泄露
- **Permissions-Policy**（默认 `camera=(), microphone=(), geolocation=()`）：显式禁用摄像头/麦克风/定位等敏感能力

## 配置

```yml
security:
  enable: true
  csp_extra:                      # 追加自定义 CSP 指令（数组）
    # - "worker-src 'self'"
  referrer_policy: strict-origin-when-cross-origin   # 置 false 关闭
  permissions_policy: "camera=(), microphone=(), geolocation=()"   # 置 false 关闭
```

## 配置项说明

| 字段 | 说明 |
| --- | --- |
| `security.enable` | 是否开启安全策略 meta 标签 |
| `security.csp_extra` | 追加的自定义 CSP 指令数组 |
| `security.referrer_policy` | Referrer-Policy 值，`false` 关闭 |
| `security.permissions_policy` | Permissions-Policy 值，`false` 关闭 |

## 策略来源白名单（自动收集）

CSP 的资源白名单按你**已开启的功能**自动生成，无需手动维护：

| 功能 | 放行的来源 |
| --- | --- |
| 主题自身 | `'self'`（脚本/样式/图片/字体） |
| CDN（MathJax / Mermaid / DocSearch） | 你配置的 `cdn` 源 |
| 一言（Hitokoto） | `connect-src` 放行 `v1.hitokoto.cn` |
| 百度统计 | 放行 `hm.baidu.com` |
| giscus 评论 | 放行 `giscus.app`（脚本/iframe/连接） |
| Waline 评论 | 放行 `unpkg.com` 与你的 `serverURL` |
| Disqus 评论 | 放行 `disqus.com` / `*.disquscdn.com` |

## 第三方挂件被拦截怎么办

若你通过 `inject_head` 等方式接入的第三方挂件被 CSP 拦截（浏览器控制台会提示具体被拦截的来源）：

1. 将所需来源追加到 `security.csp_extra`，例如：
   ```yml
   security:
     csp_extra:
       - "script-src https://example.com https://cdn.another.com"
   ```
   :::note
   `csp_extra` 中的同名指令会与自动生成的指令**叠加**（浏览器对同名指令取并集），不会互相覆盖。
   :::
2. 或将 `security.enable` 置 `false` 整体关闭（不推荐，会失去 XSS 防线）。

## 构建期 URL 校验（url-guard）

配合 CSP，主题在**构建时**还会校验主题配置中所有链接类字段（`url` / `link` / `icon` / `repo` 等）：

- 仅放行 `http` / `https` / `mailto` / `tel` / `ftp` 及相对路径
- 检出 `javascript:` 等危险协议时，构建日志输出告警并将该链接中和为 `#`，防止存储型 XSS
