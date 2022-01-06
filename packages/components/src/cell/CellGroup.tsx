import React from 'react';
import { isNil } from '@rmc-vant/utils';
import { useConfigContext } from '../config-provider';
import { CellGroupProps } from './interface';

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
