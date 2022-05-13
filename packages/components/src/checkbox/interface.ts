import React from 'react';
import type { JSXIntrinsicElementProps } from '../types';

export type CheckboxShape = 'round' | 'square';

export type CheckboxLabelPosition = 'left' | 'right';

export type CheckboxGroupDirection = 'vertical' | 'horizontal';

export type CheckboxValue = string | number;

type Size = string | number;

type CheckboxBaseProps<V extends CheckboxValue = CheckboxValue> = {
  /**
   * @description 根据 value 进行比较，判断是否选中
   */
  value?: V;
  /**
   * @description 指定当前是否选中
   */
  checked?: boolean;
  /**
   * @description 是否默认选中
   */
  defaultChecked?: boolean;
  /**
   * @description 形状，可选值为 square
   * @default round
   */
  shape?: CheckboxShape;
  /**
   * @description 是否为禁用状态
   */
  disabled?: boolean;
  /**
   * @description 文本位置，可选值为 left
   * @default right
   */
  labelPosition?: CheckboxLabelPosition;
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
  onChange?: (checked: boolean) => void;
};

type CheckboxGroupBaseProps<V extends CheckboxValue> = {
  /**
   * @description 是否禁用所有单选框
   */
  disabled?: boolean;
  /**
   * @description 排列方向，可选值为 horizontal
   * @default vertical
   */
  direction?: CheckboxGroupDirection;
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
  value?: V[];
  /**
   * @description 默认当前选中的值
   */
  defaultValue?: V[];
  /**
   * @description
   */
  onChange?: (value?: V[]) => void;
  /**
   * @description CheckboxGroup 下所有 input[type="Checkbox"] 的 name 属性
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
  shape?: CheckboxShape;
  /**
   * @description 最大可选数，0 为无限制
   */
  max?: number;
};

export type CheckboxGroupProps<V extends CheckboxValue> = JSXIntrinsicElementProps<
  CheckboxGroupBaseProps<V>
>;

export type CheckboxProps<V extends CheckboxValue> = JSXIntrinsicElementProps<
  CheckboxBaseProps<V>,
  'label',
  'onChange'
>;

export type CheckboxContextState<T extends CheckboxValue = CheckboxValue> = {
  getChecked: (val?: T) => boolean;
  name?: string;
  iconSize?: Size;
  checkedColor?: string;
  renderIcon?: (checked: boolean) => React.ReactNode;
  disabled?: boolean;
  onChange: (value?: T) => void;
  shape?: CheckboxShape;
};
