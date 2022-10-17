import classNames from 'classnames';
import React from 'react';
import { createOverridableComponent } from '../_utils';
import { useConfigContext } from '../config-provider';
import { SafeAreaProps } from './interface';

const SafeArea = React.forwardRef<unknown, SafeAreaProps>(
  ({ children, top, disabled, component = 'div', bottom = true, ...rest }, ref) => {
    const { getPrefixCls } = useConfigContext();

    return React.createElement(
      component,
      {
        ref,
        ...rest,
        className: classNames((rest as { className?: null }).className, {
          [getPrefixCls('safe-area-top')]: top && !disabled,
          [getPrefixCls('safe-area-bottom')]: bottom && !disabled,
        }),
      },
      children,
    );
  },
);

export default createOverridableComponent(SafeArea);
