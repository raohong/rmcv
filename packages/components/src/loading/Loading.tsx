import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';
import { MaterialSpinner, IOSSpinner } from './spinners';
import { useConfigContext } from '../config-provider';

export type LoadingProps = {
  /**
   * @description Loading 类型
   * @default spinner
   */
  type?: 'spinner' | 'circle';
  /**
   * description 自定义 className
   */
  className?: string;
  /**
   * @description 尺寸
   */
  size?: number;
  /**
   * @description 图标颜色
   */
  color?: string;
  /**
   * @description text 大小
   */
  textSize?: string | number;
  /**
   * @description text 颜色
   */
  textColor?: string;
  /**
   * @description 图标和文字的布局是否是垂直布局
   */
  vertical?: boolean;
};

const Loading = React.forwardRef<
  HTMLSpanElement,
  PropsWithChildren<LoadingProps & React.HTMLAttributes<HTMLSpanElement>>
>(({ type, size, className, color, textColor, textSize, vertical, children }, ref) => {
  const { getPrefixCls } = useConfigContext();
  const prefixCls = getPrefixCls('loading');

  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-vertical`]: vertical,
    },
    className,
  );

  return (
    <span ref={ref} className={cls} role="alert" aria-label="loading">
      <div
        className={getPrefixCls('loading-spinner')}
        style={{
          color,
          width: size,
          height: size,
        }}
      >
        {type === 'circle' ? (
          <IOSSpinner className={getPrefixCls('loading-ios-spinner')} />
        ) : (
          <MaterialSpinner className={getPrefixCls('loading-material-spinner')} />
        )}
      </div>
      {children && (
        <span
          className={getPrefixCls('loading-text')}
          style={{
            color: textColor,
            fontSize: textSize,
          }}
        >
          {children}
        </span>
      )}
    </span>
  );
});

export default Loading;
