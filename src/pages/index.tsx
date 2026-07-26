import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const features = [
  {
    title: '主页风格',
    description: '聚焦个性展示，支持纯个人主页模式（不含文章，聚合外部博客 RSS）。',
  },
  {
    title: '多领域「子页」',
    description: '用「子页」取代分类，配合标签聚合，适应多学科领域写作。',
  },
  {
    title: '深色模式',
    description: '浅色 / 深色 / 定时 / 跟随浏览器，基于 CSS 变量运行时切换，无需重建。',
  },
  {
    title: 'SEO 友好',
    description: '内置 Open Graph、JSON-LD 结构化数据、sitemap.xml、robots.txt 自动生成。',
  },
  {
    title: '无障碍',
    description: '尊重 prefers-reduced-motion 系统偏好，全局动画自动降级。',
  },
  {
    title: 'PWA 可安装',
    description: '生成 manifest.json 与 Service Worker，支持「添加到主屏幕」与离线访问。',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            快速开始 ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({title, description}: {title: string; description: string}) {
  return (
    <div className="col col--4 margin-vert--md">
      <div className="card">
        <div className="card__header">
          <Heading as="h3">{title}</Heading>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="首页"
      description="Tranquility 主题文档 — 一款为个人主页及多学科领域博主设计的 Hexo 主题">
      <HomepageHeader />
      <main className="container margin-vert--xl">
        <section className="row">
          {features.map((f) => (
            <Feature key={f.title} title={f.title} description={f.description} />
          ))}
        </section>
      </main>
    </Layout>
  );
}
