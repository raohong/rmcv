import React, { useMemo } from 'react';
import { isNil } from '@rmc-vant/utils';
import classNames from 'classnames';
import { useConfigContext } from '../config-provider';
import type { CellContextState, CellGroupProps } from './interface';
import CellContext from './CellContext';

const CellGroup = React.forwardRef<HTMLDivElement, CellGroupProps>(
  ({ title, className, children, inset, border = true, size, ...rest }, ref) => {
    const { getPrefixCls } = useConfigContext();
    const baseCls = getPrefixCls('cell-group');

    const ctxValue: CellContextState = useMemo(
      () => ({
        border,
        size,
      }),
      [border, size],
    );

    return (
      <CellContext.Provider value={ctxValue}>
        <div ref={ref} className={className} {...rest}>
          {!isNil(title) && <div className={`${baseCls}-title`}>{title}</div>}
          <div
            className={classNames(baseCls, {
              [`${baseCls}-inset`]: inset,
              [`${baseCls}-border`]: border && !inset,
            })}
          >
            {children}
          </div>
        </div>
      </CellContext.Provider>
    );
  },
);

export default CellGroup;
