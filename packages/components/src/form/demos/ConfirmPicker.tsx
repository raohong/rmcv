import React, { useState } from 'react';
import { Picker, Cell } from 'rmc-vant';
import type { PickerProps, PickerValue } from 'rmc-vant';
import { useUpdateEffect } from '@rmc-vant/hooks';
import './index.less';

const ConfirmPicker = <T extends PickerValue>({
  onConfirm,
  confirmDefaultValue,
  defaultValue,
  value,
  onChange,
  placeholder,
  getText,
  ...props
}: PickerProps<T> & {
  confirmDefaultValue?: T[];
  placeholder?: string;
  getText?: (value: T[]) => React.ReactNode;
}) => {
  const [internalValue, setValue] = useState<T[] | undefined>(value || defaultValue);
  const [lastValue, setLastValue] = useState<T[] | undefined>();

  useUpdateEffect(() => {
    setValue(value);
  }, [value]);

  const text = value ? getText?.(value) : value;

  return (
    <Picker<T>
      {...props}
      value={internalValue}
      onChange={setValue}
      onConfirm={(val) => {
        onConfirm?.(val || confirmDefaultValue);
      }}
      onOpen={() => {
        setLastValue(internalValue);
      }}
      onCancel={() => {
        onConfirm?.(lastValue ? [...lastValue] : lastValue);
        setLastValue(undefined);
      }}
      popup
    >
      <Cell
        style={{ padding: 0 }}
        border={false}
        title={
          value ? (
            text
          ) : (
            <span
              style={{
                color: 'var(--rmcv-input-placeholder-text-color)',
              }}
            >
              {placeholder}
            </span>
          )
        }
        isLink
      />
    </Picker>
  );
};

export default ConfirmPicker;
