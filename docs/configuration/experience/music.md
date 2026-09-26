---
sidebar_position: 8
---

# 音乐播放器

在站点左下角挂载 [APlayer](https://aplayer.js.org) 迷你音乐播放器，支持歌单、切歌与**跨页记忆播放进度**。

![首页左下角的迷你音乐播放器](/img/music.png)

## 配置

```yml
music:
  enable: true
  songs: # 歌单（name/artist/url/cover 均必填）
    - name: 歌曲名
      artist: 歌手
      url: https://example.com/song.mp3
      cover: https://example.com/cover.jpg
```

## 配置项说明

| 字段 | 说明 |
| --- | --- |
| `music.enable` | 是否开启音乐播放器 |
| `music.songs` | 歌单列表，至少一首 |
| `songs[].name` | 歌曲名 |
| `songs[].artist` | 歌手名 |
| `songs[].url` | 音频直链地址（需可公开访问，建议 HTTPS） |
| `songs[].cover` | 封面图地址 |

## 跨页记忆

博客站点切页即整页刷新，普通做法会导致音乐中断。主题通过 `localStorage` 解决：

- 每隔数秒与离开页面时，记录**当前曲目、播放进度、是否正在播放**
- 访客进入新页面后，播放器自动恢复到上次的曲目与进度并尝试续播
- 浏览器自动播放策略拦截续播时，暂停在原进度（点击播放即可继续）

## 性能与安全

- APlayer 的 JS/CSS 通过 [CDN](../../advanced/cdn.md) 加载，**不增加主题包体积**
- 未开启时零开销：不输出任何相关 DOM、脚本与样式
- 音频地址按需写入 CSP `media-src`，不放宽其他策略

## 说明

- 播放器为 APlayer 迷你（mini）模式：左下角圆形封面，点击展开操作
- 建议使用稳定可直链的音频源（对象存储、自建静态服务器等）；GitHub 仓库 raw 链接不适合大文件音频
- 尊重访客体验：播放器默认不自动出声，续播被浏览器拦截时静默暂停
