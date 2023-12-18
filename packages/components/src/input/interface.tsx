import React from 'react';
import {
  ComponentStyleOverrides,
  ComponentThemeConfig,
  JSXIntrinsicElementProps,
} from '../types';
import type { InputName, TextareaName } from './classNames';
import type { IInputStyledComponents } from './styles';

export type InputClearTrigger = 'focus' | 'always';

export type InputFormatTrigger = 'onBlur' | 'onChange';

export type InputType = 'email' | 'number' | 'password' | 'tel' | 'text' | 'digit';
export type InputAlign = 'left' | 'right' | 'center';

export type TextareaAutoSize =
  | boolean
  | {
      minRows?: number;
      maxRows?: number;
    };

export type InputCommonProps<T extends HTMLElement> = {
  /**
   * @description 当前输入的值
   */
  value?: string;
  /**
   * @description 默认输入的值
   */
  defaultValue?: string;
  /**
   * @description 输入值变动时触发
   */
  onChange?: (value: string) => void;
  /**
   * @description 输入的最大字符数
   */
  maxLength?: number;
  /**
   * 输入框占位提示文字
   */
  placeholder?: string;
  /**
   * @description 是否显示内边框
   */
  border?: boolean;
  /**
   * @description 是否禁用输入框
   */
  disabled?: boolean;
  /**
   * @description 是否为只读状态，只读状态下无法输入内容
   */
  readonly?: boolean;
  /**
   * @description 输入内容格式化函数
   */
  formatter?: (value: string) => string;
  /**
   * @description 格式化函数触发的时机，可选值为 onBlur
   * @default onChange
   */
  formatTrigger?: InputFormatTrigger;
  /**
   * @description 聚焦时触发
   */
  onFocus?: (evt: React.FormEvent<T>) => void;
  /**
   * @description 失去焦点时触发
   */
  onBlur?: (evt: React.FormEvent<T>) => void;
  /**
   * @description 是否显示字数统计，需要设置 maxlength 属性
   */
  showWorldLimit?: boolean;
  /**
   * @description 点击清除图标时触发
   */
  onClear?: () => void;
  /**
   * @description 清楚图标
   */
  clearIcon?: React.ReactNode;
  /**
   * @description 是否启用清除图标，点击清除图标后会清空输入框
   */
  clearable?: boolean;
  /**
   * @description 显示清除图标的时机，always 表示输入框不为空时展示，focus 表示输入框聚焦且不为空时展示
   * @default focus
   */
  clearTrigger?: InputClearTrigger;
  /**
   * @description 前缀
   */
  prefix?: React.ReactNode;
  /**
   * @description 后缀
   */
  suffix?: React.ReactNode;
  /**
   * @description 前置标签
   */
  addonBefore?: React.ReactNode;
  /**
   * @description 后置标签
   */
  addonAfter?: React.ReactNode;
  /**
   * @description 输入框对齐方式，可选值为 center right
   * @default left
   */
  inputAlign?: InputAlign;
  status?: 'error';
  classNames?: Partial<Record<InputNSlot, string>>;
};

type InternalInputBaseProps = InputCommonProps<HTMLInputElement> & {
  /**
   * @description 输入框类型, 支持原生 input 标签
   * @default text
   */
  type?: InputType;
  wrapperProps?: JSXIntrinsicElementProps<{}, 'div', 'children' | 'ref'>;
};

export type InputNSlot =
  | 'root'
  | 'clearIcon'
  | 'addonAfter'
  | 'addonBefore'
  | 'suffix'
  | 'counter'
  | 'input'
  | 'prefix';

export type InputSlot =
  | InputNSlot
  | 'readonly'
  | 'disabled'
  | 'border'
  | 'sizeLarge'
  | 'focused';

export type InputComponentState = {
  readonly: boolean;
  disabled: boolean;
  border: boolean;
  inputAlign: InputAlign;
  focused: boolean;
  inputType: typeof InputName | typeof TextareaName;
  autoSize?: boolean;
  status?: 'error';
};

type InternalTextareaBaseProps = InputCommonProps<HTMLTextAreaElement> & {
  autoSize?: TextareaAutoSize;
  wrapperProps?: JSXIntrinsicElementProps<{}, 'div', 'children' | 'ref'>;
};

export type InputProps = JSXIntrinsicElementProps<InternalInputBaseProps, 'input'>;

export type TextareaProps = JSXIntrinsicElementProps<
  InternalTextareaBaseProps,
  'textarea'
>;

export type CommonInputProps = (InputProps | TextareaProps) & {
  inputType: typeof InputName | typeof TextareaName;
  inputRef?: React.Ref<HTMLElement>;
  styledComponents: IInputStyledComponents;
};

export type InputRef = {
  focus: () => void;
  blur: () => void;
};

export type InputStyleOverrides = ComponentStyleOverrides<InputProps, InputSlot>;
export type TextareaStyleOverrides = ComponentStyleOverrides<
  TextareaProps,
  InputSlot
>;

export type InputThemeConfig = ComponentThemeConfig<
  typeof InputName,
  InputProps,
  InputStyleOverrides
>;
export type TextareaThemeConfig = ComponentThemeConfig<
  typeof TextareaName,
  TextareaProps,
  TextareaStyleOverrides
>;
