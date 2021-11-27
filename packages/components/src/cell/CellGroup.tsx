import isNil from 'lodash/isNil';
import React from 'react';
import type { JSXIntrinsicElementProps } from '../types';
import { useConfigContext } from '../config-provider';

export type CellGroupProps = {
  /**
   * @description 分组标题
   */
  title?: React.ReactNode;
} & JSXIntrinsicElementProps<'div', 'title'>;

const CellGroup = React.forwardRef<HTMLDivElement, CellGroupProps>(
  ({ title, className, children, ...rest }, ref) => {
    const { getPrefixCls } = useConfigContext();

    return (
      <div ref={ref} className={className} {...rest}>
        {!isNil(title) && (
          <div className={getPrefixCls('cell-group-title')}>{title}</div>
        )}
        <div className={getPrefixCls('cell-group')}>{children}</div>
      </div>
    );
  },
);

export default CellGroup;
