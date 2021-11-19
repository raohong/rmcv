import classNames from 'classnames';
import React, { memo } from 'react';
import { useConfigContext } from '../config-provider';
import Loading from '../loading';
import Popup from '../popup';
import { isEmpty } from '../_utils';
import type { ActionSheetAction, ActionSheetProps } from './type';

const ActionSheet: React.FC<ActionSheetProps> = ({
  visible,
  onCancel,
  onClose,
  onSelect,
  closeOnClickAction,
  cancelText,
  onOverlayClick,
  overlayClassName,
  overlayClosable,
  overlayStyle,
  closeIcon,
  title,
  description,
  actions,
  afterVisibleChange,
  onBeforClose,
  lazyRender = true,
  safeAreaInsetBottom = true,
  overlay = true,
  closable = true,
  lockScroll = true,
  round = true,
  children,
  ...rest
}) => {
  const { getPrefixCls } = useConfigContext();
  const baseCls = getPrefixCls('action-sheet');

  const handleClose = async () => {
    onClose?.();
  };

  const handleActionClick = async (
    action: ActionSheetAction,
    index: number,
  ) => {
    onSelect?.(action, index);
    action.callback?.(action);

    if (closeOnClickAction) {
      const result = await onBeforClose?.(action, index);
      if (result !== false) {
        handleClose();
      }
    }
  };

  const renderCancelBtn = () => {
    if (cancelText) {
      return (
        <>
          <div className={`${baseCls}-gap`} />
          <button
            type="button"
            className={classNames(`${baseCls}-item`, `${baseCls}-cancel`)}
            onClick={() => {
              onCancel?.();
              handleClose();
            }}
          >
            {cancelText}
          </button>
        </>
      );
    }

    return null;
  };

  const renderActionSheets = () =>
    actions?.map((action, index) => (
      <button
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        type="button"
        className={classNames(
          `${baseCls}-item`,
          {
            [`${baseCls}-item-disabled`]: action.disabled,
            [`${baseCls}-item-loading`]: action.loading,
          },
          action.className,
        )}
        style={{ color: action.color }}
        onClick={() => {
          if (!action.disabled && !action.loading) {
            handleActionClick(action, index);
          }
        }}
        disabled={action.disabled}
      >
        {action.loading ? (
          <Loading className={`${baseCls}-loading-icon`} />
        ) : (
          <>
            <span>{action.name}</span>
            {!isEmpty(action.subName) && (
              <div className={`${baseCls}-sub-name`}>{action.subName}</div>
            )}
          </>
        )}
      </button>
    ));

  const hasCustomContent = !isEmpty(children);

  return (
    <Popup
      {...rest}
      lockScroll={lockScroll}
      overlay={overlay}
      overlayClassName={overlayClassName}
      overlayStyle={overlayStyle}
      overlayClosable={overlayClosable}
      onOverlayClick={onOverlayClick}
      visible={visible}
      round={round}
      safeArea={safeAreaInsetBottom}
      closeable={closable ?? !isEmpty(title)}
      closeIconClassName={`${baseCls}-close-icon`}
      onClose={handleClose}
      closeIcon={closeIcon}
      lazyRender={lazyRender}
      afterVisibileChange={afterVisibleChange}
      position="bottom"
      className={baseCls}
    >
      {!isEmpty(title) && <div className={`${baseCls}-title`}>{title}</div>}
      {!isEmpty(description) && (
        <div className={`${baseCls}-description`}>{description}</div>
      )}
      <div className={`${baseCls}-content`}>
        {hasCustomContent ? children : renderActionSheets()}
      </div>
      {!hasCustomContent && renderCancelBtn()}
    </Popup>
  );
};

export default memo(ActionSheet);