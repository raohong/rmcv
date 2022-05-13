import React from 'react';
import type { JSXIntrinsicElementProps } from '../types';

export type RadioShape = 'round' | 'square';

export type RadioLabelPosition = 'left' | 'right';

export type RadioGroupDirection = 'vertical' | 'horizontal';

export type RadioValue = string | number;

type Size = string | number;

type RadioBaseProps<V extends RadioValue = RadioValue> = {
  /**
   * @description 根据 value 进行比较，判断是否选中
   */
  value?: V;
  /**
   * @description 指定当前是否选中
   */
  checked?: boolean;
  /**
   * @description 形状，可选值为 square
   * @default round
   */
  shape?: RadioShape;
  /**
   * @description 是否为禁用状态
   */
  disabled?: boolean;
  /**
   * @description 文本位置，可选值为 left
   * @default right
   */
  labelPosition?: RadioLabelPosition;
  /**
   * @description 图标大小
   * @default 20
   */
  iconSize?: Size;
  /**
   * @description 选中状态颜色
   * @default #1989fa
   */
  checkedColor?: string;
  /**
   * @description 自定义 icon
   */
  renderIcon?: (checked: boolean) => React.ReactNode;
  /**
   * @description 值变化时调用
   */
  onChange?: (value?: V) => void;
};

type RadioGroupBaseProps<V extends RadioValue> = {
  /**
   * @description 是否禁用所有单选框
   */
  disabled?: boolean;
  /**
   * @description 排列方向，可选值为 horizontal
   * @default vertical
   */
  direction?: RadioGroupDirection;
  /**
   * @description 所有单选框的图标大小
   * @default 20
   */
  iconSize?: Size;
  /**
   * @description 所有单选框的选中状态颜色
   * @default #1989fa
   */
  checkedColor?: string;
  /**
   * @description 当前选中的值
   */
  value?: V;
  /**
   * @description 默认当前选中的值
   */
  defaultValue?: V;
  /**
   * @description
   */
  onChange?: (value?: V) => void;
  /**
   * @description RadioGroup 下所有 input[type="radio"] 的 name 属性
   */
  name?: string;
  /**
   * @description 自定义 icon
   */
  renderIcon?: (checked: boolean) => React.ReactNode;
  /**
   * @description 形状，可选值为 square
   * @default round
   */
  shape?: RadioShape;
};

export type RadioGroupProps<V extends RadioValue> = JSXIntrinsicElementProps<
  RadioGroupBaseProps<V>
>;

export type RadioProps<V extends RadioValue> = JSXIntrinsicElementProps<
  RadioBaseProps<V>,
  'label',
  'onChange'
>;

export type RadioContextState<T extends RadioValue = RadioValue> = {
  value?: T;
  name?: string;
  iconSize?: Size;
  checkedColor?: string;
  renderIcon?: (checked: boolean) => React.ReactNode;
  disabled?: boolean;
  onChange: (value?: T) => void;
  shape?: RadioShape;
};
