---
sidebar_position: 7
---

# CI/CD Auto-Deployment

The theme's "Recent Updates" cards fetch external blog RSS at build time — after your blog updates, you need to re-run `hexo generate` to refresh them. CI/CD automates building and deploying on push or on a schedule, with no manual steps.

## Option 1: GitHub Actions + GitHub Pages

The most popular approach: push to GitHub, auto-build and deploy to GitHub Pages.

### Step 1: Create the workflow

Create `.github/workflows/deploy.yml` in your blog repo:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  # Scheduled build (daily) to refresh the RSS Recent Updates cards
  schedule:
    - cron: '0 0 * * *'  # UTC 00:00
  workflow_dispatch:  # Manual trigger

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
          submodules: true  # if the theme is a submodule
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

### Step 2: Configure GitHub Pages

In the repo Settings → Pages → Build and deployment → Source, select **GitHub Actions**.

### Step 3: Upgrading the theme

If the theme is a git submodule, update the submodule pointer to the new version tag:

```bash
cd themes/tranquility
git fetch --tags
git checkout v1.6.1
cd ..
git add themes/tranquility
git commit -m "chore: upgrade tranquility to v1.6.1"
git push
```

CI auto-builds and deploys on push. If you cloned the theme directly, `git pull` in the theme directory, then commit and push.

## Option 2: Vercel

Vercel offers a faster CDN, automatic HTTPS, and preview deployments.

### Step 1: Import the repo

Import your blog repo into [Vercel](https://vercel.com/), select the **Hexo** framework preset (or configure manually):

| Setting | Value |
| --- | --- |
| Build Command | `npx hexo generate` |
| Output Directory | `public` |
| Install Command | `npm ci` or `npm install` |

### Step 2: Scheduled builds (optional)

Vercel doesn't natively support scheduled builds. Use GitHub Actions `schedule` + a Vercel Deploy Hook:

1. In Vercel project Settings → Git → Deploy Hooks, create a hook (e.g. `daily-refresh`).
2. Create `.github/workflows/trigger-vercel.yml` in your blog repo:

```yaml
name: Trigger Vercel Build
on:
  schedule:
    - cron: '0 0 * * *'
jobs:
  trigger:
    runs-on: ubuntu-latest
    steps:
      - run: curl -X POST ${{ secrets.VERCEL_DEPLOY_HOOK }}
```

3. Add `VERCEL_DEPLOY_HOOK` as the hook URL in repo Settings → Secrets.

## Option 3: Netlify / Cloudflare Pages

Configuration is similar to Vercel:

| Platform | Build Command | Publish Directory |
| --- | --- | --- |
| Netlify | `npx hexo generate` | `public` |
| Cloudflare Pages | `npx hexo generate` | `public` |

Cloudflare Pages supports [scheduled builds](https://developers.cloudflare.com/pages/functions/cron-triggers/); Netlify supports scheduled deploys via [Build Hooks](https://docs.netlify.com/configure-builds/build-hooks/).

## Build cache optimization

Cache `node_modules` and Hexo cache in CI to speed up builds:

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

## Notes

- **RSS refresh**: "Recent Updates" cards fetch RSS at build time. Scheduled builds (`cron`) keep them fresh — a daily build is recommended.
- **Environment variables**: to inject variables at build time (e.g. site URL), configure them in CI env or the platform's Environment Variables.
- **Theme upgrade compatibility**: if CI build fails after a theme upgrade, check for breaking changes — see the [Upgrade Guide](../upgrade.md) and [Versioning](../versioning.md).
- **Deploy tokens**: GitHub Pages deployment uses `id-token: write` (OIDC) — no long-lived PAT needed, more secure.
