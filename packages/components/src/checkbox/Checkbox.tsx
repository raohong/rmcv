import { useControllableValue } from '@rmc-vant/hooks';
import { useComponentTheme } from '@rmc-vant/system';
import { isEmpty, omit } from '@rmc-vant/utils';
import clsx from 'clsx';
import React, { useMemo } from 'react';
import { useThemeProps } from '../config-provider';
import { CheckboxName, composeCheckboxSlotClassNames } from './classNames';
import { useCheckboxContext } from './context';
import type {
  CheckboxComponentState,
  CheckboxProps,
  CheckboxValue,
} from './interface';
import {
  CheckboxIcon,
  CheckboxInner,
  CheckboxInputPlaceholder,
  CheckboxLabel,
  CheckboxRoot,
} from './styles';

const Checkbox = <V extends CheckboxValue>(
  props: CheckboxProps<V>,
  ref: React.Ref<HTMLLabelElement>,
) => {
  const {
    className,
    value,
    renderIcon,
    checkedColor,
    children,
    classNames,
    disabled = false,
    shape = 'round',
    iconSize = 20,
    labelPosition = 'right',
    ...rest
  } = useThemeProps(CheckboxName, props);
  const ctx = useCheckboxContext();
  const [checked, setChecked] = useControllableValue(rest, {
    valuePropName: 'checked',
    defaultValuePropName: 'defaultChecked',
    format: d => !!d,
  });

  const { palette } = useComponentTheme();

  const internalChecked = !!(ctx ? ctx.getChecked(value) : checked);
  const internalIconSize = ctx?.componentState.size ?? iconSize;
  const internalCheckedColor
    = ctx?.componentState.checkedColor ?? checkedColor ?? palette.primary;
  const internalDisabled = ctx?.componentState.disabled ?? disabled;
  const internalShape = ctx?.componentState.shape ?? shape;
  const internalLabelPosition = ctx?.componentState.labelPosition ?? labelPosition;
  const iconRender = ctx?.renderIcon ?? renderIcon;
  const customIcon = !!iconRender;

  const componentState: CheckboxComponentState = useMemo(
    () => ({
      checked: internalChecked,
      checkedColor: internalCheckedColor,
      size: internalIconSize,
      disabled: internalDisabled,
      shape: internalShape,
      labelPosition: internalLabelPosition,
      customIcon,
    }),

    [
      internalChecked,
      internalIconSize,
      internalCheckedColor,
      internalDisabled,
      internalShape,
      internalLabelPosition,
      customIcon,
    ],
  );
  const slotClassNames = composeCheckboxSlotClassNames(componentState, classNames);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    if (internalDisabled) {
      return;
    }

    const currentChecked = evt.target.checked;

    ctx?.onChange?.(value);
    setChecked(currentChecked);
  };

  const renderCurrentIcon = () => {
    if (iconRender) {
      return iconRender(internalChecked);
    }

    return (
      internalChecked && (
        <CheckboxIcon
          className={slotClassNames.icon}
          componentState={componentState}
        />
      )
    );
  };

  return (
    <CheckboxRoot
      className={clsx(slotClassNames.root, className)}
      ref={ref}
      {...omit(rest, ['checked', 'defaultChecked', 'onChange'])}
      componentState={componentState}
    >
      <CheckboxInner
        componentState={componentState}
        className={slotClassNames.inner}
      >
        <CheckboxInputPlaceholder
          disabled={internalDisabled}
          checked={internalChecked}
          className={slotClassNames.input}
          componentState={componentState}
          type='checkbox'
          value={isEmpty(value) ? undefined : String(value)}
          name={ctx?.name}
          onChange={handleChange}
        />
        {renderCurrentIcon()}
      </CheckboxInner>
      <CheckboxLabel
        componentState={componentState}
        className={slotClassNames.label}
      >
        {children}
      </CheckboxLabel>
    </CheckboxRoot>
  );
};

export default React.forwardRef(Checkbox) as <T extends CheckboxValue>(
  props: CheckboxProps<T> & React.RefAttributes<HTMLLabelElement>,
) => JSX.Element;
