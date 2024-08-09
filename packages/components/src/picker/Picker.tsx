'use-client';

import { useControllableValue, useUpdateEffect } from '@rmc-vant/hooks';
import { compose, isFunction, omit } from '@rmc-vant/utils';
import clsx from 'clsx';
import React, { useMemo } from 'react';
import { elementOpacityHapticFeedback } from '../_styles';
import { useThemeProps } from '../config-provider';
import PickerColumn from './PickerColumn';
import { PickerName, composePickerSlotClassNames } from './classNames';
import type {
  PickerBaseOptionWithChildren,
  PickerComponentState,
  PickerProps,
  PickerValue,
} from './interface';
import {
  PickerCancelButton,
  PickerColumnList,
  PickerConfirmButton,
  PickerIndicator,
  PickerLoading,
  PickerLoadingRoot,
  PickerMask,
  PickerPopup,
  PickerRoot,
  PickerTitle,
  PickerToolbar,
} from './styles';
import {
  fillValueByNestedOptions,
  getPickerColumnData,
  getPickerColumnsLength,
  isNestedOptions,
} from './utils';

const feedback = elementOpacityHapticFeedback();

const Picker = <V extends PickerValue>(
  props: PickerProps<V>,
  ref: React.Ref<HTMLDivElement>,
) => {
  const {
    title,
    cancelButtonText,
    confirmButtonText,
    onCancel,
    onColumnChange,
    defaultValue,
    onChange,
    className,
    lazyRender,
    onOpen,
    children,
    classNames,
    loading,
    immediateChange = true,
    columns = [],
    showToolbar = true,
    visibleOptionNum = 6,
    optionHeight = 44,
    toolbarPosition = 'top',
    popup = false,
    ...rest
  } = useThemeProps(PickerName, props);

  const [value, setValue] = useControllableValue(rest, {
    defaultValue,
  });
  const [open, setOpen] = useControllableValue(rest, {
    valuePropName: 'open',
    trigger: 'onOpenChange',
    defaultValue: false,
  });

  const length = useMemo(() => getPickerColumnsLength(columns), [columns]);
  const isNested = isNestedOptions(columns);
  const { columns: internalColumns, indexList } = useMemo(
    () => getPickerColumnData(value, columns, length),
    [columns, value, length],
  );

  const componentState: PickerComponentState = useMemo(
    () => ({
      popup,
      toolbarPosition,
      loading: !!loading,
    }),
    [popup, toolbarPosition, loading],
  );
  const slotClassNames = composePickerSlotClassNames(componentState, classNames);

  const handleChange = (columnIndex: number, val: V) => {
    onColumnChange?.(columnIndex, val);

    const next = value ? [...value] : [];
    const previousLength = next.length;
    next[columnIndex] = val;

    if (previousLength > length) {
      for (let i = previousLength - 1; i >= length; i--) {
        next.splice(i, 1);
      }
    }

    for (let i = 0; i < next.length; i++) {
      if (isNested && i > columnIndex) {
        // @ts-ignore
        next[i] = undefined;
      }
      else if (i !== columnIndex && next[i] === undefined) {
        next[i] = internalColumns[i][0].value;
      }
    }

    // 嵌套结构置 0
    if (isNested) {
      fillValueByNestedOptions(
        next,
        columns as PickerBaseOptionWithChildren<V>[],
        length,
      );
    }

    onChange?.(next, columnIndex);

    setValue(next);
  };

  useUpdateEffect(() => {
    if (!popup) {
      setOpen(false);
    }
  }, [popup]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    if (popup) {
      handleClose();
    }

    onCancel?.();
  };

  const handleConfirm = () => {
    if (popup) {
      handleClose();
    }

    rest?.onConfirm?.(value);
  };

  const handleOpen = () => {
    setOpen(true);
    onOpen?.();
  };

  const totalHeight = visibleOptionNum * optionHeight;
  const content = (
    <PickerRoot
      className={clsx(slotClassNames.root, className)}
      {...omit(rest, ['value', 'onConfirm', 'children'])}
      ref={ref}
      componentState={componentState}
    >
      {!!showToolbar && (
        <PickerToolbar
          componentState={componentState}
          className={slotClassNames.toolbar}
        >
          <PickerCancelButton
            componentState={componentState}
            className={slotClassNames.cancelButton}
            activeStyle={feedback}
            onClick={handleCancel}
          >
            {cancelButtonText ?? '取消'}
          </PickerCancelButton>
          <PickerTitle
            className={slotClassNames.title}
            componentState={componentState}
          >
            {title}
          </PickerTitle>
          <PickerConfirmButton
            componentState={componentState}
            className={slotClassNames.confirmButton}
            activeStyle={feedback}
            onClick={handleConfirm}
          >
            {confirmButtonText ?? '确定'}
          </PickerConfirmButton>
        </PickerToolbar>
      )}
      {internalColumns.length > 0 && (
        <PickerColumnList>
          {internalColumns.map((list, index) => (
            <PickerColumn<V>
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              selectedIndex={indexList[index]}
              options={list}
              optionHeight={optionHeight}
              onChange={handleChange}
              totalHeight={totalHeight}
              columnIndex={index}
              immediateChange={immediateChange}
              componentState={componentState}
              slotClassNames={slotClassNames}
            />
          ))}
          <PickerMask
            style={{
              backgroundSize: `100% ${totalHeight / 2 - optionHeight / 2}px`,
            }}
            className={slotClassNames.mask}
            componentState={componentState}
          />
          <PickerIndicator
            style={{ height: optionHeight }}
            className={slotClassNames.indicator}
            componentState={componentState}
          />
        </PickerColumnList>
      )}
      {loading && (
        <PickerLoadingRoot>
          <PickerLoading
            className={slotClassNames.loading}
            componentState={componentState}
          />
        </PickerLoadingRoot>
      )}
    </PickerRoot>
  );

  const child
    = popup && children
      ? isFunction(children) ? children(value) : children
      : null;

  return popup
    ? (
        <>
          {!!child
          && React.cloneElement(child!, {
            onClick: compose(handleOpen, child?.props.onClick),
          })}
          <PickerPopup
            className={slotClassNames.popup}
            position='bottom'
            open={open}
            onClose={handleClose}
            lazyRender={lazyRender}
            componentState={componentState}
            round
          >
            {content}
          </PickerPopup>
        </>
      )
    : (
        <>{content}</>
      );
};

export default React.forwardRef(Picker) as <T extends PickerValue>(
  props: PickerProps<T>,
) => JSX.Element;
