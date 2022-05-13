import classNames from 'classnames';
import React, { useMemo } from 'react';
import { omit, isNil, isArray } from '@rmc-vant/utils';
import { useControllableValue } from '@rmc-vant/hooks';
import { useConfigContext } from '../config-provider';
import CheckboxContext from './context';
import {
  CheckboxContextState,
  CheckboxGroupProps,
  CheckboxValue,
} from './interface';

function CheckboxGroup<T extends CheckboxValue = CheckboxValue>(
  {
    renderIcon,
    iconSize,
    checkedColor,
    disabled,
    name,
    className,
    children,
    shape,
    max = 0,
    direction = 'vertical',
    ...props
  }: CheckboxGroupProps<T>,
  ref: React.Ref<HTMLDivElement>,
) {
  const { getPrefixCls } = useConfigContext();
  const [value, setValue] = useControllableValue<T[] | undefined>(props);

  const santalizedMax = max >= 0 ? max : 0;

  const memoriedCtx: CheckboxContextState<T> = useMemo(
    () => ({
      renderIcon,
      iconSize,
      checkedColor,
      name,
      disabled,
      onChange: (current) => {
        if (isNil(current)) {
          return;
        }

        if (!isArray(value)) {
          setValue([current]);
          return;
        }

        if (value.includes(current)) {
          setValue(value.filter((item) => item !== current));
        } else {
          setValue(value.concat(current).slice(-santalizedMax));
        }
      },
      getChecked: (val) => {
        if (isNil(val)) {
          return false;
        }

        return !!value?.includes(val);
      },
      shape,
    }),
    [
      renderIcon,
      iconSize,
      checkedColor,
      name,
      disabled,
      value,
      setValue,
      shape,
      santalizedMax,
    ],
  );

  const cls = getPrefixCls('checkbox-group');

  return (
    // @ts-ignore
    <CheckboxContext.Provider value={memoriedCtx}>
      <div
        className={classNames(
          cls,
          {
            [`${cls}-${direction}`]: direction === 'horizontal',
          },
          className,
        )}
        ref={ref}
        {...omit(props, ['value', 'defaultValue', 'onChange'])}
      >
        {children}
      </div>
    </CheckboxContext.Provider>
  );
}

export default React.forwardRef(CheckboxGroup) as <
  T extends CheckboxValue = CheckboxValue,
>(
  props: Omit<CheckboxGroupProps<T>, 'ref'> & React.RefAttributes<HTMLDivElement>,
) => JSX.Element;
