import { Success } from '@rmc-vant/icons';
import { isEmpty, omit } from '@rmc-vant/utils';
import classNames from 'classnames';
import React, { useState } from 'react';
import { useConfigContext } from '../config-provider';
import { useRadioContext } from './context';
import { RadioProps, RadioValue } from './interface';

const Radio = <V extends RadioValue>(
  {
    className,
    value,
    disabled,
    renderIcon,
    iconSize,
    children,
    checkedColor,
    onChange,
    shape,
    labelPosition = 'right',
    ...rest
  }: RadioProps<V>,
  ref: React.Ref<HTMLLabelElement>,
) => {
  const ctx = useRadioContext();
  const { getPrefixCls } = useConfigContext();
  const cls = getPrefixCls('radio');
  const [controlledChecked, setControlledChecked] = useState(false);

  const isControllable = 'checked' in rest;
  const internalChecked = ctx
    ? ctx.value === value
    : isControllable
    ? !!rest.checked
    : controlledChecked;

  const internalIconSize = iconSize ?? ctx?.iconSize;
  const internalCheckedColor = checkedColor ?? ctx?.checkedColor;
  const internalDisabled = disabled ?? ctx?.disabled;
  const internalShape = shape ?? ctx?.shape;

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

  const iconRender = renderIcon ?? ctx?.renderIcon;
  const renderCurrentIcon = () => {
    if (iconRender) {
      return iconRender(internalChecked);
    }

    return <>{internalChecked ? <Success className={`${cls}-icon`} /> : null}</>;
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
      {...omit(rest, ['checked'])}
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
          type="radio"
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

export default React.forwardRef(Radio) as <T extends RadioValue>(
  props: RadioProps<T> & React.RefAttributes<HTMLLabelElement>,
) => JSX.Element;
