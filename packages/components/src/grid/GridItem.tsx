import { isEmpty, isNil } from '@rmc-vant/utils';
import classNames from 'classnames';
import React from 'react';
import { createOverridableComponent } from '../_utils';
import Badge from '../badge';
import { useConfigContext } from '../config-provider';
import Touchable from '../touchable';
import { GridItemProps } from './interface';

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
      clickable,
      component = 'div',
      children,
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
        {isNil(children) ? (
          <>
            <Badge max={max} dot={dot} content={badge} showZero={showZero}>
              {renderIcon()}
            </Badge>
            {!isEmpty(text) && <div className={`${basCls}-text`}>{text}</div>}
          </>
        ) : (
          children
        )}
      </div>
    );

    return (
      <Touchable
        ref={ref}
        component={component}
        touchDisabled={!clickable}
        activeClassName={`${basCls}-active`}
        className={classNames(basCls, clickable && `${basCls}-clickable`, className)}
        {...(clickable && { role: 'button', tabIndex: 0 })}
        {...rest}
      >
        {content}
      </Touchable>
    );
  },
);

// @ts-ignore
GridItem[GRIDITEM_SYMBOL] = true;

export default createOverridableComponent(GridItem);
