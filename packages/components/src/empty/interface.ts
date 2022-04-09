import type React from 'react';
import type { JSXIntrinsicElementProps, LiteralUnion } from '../types';

export type EmptyImageType = 'default' | 'error' | 'network' | 'search';

type ImageSize = React.CSSProperties['width'];

type EmptyBaseProps = {
  /**
   * @description 图片类型，可选值为 error network search，支持传入图片 URL 好 React.ReactNode
   */
  image?: LiteralUnion<EmptyImageType, string | React.ReactElement>;
  /**
   * @description 图片大小，默认单位为
   */
  imageSize?: ImageSize | [ImageSize, ImageSize];
  /**
   * @description 图片下方的描述文字
   */
  description?: React.ReactNode;
};

export type EmptyProps = JSXIntrinsicElementProps<EmptyBaseProps>;
