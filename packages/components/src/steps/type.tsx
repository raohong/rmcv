import React from 'react';

export type StepsDirection = 'horizontal' | 'vertical';

export type StepsStatus = 'active' | 'inactive' | 'finish';

export type StepsProps = {
  /**
   * @description 当前步骤，从0开始计数
   */
  current?: number;
  /**
   * @description 当前步骤变换时回调
   */
  onChange?: (current?: number) => void;
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
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>;

export type StepProps = {
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
  status?: StepsStatus;
} & React.HTMLAttributes<HTMLDivElement>;
