import classNames from 'classnames';
import React from 'react';
import isNil from 'lodash/isNil';
import isNumber from 'lodash/isNumber';
import { animated, useSpring } from '@react-spring/web';
import type { JSXIntrinsicElementProps } from '../types';
import { useConfigContext } from '../config-provider';
import { useMeasure, useMergeRefs } from '../_hooks';

export type ProgressProps = {
  /**
   * @description 进度条百分比
   */
  percentage?: number;
  /**
   * @description 进度条粗细
   */
  strokeWidth?: number;
  /**
   * @description 进度条颜色
   */
  strokeColor?: string;
  /**
   * @description 未完成进度条颜色
   */
  trailColor?: string;
  /**
   * @description 进度条文字
   */
  pivotText?: string;
  /**
   * @description 进度条背景颜色
   */
  pivotColor?: string;
  /**
   * @description 进度条文字颜色
   */
  pivotTextColor?: string;
  /**
   * @description 进度条置灰
   */
  inactive?: boolean;
  /**
   * @description 是否显示进度条文字
   */
  showPivot?: boolean;
  /**
   * @description 根据 percentage 格式化
   */
  format?: (percent: number) => string;
} & JSXIntrinsicElementProps<'div', 'children'>;

const santilize = (percent: any) =>
  isNumber(Number(percent)) ? Math.max(0, Number(percent)) : 0;
const defaultFormat = (v: number) => `${v}%`;

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      strokeWidth,
      strokeColor,
      trailColor,
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
    const content = !isNil(pivotText) ? pivotText : format(value);
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
          backgroundColor: trailColor,
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
            backgroundColor: strokeColor,
            width: progress.to((val) => `${val}%`),
          }}
        />
        {showPivot && (
          <animated.div
            style={{
              color: pivotTextColor,
              backgroundColor: pivotColor ?? strokeColor,
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
