// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GitAds: Docs, Help & FAQs',
  tagline: 'Fueling Open-source',
  favicon: 'https://gitads.dev/assets/images/logo_icon/favicon.png',

  // Set the production url of your site here
  url: 'https://docs.gitads.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cosmic-stack', // Usually your GitHub org/user name.
  projectName: 'gitads-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  // onBrokenLinks: 'throw',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/cosmic-stack/gitads-docs/edit/main/',        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/cosmic-stack/gitads-docs/edit/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/gitads-docs-social-card-slim.png',
      navbar: {
        title: 'Help center',
        logo: {
          alt: 'GitAds',
          src: 'https://gitads.dev/assets/images/logo_icon/logo_dark.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs & FAQs',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/cosmic-stack/gitads-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Docs',
                to: '/docs',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/S3EdtEbqw7',
              },
              {
                label: 'X',
                href: 'https://x.com/git_ads',
              },
              {
                label: 'Threads',
                href: 'https://threads.net/@git.ads',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/git.ads',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://blog.gitads.dev',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/cosmic-stack/gitads-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © GitAds ${new Date().getFullYear()} Cosmic Stack, Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
