import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { useMemo } from 'react';
import { omit } from 'lodash';
import { DemoLayout, MDPageLayout, PageContext } from '../components';
import { getMenuData, removeSlash } from '../utils';
import { DEMO_NAV_URL } from '../constants';
import type { PageContextConsumerProps, DocMDNodeData, DocSiteMeta } from '../type';

const DocLayout: React.FC<{
  demo?: boolean;
  locale: string;
  pagePath: string;
}> = ({ children, locale, pagePath, demo }) => {
  const data = useStaticQuery<{
    site: {
      siteMetadata: DocSiteMeta;
    };
    allMarkdownRemark: {
      nodes: {
        id: string;
        fields: Omit<DocMDNodeData, 'id' | 'pagePath'> & {
          slug: string;
        };
      }[];
    };
  }>(graphql`
    {
      site {
        siteMetadata {
          title
          description
          defaultLocale
          locales {
            label
            value
          }
          repository {
            url
          }
        }
      }
      allMarkdownRemark {
        nodes {
          id
          fields {
            category
            demoName
            demoPath
            locale
            name
            slug
            subTitle
            title
            type
            menuOrder
            theme
          }
        }
      }
    }
  `);

  const {
    site: { siteMetadata },
    allMarkdownRemark,
  } = data;
  const nodeData = useMemo(
    () =>
      allMarkdownRemark.nodes.map((item) => ({
        ...omit(item.fields, 'slug'),
        pagePath: removeSlash(item.fields.slug),
        id: item.id,
      })),
    [allMarkdownRemark],
  );

  const { demoMenus, menus, currentDemoPath, demoMap } = useMemo(() => {
    const { menuData, demoMenuData, demoMap } = getMenuData(nodeData, locale);
    const currentDemo = !demo && demoMap.get(pagePath);

    return {
      menus: menuData,
      demoMenus: demoMenuData,
      currentDemoPath: currentDemo ? currentDemo.demoPath! : DEMO_NAV_URL,
      demoMap,
    };
  }, [nodeData, pagePath, locale, demo]);

  const pageContextValue: PageContextConsumerProps = useMemo(
    () => ({
      locale,
      pagePath,
      site: siteMetadata,
      demoMenus,
      menus,
      currentDemoPath,
      demoMap,
    }),
    [locale, pagePath, siteMetadata, demoMenus, menus, currentDemoPath, demoMap],
  );

  return (
    <PageContext.Provider value={pageContextValue}>
      {demo ? (
        <DemoLayout>{children}</DemoLayout>
      ) : (
        <MDPageLayout>{children}</MDPageLayout>
      )}
    </PageContext.Provider>
  );
};

export default DocLayout;
