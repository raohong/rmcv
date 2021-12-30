const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const { toLower } = require('lodash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const root = path.dirname(__dirname);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`);

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `,
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors,
    );
    return;
  }

  const list = result.data.allMarkdownRemark.nodes;

  list.forEach((post, index) => {
    createPage({
      path: post.fields.slug,
      component: blogPost,
      context: {
        id: post.id,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  const { type } = node.internal;

  if (type === `MarkdownRemark`) {
    const value = createFilePath({
      node,
      getNode,
      trailingSlash: true,
    }).replace(/\/$/, '');
    const { frontmatter } = node;

    createNodeField({
      name: 'slug',
      node,
      value: `${value}-${toLower(frontmatter.locale)}`,
    });

    Object.entries(frontmatter).forEach(([name, value]) => {
      createNodeField({
        name,
        node,
        value,
      });
    });
  }
};

exports.onCreateWebpackConfig = (
  { actions, stage, loaders, plugins },
  { cssLoaderOptions = {}, postCssPlugins, loaderOptions, lessOptions },
) => {
  const { setWebpackConfig } = actions;
  const isSSR = [`develop-html`, `build-html`].includes(stage);
  const lessLoader = {
    loader: 'less-loader',
    options: {
      lessOptions: { ...lessOptions, javascriptEnabled: true },
      ...loaderOptions,
    },
  };

  const lessRule = {
    test: /\.less$/,
    use: isSSR
      ? loaders.null()
      : [
          loaders.miniCssExtract(),
          loaders.css({
            importLoaders: 2,
            ...cssLoaderOptions,
            modules: false,
          }),
          loaders.postcss({
            plugins: postCssPlugins,
          }),
          lessLoader,
        ],
  };

  setWebpackConfig({
    module: {
      rules: [
        {
          include: /\.less$/,
          sideEffects: true,
        },
        lessRule,
      ],
    },
  });
};
