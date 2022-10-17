import classNames from 'classnames';
import React from 'react';
import { useConfigContext } from '../config-provider';
import Touchable from '../touchable';

const KeyboardKey: React.FC<{
  className?: string;
  activeClassName?: string;
  onClick?: () => void;
  disabled?: boolean;
  wider?: boolean;
}> = ({ className, activeClassName, onClick, children, disabled, wider }) => {
  const { getPrefixCls } = useConfigContext();
  const cls = getPrefixCls('number-keyboard-key');
  const internalActiveClassName = activeClassName || `${cls}-active`;

  return (
    <Touchable
      component="button"
      tabIndex={0}
      activeClassName={internalActiveClassName}
      className={classNames(cls, wider && `${cls}-wider`, className)}
      touchDisabled={disabled}
      onClick={() => {
        if (!disabled) {
          onClick?.();
        }
      }}
      style={{ cursor: disabled ? 'unset' : undefined }}
    >
      {children}
    </Touchable>
  );
};

export default KeyboardKey;
