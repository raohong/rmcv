import { isEmpty } from '@rmc-vant/utils';
import classNames from 'classnames';
import React from 'react';
import { useConfigContext } from '../config-provider';
import Loading from '../loading';
import Touchable from '../touchable';
import type { ButtonProps } from './interface';

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
      border = true,
      size = 'normal',
      shape = 'square',
      ...rest
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();
    const baseCls = getPrefixCls('button');

    const handleClick = <T extends HTMLAnchorElement | HTMLButtonElement>(
      evt: React.MouseEvent<T>,
    ) => {
      if (loading || disabled) {
        return;
      }

      onClick?.(evt);
    };

    const showBorder = border && !disabled;

    const cls = classNames(
      baseCls,
      {
        [`${baseCls}-loading`]: loading,
        [`${baseCls}-disabled`]: disabled,
        [`${baseCls}-plain`]: plain,
        [`${baseCls}-hairline`]: hairline && showBorder,
        [`${baseCls}-block`]: block,
        [`${baseCls}-icon-only`]: isEmpty(children),
        [`${baseCls}-borderless`]: !showBorder,
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
        touchDisabled={disabled || loading}
        activeClassName={`${baseCls}-active`}
        className={cls}
        href={href}
        target={target}
        role="button"
        aria-disabled={disabled}
        onClick={handleClick}
        ref={ref as React.LegacyRef<HTMLAnchorElement>}
        {...rest}
        style={styles}
      >
        {renderChildren()}
      </Touchable>
    ) : (
      <Touchable
        component="button"
        touchDisabled={disabled || loading}
        activeClassName={`${baseCls}-active`}
        className={cls}
        disabled={disabled}
        type={htmlType}
        aria-disabled={disabled}
        onClick={handleClick}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...rest}
        style={styles}
      >
        {renderChildren()}
      </Touchable>
    );
  },
);

export default Button;
