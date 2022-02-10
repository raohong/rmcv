import React from 'react';
import classNames from 'classnames';
import { isString } from '@rmc-vant/utils';
import { createOverridableComponent, flatReactNode } from '../_utils';
import { useConfigContext } from '../config-provider';
import { COL_SYMBOL } from './Col';
import type Col from './Col';
import type { RowProps } from './interface';

const setupGutter = (field: 'margin' | 'padding', gutter?: number | string) => {
  if (gutter === undefined || gutter < 0) {
    return null;
  }

  const val = isString(gutter)
    ? `calc(${gutter} * ${field === 'margin' ? -0.5 : 0.5})`
    : gutter * (field === 'margin' ? -0.5 : 0.5);
  const result: React.CSSProperties = {
    [`${field}Left`]: val,
    [`${field}Right`]: val,
  };

  return result;
};

const Row = React.forwardRef<HTMLDivElement, RowProps>(
  (
    {
      children,
      gutter,
      className,
      style,
      align,
      justify,
      wrap = true,
      component = 'div',
      ...rest
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();
    const baseCls = getPrefixCls('row');

    const colChildren = (
      flatReactNode(children).filter(
        (child) =>
          // @ts-ignore
          React.isValidElement(child) && (child.type as unknown)[COL_SYMBOL],
      ) as React.ReactElement<React.ComponentProps<typeof Col>, typeof Col>[]
    ).map((item, index) => {
      const key = item.key ?? index;

      return React.cloneElement(item, {
        key,
        style: {
          ...item.props.style,
          ...setupGutter('padding', gutter),
        },
      });
    });

    const cls = classNames(
      baseCls,
      {
        [`${baseCls}-align-${align}`]: align,
        [`${baseCls}-justify-${justify}`]: justify,
        [`${baseCls}-wrap`]: wrap,
      },
      className,
    );

    return React.createElement(
      component,
      {
        className: cls,
        ref,
        style: {
          ...style,
          ...setupGutter('margin', gutter),
        },
        ...rest,
      },
      colChildren,
    );
  },
);

export default createOverridableComponent(Row);
