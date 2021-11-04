import React from 'react';
import isNull from 'lodash/isNull';
import isString from 'lodash/isString';
import classNames from 'classnames';
import Loading from '../loading';
import { useConfigContext } from '../config-provider';
import type { ButtonProps } from './type';

const isReactText = (child: React.ReactNode): child is React.ReactText =>
  isString(child) || isNull(child);

const InternalButton = (
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
  }: ButtonProps,
  ref: React.Ref<HTMLElement>,
) => {
  const { getPrefixCls } = useConfigContext();
  const baseCls = getPrefixCls('button');

  const handleClick: React.MouseEventHandler<HTMLElement> = (evt) => {
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

  return type === 'link' ? (
    <a
      className={cls}
      href={href}
      target={target}
      onClick={handleClick}
      role="button"
      aria-disabled={disabled}
      ref={ref as React.Ref<HTMLAnchorElement>}
      {...(rest as React.HTMLAttributes<HTMLAnchorElement>)}
    >
      {renderChildren()}
    </a>
  ) : (
    <button
      className={cls}
      disabled={disabled}
      type={htmlType}
      onClick={handleClick}
      aria-disabled={disabled}
      ref={ref as React.Ref<HTMLButtonElement>}
      {...rest}
    >
      {renderChildren()}
    </button>
  );
};

const Button = React.forwardRef<HTMLElement, ButtonProps>(InternalButton);

export default Button;
