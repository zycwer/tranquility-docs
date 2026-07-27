---
sidebar_position: 5
---

# 站点统计

主题内置百度统计与 Google Analytics 的接入配置，无需手动注入脚本。

## 百度统计

```yml
# 百度站长平台站点验证码
# See: https://ziyuan.baidu.com/site
baidu_site_verification:

# 百度统计 App ID
# See: https://tongji.baidu.com
baidu_analytics: # <app_id>
```

| 字段 | 说明 |
| --- | --- |
| `baidu_site_verification` | 百度站长平台站点验证码（用于搜索引擎收录验证） |
| `baidu_analytics` | 百度统计 App ID，填写后自动注入统计脚本 |

### 获取 App ID

1. 登录[百度统计](https://tongji.baidu.com)，添加站点。
2. 在「代码获取」页面找到 `hm.js?xxxxxxxxxxxxxxxxx` 中的那段 ID。
3. 填入 `baidu_analytics`。

## Google Analytics

```yml
google_ad:
  enable: false
  meta_tag: "G-XXXXXXXXXX"  # Google Analytics 4 的 Measurement ID
```

| 字段 | 说明 |
| --- | --- |
| `google_ad.enable` | 是否开启 Google Analytics |
| `google_ad.meta_tag` | Google Analytics 4 的 Measurement ID，格式 `G-XXXXXXXXXX` |

### 获取 Measurement ID

1. 登录 [Google Analytics](https://analytics.google.com)，创建 GA4 资源。
2. 在「数据流」中找到 Measurement ID（`G-` 开头）。
3. 填入 `google_ad.meta_tag` 并设 `enable: true`。

## 其他统计服务

主题未内置的统计服务（如 Umami、Plausible、51.LA、CNZZ 等），可通过[注入自定义 Head 代码](./inject-head.md)接入。以 Umami 为例：

```js
// scripts/custom-head.js
hexo.extend.injector.register('head_end', `
  <script async defer data-website-id="your-website-id" src="https://umami.example.com/script.js"></script>
`, 'all');
```

## 隐私与合规

- **GDPR / Cookie 法规**：百度统计与 Google Analytics 会采集用户数据，面向欧洲用户的站点需在隐私政策中声明并获取用户同意。
- **无 Cookie 方案**：若注重隐私，推荐 [Umami](https://umami.is/) 或 [Plausible](https://plausible.io/)（自托管或 SaaS，无 Cookie，不采集个人身份信息）。
- **Do Not Track**：尊重用户 `DNT` 偏好的统计工具会在用户开启「请勿追踪」时不采集数据。
