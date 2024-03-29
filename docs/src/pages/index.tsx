import { PageProps, navigate } from 'gatsby';
import * as React from 'react';

const BlogIndex: React.FC<
  PageProps<{
    site: {
      siteMetadata?: {
        title: string;
      };
    };
  }>
> = ({ data }) => {
  return (
    <p>
      No blog posts found. Add markdown posts to "content/blog" (or the directory you
      specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).
    </p>
  );
};

export default BlogIndex;
