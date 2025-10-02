// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SkeldriaX',
  tagline: 'Bienvenido a la documentación oficial de SkeldriaX, aquí encontraras toda la información de SkeldriaX',
  favicon: 'img/SkeldriaX.png',

  future: {
    v4: true,
  },

  url: 'https://skeldriax.fvckyqnx.me',
  baseUrl: '/',

  organizationName: 'SkeldriaX',
  projectName: 'SkeldriaWebsite',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/SkeldriaX/SkeldriaWebsite/tree/main',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/SkeldriaX/SkeldriaWebsite/tree/main',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: ['./src/css/custom.css'],
        },
      }),
    ],
  ],

  themeConfig: ({
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'SkeldriaX',
      logo: {
        alt: 'SkeldriaLogo',
        src: 'img/SkeldriaX.png',
      },
      items: [
        {to: '/docs/intro', label: 'Wiki', position: 'left', className: 'navbar-icon wiki-icon'},
        {to: '/install', label: 'Instalación', position: 'left', className: 'navbar-icon install-icon'},
        {to: '/securitybot', label: 'SkeldriaSecurity', position: 'left', className: 'navbar-icon security-icon'},
        {
          href: 'https://github.com/SkeldriaX/SkeldriaWebsite',
          position: 'right',
          className: 'navbar-icon github-icon',
          'aria-label': 'GitHub',
        },
        {
          href: 'https://discord.skeldriax.dev',
          position: 'right',
          className: 'navbar-icon discord-icon',
          'aria-label': 'Discord',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introducción',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'Comprar',
              href: 'https://builtbybit.com/FvxkYqnx/',
            },
            {
              label: 'Discord',
              href: 'https://discord.skeldriax.dev',
            },
            {
              label: 'Partners',
              href: 'https://skeldriax.dev/partners',
            },
          ],
        },
        {
          title: 'Más',
          items: [
            {
              label: 'Instalación',
              to: '/install',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/SkeldriaX/SkeldriaWebsite',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SkeldriaX, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
