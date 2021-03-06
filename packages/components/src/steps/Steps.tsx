import classNames from 'classnames';
import React, { useMemo } from 'react';
import { CheckedFilled } from '@rmc-vant/icons';
import { omit, chain, toArray } from '@rmc-vant/utils';
import { useControllableValue } from '@rmc-vant/hooks';
import { useConfigContext, ConfigProvider } from '../config-provider';
import { STEP_SYMBOL } from './Step';
import type { StepProps, StepsProps, StepStatus } from './interface';

const Steps = React.forwardRef<HTMLDivElement, StepsProps>((props, ref) => {
  const {
    activeIcon,
    inactiveIcon,
    finishIcon,
    activeColor,
    inactiveColor,
    children,
    className,
    direction = 'horizontal',
    ...rest
  } = props;
  const [current, setCurrent] = useControllableValue(props, {
    defaultValue: 0,
    valuePropName: 'current',
  });
  const { getPrefixCls } = useConfigContext();
  const list = toArray(children).filter(
    // @ts-ignore
    (item) => React.isValidElement(item) && item.type?.[STEP_SYMBOL],
  ) as React.ReactElement<StepProps>[];

  const getStepStatus = (index: number): StepStatus => {
    if (index < current) {
      return 'finish';
    }

    if (index === current) {
      return 'process';
    }

    return 'wait';
  };

  const theme = useMemo(
    () => ({
      stepTailColor: inactiveColor,
      stepTextColor: inactiveColor,
      stepProcessTextColor: activeColor,
      stepProcessIconColor: activeColor,
      stepFinishTailColor: activeColor,
    }),
    [activeColor, inactiveColor],
  );

  const getIcon = (status: StepStatus) => {
    if (status === 'process') {
      return activeIcon ?? <CheckedFilled />;
    }

    if (status === 'finish') {
      return finishIcon ?? inactiveIcon;
    }

    return inactiveIcon;
  };

  const clickable = 'onChange' in props;

  return (
    <ConfigProvider
      ref={ref}
      className={classNames(
        getPrefixCls('steps'),
        {
          [getPrefixCls(`steps-${direction}`)]: direction,
        },
        className,
      )}
      theme={theme}
      {...omit(rest, ['current', 'onChange'])}
    >
      {list.map((item, index) => {
        const key = item.key ?? String(index);
        const status = getStepStatus(index);

        return React.cloneElement(item, {
          status,
          key,
          icon: getIcon(status),
          // ???????????????????????????
          ...item.props,
          clickable,
          onClick: chain(item.props.onClick, () => {
            if (clickable) {
              setCurrent(index);
            }
          }),
          className: classNames(item.props.className, {
            [getPrefixCls('step-horizontal')]: direction === 'horizontal',
          }),
        });
      })}
    </ConfigProvider>
  );
});

export default Steps;
