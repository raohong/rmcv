export type ButtonSize = 'large' | 'small' | 'mini';

export type ButtonType = 'default' | 'primary' | 'info' | 'warning' | 'default';

export type ButtonShape = 'round' | 'square';

export type ButtonProps = {
  /**
   * descrription 按钮类型
   */
  type?: ButtonType;
  /**
   * description 按钮尺寸
   */
  size?: ButtonSize;
  color?: string;
  tag?: keyof JSX.IntrinsicElements;
  /**
   * 按钮的原始 type
   */
  htmlType?: 'button' | 'submit' | 'reset';

  /**
   * description 是否是块级元素
   */
  block?: boolean;
  /**
   * description 是否镂空
   */
  plain?: boolean;
  /**
   * 按钮形状
   */
  shape?: ButtonShape;
  /**
   * 按钮 disabled
   */
  disabled?: boolean;
  /**
   * 按钮 html 链接
   */
  href?: string;
};
