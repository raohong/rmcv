import React from 'react';
import { useConfigContext } from '../config-provider';
import { isNil } from '../_utils';

export type CellGroupProps = {
  /**
   * @description 分组标题
   */
  title?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

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
