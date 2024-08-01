import { useUnmountedRef } from '@rmc-vant/hooks';
import { isEmpty, isString } from '@rmc-vant/utils';
import clsx from 'clsx';
import React, { useMemo, useState } from 'react';
import { getDataOrAriaProps } from '../_utils';
import { useThemeProps } from '../config-provider';
import { DialogName, composeDialogSlotClassNames } from './classNames';
import type { DialogAction, DialogComponentState, DialogProps } from './interface';
import {
  DialogCancelButton,
  DialogConfirmButton,
  DialogFooter,
  DialogMessage,
  DialogRoot,
  DialogTitle,
} from './styles';

const SMALL_SCREEN_WIDTH = 320;

const Dialog: React.FC<DialogProps> = (props) => {
  const {
    title,
    message,
    width,
    className,
    overlay,
    overlayClosable,
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
    open,
    classNames,
    footer,
    closeOnPopstate = true,
    showConfirmButton = true,
    confirmButtonText,
    messageAlign = 'center',
    theme = 'default',
    ...rest
  } = useThemeProps(DialogName, props);

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
      setLoadingState(prev => ({
        ...prev,
        [action]: true,
      }));

      try {
        const result = await beforeClose(action);

        if (result === false) {
          return;
        }

        onClose?.();
      }
      finally {
        if (!unmountedRef.current) {
          setLoadingState(prev => ({
            ...prev,
            [action]: false,
          }));
        }
      }
    }
    else {
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

  const internalConfirmButtonText = confirmButtonText ?? '确定';
  const internalCancelButtonText = cancelButtonText ?? '取消';
  const hasTitle = !isEmpty(title);
  const hasMessage = !isEmpty(message);
  const hasFooter = !isEmpty(footer) || showCancelButton || showConfirmButton;
  const titleIsIsolated = !hasMessage && !hasFooter;
  const footerBorder
    = !isEmpty(footer)
    || ((showCancelButton || showConfirmButton) && theme !== 'round-button');
  const buttonBorder = !footerBorder && theme !== 'round-button';
  const titleString = (isString(title) && title) || undefined;

  const componentState = useMemo(
    () =>
      ({
        titleIsIsolated,
        hasTitle,
        footerBorder,
        theme,
        messageAlign,
        cancelButtonColor,
        confirmButtonColor,
      }) satisfies DialogComponentState,
    [
      titleIsIsolated,
      hasTitle,
      footerBorder,
      theme,
      confirmButtonColor,
      cancelButtonColor,
      messageAlign,
    ],
  );
  const slotClassNames = composeDialogSlotClassNames(componentState, classNames);

  const renderFooter = () => {
    if (!isEmpty(footer)) {
      return (
        <DialogFooter
          componentState={componentState}
          className={slotClassNames.footer}
        >
          {footer}
        </DialogFooter>
      );
    }

    if (!hasFooter) {
      return null;
    }

    return (
      <DialogFooter
        componentState={componentState}
        className={slotClassNames.footer}
      >
        {showCancelButton && (
          <DialogCancelButton
            className={slotClassNames.cancelButton}
            componentState={componentState}
            onClick={handleCancel}
            border={buttonBorder}
            loading={loadingState.cancel}
            block
            hairline
          >
            {!loadingState.cancel && internalCancelButtonText}
          </DialogCancelButton>
        )}
        {showConfirmButton && (
          <DialogConfirmButton
            className={slotClassNames.confirmButton}
            componentState={componentState}
            onClick={handleConfirm}
            loading={loadingState.confirm}
            border={buttonBorder}
            block
            hairline
          >
            {!loadingState.confirm && internalConfirmButtonText}
          </DialogConfirmButton>
        )}
      </DialogFooter>
    );
  };

  return (
    <DialogRoot
      componentState={componentState}
      teleport={teleport}
      lockScroll={lockScroll}
      overlay={overlay}
      overlayClosable={overlayClosable}
      onClose={handleClose}
      position='center'
      afterClose={afterClose}
      open={open}
      closeOnPopstate={closeOnPopstate}
      style={{
        width: width === SMALL_SCREEN_WIDTH ? undefined : width,
        ...style,
      }}
      className={clsx(slotClassNames.root, className)}
      tabIndex={-1}
      role='dialog'
      aria-labelledby={titleString}
      transitionAppear
      aria-modal
      {...getDataOrAriaProps(rest)}
    >
      {hasTitle && (
        <DialogTitle
          className={slotClassNames.title}
          componentState={componentState}
        >
          {title}
        </DialogTitle>
      )}

      {hasMessage && (
        <DialogMessage
          componentState={componentState}
          className={slotClassNames.message}
        >
          {message}
        </DialogMessage>
      )}
      {renderFooter()}
    </DialogRoot>
  );
};

export default Dialog;
