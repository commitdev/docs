const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'EP JOURNEY',
  tagline: 'Doing what’s right for the engineer',
  url: 'https://epjourney.commit.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/commitdev/epjourney/edit/main/website/',
          path: 'docs',
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'EP Journey',
        items: [
          {
            href: `/about/overview`,
            position: 'left',
            label: 'Engineering Partner Program',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          height: 20,
          src: "https://commit.dev/wp-content/uploads/2021/05/commit-logo.svg",

        },
        links: [
          {
            // title: 'Commit',
            items: [
              {
                label: 'Commit',
                href: 'https://commit.dev',
              },
            ],
          },
          {
            // title: 'EP Journey',
            items: [
              {
                label: 'Commit Platform',
                href: 'https://app.commit.dev',
              },
            ],
          },
          {
            // title: 'EP Journey',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/commitdev/epjourney',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  stylesheets:  [
    // loading fonts
    'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Montserrat:wght@400;600;700;800&display=swap',
  ]
});
