---
sidebar_position: 6
---

# 文章搜索

主题内置搜索功能，通过如下配置主题配置文件启用：

```yml
search:
  path: search.json
  enable: true
  field: post
  content: true
```

## 配置项说明

| 字段 | 说明 |
| --- | --- |
| `search.path` | 搜索索引文件路径 |
| `search.enable` | 是否开启搜索 |
| `search.field` | 索引范围，如 `post` |
| `search.content` | 是否索引文章正文 |

开启后，构建时会生成 `search.json` 索引文件，前端通过该索引在浏览器端完成全文搜索，无需后端服务。

## Algolia 搜索

主题也支持 Algolia 搜索：

```yml
algolia:
  enable: false # 需替换为真实 Algolia 凭据后再开启
  appId: appId
  apiKey: apiKey
  indexName: indexName
  insights: true
  debug: false
```

| 字段 | 说明 |
| --- | --- |
| `algolia.enable` | 是否开启 Algolia 搜索 |
| `algolia.appId` | Algolia App ID |
| `algolia.apiKey` | Algolia API Key |
| `algolia.indexName` | Algolia 索引名 |
| `algolia.insights` | 是否启用 Algolia Insights |
| `algolia.debug` | 是否开启调试模式 |

> Algolia 需替换为真实凭据后再开启，详见 [Algolia 文档](https://www.algolia.com/doc/)。
