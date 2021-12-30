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
  subTitle?: string;
  demo?: boolean;
  renderTitle?: boolean;
};

export type DocMDData = {
  title: string;
  name: string;
  locale: string;
  path: string;
  subTitle?: string;
  category?: string;
  demoFilename?: string;
  demo?: string;
  content: string;
};

export type DocConfig = {
  defaultLocale: string;
  translations: {
    api: Record<string, Record<string, string>>;
    cssVar: Record<string, Record<string, string>>;
  };
};
