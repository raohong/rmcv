import React from 'react';
import type { JSXIntrinsicElementProps } from '../types';

export type StepsDirection = 'horizontal' | 'vertical';

export type StepStatus = 'process' | 'wait' | 'finish';

type StepsBaseProps = {
  /**
   * @description 当前步骤，从0开始计数
   */
  current?: number;
  /**
   * @description 当前步骤变换时回调
   */
  onChange?: (current: number) => void;
  /**
   * @description 布局方向
   * @default vertical
   */
  direction?: StepsDirection;
  /**
   * @description 当前步骤的图标
   */
  activeIcon?: React.ReactNode;
  /**
   * @description 非当前步骤的图标
   */
  inactiveIcon?: React.ReactNode;
  /**
   * @description 已完成步骤的图标，优先级大于 inactiveIcon
   */
  finishIcon?: React.ReactNode;
  /**
   * @description 当前步骤和已完成步骤的颜色
   */
  activeColor?: string;
  /**
   * @description 未激活步骤的颜色
   */
  inactiveColor?: string;
};

export type StepsProps = JSXIntrinsicElementProps<StepsBaseProps>;

type StepBaseProps = {
  /**
   * @description 步骤条内容
   */
  children?: React.ReactNode;
  /**
   * @description 当前步骤的图标
   */
  icon?: React.ReactNode;
  /**
   * @description 当前步骤状态
   */
  status?: StepStatus;
  /**
   * @description 是否可点击
   */
  clickable?: boolean;
};

export type StepProps = JSXIntrinsicElementProps<StepBaseProps>;
