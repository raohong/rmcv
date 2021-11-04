import React from 'react';
import classNames from 'classnames';
import { Arrow, ArrowDown, ArrowLeft, ArrowUp } from '@rmc-vant/icons';
import isNil from 'lodash/isNil';
import { useConfigContext } from '../config-provider';

type ArrowDirection = 'left' | 'up' | 'down' | 'right';

export type CellProps = {
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
  arrowDirection?: ArrowDirection;
  /**
   * @description 点击事件
   */
  onClick?: (evt: React.MouseEvent<HTMLDivElement>) => void;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>;

const ArrowIconMap: Record<ArrowDirection, React.ComponentType> = {
  left: ArrowLeft,
  right: Arrow,
  down: ArrowDown,
  up: ArrowUp,
};

const getArrowIcon = (dir: ArrowDirection) => {
  return React.createElement(ArrowIconMap[dir] ?? Arrow);
};

const Cell = React.forwardRef<HTMLDivElement, CellProps>(
  (
    {
      title,
      titleClassName,
      value,
      valueClassName,
      label,
      labelClassName,
      size,
      icon,
      iconClassName,
      border,
      clickable,
      isLink,
      center,
      className,
      rightIcon,
      children,
      onClick,
      arrowDirection = 'right',
      ...rest
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();

    const baseCls = getPrefixCls('cell');
    const isClickable = isLink || clickable;
    const internalRightIcon =
      rightIcon || (isClickable ? getArrowIcon(arrowDirection) : null);

    return (
      <div
        ref={ref}
        className={classNames(
          baseCls,
          {
            [`${baseCls}-border`]: border,
            [`${baseCls}-clickable`]: isClickable,
            [`${baseCls}-center`]: center,
            [`${baseCls}-${size}`]: size,
          },
          className,
        )}
        onClick={onClick}
        {...rest}
      >
        <div className={`${baseCls}-main`}>
          <div className={classNames(`${baseCls}-title`, titleClassName)}>
            {!isNil(icon) && (
              <div className={classNames(`${baseCls}-icon`, iconClassName)}>
                {icon}
              </div>
            )}
            {React.isValidElement(title)
              ? title
              : !isNil(title) && <span>{title}</span>}
          </div>
          {!isNil(label) && (
            <div className={classNames(`${baseCls}-label`, labelClassName)}>
              {label}
            </div>
          )}
        </div>
        <div className={classNames(`${baseCls}-value`, valueClassName)}>
          {value ?? children}

          {!!internalRightIcon && React.isValidElement(internalRightIcon)
            ? React.cloneElement(internalRightIcon, {
                // @ts-ignore
                className: classNames(
                  (internalRightIcon.props as any).className,
                  `${baseCls}-right-icon`,
                ),
              })
            : !isNil(internalRightIcon) && (
                <div className={`${baseCls}-right-icon`}>
                  {internalRightIcon}
                </div>
              )}
        </div>
      </div>
    );
  },
);

export default Cell;
