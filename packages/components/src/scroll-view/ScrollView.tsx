'use-client';

import type { AnimationResult } from '@react-spring/web';
import { SpringValue } from '@react-spring/web';
import { useMeasure, useMergeRefs } from '@rmc-vant/hooks';
import { clamp } from '@rmc-vant/utils';
import { rubberbandIfOutOfBounds, useDrag } from '@use-gesture/react';
import clsx from 'clsx';
import React, { useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import { useDecayAnimation } from '../_utils';
import { useThemeProps } from '../config-provider';
import { ScrollViewName, composeScrollViewSlotClassNames } from './classNames';
import type {
  ScrollViewComponentState,
  ScrollViewProps,
  ScrollViewRef,
} from './interface';
import { StyledScrollViewContent, StyledScrollViewRoot } from './styles';

const isOutOfBounds = (distance: number, [min, max]: [number, number]) => {
  return distance <= min || distance >= max;
};

const onChange = (
  spring: SpringValue<number>,
  boundary: number,
  dir: number,
  values: AnimationResult<SpringValue<number>>,
) => {
  if (!values.finished) {
    return;
  }

  const currentValue = spring.get();

  if (
    (dir === 1 && currentValue >= boundary)
    || (dir === -1 && currentValue <= boundary)
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

const ScrollView = React.forwardRef<ScrollViewRef, ScrollViewProps>((props, ref) => {
  const {
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
    domRef,
    style,
    onScrollEndDrag,
    className,
    classNames,
    power = 0.8,
    timeConst = 400,
  } = useThemeProps(ScrollViewName, props);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { cancelAnimation, runDecay } = useDecayAnimation();
  const x = useMemo(() => ctrlX ?? new SpringValue(0), [ctrlX]);
  const y = useMemo(() => ctrlY ?? new SpringValue(0), [ctrlY]);
  const mergedContainerRef = useMergeRefs(containerRef, domRef);

  const { measure: measureContainer, data: containerSize } = useMeasure({
    ref: containerRef,
  });
  const { measure: measureContent, data: contentSize } = useMeasure({
    ref: contentRef,
  });

  const axis = horizontal ? 'x' : 'y';
  const spring = axis === 'x' ? x : y;

  const getBounds = () => ({
    left: Math.min(containerSize.width - contentSize.width, 0),
    right: 0,
    top: Math.min(containerSize.height - contentSize.height, 0),
    bottom: 0,
  });

  const scrollTo = (
    value: number,
    velocity: number,
    dir: number,
    destination?: number,
  ) => {
    const bounds = getBounds();
    const boundsVector: [number, number]
      = axis === 'x' ? [bounds.left, bounds.right] : [bounds.top, bounds.bottom];
    // 指定了目标位移，不需要计算位移和计算边界超出
    const isControlled = destination !== undefined;

    if (!isControlled && isOutOfBounds(value, boundsVector)) {
      spring.start({
        to: value,
      });

      return;
    }
    const boundary = dir === -1 ? boundsVector[0] : boundsVector[1];

    let target = destination ?? velocity * power * timeConst + value;

    if (modifyTarget && !isControlled) {
      target = modifyTarget(target, velocity);
    }

    if (bounces) {
      target = rubberbandIfOutOfBounds(target, boundsVector[0], boundsVector[1]);
    }
    else {
      target = clamp(target, boundsVector[0], boundsVector[1]);
    }

    if (decay && !isControlled) {
      runDecay(spring, dir, boundary, {
        power,
        modifyTarget: (d: number) => {
          let result = d;
          if (modifyTarget && !isControlled) {
            result = modifyTarget(d, velocity);
          }

          if (!bounces) {
            result = clamp(d, boundsVector[0], boundsVector[1]);
          }

          return result;
        },
        velocity,
        timeConst,
        from: value,
      });

      return;
    }

    onScrollEndDrag?.(target);

    spring.start({
      to: target,
      config: {
        velocity,
        clamp: !bounces,
      },
      onChange: isOutOfBounds(target, boundsVector)
        ? values => onChange(spring, boundary, dir, values)
        : undefined,
    });
  };

  useDrag(
    ({ last, offset: [ox, oy], velocity: [vx, vy], direction: [dx, dy] }) => {
      const velocity = axis === 'x' ? vx * dx : vy * dy;
      const value = axis === 'x' ? ox : oy;
      const dir = axis === 'x' ? dx : dy;

      if (!last) {
        spring.set(value);

        return;
      }

      scrollTo(value, velocity, dir);
    },
    {
      target: containerRef,
      enabled: scrollEnabled,
      from: () => {
        cancelAnimation();

        return [x.get(), y.get()];
      },
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

  useEffect(() => {
    return () => {
      x.stop();
      y.stop();
    };
  }, [x, y]);

  useImperativeHandle(ref, () => ({
    refresh: () => {
      if (containerRef.current) {
        measureContainer(containerRef.current);
      }
      if (contentRef.current) {
        measureContent(contentRef.current);
      }
    },
    scrollTo: (target) => {
      const current = spring.get();

      scrollTo(current, 0, Math.sign(target - current), target);
    },
  }));

  const componentState: ScrollViewComponentState = useMemo(
    () => ({
      inline: !!horizontal,
    }),
    [horizontal],
  );

  const slotClassNames = composeScrollViewSlotClassNames(componentState, classNames);

  return (
    <StyledScrollViewRoot
      componentState={componentState}
      ref={mergedContainerRef}
      className={clsx(slotClassNames.root, className)}
      style={{
        ...style,
        width,
        height,
        maxWidth: width,
        maxHeight: height,
      }}
    >
      <StyledScrollViewContent
        style={{
          x,
          y,
        }}
        componentState={componentState}
        ref={contentRef}
      >
        {children}
      </StyledScrollViewContent>
    </StyledScrollViewRoot>
  );
});

export default ScrollView;
