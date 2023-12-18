import { useControllableValue } from '@rmc-vant/hooks';
import { useComponentTheme } from '@rmc-vant/system';
import { isFunction, omit } from '@rmc-vant/utils';
import clsx from 'clsx';
import React, { useMemo } from 'react';
import { useThemeProps } from '../config-provider';
import { SwitchName, composeSwitchSlotClassNames } from './classNames';
import type { SwitchComponentState, SwitchProps } from './interface';
import { SwitchLoadingIcon, SwitchNode, SwitchRoot } from './styles';

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>((props, ref) => {
  const { palette } = useComponentTheme();
  const {
    onClick,
    className,
    inactiveColor,
    activeColor,
    node,
    classNames,
    loading = false,
    size = 30,
    disabled = false,
    ...rest
  } = useThemeProps(SwitchName, props);
  const [checked, setChecked] = useControllableValue(rest, {
    valuePropName: 'checked',
    defaultValuePropName: 'defaultChecked',
    defaultValue: false,
  });
  const componentState: SwitchComponentState = useMemo(
    () => ({
      inactiveColor: inactiveColor ?? palette.white,
      activeColor: activeColor ?? palette.primary,
      size,
      disabled,
      loading,
      checked: !!checked,
    }),
    [palette, size, activeColor, inactiveColor, disabled, loading, checked],
  );
  const slotClassNames = composeSwitchSlotClassNames(componentState, classNames);

  const handleClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    if (loading || disabled) {
      return;
    }

    onClick?.(!checked, evt);
    setChecked(!checked, evt);
  };

  const renderNodeContent = () => {
    if (!isFunction(node)) {
      return (
        loading && (
          <SwitchLoadingIcon
            componentState={componentState}
            className={slotClassNames.loadingIcon}
          />
        )
      );
    }

    return node(checked);
  };

  return (
    <SwitchRoot
      componentState={componentState}
      className={clsx(className, slotClassNames.root)}
      ref={ref}
      onClick={handleClick}
      type="button"
      role="switch"
      aria-checked={!!checked}
      aria-readonly={disabled || loading}
      {...omit(rest, [
        'checked',
        'defaultChecked',
        'onChange',
        'children',
        'defaultValue',
      ])}
    >
      <SwitchNode componentState={componentState} className={slotClassNames.node}>
        {renderNodeContent()}
      </SwitchNode>
    </SwitchRoot>
  );
});

export default Switch;
