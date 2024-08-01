import type { Options } from 'prettier';

export type DocApiData = {
  description: Record<string, string> | null;
  name: string;
  type: string;
  defaultValue?: string;
  required: boolean;
};

export type DocMDMeta = {
  title: string;
  category: string;
  group: string;
  subTitle?: string;
  docs?: boolean;
  renderTitle?: boolean;
  // 暂时只针对 component 处理
  isPackage?: boolean;
  theme?: 'light';
  style?: string;
  // 指定文件渲染demo
  demo?: string;
};

export type DocMDData = DocMDMeta & {
  name: string;
  locale: string;
  filename: string;
  content: string;
  demoStore?: Map<string, IDemoData>;
  route: string;
  demoRoute?: string;
  destFilename: string;
};

export type DocConfig = {
  defaultLocale: string;
  locales: {
    label: string;
    value: string;
  }[];
  orders?: {
    menus?: Record<string, number>;
    group?: Record<string, number>;
  };
  translations?: Record<
    string,
    {
      menus?: Record<string, string>;
      groups?: Record<string, string>;
    }
  >;
};

export type DocAppMeta = Pick<DocConfig, 'defaultLocale' | 'locales'> & {
  repository: {
    url: string;
  };
};

export type IContext = {
  root: string;
  docsRoot: string;
  buildRoot: string;
  iconPkgRoot: string;
  componentPkgRoot: string;
  pageRoot: string;
  config: DocConfig;
  pkg: Record<string, any>;
  nextRoot: string;
  virtualRoot: string;
  demo?: string;
  formatCode: (code: string, options?: Options) => Promise<string>;
};

export type IDemoData = {
  filename: string;
  code: string;
  previewCode: string | null;
  title: string | null;
  componentName: string;
  locale: string;
  dataVariableName: string;
};

export type INavigationData = Pick<
  DocMDData,
  | 'route'
  | 'category'
  | 'group'
  | 'locale'
  | 'title'
  | 'subTitle'
  | 'theme'
  | 'style'
  | 'demoRoute'
>;

export type INavigationMenu = {
  category: string;
  title: string;
  menus: { group: string; title: string; subMenus: INavigationData[] }[];
};
