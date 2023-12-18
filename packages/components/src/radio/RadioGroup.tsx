import { useControllableValue } from '@rmc-vant/hooks';
import { omit } from '@rmc-vant/utils';
import clsx from 'clsx';
import React, { useMemo } from 'react';
import { useThemeProps } from '../config-provider';
import Radio from './Radio';
import { RadioGroupName, composeRadioGroupSlotClassNames } from './classNames';
import RadioContext from './context';
import {
  RadioContextState,
  RadioGroupComponentState,
  RadioGroupProps,
  RadioValue,
} from './interface';
import { RadioGroupRoot } from './styles';

function RadioGroup<T extends RadioValue = RadioValue>(
  props: RadioGroupProps<T>,
  ref: React.Ref<HTMLDivElement>,
) {
  const {
    renderIcon,
    size,
    checkedColor,
    disabled,
    name,
    children,
    shape,
    direction = 'vertical',
    labelPosition,
    options,
    ...rest
  } = useThemeProps(RadioGroupName, props);
  const [value, setValue] = useControllableValue(rest);
  const componentState: RadioGroupComponentState = useMemo(
    () => ({
      size,
      checkedColor,
      disabled: !!disabled,
      shape,
      direction,
      labelPosition,
    }),

    [size, checkedColor, disabled, shape, direction, labelPosition],
  );

  const memoriedCtx: RadioContextState = useMemo(
    () => ({
      renderIcon,
      name,
      value,
      onChange: (current) => {
        setValue(current as T);
      },
      componentState,
    }),
    [renderIcon, name, value, setValue, componentState],
  );

  const slotClassNames = composeRadioGroupSlotClassNames(componentState);

  return (
    <RadioContext.Provider value={memoriedCtx}>
      <RadioGroupRoot
        componentState={componentState}
        className={clsx(slotClassNames.root)}
        ref={ref}
        {...omit(rest, ['value', 'defaultValue', 'onChange'])}
      >
        {options
          ? options.map((item) => (
              <Radio value={item.value} disabled={item.disabled} key={item.value}>
                {item.label}
              </Radio>
            ))
          : children}
      </RadioGroupRoot>
    </RadioContext.Provider>
  );
}

export default React.forwardRef(RadioGroup) as <T extends RadioValue = RadioValue>(
  props: Omit<RadioGroupProps<T>, 'ref'> & React.RefAttributes<HTMLDivElement>,
) => JSX.Element;
