import React from 'react';

export type DocSiteMeta = {
  title: string;
  defaultLocale: string;
  locales: {
    label: string;
    value: string;
  }[];
  repository: {
    url: string;
  };
};

export type PageData = {
  pageContext: {
    slug: string;
    langKey: string;
  };
  path: string;
};

export type LayoutData = {
  siteMeta: DocSiteMeta;
  menuData: DocMDNodeData[];
};

export type DocMDNodeData = {
  subTitle?: string;
  locale: string;
  name: string;
  title: string;
  id: string;
  category: string;
  type: string;
  demoName?: string;
  demoPath?: string;
  pagePath: string;
  menuOrder?: number;
  order?: number;
  theme?: 'light' | 'default';
};

export type MenuItem = DocMDNodeData & {
  menuName: string;
  type: string;
};

export type MenuData = { menuName: string | null; children: MenuItem[] }[];

export type DemoMenuData = { menuName: string; children: MenuItem[] }[];

export type PageContextConsumerProps = {
  locale: string;
  pagePath: string;
  site: DocSiteMeta;
  menus: MenuData;
  demoMenus: DemoMenuData;
  currentDemoPath: string;
  demoMap: Map<string, DocMDNodeData>;
};
