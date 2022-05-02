export type DocCSSVarData = {
  name: string;
  defaultValue: string;
  description: null | string;
};

export type DocApiData = {
  description: Record<string, string> | null;
  name: string;
  type: string;
  defaultValue?: string;
  required: boolean;
};

export type DocMDMeta = {
  title: string;
  // 先只考虑一级嵌套
  category: string;
  type: string;
  subTitle?: string;
  order?: number;
  demo?: boolean;
  renderTitle?: boolean;
  theme?: 'light' | 'default';
};

export type DocMDData = Pick<
  DocMDMeta,
  'title' | 'order' | 'category' | 'type' | 'subTitle'
> & {
  name: string;
  locale: string;
  path: string;
  demoFilename?: string;
  demo?: string;
  content: string;
};

export type DocConfig = {
  defaultLocale: string;
  locales: {
    label: string;
    value: string;
  }[];
  translations: {
    api: Record<string, Record<string, string>>;
    cssVar: Record<string, Record<string, string>>;
  };

  menuOrders?: Record<string, Record<string, number>>;
};

export type DocAppMeta = Pick<DocConfig, 'defaultLocale' | 'locales'> & {
  repository: {
    url: string;
  };
};
