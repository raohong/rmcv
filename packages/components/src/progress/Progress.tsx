import { animated, useSpring } from '@react-spring/web';
import { useMeasure, useMergeRefs } from '@rmc-vant/hooks';
import { isEmpty, isNumber } from '@rmc-vant/utils';
import classNames from 'classnames';
import React from 'react';
import { useConfigContext } from '../config-provider';
import type { ProgressProps } from './interface';

const santilize = (percent: any) =>
  isNumber(Number(percent)) ? Math.max(0, Number(percent)) : 0;
const defaultFormat = (v: number) => `${v}%`;

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      strokeWidth,
      trailColor,
      color,
      pivotTextColor,
      pivotColor,
      pivotText,
      inactive,
      style,
      className,
      percentage = 0,
      showPivot = true,
      format = defaultFormat,
      ...rest
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();
    const baseCls = getPrefixCls('progress');
    const { setRef: setContainerRef, data: containerSize } = useMeasure();
    const { setRef, data: contentSize } = useMeasure();
    const containerRef = useMergeRefs(setContainerRef, ref);

    const value = santilize(percentage);
    const min = 0;
    const max = Math.max(100, value);
    const content = !isEmpty(pivotText) ? pivotText : format(value);
    const domProgress = Math.min(100, value);

    const [{ progress }] = useSpring({ progress: domProgress }, [domProgress]);

    return (
      <div
        className={classNames(
          baseCls,
          {
            [`${baseCls}-inactive`]: inactive,
          },
          className,
        )}
        style={{
          background: trailColor,
          height: strokeWidth,
          ...style,
        }}
        ref={containerRef}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
        {...rest}
      >
        <animated.div
          className={`${baseCls}-bg`}
          style={{
            background: color,
            width: progress.to((val) => `${val}%`),
          }}
        />
        {showPivot && (
          <animated.div
            style={{
              color: pivotTextColor,
              background: pivotColor ?? color,
              left: progress.to(
                [0, 100],
                [0, containerSize.width - contentSize.width],
                'clamp',
              ),
            }}
            className={`${baseCls}-pivot`}
            ref={setRef}
          >
            {content}
          </animated.div>
        )}
      </div>
    );
  },
);

export default Progress;
