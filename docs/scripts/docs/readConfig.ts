import { existsSync, readFileSync } from 'node:fs';
import * as path from 'node:path';
import { merge } from 'lodash';
import type { DocConfig } from './type';

const defaultConfig: DocConfig = {
  defaultLocale: 'zh-CN',
  locales: [
    {
      value: 'zh-CN',
      label: '中文',
    },
  ],
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
