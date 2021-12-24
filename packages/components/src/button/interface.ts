import type { RefAttributes } from 'react';
import type { JSXIntrinsicElementProps } from '../types';
import type { LoadingProps } from '../loading';

export type ButtonSize = 'large' | 'default' | 'small' | 'mini';

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger';

export type ButtonShape = 'round' | 'square';

export type NativeButtonHTMLType = 'button' | 'submit' | 'reset';

type BaseButtonProps = {
  /**
   * @description 按钮类型
   */
  type?: ButtonType;
  /**
   * @description 按钮尺寸
   */
  size?: ButtonSize;
  /**
   * @description 是否是块级元素
   */
  block?: boolean;
  /**
   * @description 是否镂空
   */
  plain?: boolean;
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
  icon?: React.ReactElement;
  /**
   * @description 是否 loading
   */
  loading?: boolean;
  /**
   * @description border 是否是高清
   */
  hairline?: boolean;
  /**
   * @description 点击事件
   */
  onClick?: React.MouseEventHandler<HTMLElement>;
  /**
   * @description 按钮内容
   */
  children?: React.ReactNode;
  /**
   * @description loading 图标文字
   */
  loadingText?: string;
  /**
   * @description loading 图标类型
   */
  loadingType?: LoadingProps['type'];
  /**
   * @description loading 图标大小
   * @default 20px
   */
  loadingSize?: LoadingProps['size'];
};

type AnchorButtonBaseProps = {
  /**
   * @description 按钮 html 链接
   */
  href?: string;
  target?: string;
} & BaseButtonProps;

export type AnchorButtonProps = JSXIntrinsicElementProps<
  AnchorButtonBaseProps,
  'a'
>;

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

export interface WithButton
  extends React.ForwardRefExoticComponent<
    Omit<NativeButtonProps, 'href' | 'target'> &
      RefAttributes<HTMLButtonElement>
  > {
  (
    props: { href: string } & Omit<AnchorButtonProps, 'href' | 'htmlType'> &
      RefAttributes<HTMLAnchorElement>,
  ): JSX.Element;
  (
    props: { target: string } & Omit<AnchorButtonProps, 'target' | 'htmlType'> &
      RefAttributes<HTMLAnchorElement>,
  ): JSX.Element;
  (
    props: Omit<NativeButtonProps, 'href' | 'target'> &
      RefAttributes<HTMLButtonElement>,
  ): JSX.Element;
}

export type ButtonProps = AnchorButtonProps & NativeButtonProps;
