import React from 'react';
import classNames from 'classnames';
import type { IWithAutocompleteForReactComponent } from '../types';
import { useConfigContext } from '../config-provider';

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
   * @description Col tag
   */
  tag?: keyof JSX.IntrinsicElements;
  /**
   * @description Col children
   */
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Col = React.forwardRef<
  HTMLDivElement,
  ColProps & React.HTMLAttributes<HTMLDivElement>
>(({ children, span, className, tag = 'div', ...rest }, ref) => {
  const { getPrefixCls } = useConfigContext();

  return React.createElement(
    tag,
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
}) as IWithAutocompleteForReactComponent<'div', ColProps>;

(
  Col as typeof Col & {
    [x: symbol]: boolean;
  }
)[COL_SYMBOL] = true;

export default Col;
