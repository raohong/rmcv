import { useMeasure } from '@rmc-vant/hooks';
import { isEmpty, isNumber } from '@rmc-vant/utils';
import clsx from 'clsx';
import React, { useEffect, useMemo, useState } from 'react';
import { useThemeProps } from '../config-provider';
import { ProgressName, composeProgressSlotClassNames } from './classNames';
import type { ProgressComponentState, ProgressProps } from './interface';
import { ProgressOuter, ProgressPivot, ProgressRoot } from './styles';

const sanitize = (percent: any) =>
  isNumber(Number(percent)) ? Math.max(0, Number(percent)) : 0;
const defaultFormat = (v: number) => `${v}%`;

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>((props, ref) => {
  const {
    trailColor,
    color,
    pivotTextColor,
    pivotColor,
    pivotText,
    className,
    classNames,
    inactive = false,
    strokeWidth = 4,
    percentage = 0,
    showPivot = true,
    format = defaultFormat,
    ...rest
  } = useThemeProps(ProgressName, props);
  const {
    setRef,
    data: { width },
  } = useMeasure();
  const [transitionAppear, setTransitionAppear] = useState(false);

  const componentState: ProgressComponentState = useMemo(
    () => ({
      color,
      trailColor,
      pivotColor,
      pivotTextColor,
      inactive,
      strokeWidth,
      transitionAppear,
    }),
    [
      trailColor,
      color,
      pivotColor,
      pivotTextColor,
      inactive,
      strokeWidth,
      transitionAppear,
    ],
  );
  const slotClassNames = composeProgressSlotClassNames(componentState, classNames);

  useEffect(() => {
    if (width > 0) {
      setTransitionAppear(true);
    }
  }, [width]);

  const value = sanitize(percentage);
  const min = 0;
  const max = Math.max(100, value);
  const content = !isEmpty(pivotText) ? pivotText : format(value);
  const internalProgress = Math.min(100, value);
  const left = `calc(${internalProgress}% - ${(width / 100) * internalProgress}px)`;

  return (
    <ProgressRoot
      className={clsx(slotClassNames.root, className)}
      ref={ref}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={min}
      aria-valuemax={max}
      componentState={componentState}
      {...rest}
    >
      <ProgressOuter
        componentState={componentState}
        className={slotClassNames.outer}
        style={{
          width: `${internalProgress}%`,
        }}
      />
      {showPivot && (
        <ProgressPivot
          componentState={componentState}
          className={slotClassNames.pivot}
          style={{
            left,
          }}
          ref={setRef}
        >
          {content}
        </ProgressPivot>
      )}
    </ProgressRoot>
  );
});

export default Progress;
