import Link from 'next/link';
import clsx from 'clsx';
import type { MDXComponents } from 'mdx/types';
import Code from './Code';
import Demo from './Demo';
import Hero from './Hero';

import ComponentCounter from './ComponentCounter';

const CustomMdxComponents = {
  Demo,
  code: ({
    className,
    children,
    ...rest
  }: {
    className?: string;
    children: string;
  }) => {
    if (!className || !className.includes('language-')) {
      return (
        <code className={className} {...rest}>
          {children}
        </code>
      );
    }

    return <Code code={children} lang={className.replace('language-', '')} />;
  },
  a: Link,
  Hero,
  ComponentCounter,
  table: props => (
    <div className='overflow-x-auto'>
      <table {...props} />
    </div>
  ),
  td: props => (
    <td>
      <div className='max-w-[20rem] overflow-x-auto whitespace-nowrap' {...props} />
    </td>
  ),
  Block: ({ level = 1, ...props }) => (
    <div
      className={clsx(level === 1 && 'mb-8', level === 2 && 'mb-4')}
      {...props}
    >
    </div>
  ),
} as MDXComponents;

export default CustomMdxComponents;
