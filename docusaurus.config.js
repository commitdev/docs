const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const algolia = {
  // The application ID provided by Algolia
  appId: '6CK8999JQP',
  // Public API key: it is safe to commit it
  apiKey: '522cf2e708650054ec5e231b389669df',
  indexName: 'March',
  // Optional: see doc section below
  contextualSearch: false,
  // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
  externalUrlRegex: 'external\\.com|domain\\.com',
  // Optional: Algolia search parameters
  searchParameters: {},
  // Optional: path for search page that enabled by default (`false` to disable it)
  searchPagePath: 'search',
  //... other Algolia params
};

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Commit Docs',
  tagline: 'Doing what’s right for the engineer',
  url: 'https://docs.commit.dev',
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
        googleAnalytics: {
          trackingID: 'G-R241YEH02F',
          anonymizeIP: false,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/commitdev/docs/edit/main/',
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
      algolia,
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'Commit Docs',
        // Top navigation bar's shortcut to places OR External Links
        items: [
          // Example of shortcut to doc
          {
            href: `/eps/onboarding`,
            position: 'right',
            label: 'The EP Guide',
          },
          // Example of external link
          {
            href: 'https://github.com/commitdev/docs',
            position: 'right',
            label: 'Github',
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
                href: 'https://github.com/commitdev/docs',
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
