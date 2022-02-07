import React from 'react';
import { isNil } from '@rmc-vant/utils';
import classNames from 'classnames';
import { useConfigContext } from '../config-provider';
import { flatReactNode } from '../_utils';
import { CELL_SYMBOL } from './Cell';
import type { CellGroupProps, CellProps } from './interface';

const CellGroup = React.forwardRef<HTMLDivElement, CellGroupProps>(
  ({ title, className, children, inset, border = true, size, ...rest }, ref) => {
    const { getPrefixCls } = useConfigContext();
    const baseCls = getPrefixCls('cell-group');

    const childrenList = (
      flatReactNode(children).filter(
        (child) =>
          // @ts-ignore
          React.isValidElement(child) && (child.type as unknown)[CELL_SYMBOL],
      ) as React.ReactElement<CellProps>[]
    ).map((item, index, { length }) => {
      const key = item.key ?? index;

      return React.cloneElement(item, {
        key,
        border: item.props.border && index < length - 1,
        size: size ?? item.props.size,
      });
    });

    return (
      <div ref={ref} className={className} {...rest}>
        {!isNil(title) && <div className={`${baseCls}-title`}>{title}</div>}
        <div
          className={classNames(baseCls, {
            [`${baseCls}-inset`]: inset,
            [`${baseCls}-border`]: border && !inset,
          })}
        >
          {childrenList}
        </div>
      </div>
    );
  },
);

export default CellGroup;
