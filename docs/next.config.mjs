import MDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import pkg from './package.json' assert { type: 'json' };

const withMDX = MDX({
  options: {
    remarkPlugins: [remarkGfm],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },
  transpilePackages: Object.keys(pkg.dependencies).filter(item =>
    item.includes('rmc'),
  ),
  compiler: {
    emotion: true,
  },
};

export default withMDX(nextConfig);
