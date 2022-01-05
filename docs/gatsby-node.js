const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { toLower } = require('lodash');
const root = path.dirname(__dirname);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  const { type } = node.internal;

  if (type === `MarkdownRemark`) {
    const value = createFilePath({
      node,
      getNode,
      trailingSlash: false,
    });
    const { frontmatter } = node;

    createNodeField({
      name: 'slug',
      node,
      value,
    });

    createNodeField({
      name: 'langKey',
      node,
      value: frontmatter.locale,
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
