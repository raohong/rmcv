import React from 'react';
import classNames from 'classnames';
import { useConfigContext } from '../config-provider';

export type DividerProps = {
  /**
   * @description 文本内容
   */
  contentPosition?: 'left' | 'right' | 'center';
  /**
   * @description border 样式是否是 dashed
   */
  dashed?: boolean;

  /**
   * @description 是否是 0.5px
   */
  hairline?: boolean;
  /**
   * @description Divider 内容
   */
  children?: React.ReactNode;

  /**
   * @description 自定义 class
   */
  className?: string;
  /**
   * @description content 自定义 class
   */
  contentClassName?: string;
} & JSX.IntrinsicElements['div'];

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
