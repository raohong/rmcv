import { SystemStyledComponentProps } from '@rmc-vant/system';
import {
  ComponentStyleOverrides,
  ComponentThemeConfig,
  JSXIntrinsicElementProps,
} from '../types';
import { DividerName } from './classNames';

export type DividerContentPosition = 'left' | 'right' | 'center';

type DividerBaseProps = {
  /**
   * @description 文本内容
   */
  contentPosition?: DividerContentPosition;
  /**
   * @description border 样式是否是 dashed
   */
  dashed?: boolean;
  /**
   * @description 是否是 0.5px
   */
  hairline?: boolean;

  classNames?: Partial<Record<DividerNSlot, string>>;
};

export type DividerProps = JSXIntrinsicElementProps<DividerBaseProps> &
  SystemStyledComponentProps;

export type DividerComponentState = Required<Omit<DividerBaseProps, 'classNames'>>;

export type DividerNSlot = 'root' | 'text';

export type DividerSlot =
  | DividerNSlot
  | 'dashed'
  | 'positionCenter'
  | 'positionLeft'
  | 'positionRight';

export type DividerStyleOverrides = ComponentStyleOverrides<
  DividerComponentState,
  DividerSlot
>;

export type DividerThemeConfig = ComponentThemeConfig<
  typeof DividerName,
  DividerProps,
  DividerStyleOverrides
>;
