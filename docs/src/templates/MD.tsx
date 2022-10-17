import { graphql } from 'gatsby';
import { toHtml } from 'hast-util-to-html';
import React from 'react';
import type { Node, Parent } from 'unist';

type INode = Parent<
  Node & {
    tagName?: string;
  }
> & {
  tagName?: string;
};

const transform = (root: INode) => {
  if (!root?.children) {
    return root;
  }

  const queue: Node[] = [];
  const newRoot: INode = {
    type: 'root',
    data: root.data,
    children: [],
  };
  let dirty = false;

  const end = () => {
    dirty = false;
    if (queue.length) {
      const d = queue.slice();
      queue.length = 0;

      newRoot.children.push({
        type: 'element',
        tagName: 'div',
        // @ts-ignore
        properties: {
          class: 'doc-card',
        },
        children: d,
      });
    }
  };

  root.children.forEach((node: any) => {
    const { type, tagName } = node;

    if (type === 'element' && (tagName === 'h1' || tagName === 'h2')) {
      end();
      newRoot.children.push(node);
    } else if (type === 'element' && tagName === 'h3') {
      if (dirty) {
        end();
      }

      dirty = true;
      queue.push(node);
    } else if (dirty) {
      queue.push(node);
    } else {
      newRoot.children.push(node);
    }
  });

  end();

  return newRoot;
};

export default function MDPage({
  data,
}: {
  data: {
    markdownRemark: {
      htmlAst: INode;
    };
  };
}) {
  const {
    markdownRemark: { htmlAst },
  } = data;

  const result = transform(htmlAst);

  return (
    <div
      className="doc-markdown-body"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        // @ts-ignore
        __html: toHtml(result as Node),
      }}
    />
  );
}

export const pageQuery = graphql`
  query ($slug: String!, $langKey: String!) {
    markdownRemark(fields: { langKey: { eq: $langKey }, slug: { eq: $slug } }) {
      htmlAst
    }
  }
`;
