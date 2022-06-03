import React from 'react';
import classNames from 'classnames';
import { useControllableValue } from '@rmc-vant/hooks';
import { isFunction, omit } from '@rmc-vant/utils';
import { useConfigContext } from '../config-provider';
import Loading from '../loading';
import type { SwitchProps } from './interface';

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      onClick,
      className,
      loading,
      disabled,
      size,
      inactiveColor,
      activeColor,
      style,
      node,
      ...props
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();
    const [checked, setChecked] = useControllableValue(props, {
      valuePropName: 'checked',
      defaultValuePropName: 'defaultChecked',
      defaultValue: false,
    });
    const cls = getPrefixCls('switch');

    const handleClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
      if (loading || disabled) {
        return;
      }

      onClick?.(!checked, evt);
      setChecked(!checked, evt);
    };

    const renderNodeContent = () => {
      if (!isFunction(node)) {
        return loading && <Loading className={`${cls}-loading-icon`} size={15} />;
      }

      return node(checked);
    };

    return (
      <button
        className={classNames(
          cls,
          {
            [`${cls}-checked`]: checked,
            [`${cls}-disabled`]: disabled,
            [`${cls}-loading`]: loading,
          },
          className,
        )}
        style={{
          fontSize: size,
          backgroundColor: checked ? activeColor : inactiveColor,
          ...style,
        }}
        ref={ref}
        onClick={handleClick}
        type="button"
        role="switch"
        aria-checked={!!checked}
        aria-readonly={disabled || loading}
        {...omit(props, [
          'checked',
          'defaultChecked',
          'onChange',
          'children',
          'defaultValue',
        ])}
      >
        <span className={`${cls}-node`}>{renderNodeContent()}</span>
      </button>
    );
  },
);

export default Switch;
