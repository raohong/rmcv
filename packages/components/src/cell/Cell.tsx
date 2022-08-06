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
      titleStyle,
      value,
      valueClassName,
      label,
      labelClassName,
      labelStyle,
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
    const isClickable = clickable ?? isLink;
    const internalRightIcon =
      isEmpty(rightIcon) && isLink ? getArrowIcon(arrowDirection) : rightIcon;
    const titleIsEmpty = [label, title].every(isEmpty);
    const valueOnly = [icon, label, title, internalRightIcon].every(isEmpty);

    const internalBorder = border ?? ctx?.border ?? true;
    const internalSize = size ?? ctx.size ?? 'normal';
    const valueContent = value ?? children;

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
        {!isEmpty(icon) && (
          <div className={classNames(`${baseCls}-icon`, iconClassName)}>{icon}</div>
        )}
        {!titleIsEmpty && (
          <div
            style={titleStyle}
            className={classNames(`${baseCls}-title`, titleClassName)}
          >
            {React.isValidElement(title)
              ? title
              : !isEmpty(title) && <span>{title}</span>}
            {!isEmpty(label) && (
              <div
                style={labelStyle}
                className={classNames(`${baseCls}-label`, labelClassName)}
              >
                {label}
              </div>
            )}
          </div>
        )}
        {!isEmpty(valueContent) && (
          <div
            className={classNames(
              `${baseCls}-value`,
              {
                [`${baseCls}-value-only`]: valueOnly,
              },
              valueClassName,
            )}
          >
            {valueContent}
          </div>
        )}
        {!!internalRightIcon && React.isValidElement(internalRightIcon)
          ? React.cloneElement(internalRightIcon, {
              // @ts-ignore
              className: classNames(
                (internalRightIcon.props as any).className,
                `${baseCls}-right-icon`,
              ),
            })
          : !isEmpty(internalRightIcon) && (
              <div className={`${baseCls}-right-icon`}>{internalRightIcon}</div>
            )}
      </Touchable>
    );
  },
);

export default Cell;
