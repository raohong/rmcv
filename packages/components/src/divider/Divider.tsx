import React from 'react';
import classNames from 'classnames';
import { useConfigContext } from '../config-provider';
import type { DividerProps } from './interface';

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      className,
      dashed,
      children,
      contentClassName,
      hairline,
      contentPosition = 'center',
      ...rest
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();
    const baseCls = getPrefixCls('divider');

    return (
      <div
        ref={ref}
        className={classNames(
          baseCls,
          {
            [`${baseCls}-dashed`]: dashed,
            [`${baseCls}-hairline`]: hairline,
            [`${baseCls}-${contentPosition}`]: contentPosition,
          },
          className,
        )}
        {...rest}
      >
        <div className={`${baseCls}-border`} />
        <div className={classNames(`${baseCls}-content`, contentClassName)}>
          {children}
        </div>
      </div>
    );
  },
);

export default Divider;
