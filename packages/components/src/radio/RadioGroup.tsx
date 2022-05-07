import classNames from 'classnames';
import React, { useMemo } from 'react';
import { omit } from '@rmc-vant/utils';
import { useControllableValue } from '@rmc-vant/hooks';
import { useConfigContext } from '../config-provider';
import RadioContext from './context';
import { RadioContextState, RadioGroupProps, RadioValue } from './interface';

function RadioGroup<T extends RadioValue = RadioValue>(
  {
    renderIcon,
    iconSize,
    checkedColor,
    disabled,
    name,
    className,
    children,
    shape,
    direction = 'vertical',
    ...props
  }: RadioGroupProps<T>,
  ref: React.Ref<HTMLDivElement>,
) {
  const { getPrefixCls } = useConfigContext();
  const [value, setValue] = useControllableValue<T | undefined>(props);

  const memoriedCtx: RadioContextState = useMemo(
    () => ({
      renderIcon,
      iconSize,
      checkedColor,
      name,
      disabled,
      value,
      onChange: (current) => {
        setValue(current as T | undefined);
      },
      shape,
    }),
    [renderIcon, iconSize, checkedColor, name, disabled, value, setValue, shape],
  );

  const cls = getPrefixCls('radio-group');

  return (
    <RadioContext.Provider value={memoriedCtx}>
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
    </RadioContext.Provider>
  );
}

export default React.forwardRef(RadioGroup) as <T extends RadioValue = RadioValue>(
  props: Omit<RadioGroupProps<T>, 'ref'> & React.RefAttributes<HTMLDivElement>,
) => JSX.Element;
