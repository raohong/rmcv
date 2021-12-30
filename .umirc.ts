import { defineConfig } from 'dumi';

export default defineConfig({
  plugins: ['./plugins/index.ts'],
  title: 'rmcv',
  outputPath: 'docs-dist',
  base: '/',
  publicPath: '/',
  mode: 'doc',
  apiParser: {
    propFilter: {
      propFilter: {
        skipNodeModules: true,
        skipPropsWithName: ['key', 'ref'],
        skipPropsWithoutDoc: true,
      },
    },
  },
  logo: '/images/logo.png',
  sitemap: {
    hostname: 'http://localhost:8000',
  },
  themeConfig: {
    redirectUrl: '/guide',
    desc: 'Vant 的 React 实现',
  },
});
