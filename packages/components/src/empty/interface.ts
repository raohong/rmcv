import type { SystemStyledComponentProps } from '@rmc-vant/system';
import type React from 'react';
import type {
  ComponentStyleOverrides,
  ComponentThemeConfig,
  JSXIntrinsicElementProps,
  LiteralUnion,
} from '../types';
import type { EmptyName } from './classNames';

export type EmptyImageType = 'default' | 'error' | 'network' | 'search';

type ImageSize = string | number;

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

  classNames?: Partial<Record<EmptyNSlot, string>>;
};

export type EmptyProps = JSXIntrinsicElementProps<EmptyBaseProps> &
  SystemStyledComponentProps;

export type EmptyComponentState = {
  imageSize: [ImageSize, ImageSize];
  hasExtra: boolean;
  hasDescription: boolean;
};

export type EmptyNSlot = 'root' | 'image' | 'description' | 'icon' | 'extra';
export type EmptySlot = EmptyNSlot;

export type EmptyStyleOverrides = ComponentStyleOverrides<
  EmptyComponentState,
  EmptySlot
>;

export type EmptyThemeConfig = ComponentThemeConfig<
  typeof EmptyName,
  EmptyProps,
  EmptyStyleOverrides
>;
