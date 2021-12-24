import { JSXIntrinsicElementProps } from '../types';

export type CellArrowDirection = 'left' | 'up' | 'down' | 'right';

type CellBaseProps = {
  /**
   * @description 左侧标题
   */
  title?: React.ReactNode;
  /**
   * @description title 自定义 class
   */
  titleClassName?: string;
  /**
   * @description 右侧内容
   */
  value?: React.ReactNode;
  /**
   * @description value 自定义 class
   */
  valueClassName?: string;
  /**
   * @description 标题下方的描述信息
   */
  label?: React.ReactNode;
  /**
   * @description label 自定义 class
   */
  labelClassName?: string;
  /**
   * @description 单元格大小，可选值为 large
   */
  size?: 'large';
  /**
   * @description 左侧图标或图片链接
   */
  icon?: React.ReactNode;
  /**
   * @description icon 容器的 class
   */
  iconClassName?: string;
  /**
   * @description 右侧图标
   */
  rightIcon?: React.ReactNode;
  /**
   * @description 是否显示内边框
   */
  border?: boolean;
  /**
   * @description 是否开启点击反馈
   */
  clickable?: boolean;
  /**
   * @description 是否展示右侧箭头并开启点击反馈
   */
  isLink?: boolean;
  /**
   * @description 是否使内容垂直居中
   */
  center?: boolean;
  /**
   * @description 箭头方向
   * @default right
   */
  arrowDirection?: CellArrowDirection;
  /**
   * @description 点击事件
   */
  onClick?: (evt: React.MouseEvent<HTMLDivElement>) => void;
};

export type CellProps = JSXIntrinsicElementProps<CellBaseProps>;

type CellGroupBaseProps = {
  /**
   * @description 分组标题
   */
  title?: React.ReactNode;
};

export type CellGroupProps = JSXIntrinsicElementProps<CellGroupBaseProps>;
