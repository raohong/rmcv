import { SystemStyledComponentProps } from '@rmc-vant/system';
import React from 'react';
import type {
  ComponentStyleOverrides,
  ComponentThemeConfig,
  IntrinsicElementsKeys,
  JSXIntrinsicElementProps,
} from '../types';
import { GridName } from './classNames';

export type GridDirection = 'vertical' | 'horizontal';

type GridBaseProps = {
  /**
   * @default 12
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

  classNames?: Partial<Record<'root' | 'item' | 'itemContent', string>>;

  items?: (GridItemProps & { label?: React.ReactNode; key?: React.Key })[];
};

export type GridProps = JSXIntrinsicElementProps<GridBaseProps, 'div'> &
  SystemStyledComponentProps;

type GridItemBaseProps = {
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
  /**
   * @description 是否开启格子点击反馈
   */
  clickable?: boolean;

  componentState: GridComponentState;
  slotClassNames: Record<GridNSlot, string>;
};

export type GridItemProps = JSXIntrinsicElementProps<GridItemBaseProps, 'div'> &
  SystemStyledComponentProps;

export type GridComponentState = Required<
  Pick<
    GridBaseProps,
    | 'gutter'
    | 'clickable'
    | 'direction'
    | 'square'
    | 'center'
    | 'border'
    | 'column'
    | 'iconSize'
  >
>;

export type GridNSlot = 'root' | 'item' | 'itemContent' | 'itemText' | 'itemIcon';
export type GridSlot = GridNSlot | 'vertical' | 'horizontal' | 'square';

export type GridStyleOverrides = ComponentStyleOverrides<GridComponentState>;

export type GridThemeConfig = ComponentThemeConfig<
  typeof GridName,
  GridProps,
  GridStyleOverrides
>;
