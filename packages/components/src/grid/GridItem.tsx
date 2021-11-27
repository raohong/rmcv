import classNames from 'classnames';
import React from 'react';
import Badge from '../badge';
import { useConfigContext } from '../config-provider';
import { createOverridableComponent, isEmpty } from '../_utils';
import { GridItemProps } from './type';

export const GRIDITEM_SYMBOL = Symbol('grid-item');

const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  (
    {
      text,
      iconSize,
      icon,
      dot,
      max,
      showZero,
      className,
      badge,
      contentClassName,
      component = 'div',
      ...rest
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();
    const basCls = getPrefixCls('grid-item');

    const renderIcon = () => {
      const iconCls = `${basCls}-icon`;

      if (React.isValidElement(icon)) {
        return React.cloneElement(icon, {
          style: {
            width: iconSize,
            height: iconSize,
            fontSize: iconSize,
            ...icon.props.style,
          },
          className: classNames(icon.props.className, iconCls),
        });
      }

      return (
        <div
          style={{
            width: iconSize,
            height: iconSize,
          }}
          className={iconCls}
        >
          {icon}
        </div>
      );
    };

    const content = (
      <div className={classNames(`${basCls}-content`, contentClassName)}>
        <Badge max={max} dot={dot} content={badge} showZero={showZero}>
          {renderIcon()}
        </Badge>
        {!isEmpty(text) && <div className={`${basCls}-text`}>{text}</div>}
      </div>
    );

    return React.createElement(
      component,
      {
        ref,
        className: classNames(basCls, className),
        ...rest,
      },
      content,
    );
  },
);

// @ts-ignore
GridItem[GRIDITEM_SYMBOL] = true;

export default createOverridableComponent(GridItem);
