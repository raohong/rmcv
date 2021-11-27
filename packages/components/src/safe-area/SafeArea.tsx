import classNames from 'classnames';
import React from 'react';
import { useConfigContext } from '../config-provider';
import { createOverridableComponent } from '../_utils';
import type { IntrinsicElementsKeys } from '../types';

export type SafeAreaProps = {
  /**
   * @description 是否设置顶部
   */
  top?: boolean;
  /**
   * @description 是否设置底部
   * @default true
   */
  bottom?: boolean;
  /**
   * @description 是否关闭
   */
  disabled?: boolean;
  /**
   * @description 自定义 component
   * @default
   */
  component?: IntrinsicElementsKeys | React.ComponentType<any>;
};

const SafeArea = React.forwardRef<unknown, SafeAreaProps>(
  (
    { children, top, disabled, component = 'div', bottom = true, ...rest },
    ref,
  ) => {
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
