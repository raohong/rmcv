import React from 'react';
import classNames from 'classnames';
import type { IntrinsicElementsKeys } from '../types';
import { useConfigContext } from '../config-provider';
import { createOverridableComponent } from '../_utils';

export const COL_SYMBOL = Symbol('col');

export type ColProps = {
  /**
   * @description className
   */
  className?: string;
  /**
   * @description
   */
  span?: number;
  /**
   * @description Col component
   */
  component?: IntrinsicElementsKeys;
  /**
   * @description Col children
   */
  children?: React.ReactNode;
};

const Col = React.forwardRef<HTMLDivElement, ColProps>(
  ({ children, span, className, component = 'div', ...rest }, ref) => {
    const { getPrefixCls } = useConfigContext();

    return React.createElement(
      component,
      {
        ref,
        className: classNames(
          getPrefixCls('col'),
          {
            [`${getPrefixCls('col')}-${span}`]: span,
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
