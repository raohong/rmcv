import { isNil } from '@rmc-vant/utils';
import classNames from 'classnames';
import React from 'react';
import { useConfigContext } from '../config-provider';
import Touchable from '../touchable';
import type { StepProps, StepStatus } from './interface';

export const STEP_SYMBOL = Symbol('Step');

const Step = React.forwardRef<HTMLDivElement, StepProps>(
  ({ children, icon, className, status, clickable, ...rest }, ref) => {
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
      <Touchable
        activeClassName={`${cls}-active`}
        className={classNames(
          cls,
          {
            [`${cls}-${status}`]: status && statusList.includes(status),
          },
          className,
        )}
        ref={ref}
        touchDisabled={!clickable}
        {...rest}
      >
        <div className={`${cls}-title`}>{children}</div>
        <div className={`${cls}-tail`} />
        <div className={`${cls}-icon-wrapper`}>
          {isNil(icon) ? <span className={`${cls}-dot`} /> : renderIcon()}
        </div>
      </Touchable>
    );
  },
);

// @ts-ignore
Step[STEP_SYMBOL] = true;

export default Step;
