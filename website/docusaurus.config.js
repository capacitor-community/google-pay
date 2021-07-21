const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Google Pay',
  tagline: 'Dinosaurs are cool',
  url: 'https://ionic.io',
  baseUrl: '/docs/google-pay/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ionic-team',
  projectName: 'enterprise-google-pay',
  themeConfig: {
    navbar: {
      title: 'Google Pay',
      logo: {
        alt: 'Ionic Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: 'Platform',
          position: 'right',
          items: [
            {
              href: 'https://capacitorjs.com/docs',
              label: 'Capacitor',
              target: '_blank',
              rel: null,
              className: 'link--outbound',
            },
            {
              href: 'https://ionicframework.com/docs',
              label: 'Framework',
              target: '_blank',
              rel: null,
              className: 'link--outbound',
            },
            {
              href: 'https://ionic.io/docs/appflow',
              label: 'Appflow',
              target: null,
              rel: null,
            },
            {
              to: '/',
              label: 'Identity Vault',
            },
            {
              href: 'https://ionic.io/docs/auth-connect',
              label: 'Auth Connect',
              target: null,
              rel: null,
            },
            {
              href: 'https://ionic.io/docs/secure-storage',
              label: 'Secure Storage',
              target: null,
              rel: null,
            },
            {
              href: 'https://ionic.io/docs/premier-plugins',
              label: 'Premier Plugins',
              target: null,
              rel: null,
            },
          ],
        },
      ],
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    tagManager: {
      trackingID: 'GTM-TKMGCBC',
    },
    prism: {
      theme: { plain: {}, styles: [] },
      additionalLanguages: ['shell-session'],
    },
  },
  plugins: [
    '@ionic-internal/docusaurus-plugin-tag-manager',
    'docusaurus-plugin-sass',
  ],
  themes: ['@ionic-internal/docusaurus-theme'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        pages: false,
        theme: {
          customCss: ['prismjs/themes/prism-tomorrow.css'],
        },
      },
    ],
  ],
};
