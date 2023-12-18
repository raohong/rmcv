import { isNil } from '@rmc-vant/utils';
import clsx from 'clsx';
import React, { useMemo } from 'react';
import { useThemeProps } from '../config-provider';
import { StepName, composeStepSlotClassNames } from './classNames';
import type { StepComponentState, StepProps } from './interface';
import {
  StepDot,
  StepIcon,
  StepIconWrapper,
  StepRoot,
  StepTail,
  StepTitle,
} from './styles';

export const STEP_SYMBOL = Symbol('Step');

const Step = React.forwardRef<HTMLDivElement, StepProps>((props, ref) => {
  const {
    children,
    icon,
    className,
    clickable,
    stepsComponentState,
    classNames,
    status = 'wait',
    ...rest
  } = useThemeProps(StepName, props);
  const componentState = useMemo<StepComponentState>(
    () => ({
      ...stepsComponentState,
      status,
    }),
    [stepsComponentState, status],
  );
  const slotClassNames = composeStepSlotClassNames(componentState, classNames);

  return (
    <StepRoot
      componentState={componentState}
      className={clsx(slotClassNames.root, className)}
      disabled={!clickable}
      ref={ref}
      component="div"
      {...rest}
    >
      <StepTitle componentState={componentState} className={slotClassNames.title}>
        {children}
      </StepTitle>
      <StepTail componentState={componentState} className={slotClassNames.tail} />
      <StepIconWrapper
        className={slotClassNames.iconWrapper}
        componentState={componentState}
      >
        {isNil(icon) ? (
          <StepDot className={slotClassNames.dot} componentState={componentState} />
        ) : (
          <StepIcon componentState={componentState} className={slotClassNames.icon}>
            {icon}
          </StepIcon>
        )}
      </StepIconWrapper>
    </StepRoot>
  );
});

// @ts-ignore
Step[STEP_SYMBOL] = true;

export default Step;
