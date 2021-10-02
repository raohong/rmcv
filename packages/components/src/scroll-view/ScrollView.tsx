import React, { useImperativeHandle, useMemo, useRef } from 'react';
import { animated, AnimationResult, SpringValue } from '@react-spring/web';
import classNames from 'classnames';
import { useDrag } from 'react-use-gesture';
import { useMeasure } from '../_hooks';
import { useConfigContext } from '../config-provider';

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
  modifyTarget?: (distance: number) => number;
  decay?: boolean;
};

export type ScrollViewRef = {
  refresh: () => void;
};

const isOutOfBounds = (distance: number, [min, max]: [number, number]) => {
  return distance <= min || distance >= max;
};

const onChange = (
  springApi: SpringValue<number>,
  boundary: number,
  dir: number,
  values: AnimationResult<SpringValue<number>>,
) => {
  if (values.cancelled) {
    return;
  }

  const currentValue = springApi.get();

  if (
    (dir === 1 && currentValue >= boundary) ||
    (dir === -1 && currentValue <= boundary)
  ) {
    springApi.stop();

    springApi.start({
      to: boundary,
      config: {
        decay: false,
        velocity: springApi.velocity,
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
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
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
    const internalBounces = decay || bounces;

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
        movement: [ox, oy],
        velocities: [vx, vy],
        direction: [dx, dy],
      }) => {
        event.stopPropagation();
        event.preventDefault();

        const v = axis === 'x' ? vx : vy;
        const value = axis === 'x' ? ox : oy;
        const dir = axis === 'x' ? Math.sign(dx) : Math.sign(dy);
        const api = axis === 'x' ? x : y;

        if (!last) {
          api.set(value);

          return;
        }
        const bounds = getBounds();
        const boundsVector: [number, number] =
          axis === 'x'
            ? [bounds.left, bounds.right]
            : [bounds.top, bounds.bottom];

        if (isOutOfBounds(value, boundsVector)) {
          api.start({
            to: value,
            config: {
              velocity: v,
            },
          });
        } else {
          const boundary = dir === -1 ? boundsVector[0] : boundsVector[1];

          if (decay) {
            api.start({
              to: value,
              config: {
                decay: true,
                velocity: v,
              },
              onChange: (values) => onChange(api, boundary, dir, values),
            });
          } else {
            let target = power * v * 66 + value;

            if (modifyTarget) {
              target = modifyTarget(target);
            }

            api.start({
              to: target,
              config: {
                decay: false,
                velocity: v,
                clamp: !internalBounces,
              },
              onChange: isOutOfBounds(target, boundsVector)
                ? (values) => onChange(api, boundary, dir, values)
                : undefined,
            });
          }
        }
      },
      {
        domTarget: containerRef,
        enabled: scrollEnabled,
        initial: () => [x?.get() ?? 0, y?.get() ?? 0],
        eventOptions: {
          passive: false,
        },
        filterTaps: true,
        bounds: getBounds(),
        rubberband: internalBounces,
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
