import type { JSXIntrinsicElementProps } from '../types';

export type EmptyImageType = 'default' | 'error' | 'network' | 'search';

type EmptyBaseProps = {
  type?: EmptyImageType;
  image?: React.ReactNode;
  imageStyle?: React.CSSProperties;
  description?: React.ReactNode;
};

export type EmptyProps = JSXIntrinsicElementProps<EmptyBaseProps>;
