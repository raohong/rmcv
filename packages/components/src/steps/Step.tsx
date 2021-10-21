import React from 'react';
import classNames from 'classnames';
import { useConfigContext } from '../config-provider';
import type { StepProps } from './type';
import { isNil } from '../_utils';

export const STEP_SYMBOL = Symbol('Step');

const Step = React.forwardRef<HTMLDivElement, StepProps>(
  ({ children, icon, className, status, ...rest }, ref) => {
    const { getPrefixCls } = useConfigContext();
    const cls = getPrefixCls('steps-item');

    const renderIcon = () => {
      const iconCls = classNames(getPrefixCls('steps-icon'), {
        [getPrefixCls(`steps-${status}-icon`)]: status,
      });
      if (React.isValidElement(icon)) {
        return React.cloneElement(icon, {
          className: classNames(icon.props.className, iconCls),
        });
      }

      return <span className={iconCls}>{icon}</span>;
    };

    return (
      <div className={classNames(cls, className)} ref={ref} {...rest}>
        <div className={`${cls}-content`}>{children}</div>
        <div className={`${cls}-icon`}>
          {isNil(icon) ? <span className={`${cls}-dot`} /> : renderIcon()}
        </div>
        <div className={`${cls}-tail`} />
      </div>
    );
  },
);

// @ts-ignore
Step[STEP_SYMBOL] = true;

export default Step;
