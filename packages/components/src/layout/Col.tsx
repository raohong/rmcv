import React from 'react';
import classNames from 'classnames';
import { useConfigContext } from '../config-provider';
import { createOverridableComponent } from '../_utils';
import type { ColProps } from './interface';

export const COL_SYMBOL = Symbol('col');

const Col = React.forwardRef<HTMLDivElement, ColProps>(
  ({ children, span, className, offset, component = 'div', ...rest }, ref) => {
    const { getPrefixCls } = useConfigContext();

    return React.createElement(
      component,
      {
        ref,
        className: classNames(
          getPrefixCls('col'),
          {
            [`${getPrefixCls('col')}-${span}`]: span,
            [`${getPrefixCls('col')}-offset-${span}`]: offset,
          },
          className,
        ),
        ...rest,
      },
      children,
    );
  },
);

// @ts-ignore
(Col as typeof Col & Record<symbol, any>)[COL_SYMBOL] = true;

export default createOverridableComponent(Col);
