import React, { useEffect } from 'react';
import classNames from 'classnames';
import isNil from 'lodash/isNil';
import { Fail, Success } from '@rmc-vant/icons';
import type { IconProps } from '@rmc-vant/icons';
import { useConfigContext } from '../config-provider';
import Loading from '../loading';
import { useInterval } from '../_hooks';
import type { ToastOptions, ToastType } from './type';
import Popup from '../popup';

const iconMap: Partial<Record<ToastType, React.ComponentType>> = {
  fail: Fail,
  success: Success,
};

const ToastComponent: React.FC<ToastOptions & { visible?: boolean }> = ({
  position,
  message,
  icon,
  overlay,
  overlayClassName,
  overlayClosable,
  overlayStyle,
  onClose,
  className,
  closeOnClick,
  style,
  visible,
  duration = 2400,
  onCloseAnimationEnd,
  loadingType = 'spinner',
  type = 'normal',
  ...rest
}) => {
  const { getPrefixCls } = useConfigContext();
  const { start, cancel } = useInterval(
    () => {
      onClose?.();
    },
    {
      interval: duration,
    },
  );

  useEffect(() => {
    if (visible) {
      start();
    }

    return cancel;
  }, [visible]);

  const cls = getPrefixCls('toast');

  const handleClose = () => {
    onClose?.();
  };

  const renderIcon = () => {
    const defaultIcon = iconMap[type];
    const iconCls = `${cls}-icon`;

    if (!isNil(icon)) {
      return React.isValidElement(icon) ? (
        React.cloneElement(icon, {
          className: classNames(icon.props.className, iconCls),
        })
      ) : (
        <span className={iconCls}>{icon}</span>
      );
    }

    if (type === 'loading') {
      return (
        <Loading
          type={loadingType}
          className={classNames(iconCls, `${cls}-loading-icon`)}
        />
      );
    }

    if (!defaultIcon) {
      return null;
    }

    return React.createElement(defaultIcon as React.FC<IconProps>, {
      className: iconCls,
    });
  };

  return (
    <Popup
      lazyRender
      position="center"
      overlay={!!overlay}
      overlayClassName={overlayClassName}
      overlayStyle={overlayStyle}
      visible={visible}
      onVisibleChange={handleClose}
      overlayClosable={overlayClosable}
      onAnimationEnd={() => {
        if (!visible) {
          onCloseAnimationEnd?.();
        }
      }}
      className={classNames(
        cls,
        {
          [`${cls}-position-${position}`]: position,
          [`${cls}-${type}`]: type,
        },
        className,
      )}
      style={style}
      onClick={() => {
        if (closeOnClick) {
          handleClose();
        }
      }}
      {...rest}
    >
      {renderIcon()}
      <div className={`${cls}-message`}>{message}</div>
    </Popup>
  );
};
export default ToastComponent;