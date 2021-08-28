import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'rmc-vant',
  outputPath: 'docs-dist',
  base: '/',
  publicPath: '/',
  mode: 'site',
  styles: ['.__dumi-default-device.__dumi-default-mobile-content-device {background:#fff}'],
  apiParser: {
    propFilter: {
      // 需要忽略的属性名列表，默认为空数组
      skipPropsWithName: ['ref', 'key'],
    },
  },
});
