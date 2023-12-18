import { SystemStyledComponentProps } from '@rmc-vant/system';
import React from 'react';
import {
  ComponentStyleOverrides,
  ComponentThemeConfig,
  IntrinsicElementsKeys,
  JSXIntrinsicElementProps,
} from '../types';
import type { CellGroupName, CellName } from './classNames';

export type CellArrowDirection = 'left' | 'up' | 'down' | 'right';

export type CellSize = 'normal' | 'large';

export type CellContextState = {
  bordered?: boolean;
  size?: CellSize;
};

type CellBaseProps = {
  /**
   * @description 左侧标题
   */
  title?: React.ReactNode;
  /**
   * @description 右侧内容
   */
  value?: React.ReactNode;
  /**
   * @description 标题下方的描述信息
   */
  label?: React.ReactNode;
  /**
   * @description 左侧图标或图片链接
   */
  icon?: React.ReactNode;
  /**
   * @description 右侧图标
   */
  rightIcon?: React.ReactNode;
  /**
   * @description 是否显示内边框
   */
  border?: boolean;
  /**
   * @description 单元格大小，可选值为 large
   * @default normal
   */
  size?: CellSize;
  /**
   * @description 是否开启点击反馈
   */
  clickable?: boolean;
  /**
   * @description 是否展示右侧箭头并开启点击反馈
   */
  isLink?: boolean;
  /**
   * @description 是否使内容垂直居中
   */
  center?: boolean;
  /**
   * @description 箭头方向
   * @default right
   */
  arrowDirection?: CellArrowDirection;
  component?: IntrinsicElementsKeys;
  classNames?: Partial<Record<CellNSlot, string>>;
};

export type CellProps = JSXIntrinsicElementProps<CellBaseProps> &
  SystemStyledComponentProps;

export type CellNSlot =
  | 'root'
  | 'label'
  | 'value'
  | 'title'
  | 'arrow'
  | 'icon'
  | 'rightIcon';
export type CellSlot = CellNSlot | 'sizeLarge' | 'sizeNormal';

export type CellComponentState = {
  border: boolean;
  size: CellSize;
  clickable: boolean;
  center: boolean;
  arrowDirection: CellArrowDirection;
};

type CellStyleOverrides = ComponentStyleOverrides<CellComponentState, CellSlot>;

export type CellThemeConfig = ComponentThemeConfig<
  typeof CellName,
  CellProps,
  CellStyleOverrides
>;

type CellGroupBaseProps = {
  /**
   * @description 分组标题
   */
  title?: React.ReactNode;
  /**
   * @description 是否显示外边框
   * @default true
   */
  border?: boolean;
  /**
   * @description 是否展示为圆角卡片风格
   */
  inset?: boolean;
  /**
   * @description 设置 Cell 的大小
   */
  size?: CellSize;
  component?: IntrinsicElementsKeys;
  classNames?: Partial<Record<CellGroupNSlot, string>>;
};

export type CellGroupNSlot = 'root' | 'title' | 'content';
export type CellGroupSlot = CellGroupNSlot | 'border' | 'inset';

export type CellGroupComponentState = {
  border: boolean;
  inset: boolean;
  size: CellSize;
};

type CellGroupStyleOverrides = ComponentStyleOverrides<
  CellGroupComponentState,
  CellGroupSlot
>;

export type CellGroupProps = JSXIntrinsicElementProps<CellGroupBaseProps> &
  SystemStyledComponentProps;

export type CellGroupThemeConfig = ComponentThemeConfig<
  typeof CellGroupName,
  CellGroupProps,
  CellGroupStyleOverrides
>;
