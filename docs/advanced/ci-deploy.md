---
sidebar_position: 7
---

# CI/CD 自动部署

本主题的「最近更新」卡片在构建时抓取外部博客 RSS，博客更新后需要重新 `hexo generate` 才会刷新。配合 CI/CD 可以实现推送代码或定时自动构建并部署，无需手动操作。

## 方案一：GitHub Actions + GitHub Pages

最主流的方案：推送到 GitHub 后自动构建并部署到 GitHub Pages。

### 步骤 1：创建 Workflow

在博客仓库创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  # 定时构建（每天北京时间 8:00），用于刷新 RSS 最近更新卡片
  schedule:
    - cron: '0 0 * * *'  # UTC 00:00 = 北京时间 08:00
  workflow_dispatch:  # 支持手动触发

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          submodules: true  # 若主题作为 submodule
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - name: Install dependencies
        run: npm ci
      - name: Build with Hexo
        run: npx hexo generate
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

### 步骤 2：配置 GitHub Pages

在仓库 Settings → Pages → Build and deployment → Source 选择 **GitHub Actions**。

### 步骤 3：升级主题

若主题以 git submodule 形式引入，升级时更新 submodule 指向新版本 tag：

```bash
cd themes/tranquility
git fetch --tags
git checkout v1.6.1
cd ..
git add themes/tranquility
git commit -m "chore: upgrade tranquility to v1.6.1"
git push
```

推送后 CI 自动构建部署。若主题是直接 `git clone` 的，进入主题目录 `git pull` 后提交即可。

## 方案二：Vercel

Vercel 适合需要更快 CDN、自动 HTTPS、预览部署的场景。

### 步骤 1：导入仓库

在 [Vercel](https://vercel.com/) 导入博客仓库，框架预设选择 **Hexo**（或手动配置）：

| 配置项 | 值 |
| --- | --- |
| Build Command | `npx hexo generate` |
| Output Directory | `public` |
| Install Command | `npm ci` 或 `npm install` |

### 步骤 2：定时构建（可选）

Vercel 不原生支持定时触发构建。可配合 GitHub Actions 的 `schedule` + Vercel Deploy Hook 实现：

1. 在 Vercel 项目 Settings → Git → Deploy Hooks 创建一个 Hook（如 `daily-refresh`）。
2. 在博客仓库创建 `.github/workflows/trigger-vercel.yml`：

```yaml
name: Trigger Vercel Build
on:
  schedule:
    - cron: '0 0 * * *'  # 每天北京时间 8:00
jobs:
  trigger:
    runs-on: ubuntu-latest
    steps:
      - run: curl -X POST ${{ secrets.VERCEL_DEPLOY_HOOK }}
```

3. 在仓库 Settings → Secrets 添加 `VERCEL_DEPLOY_HOOK` 为 Hook URL。

## 方案三：Netlify / Cloudflare Pages

配置与 Vercel 类似：

| 平台 | Build Command | Publish Directory |
| --- | --- | --- |
| Netlify | `npx hexo generate` | `public` |
| Cloudflare Pages | `npx hexo generate` | `public` |

Cloudflare Pages 支持 [定时构建](https://developers.cloudflare.com/pages/functions/cron-triggers/)，Netlify 可通过 [Scheduled Deploys](https://docs.netlify.com/configure-builds/build-hooks/) 配合 Build Hooks 实现。

## 构建缓存优化

CI 构建可缓存 `node_modules` 与 Hexo 缓存以加速：

```yaml
- uses: actions/setup-node@v4
  with:
    node-version: 20
    cache: npm
- name: Cache Hexo
  uses: actions/cache@v4
  with:
    path: |
      .hexo
      node_modules
    key: ${{ runner.os }}-hexo-${{ hashFiles('package-lock.json') }}
```

## 注意事项

- **RSS 刷新**：「最近更新」卡片在构建时抓取 RSS，定时构建（`cron`）可保证卡片及时更新，建议每天构建一次。
- **环境变量**：如需在构建时注入变量（如站点 URL），在 CI 的 env 或平台的 Environment Variables 中配置。
- **主题升级兼容**：CI 构建失败时，检查是否为主题升级引入的 breaking change，参考[升级指南](../upgrade.md)与[版本号命名](../versioning.md)。
- **部署令牌**：GitHub Pages 部署使用 `id-token: write`（OIDC），无需长期 PAT，更安全。
