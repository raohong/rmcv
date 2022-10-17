import { useControllableValue } from '@rmc-vant/hooks';
import { Success } from '@rmc-vant/icons';
import { isEmpty, omit } from '@rmc-vant/utils';
import classNames from 'classnames';
import React from 'react';
import { useConfigContext } from '../config-provider';
import { useCheckboxContext } from './context';
import type { CheckboxProps, CheckboxValue } from './interface';

const Checkbox = <V extends CheckboxValue>(
  {
    className,
    value,
    disabled,
    renderIcon,
    iconSize,
    children,
    checkedColor,
    shape,
    labelPosition = 'right',
    ...rest
  }: CheckboxProps<V>,
  ref: React.Ref<HTMLLabelElement>,
) => {
  const ctx = useCheckboxContext();
  const { getPrefixCls } = useConfigContext();
  const cls = getPrefixCls('checkbox');
  const [checked, setChecked] = useControllableValue<boolean>(rest, {
    valuePropName: 'checked',
    defaultValuePropName: 'defaultChecked',
    format: (d) => !!d,
  });

  const internalChecked = ctx ? ctx.getChecked(value) : checked;

  const internalIconSize = iconSize ?? ctx?.iconSize;
  const internalCheckedColor = checkedColor ?? ctx?.checkedColor;
  const internalDisabled = disabled ?? ctx?.disabled;
  const internalShape = shape ?? ctx?.shape;

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    if (internalDisabled) {
      return;
    }

    const currentChecked = evt.target.checked;

    ctx?.onChange?.(value);
    setChecked(currentChecked);
  };

  const iconRender = renderIcon ?? ctx?.renderIcon;
  const renderCurrentIcon = () => {
    if (iconRender) {
      return iconRender(internalChecked);
    }

    return (
      internalChecked && <Success className={`${cls}-icon ${cls}-check-icon`} />
    );
  };

  return (
    <label
      className={classNames(
        cls,
        {
          [`${cls}-shape-${internalShape}`]: internalShape === 'square',
          [`${cls}-checked`]: internalChecked,
          [`${cls}-disabled`]: internalDisabled,
          [`${cls}-position-${labelPosition}`]: labelPosition === 'left',
        },
        className,
      )}
      ref={ref}
      {...omit(rest, ['checked', 'defaultChecked', 'onChange'])}
    >
      <span
        style={{
          borderColor: internalChecked ? internalCheckedColor : undefined,
          backgroundColor: internalChecked ? internalCheckedColor : undefined,
          fontSize: internalIconSize,
        }}
        className={classNames(`${cls}-inner`, iconRender && `${cls}-inner-custom`)}
      >
        <input
          disabled={internalDisabled}
          checked={internalChecked}
          type="checkbox"
          className={`${cls}-input`}
          value={isEmpty(value) ? undefined : String(value)}
          name={ctx?.name}
          onChange={handleChange}
        />
        {renderCurrentIcon()}
      </span>
      <span className={`${cls}-label`}>{children}</span>
    </label>
  );
};

export default React.forwardRef(Checkbox) as <T extends CheckboxValue>(
  props: CheckboxProps<T> & React.RefAttributes<HTMLLabelElement>,
) => JSX.Element;
