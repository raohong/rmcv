import { toArray } from '@rmc-vant/utils';
import classNames from 'classnames';
import React from 'react';
import { createOverridableComponent } from '../_utils';
import { useConfigContext } from '../config-provider';
import { GRIDITEM_SYMBOL } from './GridItem';
import type { GridItemProps, GridProps } from './interface';
import './style';

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (
    {
      children,
      iconSize,
      gutter,
      square,
      className,
      direction,
      style,
      clickable,
      border = true,
      center = true,
      column = 4,
      component = 'div',
      ...rest
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();
    const basCls = getPrefixCls('grid');

    const cls = classNames(
      basCls,
      {
        [`${basCls}-horizontal`]: direction === 'horizontal',
        [`${basCls}-center`]: center,
        [`${basCls}-square`]: square,
      },
      className,
    );

    const getItemCls = (index: number, length: number, itemClassName?: string) => {
      const total = Math.ceil(length / column);
      const columnIndex = index % column;
      const rowIndex = Math.floor(index / column);
      const columnBordered = border && rowIndex === total - 1;
      const rowBordered = border && columnIndex === column - 1;

      return classNames(
        {
          [`${basCls}-item-border-right`]: rowBordered || (border && !!gutter),
          [`${basCls}-item-border-bottom`]: columnBordered || (border && !!gutter),
          [`${basCls}-item-border`]: border,
        },
        itemClassName,
      );
    };

    const itemChildren = (
      toArray(children).filter(
        (item) =>
          // @ts-ignore
          React.isValidElement(item) && item.type && item.type[GRIDITEM_SYMBOL],
      ) as React.ReactElement<GridItemProps>[]
    ).map((item, index, { length }) =>
      React.cloneElement(item, {
        iconSize,
        key: item.key ?? String(index),
        contentClassName: getItemCls(index, length, item.props.contentClassName),
        className: getItemCls(index, length, item.props.className),
        clickable,
        onClick: clickable ? item.props.onClick : undefined,
      }),
    );

    return React.createElement(
      component,
      {
        className: cls,
        style: {
          ...style,
          gap: gutter,
          gridTemplateColumns: `repeat(${column}, minmax(0, 1fr))`,
        },
        ref,
        ...rest,
      },
      itemChildren,
    );
  },
);

export default createOverridableComponent(Grid);
