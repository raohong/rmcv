'use-client';

import { isEmpty } from '@rmc-vant/utils';
import clsx from 'clsx';
import React, { useMemo } from 'react';
import { hapticFeedback } from '../_styles';
import { useThemeProps } from '../config-provider';
import { ButtonName, composeButtonSlotClassNames } from './classNames';
import type { ButtonComponentState, ButtonProps } from './interface';
import { ButtonIcon, ButtonLoading, ButtonRoot } from './styles';

const Button = React.forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      href,
      target,
      htmlType,
      onClick,
      icon,
      className,
      children,
      loadingType,
      loadingSize,
      color,
      classNames,
      component = 'button',
      hairline = false,
      activeStyle = hapticFeedback,
      block = false,
      loading = false,
      disabled = false,
      type = 'default',
      variant = 'contained',
      border = true,
      size = 'normal',
      shape = 'default',
      ...rest
    } = useThemeProps(ButtonName, props);

    const handleClick = (
      evt: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>,
    ) => {
      if (loading || disabled) {
        return;
      }

      (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(
        evt,
      );
    };

    const isAnchor = !!(target || href);
    const isEmptyContent = isEmpty(children);

    const componentState: ButtonComponentState = useMemo(
      () => ({
        type,
        variant,
        shape,
        size,
        border,
        disabled,
        loading,
        block,
        color,
        emptyContent: isEmptyContent,
        colorIsGradient: !!color && color.includes('gradient'),
        hairline,
      }),
      [
        type,
        variant,
        shape,
        size,
        border,
        disabled,
        loading,
        block,
        color,
        isEmptyContent,
        hairline,
      ],
    );

    const slotClassNames = composeButtonSlotClassNames(componentState, classNames);

    const renderIcon = () => {
      if (isEmpty(icon) && !loading) {
        return null;
      }

      return (
        <ButtonIcon className={slotClassNames.icon} componentState={componentState}>
          {loading && isEmpty(icon)
            ? (
                <ButtonLoading
                  componentState={componentState}
                  className={slotClassNames.loadingIcon}
                  type={loadingType}
                  size={loadingSize}
                  color={type === 'default' ? undefined : '#fff'}
                  textColor={type === 'default' ? undefined : '#fff'}
                />
              )
            : (
                icon
              )}
        </ButtonIcon>
      );
    };

    return (
      <ButtonRoot
        component={isAnchor ? 'a' : component}
        aria-disabled={disabled ? 'true' : 'false'}
        onClick={handleClick}
        ref={ref as React.ForwardedRef<any>}
        className={clsx(className, slotClassNames.root)}
        {...(isAnchor
          ? { href, target }
          : {
              type: htmlType,
            })}
        {...(!disabled ? {} : { disabled: true })}
        activeStyle={activeStyle}
        {...rest}
        componentState={componentState}
      >
        {renderIcon()}
        {children}
      </ButtonRoot>
    );
  },
);

export default Button;
