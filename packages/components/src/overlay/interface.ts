import React from 'react';
import type { SpringConfig } from '@react-spring/web';
import type { JSXIntrinsicElementProps } from '../types';

type OverlayBaseProps = {
  /**
   * @description overlay 可见性
   */
  visible?: boolean;
  /**
   * @description 关闭是是否卸载 children
   */
  lazyRender?: boolean;
  /**
   * @description 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动
   */
  lockScroll?: boolean;
  /**
   * @description overlay z-index
   */
  zIndex?: number;
  /**
   * @description overlay 动画持续时间
   */
  duration?: number;
  /**
   * @description overlay 自定义 class
   */
  className?: string;
  /**
   * @description overlay 自定义 style
   */
  style?: React.CSSProperties;
  /**
   * @description 点击事件
   */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  /**
   * @description overlay 内容
   */
  children?: React.ReactNode;
  /**
   * @description 自定义 config
   */
  springConfig?: SpringConfig;
};

export type OverlayProps = JSXIntrinsicElementProps<OverlayBaseProps>;
