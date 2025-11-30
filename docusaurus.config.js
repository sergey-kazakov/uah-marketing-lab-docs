/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'UAH Marketing Lab',
  tagline: 'Manual Técnico (2025–2027)',
  favicon: 'img/favicon.ico',

  url: 'https://docs.uahmarketinglab.app',
  baseUrl: '/',

  organizationName: 'UAH',
  projectName: 'marketing-lab-docs',

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    localeConfigs: {
      es: { label: 'Español' },
      en: { label: 'English' },
    },
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
};

module.exports = config;
