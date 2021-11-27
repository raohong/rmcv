import type { IntrinsicElementsKeys, JSXIntrinsicElementProps } from '../types';

export type GridDirection = 'vertical' | 'horizontal';

export type GridProps = {
  /**
   * @description 列数
   * @default 3
   */
  column?: number;
  /**
   * @description 图标大小
   * @default 28
   */
  iconSize?: number | string;
  /**
   * @description 格子之间的间距
   */
  gutter?: number | string;
  /**
   * @description 是否显示边框
   */
  border?: boolean;
  /**
   * @description 是否将格子内容居中显示
   */
  center?: boolean;
  /**
   * @description 是否将格子固定为正方形
   */
  square?: boolean;
  /**
   * @description 是否开启格子点击反馈
   */
  clickable?: boolean;
  /**
   * @description 格子内容排列的方向
   * @default vertical
   */
  direction?: GridDirection;
  /**
   * @description 渲染组件
   * @default div
   */
  component?: IntrinsicElementsKeys;
} & JSXIntrinsicElementProps<'div'>;

export type GridItemProps = {
  /**
   * @description 文字内容
   */
  text?: React.ReactNode;
  /**
   * @description 图标
   */
  icon?: React.ReactNode;
  /**
   * @description 图标大小
   * @default 28
   */
  iconSize?: number | string;
  /**
   * @description 是否显示徽标小红点
   */
  dot?: boolean;
  /**
   * @description 右上角徽标的内容
   */
  badge?: number | string;
  /**
   * @description 徽标内容为数字时，最大值
   * @default 99
   */
  max?: number;
  /**
   * @description 当 content 是 0 时，是否显示
   * @default true
   */
  showZero?: boolean;
  /**
   * @description 渲染组件
   * @default div
   */
  component?: IntrinsicElementsKeys;
  /**
   * @description content 自定义
   */
  contentClassName?: string;
} & JSXIntrinsicElementProps<'div'>;
