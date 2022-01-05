import { readFileSync, existsSync } from 'fs';
import { merge } from 'lodash';
import * as path from 'path';
import type { DocConfig } from './type';

const defaultConfig: DocConfig = {
  defaultLocale: 'zh-CN',
  locales: [
    {
      value: 'zh-CN',
      label: '中文',
    },
  ],
  translations: {
    api: {
      'zh-CN': {
        name: '参数',
        description: '说明',
        type: '类型',
        defaultValue: '默认值',
      },
    },
    cssVar: {
      'zh-CN': {
        name: '名称',
        description: '说明',
        defaultValue: '默认值',
      },
      'en-US': {
        name: 'Name',
        description: 'Description',
        defaultValue: 'Default Value',
      },
    },
  },
};

const readConfig = (root: string): DocConfig => {
  const name = 'docs.config.json';
  const filePath = path.join(root, name);

  if (existsSync(filePath)) {
    const data = JSON.parse(readFileSync(filePath).toString()) as DocConfig;

    return merge({}, defaultConfig, data);
  }

  return defaultConfig;
};

export default readConfig;
