import { SystemStyledComponentProps, SystemSxInterpolation } from '@rmc-vant/system';
import type { RefAttributes } from 'react';
import type { LoadingProps } from '../loading';
import type {
  ComponentStyleOverrides,
  ComponentThemeConfig,
  JSXIntrinsicElementProps,
} from '../types';
import type { ButtonName } from './classNames';

export type ButtonSize = 'large' | 'normal' | 'small' | 'mini';

export type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'danger';

export type ButtonShape = 'round' | 'square' | 'default';

export type NativeButtonHTMLType = 'button' | 'submit' | 'reset';

export type ButtonVariant = 'outlined' | 'contained';

export type ButtonNSlot = 'root' | 'icon' | 'loadingIcon';

export type ButtonSlot =
  | ButtonNSlot
  | 'loading'
  | 'disabled'
  | 'outlined'
  | 'outlinedSizeMini'
  | 'outlinedSizeSmall'
  | 'outlinedSizeNormal'
  | 'outlinedSizeLarge'
  | 'outlinedDefault'
  | 'outlinedPrimary'
  | 'outlinedSuccess'
  | 'outlinedWarning'
  | 'outlinedDanger'
  | 'outlinedShapeRound'
  | 'outlinedShapeSquare'
  | 'contained'
  | 'containedSizeMini'
  | 'containedSizeSmall'
  | 'containedSizeNormal'
  | 'containedSizeLarge'
  | 'containedDefault'
  | 'containedPrimary'
  | 'containedSuccess'
  | 'containedWarning'
  | 'containedDanger'
  | 'containedShapeRound'
  | 'containedShapeSquare'
  | 'block';

type BaseButtonProps = {
  /**
   * @description 按钮类型
   * @default default
   */
  type?: ButtonType;
  /**
   * @description 按钮尺寸
   * @default normal
   */
  size?: ButtonSize;
  /**
   * @description 自定义颜色
   */
  color?: string;
  /**
   * @description 是否是块级元素
   */
  block?: boolean;
  variant?: ButtonVariant;
  /**
   * @description 按钮形状
   */
  shape?: ButtonShape;
  /**
   * @description 按钮 disabled
   */
  disabled?: boolean;
  /**
   * @description 按钮 icon
   */
  icon?: React.ReactNode;
  /**
   * @description 是否 loading
   */
  loading?: boolean;
  /**
   * @description border 是否是高清
   */
  hairline?: boolean;
  /**
   * @description 是否显示 border
   * @default true
   */
  border?: boolean;
  /**
   * @description loading 图标类型
   */
  loadingType?: LoadingProps['type'];
  /**
   * @description loading 图标大小
   */
  loadingSize?: LoadingProps['size'];
  classNames?: Partial<Record<ButtonNSlot, string>>;
};

type AnchorButtonBaseProps = {
  /**
   * @description 按钮 html 链接
   */
  href?: string;
  target?: string;
} & BaseButtonProps;

export type ButtonComponentState = {
  size: ButtonSize;
  shape: ButtonShape;
  type: ButtonType;
  variant: ButtonVariant;
  disabled: boolean;
  loading: boolean;
  border: boolean;
  block: boolean;
  emptyContent: boolean;
  hairline: boolean;
  color?: string;
  colorIsGradient?: boolean;
};

export type AnchorButtonProps = JSXIntrinsicElementProps<AnchorButtonBaseProps, 'a'>;

type NativeButtonBaseProps = {
  /**
   * 按钮的原始 type
   */
  htmlType?: NativeButtonHTMLType;
} & BaseButtonProps;

export type NativeButtonProps = JSXIntrinsicElementProps<
  NativeButtonBaseProps,
  'button'
>;

export interface WithButton {
  (
    props: { href: string } & Omit<AnchorButtonProps, 'href' | 'htmlType'> &
      RefAttributes<HTMLAnchorElement> &
      SystemStyledComponentProps,
  ): JSX.Element;
  (
    props: { target: string } & Omit<AnchorButtonProps, 'target' | 'htmlType'> &
      RefAttributes<HTMLAnchorElement> &
      SystemStyledComponentProps,
  ): JSX.Element;
  (
    props: Omit<NativeButtonProps, 'href' | 'target'> &
      RefAttributes<HTMLButtonElement> &
      SystemStyledComponentProps,
  ): JSX.Element;
}

export type ButtonProps = AnchorButtonProps &
  NativeButtonProps &
  SystemStyledComponentProps & { activeStyle?: SystemSxInterpolation };

export type ButtonStyleOverrides = ComponentStyleOverrides<
  ButtonComponentState,
  ButtonSlot
>;

export type ButtonThemeConfig = ComponentThemeConfig<
  typeof ButtonName,
  ButtonProps,
  ButtonStyleOverrides
>;
