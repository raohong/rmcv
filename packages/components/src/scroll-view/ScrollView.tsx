import React, { useImperativeHandle, useMemo, useRef } from 'react';
import { animated, AnimationResult, SpringValue } from '@react-spring/web';
import classNames from 'classnames';
import { useDrag, rubberbandIfOutOfBounds } from '@use-gesture/react';
import { useMeasure } from '../_hooks';
import { useConfigContext } from '../config-provider';
import useDecayAnimation from './useDecayAnimation';

export type ScrollViewProps = {
  scrollEnabled?: boolean;
  horizontal?: boolean;
  onScroll?: () => void;
  onScrollBeginDrag?: () => void;
  onScrollEndDrag?: () => void;
  snapToInterval?: number;
  y?: SpringValue<number>;
  x?: SpringValue<number>;
  height?: string | number;
  width?: string | number;
  bounces?: boolean;
  power?: number;
  modifyTarget?: (distance: number, velocity: number) => number;
  decay?: boolean;
  timeConst?: number;
};

export type ScrollViewRef = {
  refresh: () => void;
};

const isOutOfBounds = (distance: number, [min, max]: [number, number]) => {
  return distance <= min || distance >= max;
};

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

const onChange = (
  spring: SpringValue<number>,
  boundary: number,
  dir: number,
  values: AnimationResult<SpringValue<number>>,
) => {
  if (values.cancelled) {
    return;
  }

  const currentValue = spring.get();

  if (
    (dir === 1 && currentValue >= boundary) ||
    (dir === -1 && currentValue <= boundary)
  ) {
    spring.stop();

    spring.start({
      to: boundary,
      config: {
        decay: false,
        velocity: spring.velocity,
      },
    });
  }
};

const ScrollView: React.FC<ScrollViewProps> = React.forwardRef<
  ScrollViewRef,
  ScrollViewProps
>(
  (
    {
      children,
      horizontal,
      scrollEnabled,
      width,
      height,
      y: ctrlY,
      x: ctrlX,
      bounces,
      modifyTarget,
      decay,
      power = 0.8,
      timeConst = 300,
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const { cancelAnimation, runDecay } = useDecayAnimation();
    const x = useMemo(() => ctrlX ?? new SpringValue(0), [0, ctrlX]);
    const y = useMemo(() => ctrlY ?? new SpringValue(0), [0, ctrlY]);

    const { measure: measureContainer, data: containerSize } = useMeasure({
      ref: containerRef,
    });
    const { measure: measureContent, data: contentSize } = useMeasure({
      ref: contentRef,
    });

    const axis = horizontal ? 'x' : 'y';
    const baseCls = getPrefixCls('scroll-view');

    const getBounds = () => ({
      left: containerSize.width - contentSize.width,
      right: 0,
      top: containerSize.height - contentSize.height,
      bottom: 0,
    });

    useDrag(
      ({
        last,
        event,
        offset: [ox, oy],
        velocity: [vx, vy],
        direction: [dx, dy],
        first,
      }) => {
        event.stopPropagation();
        event.preventDefault();

        const v = axis === 'x' ? vx * dx : vy * dy;
        const value = axis === 'x' ? ox : oy;
        const dir = axis === 'x' ? dx : dy;
        const spring = axis === 'x' ? x : y;

        if (first) {
          cancelAnimation();
        }

        if (!last) {
          spring.set(value);

          return;
        }

        const bounds = getBounds();
        const boundsVector: [number, number] =
          axis === 'x'
            ? [bounds.left, bounds.right]
            : [bounds.top, bounds.bottom];

        if (isOutOfBounds(value, boundsVector)) {
          spring.start({
            to: value,
            config: {
              velocity: v,
              clamp: !bounces,
            },
          });

          return;
        }
        const boundary = dir === -1 ? boundsVector[0] : boundsVector[1];
        let target = v * power * timeConst + value;

        if (modifyTarget) {
          target = modifyTarget(target, v);
        }

        if (bounces) {
          target = rubberbandIfOutOfBounds(
            target,
            boundsVector[0],
            boundsVector[1],
          );
        } else {
          target = clamp(target, boundsVector[0], boundsVector[1]);
        }

        if (decay) {
          runDecay(spring, dir, boundary, {
            power,
            modifyTarget: (d: number) => {
              let result = d;
              if (modifyTarget) {
                result = modifyTarget(d, v);
              }

              if (!bounces) {
                result = clamp(d, boundsVector[0], boundsVector[1]);
              }

              return result;
            },
            velocity: v,
            timeConst,
            from: value,
          });

          return;
        }

        spring.start({
          to: target,
          config: {
            velocity: v,
            clamp: !bounces,
          },
          onChange: isOutOfBounds(target, boundsVector)
            ? (values) => onChange(spring, boundary, dir, values)
            : undefined,
        });
      },
      {
        target: containerRef,
        enabled: scrollEnabled,
        from: () => [x?.get() ?? 0, y?.get() ?? 0],
        eventOptions: {
          passive: false,
        },
        filterTaps: true,
        bounds: getBounds(),
        rubberband: bounces,
        pointer: {
          touch: true,
        },
      },
    );

    useImperativeHandle(ref, () => ({
      refresh: () => {
        if (containerRef.current) {
          measureContainer(containerRef.current);
        }
        if (contentRef.current) {
          measureContent(contentRef.current);
        }
      },
    }));

    return (
      <animated.div
        ref={containerRef}
        className={classNames(baseCls, {
          [`${baseCls}-horizontal`]: horizontal,
        })}
        style={{
          width,
          height,
          maxWidth: width,
          maxHeight: height,
        }}
      >
        <animated.div
          style={{
            x,
            y,
          }}
          ref={contentRef}
          className={`${baseCls}-content`}
        >
          {children}
        </animated.div>
      </animated.div>
    );
  },
);

export default ScrollView;