import React from 'react';
import classNames from 'classnames';
import { Arrow, ArrowDown, ArrowLeft, ArrowUp, IconProps } from '@rmc-vant/icons';
import { isEmpty, isNil } from '@rmc-vant/utils';
import { useConfigContext } from '../config-provider';
import Touchable from '../touchable';
import type { CellArrowDirection, CellProps } from './interface';
import { useCellContext } from './CellContext';

const ArrowIconMap: Record<
  CellArrowDirection,
  React.ForwardRefExoticComponent<IconProps>
> = {
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
      icon,
      iconClassName,
      clickable,
      isLink,
      center,
      className,
      rightIcon,
      children,
      onClick,
      border,
      size,
      arrowDirection = 'right',
      ...rest
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();
    const ctx = useCellContext() ?? {};

    const baseCls = getPrefixCls('cell');
    const isClickable = isLink || clickable;
    const internalRightIcon =
      isEmpty(rightIcon) && isLink ? getArrowIcon(arrowDirection) : rightIcon;
    const contentIsEmpty = [icon, label, title].every(isEmpty);

    const internalBorder = border ?? ctx?.border ?? true;
    const internalSize = size ?? ctx.size ?? 'normal';

    return (
      <Touchable
        ref={ref}
        activeClassName={`${baseCls}-active`}
        touchDisabled={!isClickable}
        role={isClickable ? 'button' : undefined}
        className={classNames(
          baseCls,
          {
            [`${baseCls}-border`]: internalBorder,
            [`${baseCls}-center`]: center,
            [`${baseCls}-clickable`]: isClickable,
            [`${baseCls}-size-${internalSize}`]: internalSize === 'large',
          },
          className,
        )}
        onClick={onClick}
        {...rest}
      >
        {!contentIsEmpty && (
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
        )}
        <div
          className={classNames(
            `${baseCls}-value`,
            {
              [`${baseCls}-value-only`]: contentIsEmpty,
            },
            valueClassName,
          )}
        >
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
                <div className={`${baseCls}-right-icon`}>{internalRightIcon}</div>
              )}
        </div>
      </Touchable>
    );
  },
);

export default Cell;
