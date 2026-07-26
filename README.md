# Tranquility 主题文档站

基于 [Docusaurus 3](https://docusaurus.io/) 构建的 [Tranquility](https://github.com/zycwer/hexo-theme-tranquility) Hexo 主题文档站，支持中英双语。

## 本地开发

```bash
npm install
npm start          # 默认中文（zh-Hans）开发服务器
npm run start -- --locale en   # 英文开发服务器
```

## 构建

```bash
npm run build      # 构建所有语言版本到 build/
npm run serve      # 本地预览构建产物
```

## 部署

推送到 GitHub 后，[Vercel](https://vercel.com/) 自动构建部署。配置见 `vercel.json`。

## 目录结构

```
docs/                                    # 中文文档（默认语言）
├── intro.md / installation.md / ...     # 主文档
└── configuration/                       # 配置文档
i18n/en/docusaurus-plugin-content-docs/current/   # 英文文档（镜像 docs/ 结构）
src/                                     # React 页面与样式
docusaurus.config.ts                     # 站点配置（i18n / navbar / footer）
sidebars.ts                              # 侧边栏配置（自动生成）
vercel.json                              # Vercel 部署配置
```

## 文档内容来源

文档内容从 [hexo-theme-tranquility](https://github.com/zycwer/hexo-theme-tranquility) 仓库的 README 拆分整理而来。
