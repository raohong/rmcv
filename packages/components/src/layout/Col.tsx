import React from 'react';
import classNames from 'classnames';
import type {
  IWithAutocompleteForReactComponent,
  IntrinsicElementsKeys,
} from '../types';
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
  tag?: IntrinsicElementsKeys;
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

// @ts-ignore
(Col as typeof Col & Record<symbol, any>)[COL_SYMBOL] = true;

export default Col;
