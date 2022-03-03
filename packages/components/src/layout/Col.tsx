import React from 'react';
import classNames from 'classnames';
import { useConfigContext } from '../config-provider';
import { createOverridableComponent } from '../_utils';
import type { ColProps } from './interface';
import { useRowContext } from './RowContext';

const Col = React.forwardRef<HTMLDivElement, ColProps>(
  (
    { children, span, className, offset, component = 'div', style, ...rest },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();
    const ctx = useRowContext() ?? {};

    const mergedStyles: React.CSSProperties = {};

    if (ctx?.gutter) {
      mergedStyles.paddingLeft = ctx.gutter[0];
      mergedStyles.paddingRight = ctx.gutter[1];
    }

    return React.createElement(
      component,
      {
        ref,
        className: classNames(
          getPrefixCls('col'),
          {
            [`${getPrefixCls('col')}-${span}`]: span,
            [`${getPrefixCls('col')}-offset-${offset}`]: offset,
          },
          className,
        ),
        style: {
          ...mergedStyles,
          ...style,
        },
        ...rest,
      },
      children,
    );
  },
);

export default createOverridableComponent(Col);
