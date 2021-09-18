import React from 'react';
import classNames from 'classnames';
import type { IWithAutocompleteForReactComponent } from '../types';
import { useConfigContext } from '../config-provider';
import { COL_SYMBOL } from './Col';
import type Col from './Col';
import { toArray } from '../_utils';

const setupGutter = (field: 'margin' | 'padding', gutter?: number) => {
  if (gutter === undefined) {
    return null;
  }

  const val = Math.max(0, gutter / 2) * (field === 'margin' ? -1 : 1);
  const result: React.CSSProperties = {
    [`${field}Left`]: val,
    [`${field}Right`]: val,
  };

  return result;
};

export type RowProps = {
  /**
   * @description className
   */
  className?: string;
  /**
   * @description
   */
  gutter?: number;
  /**
   * @description Col tag
   */
  tag?: keyof JSX.IntrinsicElements;
  /**
   * @description Row 垂直对齐方式
   */
  align?: 'top' | 'middle' | 'bottom';
  /**
   * @description Row 水平对齐方式
   */
  justify?: 'center' | 'end' | 'around' | 'between';
  /**
   * @description Row children 只支持 Col
   */
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Row = React.forwardRef<
  HTMLDivElement,
  RowProps & React.HTMLAttributes<HTMLDivElement>
>(
  (
    {
      children,
      gutter,
      className,
      style,
      align,
      justify,
      tag = 'div',
      ...rest
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();
    const baseCls = getPrefixCls('row');

    const colChildren = (
      toArray(children).filter(
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
      },
      className,
    );

    return React.createElement(
      tag,
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
) as IWithAutocompleteForReactComponent<'div', RowProps>;

export default Row;
