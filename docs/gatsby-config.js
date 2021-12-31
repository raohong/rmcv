const path = require('path');
const root = path.join(path.dirname(__dirname), 'packages');

module.exports = {
  siteMetadata: {
    title: 'RMC-Vant',
    author: {
      name: `meszyouh`,
    },
  },
  plugins: [
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-less`,
      options: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        'rmc-vant': path.join(root, 'components', 'src'),
        '@rmc-vant/icons': path.join(root, 'icons', 'src'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/.site`,
        name: `site`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
};
