import { SystemStyledComponentProps } from '@rmc-vant/system';
import React from 'react';
import type {
  ComponentStyleOverrides,
  ComponentThemeConfig,
  JSXIntrinsicElementProps,
} from '../types';
import { RadioGroupName, RadioName } from './classNames';

export type RadioShape = 'round' | 'square';

export type RadioLabelPosition = 'left' | 'right';

export type RadioGroupDirection = 'vertical' | 'horizontal';

export type RadioValue = string | number;

export type RadioOption = {
  disabled?: boolean;
  value: RadioValue;
  label?: React.ReactNode;
};

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
  size?: Size;
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

  classNames?: Partial<Record<RadioNSlot, string>>;
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
  size?: Size;
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

  labelPosition?: RadioLabelPosition;
  options?: RadioOption[];
};

export type RadioGroupProps<V extends RadioValue = RadioValue> =
  JSXIntrinsicElementProps<RadioGroupBaseProps<V>> & SystemStyledComponentProps;

export type RadioProps<V extends RadioValue = RadioValue> = JSXIntrinsicElementProps<
  RadioBaseProps<V>,
  'label',
  'onChange'
> &
  SystemStyledComponentProps;

export type RadioNSlot = 'root' | 'label' | 'inner' | 'icon';
export type RadioSlot = RadioNSlot | 'disabled' | 'checked';

export type RadioComponentState = Required<
  Omit<RadioGroupComponentState, 'direction'>
> & {
  checked: boolean;
  customIcon: boolean;
};

export type RadioStyleOverrides = ComponentStyleOverrides<
  RadioComponentState,
  RadioSlot
>;

export type RadioThemeConfig = ComponentThemeConfig<
  typeof RadioName,
  RadioProps,
  RadioStyleOverrides
>;

export type RadioGroupComponentState = {
  disabled: boolean;
  direction: RadioGroupDirection;
  labelPosition?: RadioLabelPosition;
  checkedColor?: string;
  shape?: RadioShape;
  size?: Size;
};

export type RadioGroupNSlot = 'root';
export type RadioGroupSlot =
  | RadioGroupNSlot
  | 'disabled'
  | 'horizontal'
  | 'vertical';

export type RadioGroupStyleOverrides =
  ComponentStyleOverrides<RadioGroupComponentState>;
export type RadioGroupThemeConfig = ComponentThemeConfig<
  typeof RadioGroupName,
  RadioGroupProps,
  RadioGroupStyleOverrides
>;

export type RadioContextState = {
  value?: RadioValue;
  name?: string;
  renderIcon?: (checked: boolean) => React.ReactNode;
  onChange: (value?: RadioValue) => void;
  componentState: RadioGroupComponentState;
};
