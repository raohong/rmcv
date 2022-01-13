const path = require('path');
const root = path.join(path.dirname(__dirname), 'packages');
const appMeta = require('./.app-meta.json');

const config = {
  siteMetadata: {
    title: 'RMC-Vant',
    ...appMeta,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: appMeta.defaultLocale,
        useLangKeyLayout: false,
        prefixDefault: true,
        markdownRemark: {
          postPage: path.resolve('./src/templates/MD.tsx'),
          query: `
          {
              allMarkdownRemark {
                  edges {
                  node {
                      fields {
                        slug,
                        langKey
                      }
                    }
                  }
              }
          }
          `,
        },
      },
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-less',
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
        '@rmc-vant/utils': path.join(root, 'utils', 'src'),
        '@rmc-vant/hooks': path.join(root, 'hooks', 'src'),
        '@rmc-vant/demo': path.join(root, 'demo', 'src'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/.site`,
        name: 'site',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 630,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-plugin-remark-heading-id',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
  ],
};

module.exports = config;
