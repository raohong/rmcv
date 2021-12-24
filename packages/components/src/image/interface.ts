import { JSXIntrinsicElementProps } from '../types';

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
   * @description 图片裁剪模式 ， 详情见 https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit
   */
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  height?: string | number;
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
   */
  showLoading?: boolean;
  /**
   * @description 是否显示加载错误
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
