import type { SystemStyledComponentProps } from '@rmc-vant/system';
import type React from 'react';
import type {
  ComponentStyleOverrides,
  ComponentThemeConfig,
  JSXIntrinsicElementProps,
} from '../types';
import type { StepName, StepsName } from './classNames';

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

  items?: (Omit<StepProps, 'stepsComponentState'> & {
    key?: React.Key;
  })[];
};

export type StepsProps = JSXIntrinsicElementProps<StepsBaseProps> &
  SystemStyledComponentProps;

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
  label?: React.ReactNode;
  stepsComponentState: StepsComponentState;
  classNames?: Partial<Record<StepNSlot, string>>;
};

export type StepProps = JSXIntrinsicElementProps<StepBaseProps> &
  SystemStyledComponentProps;

export type StepsNSlot = 'root';
export type StepsSlot = StepsNSlot | 'horizontal' | 'vertical';

export type StepsComponentState = Required<
  Pick<StepsBaseProps, 'direction' | 'inactiveColor' | 'activeColor'>
>;

export type StepsStyleOverrides = ComponentStyleOverrides<
  StepsComponentState,
  StepsSlot
>;
export type StepsThemeConfig = ComponentThemeConfig<
  typeof StepsName,
  StepsProps,
  StepsStyleOverrides
>;

export type StepNSlot = 'root' | 'title' | 'tail' | 'iconWrapper' | 'icon' | 'dot';
export type StepSlot =
  | StepNSlot
  | 'process'
  | 'wait'
  | 'finish'
  | 'processTitle'
  | 'processTail'
  | 'processIcon'
  | 'processDot'
  | 'waitTitle'
  | 'waitTail'
  | 'waitIcon'
  | 'waitDot'
  | 'finishTitle'
  | 'finishTail'
  | 'finishIcon'
  | 'finishDot';

export type StepComponentState = {
  status: StepStatus;
} & StepsComponentState;

export type StepStyleOverrides = ComponentStyleOverrides<
  StepComponentState,
  StepSlot
>;
export type StepThemeConfig = ComponentThemeConfig<
  typeof StepName,
  StepProps,
  StepStyleOverrides
>;
