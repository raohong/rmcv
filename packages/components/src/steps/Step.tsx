import React from 'react';
import classNames from 'classnames';
import isNil from 'lodash/isNil';
import { useConfigContext } from '../config-provider';
import type { StepProps, StepStatus } from './type';

export const STEP_SYMBOL = Symbol('Step');

const Step = React.forwardRef<HTMLDivElement, StepProps>(
  ({ children, icon, className, status, ...rest }, ref) => {
    const { getPrefixCls } = useConfigContext();
    const cls = getPrefixCls('step');

    const renderIcon = () => {
      const iconCls = getPrefixCls('step-icon');

      if (React.isValidElement(icon)) {
        return React.cloneElement(icon, {
          className: classNames(icon.props.className, iconCls),
        });
      }

      return <span className={iconCls}>{icon}</span>;
    };

    const statusList: StepStatus[] = ['process', 'finish', 'wait'];

    return (
      <div
        className={classNames(
          cls,
          {
            [`${cls}-${status}`]: status && statusList.includes(status),
          },
          className,
        )}
        ref={ref}
        {...rest}
      >
        <div className={`${cls}-title`}>{children}</div>
        <div className={`${cls}-tail`} />
        <div className={`${cls}-icon-wrapper`}>
          {isNil(icon) ? <span className={`${cls}-dot`} /> : renderIcon()}
        </div>
      </div>
    );
  },
);

// @ts-ignore
Step[STEP_SYMBOL] = true;

export default Step;
