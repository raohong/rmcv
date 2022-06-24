import React from 'react';
import { JSXIntrinsicElementProps } from '../types';

type PasswordInputBaseProps = {
  /**
   * @description 密码值
   */
  value?: string;
  /**
   * @description 输入框下方文字提示
   */
  info?: React.ReactNode;
  /**
   * @description 输入框下方错误提示
   */
  errorInfo?: React.ReactNode;
  /**
   * @description 密码最大长度
   * @default 6
   */
  length?: number;
  /**
   * @description 输入框格子之间的间距
   */
  gutter?: string | number;
  /**
   * @description 是否隐藏密码内容
   */
  mask?: boolean;
  /**
   * @description 聚焦时触发
   */
  onFocus?: () => void;
  /**
   * @description 是否已聚焦，聚焦时会显示光标
   */
  focused?: boolean;
};

export type PasswordInputProps = JSXIntrinsicElementProps<
  PasswordInputBaseProps,
  'label'
>;
