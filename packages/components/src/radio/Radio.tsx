import { Success } from '@rmc-vant/icons';
import { useComponentTheme } from '@rmc-vant/system';
import { isEmpty, omit } from '@rmc-vant/utils';
import clsx from 'clsx';
import React, { useMemo, useState } from 'react';
import { useThemeProps } from '../config-provider';
import { RadioName, composeRadioSlotClassNames } from './classNames';
import { useRadioContext } from './context';
import type { RadioComponentState, RadioProps, RadioValue } from './interface';
import { RadioIcon, RadioInner, RadioInput, RadioLabel, RadioRoot } from './styles';

const Radio = <V extends RadioValue>(
  props: RadioProps<V>,
  ref: React.Ref<HTMLLabelElement>,
) => {
  const {
    className,
    value,
    renderIcon,
    children,
    onChange,
    checkedColor,
    classNames,
    disabled = false,
    size = 20,
    shape = 'round',
    labelPosition = 'right',
    ...rest
  } = useThemeProps(RadioName, props);
  const ctx = useRadioContext();
  const [controlledChecked, setControlledChecked] = useState(false);
  const { palette } = useComponentTheme();

  const isControllable = 'checked' in rest;

  const internalChecked = ctx
    ? ctx.value === value
    : isControllable
      ? !!rest.checked
      : controlledChecked;
  const internalSize = ctx?.componentState.size ?? size;
  const internalCheckedColor
    = ctx?.componentState.checkedColor ?? checkedColor ?? palette.primary;
  const internalDisabled = ctx?.componentState.disabled ?? disabled;
  const internalShape = ctx?.componentState.shape ?? shape;
  const internalLabelPosition = ctx?.componentState.labelPosition ?? labelPosition;

  const iconRender = ctx?.renderIcon ?? renderIcon;

  const customIcon = !!iconRender;

  const componentState: RadioComponentState = useMemo(
    () => ({
      checked: internalChecked,
      size: internalSize,
      checkedColor: internalCheckedColor,
      disabled: internalDisabled,
      shape: internalShape,
      labelPosition: internalLabelPosition,
      customIcon,
    }),
    [
      internalChecked,
      internalSize,
      internalCheckedColor,
      internalDisabled,
      internalShape,
      internalLabelPosition,
      customIcon,
    ],
  );

  const slotClassNames = composeRadioSlotClassNames(componentState, classNames);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = () => {
    if (internalDisabled) {
      return;
    }

    onChange?.(value);
    ctx?.onChange?.(value);

    if (!isControllable) {
      setControlledChecked(true);
    }
  };

  const renderCurrentIcon = () => {
    if (iconRender) {
      return (
        <RadioIcon componentState={componentState} className={slotClassNames.icon}>
          {iconRender(internalChecked)}
        </RadioIcon>
      );
    }

    return (
      <>
        {internalChecked
          ? (
              <RadioIcon componentState={componentState} className={slotClassNames.icon}>
                <Success />
              </RadioIcon>
            )
          : null}
      </>
    );
  };

  return (
    <RadioRoot
      className={clsx(slotClassNames.root, className)}
      ref={ref}
      {...omit(rest, ['checked'])}
      componentState={componentState}
    >
      <RadioInner className={slotClassNames.inner} componentState={componentState}>
        <RadioInput
          disabled={internalDisabled}
          checked={internalChecked}
          type='radio'
          value={isEmpty(value) ? undefined : String(value)}
          name={ctx?.name}
          onChange={handleChange}
        />
        {renderCurrentIcon()}
      </RadioInner>
      {!isEmpty(children) && (
        <RadioLabel componentState={componentState} className={slotClassNames.label}>
          {children}
        </RadioLabel>
      )}
    </RadioRoot>
  );
};

export default React.forwardRef(Radio) as <T extends RadioValue>(
  props: RadioProps<T> & React.RefAttributes<HTMLLabelElement>,
) => JSX.Element;
