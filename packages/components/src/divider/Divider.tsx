import React from 'react';
import classNames from 'classnames';
import { isEmpty } from '@rmc-vant/utils';
import { useConfigContext } from '../config-provider';
import type { DividerProps } from './interface';

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      className,
      dashed,
      children,
      hairline = true,
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
            [`${baseCls}-full`]: isEmpty(children),
            [`${baseCls}-${contentPosition}`]:
              contentPosition && contentPosition !== 'center',
          },
          className,
        )}
        {...rest}
      >
        {children}
      </div>
    );
  },
);

export default Divider;
