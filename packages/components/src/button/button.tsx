import React from 'react';
import { isString, isNull } from 'lodash';
import classNames from 'classnames';
import Loading from '../loading';
import { useConfigContext } from '../config-provider';
import type { ButtonProps, WithButton } from './interface';
import Touchable from '../touchable';

const isReactText = (child: React.ReactNode): child is React.ReactText =>
  isString(child) || isNull(child);

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
      hairline = true,
      loadingSize = 20,
      size = 'default',
      shape = 'square',
      ...rest
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();
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
        [`${baseCls}-${size}`]: size !== 'default' && size,
        [`${baseCls}-${type}`]: type,
        [`${baseCls}-${shape}`]: shape,
      },
      className,
    );

    const renderChildren = () => {
      const hasIcon = loading || !!icon;
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
                >
                  {loadingText}
                </Loading>
              ) : (
                icon
              )}
            </div>
          )}
          {isReactText(targetChildren) ? (
            <span>{targetChildren}</span>
          ) : (
            targetChildren
          )}
        </>
      );
    };

    const isLink = target ?? href;

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
      >
        {renderChildren()}
      </Touchable>
    );
  },
);

export default Button as WithButton;
