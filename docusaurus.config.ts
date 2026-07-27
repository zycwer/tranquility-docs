import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Tranquility 主题',
  tagline: '一款为个人主页及多学科领域博主设计的 Hexo 主题',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true,
  },

  // 生产环境 URL，Vercel 部署后会绑定自定义域名，这里先填占位
  url: 'https://tranquility-docs.vercel.app',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // 中英双语：默认中文，英文作为另一可用语言
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      'zh-Hans': {
        label: '简体中文',
        direction: 'ltr',
      },
      en: {
        label: 'English',
        direction: 'ltr',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // 「编辑此页」指向主题仓库的 docs 目录
          editUrl: 'https://github.com/zycwer/tranquility-docs/tree/main/',
          // 顶部版本下拉（本项目迭代较快）
          includeCurrentVersion: true,
        },
        // 文档站不需要 blog
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // 社交分享卡片图
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Tranquility',
      logo: {
        alt: 'Tranquility Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tranquilitySidebar',
          position: 'left',
          label: '文档',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/zycwer/hexo-theme-tranquility',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '快速开始',
              to: '/docs/intro',
            },
            {
              label: '安装',
              to: '/docs/installation',
            },
            {
              label: '配置',
              to: '/docs/configuration/basic/slogan',
            },
          ],
        },
        {
          title: '资源',
          items: [
            {
              label: '主题仓库',
              href: 'https://github.com/zycwer/hexo-theme-tranquility',
            },
            {
              label: '更新日志',
              href: 'https://github.com/zycwer/hexo-theme-tranquility/releases',
            },
            {
              label: '演示站',
              href: 'https://theme.hozen.site/tranquility/',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'GitHub Issues',
              href: 'https://github.com/zycwer/hexo-theme-tranquility/issues',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tranquility. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'yaml', 'json', 'markdown'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
