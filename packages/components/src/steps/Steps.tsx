import { useControllableValue } from '@rmc-vant/hooks';
import { CheckedFilled } from '@rmc-vant/icons';
import { useComponentTheme } from '@rmc-vant/system';
import { isNil, isNumber, isString, omit } from '@rmc-vant/utils';
import clsx from 'clsx';
import React, { useMemo } from 'react';
import { useThemeProps } from '../config-provider';
import Step from './Step';
import { StepsName, composeStepsSlotClassNames } from './classNames';
import type { StepStatus, StepsComponentState, StepsProps } from './interface';
import { StepsRoot } from './styles';

const Steps = React.forwardRef<HTMLDivElement, StepsProps>((props, ref) => {
  const {
    activeIcon,
    inactiveIcon,
    finishIcon,
    activeColor,
    inactiveColor,
    className,
    items,
    direction = 'horizontal',
    ...rest
  } = useThemeProps(StepsName, props);
  const [current, setCurrent] = useControllableValue(props, {
    defaultValue: 0,
    valuePropName: 'current',
  });
  const { palette } = useComponentTheme();
  const componentState = useMemo<StepsComponentState>(
    () => ({
      direction,
      inactiveColor: inactiveColor ?? palette.gray600,
      activeColor: activeColor ?? palette.primary,
    }),
    [direction, activeColor, inactiveColor, palette],
  );

  const slotClassNames = composeStepsSlotClassNames(componentState);

  const getStepStatus = (index: number): StepStatus => {
    if (index < current) {
      return 'finish';
    }

    if (index === current) {
      return 'process';
    }

    return 'wait';
  };

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
    <StepsRoot
      className={clsx(className, slotClassNames.root)}
      ref={ref}
      {...omit(rest, ['current', 'onChange'])}
      componentState={componentState}
    >
      {items?.map((item, index) => {
        const status = getStepStatus(index);
        const content = item.children ?? item.label;
        const key
          = isNil(item.key) && (isString(content) || isNumber(content))
            ? content
            : item.key;

        return (
          <Step
            key={key}
            onClick={() => {
              if (clickable) {
                setCurrent(index);
              }
            }}
            status={status}
            icon={getIcon(status)}
            stepsComponentState={componentState}
            {...omit(item, ['label'])}
            children={content}
          />
        );
      })}
    </StepsRoot>
  );
});

export default Steps;
