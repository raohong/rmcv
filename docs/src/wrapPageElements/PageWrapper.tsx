import React from 'react';
import { WrapPageElementBrowserArgs } from 'gatsby';
import PageLayout from '../layouts/PageLayout';
import { removeSlash } from '../utils';
import { DEMO_NAV_URL } from '../constants';

const PageWrapper = ({
  element,
  props: { pageContext, ...rest },
}: WrapPageElementBrowserArgs<
  {
    markdownRemark: any;
  },
  {
    langKey: string;
    slug: string;
  }
>) => {
  return (
    <PageLayout
      locale={pageContext.langKey}
      pagePath={removeSlash(pageContext.slug)}
      demo={pageContext.slug?.includes(DEMO_NAV_URL)}
      {...rest}
    >
      {element}
    </PageLayout>
  );
};

export default PageWrapper;
