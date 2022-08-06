import React, { useMemo } from 'react';
import classNames from 'classnames';
import { useUpdateEffect, useControllableValue } from '@rmc-vant/hooks';
import { chain, omit, isFunction } from '@rmc-vant/utils';
import { useConfigContext } from '../config-provider';
import Touchable from '../touchable';
import Loading from '../loading';
import Popup from '../popup';
import type {
  PickerBaseOptionWithChildren,
  PickerProps,
  PickerValue,
} from './interface';
import PickerColumn from './PickerColumn';
import {
  isNestedOptions,
  getPickerColumnData,
  getPickerColumnsLength,
  fillValueByNestedOptions,
} from './util';

const Picker = <V extends PickerValue>(
  {
    title,
    cancelButtonText,
    confirmButtonText,
    onCancel,
    loading,
    onColumnChange,
    defaultValue,
    onChange,
    className,
    lazyRender,
    onOpen,
    immediateChange = true,
    columns = [],
    showToolbar = true,
    visibleOptionNum = 6,
    optionHeight = 44,
    toolbarPosition = 'top',
    children,
    popup,
    ...rest
  }: PickerProps<V>,
  ref: React.Ref<HTMLDivElement>,
) => {
  const [value, setValue] = useControllableValue(rest, {
    defaultValue,
  });
  const { getPrefixCls } = useConfigContext();
  const [visible, setVisible] = useControllableValue(rest, {
    valuePropName: 'visible',
    trigger: 'onVisibleChange',
    defaultValue: false,
  });
  const cls = getPrefixCls('picker');

  const length = useMemo(() => getPickerColumnsLength(columns), [columns]);
  const isNested = isNestedOptions(columns);
  const { columns: internalColumns, indexList } = useMemo(
    () => getPickerColumnData(value, columns, length),
    [columns, value, length],
  );

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
      } else if (i !== columnIndex && next[i] === undefined) {
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
      setVisible(false);
    }
  }, [popup]);

  const handleClose = () => {
    setVisible(false);
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
    setVisible(true);
    onOpen?.();
  };

  const totalHeight = visibleOptionNum * optionHeight;
  const content = (
    <div
      className={classNames(
        cls,
        {
          [`${cls}-position-${toolbarPosition}`]: toolbarPosition === 'bottom',
        },
        className,
      )}
      {...omit(rest, ['value', 'onConfirm', 'children'])}
      ref={ref}
    >
      {!!showToolbar && (
        <div className={`${cls}-toolbar`}>
          <Touchable
            component="button"
            className={`${cls}-button ${cls}-cancel-button`}
            activeClassName={`${cls}-button-active`}
            onClick={handleCancel}
          >
            {cancelButtonText ?? '取消'}
          </Touchable>
          <h4 className={`${cls}-title`}>{title}</h4>
          <Touchable
            component="button"
            className={`${cls}-button ${cls}-confirm-button`}
            activeClassName={`${cls}-button-active`}
            onClick={handleConfirm}
          >
            {confirmButtonText ?? '确定'}
          </Touchable>
        </div>
      )}
      {internalColumns.length > 0 && (
        <div className={`${cls}-column-container`}>
          {internalColumns.map((list, index) => (
            <PickerColumn<V>
              key={index}
              selectedIndex={indexList[index]}
              options={list}
              optionHeight={optionHeight}
              onChange={handleChange}
              totalHeight={totalHeight}
              columnIndex={index}
              immediateChange={immediateChange}
            />
          ))}
          <div
            style={{
              backgroundSize: `100% ${totalHeight / 2 - optionHeight / 2}px`,
            }}
            className={`${cls}-mask`}
          />
          <div style={{ height: optionHeight }} className={`${cls}-indicator`} />
        </div>
      )}
      {loading && (
        <div className={`${cls}-loading`}>
          <Loading className={`${cls}-loading-icon`} />
        </div>
      )}
    </div>
  );

  const child =
    popup && children
      ? React.Children.only(isFunction(children) ? children(value) : children)
      : null;

  return popup ? (
    <>
      {!!child &&
        React.cloneElement(child!, {
          onClick: chain(handleOpen, child?.props.onClick),
        })}
      <Popup
        className={`${cls}-popup`}
        position="bottom"
        visible={visible}
        onClose={handleClose}
        lazyRender={lazyRender}
        round
      >
        {content}
      </Popup>
    </>
  ) : (
    <>{content}</>
  );
};

export default React.forwardRef(Picker) as <T extends PickerValue>(
  props: PickerProps<T>,
) => JSX.Element;
