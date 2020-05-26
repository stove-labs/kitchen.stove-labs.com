const path = require('path');
module.exports = {
  title: 'Chef\'s kitchen ',
  tagline: 'Develop on Tezos with Stove Labs',
  url: 'https://kitchen.stove-labs.com',
  baseUrl: '/',
  favicon: 'img/logo.ico',
  organizationName: 'stove-labs', 
  projectName: 'kitchen.stove-labs.com', 
  themeConfig: {
    disableDarkMode: true,
    navbar: {
      title: 'Stove Labs\' Kitchen',
      logo: {
        alt: 'Stove Labs\' Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          label: 'EARLY PREVIEW',
          position: 'left',
          className: 'early-preview animate__animated animate__tada'
        },
        {
          to: 'docs/learn/workshops/notarization/theory/overview',
          activeBasePath: 'docs/learn',
          label: 'Learn',
          position: 'left',
        },
        {
          to: 'docs/knowledge/tezos_protocol/account',
          activeBasePath: 'docs/knowledge',
          label: 'Knowledge',
          position: 'left',
        },
        {
          to: 'docs/solutions/tzip-12/overview',
          activeBasePath: 'docs/solutions',
          label: 'Solutions',
          position: 'left',
        },
        {
          href: 'https://github.com/stove-labs/kitchen.stove-labs.com',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Solutions',
        //   items: [
        //     {
        //       label: 'TZIP12',
        //       to: 'solutions/tzip12',
        //     }
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     // {
        //     //   label: 'Slack',
        //     //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     // },
        //     {
        //       label: 'Telegram',
        //       href: 'https://t.me/stove_labs',
        //     },
        //   ],
        // },
        // {
        //   title: 'Social',
        //   items: [
        //     {
        //       label: 'Medium',
        //       to: 'https://medium.com/@matej.sima',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/stove-labs',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/stove_labs',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Stove Labs`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/stove-labs/learn.stove-labs.com/edit/master/website',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        themes: [
          require.resolve('./src/theme/Mermaid.js'),
          require.resolve('./src/theme/OperationCosts.js')
        ]
      },
    ],
  ],
};
