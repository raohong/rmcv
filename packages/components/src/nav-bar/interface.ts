import type React from 'react';
import type { JSXIntrinsicElementProps } from '../types';

type NavBarBaseProps = {
  /**
   * @description 标题
   */
  title?: React.ReactNode;
  /**
   * 左侧文案
   */
  leftText?: React.ReactNode;
  /**
   * 右侧文案
   */
  rightText?: React.ReactNode;
  /**
   * @description 	是否显示左侧箭头
   */
  leftArrow?: boolean;
  /**
   * 自定义左侧区域内容
   */
  left?: React.ReactNode;
  /**
   * 自定义右侧区域内容
   */
  right?: React.ReactNode;
  /**
   * @description 是否显示下边框
   */
  border?: boolean;
  /**
   * @description 是否固定在顶部
   */
  fixed?: boolean;
  /**
   * @description 固定在顶部时，是否在标签位置生成一个等高的占位元素
   */
  placeholder?: boolean;
  /**
   * @description 导航栏 z-index
   * @default 1
   */
  zIndex?: number;
  /**
   * @description 是否开启顶部安全区适配
   * @default true
   */
  safeAreaInsetTop?: boolean;
  /**
   * @description 点击左侧按钮时触发
   */
  onClickLeft?: (evt: React.MouseEvent) => void;
  /**
   * @description 点击右侧按钮时触发
   */
  onClickRight?: (evt: React.MouseEvent) => void;
};

export type NavBarProps = JSXIntrinsicElementProps<NavBarBaseProps>;
