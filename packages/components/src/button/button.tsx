import React from 'react';
import PropTypes from 'prop-types';
import { isNull, isString } from '@rmc-vant/utils';
import { isEmpty } from '../_utils';
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
    hairline,
    type,
    loadingSize = 20,
    size = 'normal',
    shape = 'square',
    ...rest
  }: ButtonProps,
  ref: React.Ref<HTMLElement>,
) => {
  const { getPrefixCls } = useConfigContext();
  const baseCls = getPrefixCls('btn');

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
      [`${getPrefixCls('hairline')}-surround`]: hairline,
      [`${baseCls}-block`]: block,
      [`${baseCls}-${size}`]: size,
      [`${baseCls}-${type}`]: type,
      [`${baseCls}-${shape}`]: shape,
    },
    className,
  );

  const renderChildren = () => {
    const hasIcon = loading || !!icon;

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
        {!isEmpty(loadingText) && loading ? null : isReactText(children) ? (
          <span>{children}</span>
        ) : (
          children
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
      role="button"
      ref={ref as React.Ref<HTMLButtonElement>}
      {...rest}
    >
      {renderChildren()}
    </button>
  );
};

const Button = React.forwardRef<HTMLElement, ButtonProps>(InternalButton);

Button.propTypes = {
  shape: PropTypes.oneOf(['square', 'round']),
  htmlType: PropTypes.oneOf(['submit', 'reset', 'button']),
  type: PropTypes.oneOf(['primary', 'info', 'warning', 'danger', 'link']),
};

export default Button;
