import { useControllableValue } from '@rmc-vant/hooks';
import * as s from '@rmc-vant/hooks';
import { composeProps, isEmpty } from '@rmc-vant/utils';
import classNames from 'classnames';
import React from 'react';
import { getDataOrAriaProps } from '../_utils';
import { useConfigContext } from '../config-provider';
import Loading from '../loading';
import Popup from '../popup';
import Touchable from '../touchable';
import type { ActionSheetAction, ActionSheetProps } from './interface';

const ActionSheet: React.FC<ActionSheetProps> = ({
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
  afterClose,
  onBeforeClose,
  className,
  content,
  children,
  closeOnPopState = true,
  lazyRender = true,
  safeArea = true,
  overlay = true,
  closable = true,
  lockScroll = true,
  round = true,
  ...rest
}) => {
  console.log(s);
  const { getPrefixCls } = useConfigContext();
  const baseCls = getPrefixCls('action-sheet');
  const [visible, setVisible] = useControllableValue(rest, {
    trigger: 'onVisibleChange',
    defaultValue: false,
    valuePropName: 'visible',
  });

  const handleClose = async () => {
    onClose?.();
    setVisible(false);
  };

  const handleActionClick = async (action: ActionSheetAction, index: number) => {
    onSelect?.(action, index);
    action.callback?.(action);

    if (closeOnClickAction) {
      const result = await onBeforeClose?.(action);
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
      <Touchable
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        type="button"
        component="button"
        activeClassName={`${baseCls}-item-active`}
        touchDisabled={action.disabled}
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
            {!isEmpty(action.subname) && (
              <div className={`${baseCls}-sub-name`}>{action.subname}</div>
            )}
          </>
        )}
      </Touchable>
    ));

  const hasCustomContent = !isEmpty(content);

  return (
    <>
      <Popup
        {...getDataOrAriaProps(rest)}
        lockScroll={lockScroll}
        overlay={overlay}
        overlayClassName={overlayClassName}
        overlayStyle={overlayStyle}
        overlayClosable={overlayClosable}
        onOverlayClick={onOverlayClick}
        visible={visible}
        round={round}
        safeArea={safeArea}
        closeable={closable ?? !isEmpty(title)}
        closeIconClassName={`${baseCls}-close-icon`}
        onClose={handleClose}
        closeIcon={closeIcon}
        lazyRender={lazyRender}
        afterClose={afterClose}
        position="bottom"
        className={classNames(baseCls, className)}
        closeOnPopstate={closeOnPopState}
      >
        {!isEmpty(title) && <div className={`${baseCls}-title`}>{title}</div>}
        {!isEmpty(description) && (
          <div className={`${baseCls}-description`}>{description}</div>
        )}
        <div className={`${baseCls}-content`}>
          {hasCustomContent ? content : renderActionSheets()}
        </div>
        {!hasCustomContent && renderCancelBtn()}
      </Popup>
      {React.isValidElement(children) &&
        React.cloneElement(
          children,
          composeProps(children.props, {
            onClick: () => setVisible(true),
          }),
        )}
    </>
  );
};

export default ActionSheet;
