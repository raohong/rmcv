import { useControllableValue } from '@rmc-vant/hooks';
import { isArray, isNil, omit } from '@rmc-vant/utils';
import clsx from 'clsx';
import React, { useMemo } from 'react';
import { useThemeProps } from '../config-provider';
import Checkbox from './Checkbox';
import { CheckboxGroupName, composeCheckboxGroupSlotClassNames } from './classNames';
import CheckboxContext from './context';
import type {
  CheckboxContextState,
  CheckboxGroupComponentState,
  CheckboxGroupProps,
  CheckboxValue,
} from './interface';
import { CheckboxGroupRoot } from './styles';

function CheckboxGroup<T extends CheckboxValue = CheckboxValue>(
  _props: CheckboxGroupProps<T>,
  ref: React.Ref<HTMLDivElement>,
) {
  const {
    renderIcon,
    iconSize,
    checkedColor,
    name,
    className,
    children,
    shape,
    labelPosition,
    options,
    disabled = false,
    max = 0,
    direction = 'vertical',
    ...props
  } = useThemeProps(CheckboxGroupName, _props);
  const [value, setValue] = useControllableValue(props);

  const sanitizedMax = max >= 0 ? max : 0;
  const componentState: CheckboxGroupComponentState = useMemo(
    () => ({
      labelPosition,
      direction,
      disabled,
      checkedColor,
      iconSize,
      shape,
    }),
    [labelPosition, direction, disabled, checkedColor, iconSize, shape],
  );

  const slotClassNames = composeCheckboxGroupSlotClassNames(componentState);

  const memoriedCtx: CheckboxContextState = useMemo(
    () => ({
      renderIcon,
      name,
      onChange: (current: CheckboxValue | undefined) => {
        if (isNil(current)) {
          return;
        }

        if (!isArray(value)) {
          setValue([current as T]);
          return;
        }

        if (value.includes(current as T)) {
          setValue(value.filter(item => item !== current));
        }
        else {
          setValue(value.concat(current as T).slice(-sanitizedMax));
        }
      },
      getChecked: (val: CheckboxValue | undefined) => {
        if (isNil(val)) {
          return false;
        }

        return !!value?.includes(val as T);
      },
      componentState,
    }),
    [renderIcon, componentState, name, value, setValue, sanitizedMax],
  );

  return (
    <CheckboxContext.Provider value={memoriedCtx}>
      <CheckboxGroupRoot
        className={clsx(slotClassNames.root, className)}
        ref={ref}
        {...omit(props, ['value', 'defaultValue', 'onChange'])}
        componentState={componentState}
      >
        {options
          ? options.map(item => (
            <Checkbox value={item.value} disabled={item.disabled} key={item.value}>
              {item.label}
            </Checkbox>
          ))
          : children}
      </CheckboxGroupRoot>
    </CheckboxContext.Provider>
  );
}

export default React.forwardRef(CheckboxGroup) as <
  T extends CheckboxValue = CheckboxValue,
>(
  props: Omit<CheckboxGroupProps<T>, 'ref'> & React.RefAttributes<HTMLDivElement>,
) => JSX.Element;
