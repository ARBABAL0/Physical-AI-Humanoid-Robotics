import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Physical AI: From Code to the Real World',
  tagline: 'A Practical Textbook on Intelligent Machines and Robotics',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'http://localhost:3000',
  baseUrl: '/',

  organizationName: 'ARBABAL0',
  projectName: 'Physical-AI-Humanoid-Robotics',


  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // ❌ NO PLUGINS — AI Tutor removed (bonus phase later)

  themeConfig: {
    image: 'img/book-cover.png',

    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    navbar: {
      logo: {
        alt: 'Physical AI Book',
        src: 'img/book-cover.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Chapters',
        },
        {
          href: 'https://github.com/ARBABAL0',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Book',
          items: [
            {label: 'Introduction', to: '/docs/intro'},
            {label: 'Chapter 1', to: '/docs/chapter-1-physical-ai'},
            {label: 'Chapter 2', to: '/docs/chapter-2-core-components'},
            {label: 'Chapter 3', to: '/docs/chapter-3-sensors-actuators'},
            {label: 'Chapter 4', to: '/docs/chapter-4-ai-brain'},
            {label: 'Chapter 5', to: '/docs/chapter-5-future-usecases'},
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'GitHub Repository',
              href: 'https://github.com/ARBABAL0/physical-ai-book',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI Book`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
