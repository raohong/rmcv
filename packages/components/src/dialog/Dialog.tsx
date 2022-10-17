import { useUnmountedRef } from '@rmc-vant/hooks';
import { isEmpty, isString } from '@rmc-vant/utils';
import classNames from 'classnames';
import React, { useState } from 'react';
import { getDataOrAriaProps } from '../_utils';
import Button from '../button';
import { useConfigContext } from '../config-provider';
import Popup from '../popup';
import type { DialogAction, DialogProps } from './interface';

const SMALL_SCREEN_WIDTH = 320;

const Dialog: React.FC<DialogProps> = ({
  title,
  message,
  width,
  className,
  overlay,
  overlayClassName,
  overlayClosable,
  overlayStyle,
  style,
  showCancelButton,
  cancelButtonColor,
  cancelButtonText,
  confirmButtonColor,
  beforeClose,
  onCancel,
  onClose,
  onConfirm,
  lockScroll,
  teleport,
  afterClose,
  visible,
  motionName,
  footer,
  closeOnPopstate = true,
  showConfirmButton = true,
  confirmButtonText,
  messageAlign = 'center',
  theme = 'default',
  ...rest
}) => {
  const { getPrefixCls } = useConfigContext();
  const [loadingState, setLoadingState] = useState<Record<DialogAction, boolean>>({
    cancel: false,
    confirm: false,
  });
  const unmountedRef = useUnmountedRef();

  const handleClose = async (action?: DialogAction) => {
    if (beforeClose && action) {
      if (loadingState[action]) {
        return;
      }
      setLoadingState((prev) => ({
        ...prev,
        [action]: true,
      }));

      try {
        const result = await beforeClose(action);

        if (result === false) {
          return;
        }

        onClose?.();
      } finally {
        if (!unmountedRef.current) {
          setLoadingState((prev) => ({
            ...prev,
            [action]: false,
          }));
        }
      }
    } else {
      onClose?.();
    }
  };

  const handleConfirm = async () => {
    onConfirm?.();
    handleClose('confirm');
  };

  const handleCancel = async () => {
    onCancel?.();
    handleClose('cancel');
  };

  const cls = getPrefixCls('dialog');
  const internalConfirmButtonText = confirmButtonText ?? '确定';
  const internalCancelButtonText = cancelButtonText ?? '取消';
  const hasHeader = !isEmpty(title);
  const hasMessage = !isEmpty(message);
  const hasFooter = !isEmpty(footer) || showCancelButton || showConfirmButton;
  const headerIsIsolated = !hasMessage && !hasFooter;
  const internalMotionName = motionName || getPrefixCls('dialog-animation');
  const footerBorder =
    !isEmpty(footer) ||
    (showCancelButton && showConfirmButton && theme !== 'round-button');
  const buttonBorder = !footerBorder && theme !== 'round-button';
  const titleString = (isString(title) && title) || undefined;
  // const messageString = isString(message) && message;

  const renderFooter = () => {
    if (!isEmpty(footer)) {
      return (
        <div
          className={classNames(
            `${cls}-footer`,
            `${cls}-footer-custom`,
            footerBorder && `${cls}-footer-border`,
          )}
        >
          {footer}
        </div>
      );
    }

    if (!hasFooter) {
      return null;
    }

    return (
      <div
        className={classNames(
          `${cls}-footer`,
          footerBorder && `${cls}-footer-border`,
        )}
      >
        {showCancelButton && (
          <Button
            style={{ color: cancelButtonColor }}
            className={classNames(
              `${cls}-button`,
              `${cls}-button-cancel`,
              showConfirmButton && `${cls}-button-first`,
            )}
            onClick={handleCancel}
            border={buttonBorder}
            loading={loadingState.cancel}
            block
            hairline
          >
            {internalCancelButtonText}
          </Button>
        )}
        {showConfirmButton && (
          <Button
            style={{
              color: confirmButtonColor,
            }}
            onClick={handleConfirm}
            className={classNames(
              `${cls}-button`,
              `${cls}-button-confirm`,
              showCancelButton && `${cls}-button-second`,
            )}
            loading={loadingState.confirm}
            border={buttonBorder}
            block
            hairline
          >
            {internalConfirmButtonText}
          </Button>
        )}
      </div>
    );
  };

  return (
    <Popup
      teleport={teleport}
      lockScroll={lockScroll}
      overlay={overlay}
      overlayClassName={overlayClassName}
      overlayStyle={overlayStyle}
      overlayClosable={overlayClosable}
      onClose={handleClose}
      position="center"
      afterClose={afterClose}
      visible={visible}
      motionName={internalMotionName}
      closeOnPopstate={closeOnPopstate}
      style={{
        width: width === SMALL_SCREEN_WIDTH ? undefined : width,
        ...style,
      }}
      className={classNames(
        cls,
        {
          [`${cls}-theme-round-button`]: theme === 'round-button',
        },
        className,
      )}
      tabIndex={-1}
      role="dialog"
      aria-labelledby={titleString}
      transitionAppear
      aria-modal
      {...getDataOrAriaProps(rest)}
    >
      {hasHeader && (
        <h2
          className={classNames(
            `${cls}-header`,
            headerIsIsolated && `${cls}-header-isolated`,
          )}
        >
          {title}
        </h2>
      )}

      {hasMessage && (
        <div
          className={classNames(`${cls}-message`, {
            [`${cls}-message-align-${messageAlign}`]: messageAlign !== 'center',
            [`${cls}-has-title-message`]: hasHeader,
          })}
        >
          {message}
        </div>
      )}
      {renderFooter()}
    </Popup>
  );
};

export default Dialog;
