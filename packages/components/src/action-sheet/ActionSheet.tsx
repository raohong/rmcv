import { useControllableValue } from '@rmc-vant/hooks';
import { composeProps, isEmpty } from '@rmc-vant/utils';
import clsx from 'clsx';
import React, { useMemo } from 'react';
import { elementBackgroundHapticFeedback } from '../_styles';
import { getDataOrAriaProps } from '../_utils';
import { useThemeProps } from '../config-provider';
import {
  ActionSheetName,
  actionSheetClassNames,
  composeActionSheetSlotClassNames,
} from './classNames';
import type {
  ActionSheetAction,
  ActionSheetComponentState,
  ActionSheetProps,
} from './interface';
import {
  ActionSheetCancelButton,
  ActionSheetCloseIconSx,
  ActionSheetContent,
  ActionSheetDescription,
  ActionSheetItem,
  ActionSheetItemSubname,
  ActionSheetLoadingIcon,
  ActionSheetRoot,
  ActionSheetTitle,
} from './styles';

const elemFeedback = elementBackgroundHapticFeedback();

const ActionSheet: React.FC<ActionSheetProps> = (props) => {
  const {
    onCancel,
    onClose,
    onSelect,
    closeOnClickAction,
    cancelText,
    onOverlayClick,
    overlayClosable,
    closeIcon,
    title,
    description,
    actions,
    afterClose,
    onBeforeClose,
    className,
    content,
    children,
    classNames,
    closable,
    closeOnPopState = true,
    lazyRender = true,
    safeArea = true,
    overlay = true,
    lockScroll = true,
    round = true,
    ...rest
  } = useThemeProps(ActionSheetName, props);
  const [open, setOpen] = useControllableValue(rest, {
    trigger: 'onOpenChange',
    defaultValue: false,
    valuePropName: 'open',
    defaultValuePropName: 'defaultOpen',
  });

  const componentState: ActionSheetComponentState = useMemo(() => ({}), []);
  const slotClassNames = composeActionSheetSlotClassNames(
    componentState,
    classNames,
  );

  const handleClose = async () => {
    onClose?.();
    setOpen(false);
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
    if (!isEmpty(cancelText)) {
      return (
        <>
          <ActionSheetCancelButton
            componentState={componentState}
            className={slotClassNames.cancelButton}
            activeStyle={elemFeedback}
            onClick={() => {
              onCancel?.();
              handleClose();
            }}
          >
            {cancelText}
          </ActionSheetCancelButton>
        </>
      );
    }

    return null;
  };

  const renderActionSheets = () =>
    actions?.map((action, index) => {
      const itemComponentState = {
        ...componentState,
        disabled: !!action.disabled,
        loading: !!action.loading,
        color: action.color,
      };

      return (
        <ActionSheetItem
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          activeStyle={elemFeedback}
          disabled={action.disabled}
          className={clsx(
            slotClassNames.item,
            action.className,
            action.loading && actionSheetClassNames.itemLoading,
            action.disabled && actionSheetClassNames.itemDisabled,
          )}
          style={{ color: action.color }}
          onClick={() => {
            if (!action.disabled && !action.loading) {
              handleActionClick(action, index);
            }
          }}
          componentState={itemComponentState}
        >
          {action.loading ? (
            <ActionSheetLoadingIcon
              componentState={componentState}
              className={slotClassNames.loadingIcon}
            />
          ) : (
            <>
              <span>{action.name}</span>
              {!isEmpty(action.subname) && (
                <ActionSheetItemSubname
                  componentState={itemComponentState}
                  className={slotClassNames.itemSubname}
                >
                  {action.subname}
                </ActionSheetItemSubname>
              )}
            </>
          )}
        </ActionSheetItem>
      );
    });

  const hasCustomContent = !isEmpty(content);

  return (
    <>
      <ActionSheetRoot
        {...getDataOrAriaProps(rest)}
        lockScroll={lockScroll}
        overlay={overlay}
        overlayClosable={overlayClosable}
        onOverlayClick={onOverlayClick}
        open={open}
        round={round}
        safeArea={safeArea}
        closeable={closable ?? (!isEmpty(title) || hasCustomContent)}
        onClose={handleClose}
        closeIcon={closeIcon}
        afterClose={afterClose}
        position="bottom"
        componentState={componentState}
        className={clsx(slotClassNames.root, className)}
        closeOnPopstate={closeOnPopState}
        closeIconSx={ActionSheetCloseIconSx}
        classNames={{
          closeIcon: slotClassNames.closeIcon,
        }}
        lazyRender={lazyRender}
      >
        {!isEmpty(title) && (
          <ActionSheetTitle
            componentState={componentState}
            className={slotClassNames.title}
          >
            {title}
          </ActionSheetTitle>
        )}
        {!isEmpty(description) && (
          <ActionSheetDescription
            componentState={componentState}
            className={slotClassNames.description}
          >
            {description}
          </ActionSheetDescription>
        )}
        <ActionSheetContent
          componentState={componentState}
          className={slotClassNames.content}
        >
          {hasCustomContent ? content : renderActionSheets()}
        </ActionSheetContent>
        {!hasCustomContent && renderCancelBtn()}
      </ActionSheetRoot>
      {React.isValidElement(children) &&
        React.cloneElement(
          children,
          composeProps(children.props, {
            onClick: () => setOpen(true),
          }),
        )}
    </>
  );
};

export default ActionSheet;
