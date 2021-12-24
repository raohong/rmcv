import React from 'react';
import classNames from 'classnames';
import { Arrow, ArrowDown, ArrowLeft, ArrowUp } from '@rmc-vant/icons';
import isNil from 'lodash/isNil';
import { useConfigContext } from '../config-provider';
import Touchable from '../touchable';
import type { CellArrowDirection, CellProps } from './interface';

const ArrowIconMap: Record<CellArrowDirection, React.ComponentType> = {
  left: ArrowLeft,
  right: Arrow,
  down: ArrowDown,
  up: ArrowUp,
};

const getArrowIcon = (dir: CellArrowDirection) => {
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
      <Touchable
        ref={ref}
        activeClassName={`${baseCls}-active`}
        touchDisabled={!isClickable}
        role={isClickable ? 'button' : undefined}
        className={classNames(
          baseCls,
          {
            [`${baseCls}-border`]: border,
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
      </Touchable>
    );
  },
);

export default Cell;
