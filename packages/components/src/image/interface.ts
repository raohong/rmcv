import { JSXIntrinsicElementProps, LiteralUnion } from '../types';

type ImagePosition = 'center' | 'left' | 'top' | 'bottom' | 'right';

type ImageBaseProps = {
  /**
   * @description 图片链接
   */
  src?: string;
  /**
   * @description 图片 srcSet
   */
  srcSet?: string;
  /**
   * @description 图片 alt
   */
  alt?: string;
  /**
   * @description 图片裁剪模式，详情见 [object-fit](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit)
   */
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  /**
   * @description 图片位置，详情见 [object-position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-position)
   */
  position?: LiteralUnion<ImagePosition>;
  /**
   * @description 高度
   */
  height?: string | number;
  /**
   * @description 宽度
   */
  width?: string | number;
  /**
   * @description 是否是圆形
   */
  radius?: number | string;
  /**
   * @description 图片 borderRadius
   */
  round?: boolean;
  /**
   * @description 是否开启 lazyLoad
   */
  lazyLoad?: boolean;
  /**
   * @description 是否显示 loading
   * @default true
   */
  showLoading?: boolean;
  /**
   * @description 是否显示加载错误
   * @default true
   */
  showError?: boolean;
  /**
   * @description 自定义 error
   */
  errorIcon?: React.ReactNode;
  /**
   * @description 自定义 loading
   */
  loadingIcon?: React.ReactNode;
};

export type ImageProps = JSXIntrinsicElementProps<ImageBaseProps>;
