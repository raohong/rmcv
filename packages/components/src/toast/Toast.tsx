import { useInterval } from '@rmc-vant/hooks';
import { Fail, Success } from '@rmc-vant/icons';
import type { IconProps } from '@rmc-vant/icons';
import { isEmpty } from '@rmc-vant/utils';
import clsx from 'clsx';
import React, { useEffect, useMemo } from 'react';
import { composeToastSlotClassNames } from './classNames';
import type { ToastComponentState, ToastProps, ToastType } from './interface';
import { ToastIcon, ToastLoadingIcon, ToastMessage, ToastRoot } from './styles';

const iconMap: Partial<
  Record<ToastType, React.ForwardRefExoticComponent<IconProps>>
> = {
  fail: Fail,
  success: Success,
};

const Toast: React.FC<ToastProps> = ({
  message,
  icon,
  overlay,
  overlayClosable,
  onClose,
  className,
  closeOnClick,
  style,
  open,
  afterClose,
  position = 'center',
  duration = 2400,
  loadingType = 'circular',
  type = 'normal',
  ...rest
}) => {
  const { start, cancel } = useInterval(
    () => {
      onClose?.();
    },
    {
      interval: duration,
    },
  );

  const componentState: ToastComponentState = useMemo(
    () => ({
      type,
      loadingType,
      position,
    }),
    [loadingType, type, position],
  );
  const slotClassNames = composeToastSlotClassNames(componentState);

  useEffect(() => {
    if (open && duration > 0) {
      start();
    }

    return cancel;
  }, [open, duration, start, cancel]);

  const handleClose = () => {
    onClose?.();
  };

  const renderIcon = () => {
    const defaultIcon = iconMap[type];

    if (type === 'loading') {
      return (
        <ToastLoadingIcon
          type={loadingType}
          className={slotClassNames.loadingIcon}
          componentState={componentState}
        />
      );
    }

    if (!defaultIcon && isEmpty(icon)) {
      return null;
    }

    return (
      <ToastIcon className={slotClassNames.icon} componentState={componentState}>
        {isEmpty(icon) ? React.createElement(defaultIcon!) : icon}
      </ToastIcon>
    );
  };

  return (
    <ToastRoot
      position="center"
      overlay={!!overlay}
      open={open}
      onClose={handleClose}
      overlayClosable={overlayClosable}
      afterClose={afterClose}
      className={clsx(className, slotClassNames.root)}
      style={style}
      onClick={() => {
        if (closeOnClick) {
          handleClose();
        }
      }}
      componentState={componentState}
      lazyRender
      {...rest}
    >
      {renderIcon()}
      <ToastMessage
        componentState={componentState}
        className={slotClassNames.message}
      >
        {message}
      </ToastMessage>
    </ToastRoot>
  );
};
export default Toast;
