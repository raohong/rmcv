import React, { useEffect } from 'react';
import classNames from 'classnames';
import { isEmpty } from '@rmc-vant/utils';
import { Fail, Success } from '@rmc-vant/icons';
import type { IconProps } from '@rmc-vant/icons';
import { useInterval } from '@rmc-vant/hooks';
import { useConfigContext } from '../config-provider';
import Loading from '../loading';
import Popup from '../popup';
import type { ToastProps, ToastType } from './interface';

const iconMap: Partial<
  Record<ToastType, React.ForwardRefExoticComponent<IconProps>>
> = {
  fail: Fail,
  success: Success,
};

const Toast: React.FC<ToastProps> = ({
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
  afterClose,
  duration = 2400,
  loadingType = 'circular',
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
    if (visible && duration > 0) {
      start();
    }

    return cancel;
  }, [visible, duration]);

  const cls = getPrefixCls('toast');

  const handleClose = () => {
    onClose?.();
  };

  const renderIcon = () => {
    const defaultIcon = iconMap[type];
    const iconCls = `${cls}-icon`;

    if (!isEmpty(icon)) {
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
      onClose={handleClose}
      overlayClosable={overlayClosable}
      afterClose={afterClose}
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
export default Toast;
