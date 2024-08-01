import type { MDXComponents } from 'mdx/types';
import CustomMdxComponents from '@/components/CustomMDXComponents';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...CustomMdxComponents,
  };
}
