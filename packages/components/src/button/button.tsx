import React from 'react';
import { isEmpty } from '@rmc-vant/utils';
import classNames from 'classnames';
import Loading from '../loading';
import { useConfigContext } from '../config-provider';
import type { ButtonProps } from './interface';
import Touchable from '../touchable';

const Button = React.forwardRef<HTMLElement, ButtonProps>(
  (
    {
      href,
      target,
      htmlType,
      onClick,
      loading,
      icon,
      plain,
      disabled,
      className,
      children,
      block,
      loadingText,
      loadingType,
      type,
      hairline,
      loadingSize,
      color,
      style,
      size = 'normal',
      shape = 'square',
      ...rest
    },
    ref,
  ) => {
    const { getPrefixCls, prefix } = useConfigContext();
    const baseCls = getPrefixCls('button');

    const handleClick: React.MouseEventHandler<
      HTMLAnchorElement | HTMLButtonElement
    > = (evt) => {
      if (loading || disabled) {
        return;
      }

      onClick?.(evt);
    };

    const cls = classNames(
      baseCls,
      {
        [`${baseCls}-loading`]: loading,
        [`${baseCls}-disabled`]: disabled,
        [`${baseCls}-plain`]: plain,
        [`${baseCls}-hairline`]: hairline,
        [`${baseCls}-block`]: block,
        [`${baseCls}-size-${size}`]: size,
        [`${baseCls}-${type}`]: type,
        [`${baseCls}-${shape}`]: shape === 'round',
      },
      className,
    );

    const renderChildren = () => {
      const hasIcon = loading || !isEmpty(icon);
      const targetChildren = loading ? null : children;

      return (
        <>
          {hasIcon && (
            <div className={`${baseCls}-icon`}>
              {loading ? (
                <Loading
                  type={loadingType}
                  size={loadingSize}
                  color={!type ? undefined : '#fff'}
                  textColor={!type ? undefined : '#fff'}
                  className={`${baseCls}-loading-icon`}
                >
                  {loadingText}
                </Loading>
              ) : (
                icon
              )}
            </div>
          )}
          {!isEmpty(targetChildren) && (
            <span className={`${baseCls}-content`}>{targetChildren}</span>
          )}
        </>
      );
    };

    const isLink = target ?? href;
    const styles: React.CSSProperties = {
      ...style,
    };

    if (color) {
      const isGradient = color.includes('gradient');

      if (isGradient) {
        styles.color = '#fff';
        styles.background = color;
      } else {
        styles.color = !plain ? '#fff' : color;
        styles.backgroundColor = !plain ? color : '#fff';
        styles.borderColor = color;
      }
    }

    return isLink ? (
      <Touchable
        component="a"
        touchDisabled={disabled}
        activeClassName={`${baseCls}-active`}
        className={cls}
        href={href}
        target={target}
        role="button"
        aria-disabled={disabled}
        // todo 为什么这里 ref 不是 AnchorElement
        // @ts-ignore
        onClick={handleClick as React.MouseEventHandler<HTMLAnchorElement>}
        // @ts-ignore
        ref={ref as unknown as React.Ref<HTMLAnchorElement>}
        {...rest}
        style={styles}
      >
        {renderChildren()}
      </Touchable>
    ) : (
      <Touchable
        component="button"
        touchDisabled={disabled}
        activeClassName={`${baseCls}-active`}
        className={cls}
        disabled={disabled}
        type={htmlType}
        aria-disabled={disabled}
        // @ts-ignore
        onClick={handleClick as React.MouseEventHandler<HTMLButtonElement>}
        // @ts-ignore
        ref={ref as unknown as React.Ref<HTMLButtonElement>}
        {...rest}
        style={styles}
      >
        {renderChildren()}
      </Touchable>
    );
  },
);

export default Button;
