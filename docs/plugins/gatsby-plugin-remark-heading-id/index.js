const visit = require('unist-util-visit');
const pinin = require('pinyin');
const toString = require('mdast-util-to-string');
const { kebabCase, toLower } = require('lodash');

module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'heading', (node) => {
    if (node.depth > 1 && !node.data?.id) {
      const text = toString(node);
      const id = text.replace(/[\u4e90-\u9fa5]+/g, (match) =>
        pinin(match)
          .map((item) => item[0])
          .join('-'),
      );

      node.data = {
        ...node.data,
        hProperties: {
          ...node.data?.hProperties,
          id: kebabCase(id),
        },
      };
    }
  });
};
