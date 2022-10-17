import classNames from 'classnames';
import React from 'react';
import { useConfigContext } from '../config-provider';
import type { LoadingProps } from './interface';
import { IOSSpinner, MaterialSpinner } from './spinners';

const Loading = React.forwardRef<HTMLSpanElement, LoadingProps>(
  (
    {
      size,
      className,
      color,
      textColor,
      textSize,
      vertical,
      children,
      type = 'circular',
      ...rest
    },
    ref,
  ) => {
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
      <span ref={ref} className={cls} role="alert" aria-label="loading" {...rest}>
        <div
          className={getPrefixCls('loading-spinner')}
          style={{
            color,
            fontSize: size,
          }}
        >
          {type === 'spinner' ? (
            <IOSSpinner className={getPrefixCls('loading-ios-spinner')} />
          ) : (
            <MaterialSpinner className={getPrefixCls('loading-material-spinner')} />
          )}
        </div>
        {children && (
          <span
            className={getPrefixCls('loading-text')}
            style={{
              color: color ?? textColor,
              fontSize: textSize,
            }}
          >
            {children}
          </span>
        )}
      </span>
    );
  },
);

export default Loading;
