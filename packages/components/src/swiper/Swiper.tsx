'use-client';

import type { Interpolation } from '@react-spring/web';
import { useSpring, useSprings } from '@react-spring/web';
import {
  useInterval,
  useIsomorphicLayoutEffect,
  useMeasure,
  useUnmountedRef,
} from '@rmc-vant/hooks';
import { omit } from '@rmc-vant/utils';
import { useDrag } from '@use-gesture/react';
import clsx from 'clsx';
import React, { useImperativeHandle, useMemo, useRef, useState } from 'react';
import { flatReactNode } from '../_utils';
import { useThemeProps } from '../config-provider';
import { SwiperItemSymbol } from './SwiperItem';
import { SwiperName, composeSwiperSlotClassNames } from './classNames';
import { SwiperContext } from './context';
import type {
  SwiperComponentState,
  SwiperItemProps,
  SwiperProps,
  SwiperRef,
} from './interface';
import {
  StyledSwiperContainer,
  StyledSwiperMeasure,
  SwiperIndicator,
  SwiperIndicators,
  SwiperRoot,
} from './styles';

const getSwiperItemList = (children: React.ReactNode) => {
  const list = flatReactNode(children).filter(
    item =>
      React.isValidElement(item)
      // @ts-ignore
      && (item.type as unknown as any)[SwiperItemSymbol],
  ) as React.ReactElement<SwiperItemProps>[];

  return {
    swiperItemList: list,
    keys: list.map((item, index) => item.key ?? index),
  };
};

/**
 *
 * 计算循环模式下 swiper 的位移
 *
 * 1. activeIndex 为 0 手势向右或者向下滑动，最后一个 swiper item 向左或者向上 移动 length * itemSize
 * 2. activeIndex 为 length - 1 手势向右或者向下滑动，第一个 swiper item 向右或者向下 移动 itemSize
 */
const getOverflowDistanceData = (
  currentIndex: number,
  itemSize: number,
  dir: number,
  length: number,
) => {
  let overflowDistance = 0;
  let forwardActiveIndex: number | null = null;

  if (dir === 1 && currentIndex === 0) {
    forwardActiveIndex = length - 1;
    overflowDistance = length * -itemSize;
  }
  else if (dir === -1 && currentIndex === length - 1) {
    forwardActiveIndex = 0;
    overflowDistance = length * itemSize;
  }

  return {
    forwardActiveIndex,
    overflowDistance,
  };
};

const getBounds = (
  itemSize: number,
  length: number,
  vertical: boolean,
  loop: boolean,
) => {
  const min = -itemSize * (loop ? length : length - 1);
  const max = loop ? itemSize : 0;
  if (vertical) {
    return {
      left: 0,
      right: 0,
      top: min,
      bottom: max,
    };
  }

  return {
    top: 0,
    bottom: 0,
    left: min,
    right: max,
  };
};

const Swiper = React.forwardRef<SwiperRef, SwiperProps>((props, ref) => {
  const {
    autoplay,
    width,
    height,
    renderIndicators,
    className,
    children,
    style,
    onChange,
    classNames,
    vertical = false,
    loop = true,
    showIndicators = true,
    touchable = true,
    indicatorColor = 'rgba(235, 237, 240, 0.3)',
    activeIndicatorColor = '#506b86',
    interval = 3000,
    defaultActiveIndex = 0,
    ...rest
  } = useThemeProps(SwiperName, props);
  const { swiperItemList, keys } = getSwiperItemList(children);
  const { length } = swiperItemList;

  const unmountedRef = useUnmountedRef();
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { data: containerSize } = useMeasure({
    ref: containerRef,
  });
  const { data: size, setRef } = useMeasure();

  const [activeIndex, setActiveIndex] = useState(() =>
    Math.max(0, Math.min(length - 1, defaultActiveIndex)),
  );
  const [transforms, ctrl] = useSpring(
    {
      x: 0,
      y: 0,
    },
    [],
  );
  const [springs, setSprings] = useSprings(length, () => ({
    x: 0,
    y: 0,
    default: {
      immediate: true,
    },
  }));
  const lockedNextActiveIndex = useRef<number | null>(null);

  const axis = vertical ? 'y' : 'x';
  const itemHeight = height ?? style?.height ?? '100%';
  const itemWidth = width ?? style?.width ?? '100%';

  const itemSize = vertical ? size.height : size.width;
  const sizeKey = vertical ? 'height' : 'width';
  const contentSize = itemSize * length;

  const internalLoop
    = loop
    && ((!vertical && itemSize === containerSize.width)
    || (vertical && itemSize === containerSize.height));

  const bounds = getBounds(itemSize, length, !!vertical, !!internalLoop);

  const resetSprings = () => {
    setSprings(() => {
      return { x: 0, y: 0, immediate: true };
    });
  };

  const setForwardSprings = (currentIndex: number, dir: number) => {
    const { forwardActiveIndex, overflowDistance } = getOverflowDistanceData(
      currentIndex,
      itemSize,
      dir,
      length,
    );

    setSprings(i => ({
      [axis]:
        forwardActiveIndex !== null && forwardActiveIndex === i
          ? overflowDistance
          : 0,
    }));
  };

  const swipeTo = (next: number, animation = true, velocity = 0) => {
    const destIndex = (next + length) % length;
    const needForward
      = (activeIndex === length - 1 && destIndex === 0)
      || (activeIndex === 0 && destIndex === length - 1);

    let swiperIndex = destIndex;

    if (needForward && internalLoop) {
      swiperIndex = activeIndex === length - 1 && destIndex === 0 ? length : -1;

      setForwardSprings(
        activeIndex,
        activeIndex === length - 1 && destIndex === 0 ? -1 : 1,
      );
    }

    // 循环模式下特异性
    if (swiperIndex !== destIndex) {
      lockedNextActiveIndex.current = destIndex;
    }

    if (destIndex !== activeIndex) {
      setActiveIndex(destIndex);
      onChange?.(destIndex);
    }

    ctrl.start({
      [axis]: swiperIndex * -itemSize,
      immediate: !animation,
      config: {
        velocity,
        clamp: true,
        precision: 0.02,
        friction: 32,
        tension: 300,
      },

      onRest(values) {
        if (unmountedRef.current) {
          return;
        }

        lockedNextActiveIndex.current = null;

        if (values.finished) {
          if (needForward && internalLoop) {
            resetSprings();
            ctrl.start({
              [axis]: destIndex * -itemSize,
              immediate: true,
            });
          }

          if (autoplay) {
            start();
          }
        }
      },
    });
  };

  const next = (animation = true) => {
    swipeTo(activeIndex + 1, animation);
  };
  const prev = (animation = true) => {
    swipeTo(activeIndex - 1, animation);
  };

  const { start, cancel } = useInterval(next, { interval, loop: true });

  useDrag(
    ({ event, last, movement, offset, velocity, direction, first }) => {
      event.preventDefault();
      event.stopPropagation();

      if (first) {
        cancel();
        resetSprings();
      }

      /**
       * 循环模式下，采用了 hack 手段，当 swiper 没有过渡完成时，此时它的位移不是真实位移
       * 应该是 activeIndex * -itemSize
       * 在此之前应该忽略手势
       */
      if (lockedNextActiveIndex.current !== null) {
        return;
      }

      const index = axis === 'x' ? 0 : 1;
      const value = offset[index];
      const v = velocity[index] * direction[index];
      const velocityBoundary = 0.75;
      const maxVelocityBoundary = velocityBoundary * 2;

      const currentDir = v > 0 ? 1 : -1;
      const swipeDir = direction[index];

      if (!last) {
        ctrl.start({
          [axis]: value,
          immediate: true,
        });

        if (internalLoop) {
          setForwardSprings(activeIndex, swipeDir);
        }

        return;
      }

      const distance = movement[index];
      let nextActiveIndex = activeIndex;

      if (Math.abs(v) >= maxVelocityBoundary) {
        nextActiveIndex = activeIndex - currentDir;
      }
      else if (Math.abs(v) >= velocityBoundary) {
        nextActiveIndex = activeIndex - swipeDir;
      }
      else if (Math.abs(distance) > itemSize / 3) {
        nextActiveIndex = activeIndex - swipeDir;
      }

      nextActiveIndex = (nextActiveIndex + length) % length;

      /**
       * 不是循环模式不能跳跃边界
       */
      if (
        !internalLoop
        && ((activeIndex === 0 && nextActiveIndex === length - 1)
        || (activeIndex === length - 1 && nextActiveIndex === 0))
      ) {
        nextActiveIndex = activeIndex;
      }

      swipeTo(nextActiveIndex, true, v);
    },
    {
      target: contentRef,
      enabled: touchable,
      filterTaps: true,
      axis,
      bounds,
      pointer: {
        touch: true,
      },
      eventOptions: {
        passive: false,
      },
      from: () => {
        const nextActiveIndex = lockedNextActiveIndex.current;
        const value = transformValue.get();

        /**
         * 循环模式下 swiper 位移需要修正
         */
        if (nextActiveIndex !== null) {
          return vertical
            ? [0, activeIndex * -itemSize]
            : [activeIndex * -itemSize, 0];
        }

        return vertical ? [0, value] : [value, 0];
      },
    },
  );

  useImperativeHandle(ref, () => ({
    next,
    prev,
    swipeTo: (index, animation) => {
      if (index !== activeIndex) {
        swipeTo(index, animation);
      }
    },
  }));

  useIsomorphicLayoutEffect(() => {
    if (autoplay) {
      start();
    }
    return cancel;
  }, [start, autoplay, cancel]);

  const componentState: SwiperComponentState = useMemo(() => ({
    vertical,
  }), [vertical]);

  const slotClassNames = composeSwiperSlotClassNames(componentState, classNames);
  const ctxValue = useMemo(
    () => ({
      itemClassNames: slotClassNames.item,
      componentState,
    }),
    [componentState, slotClassNames.item],
  );

  const transformValue = transforms[axis];
  const progress = transformValue.to(
    [-itemSize, 0],
    [1, 0],
  ) as Interpolation<number>;
  const getIndicatorStyle = (index: number) => ({
    backgroundColor: progress.to(
      [index - 1, index, index],
      [indicatorColor, activeIndicatorColor, indicatorColor],
      'clamp',
    ),
  });
  const defaultRenderIndicators = () => (
    <SwiperIndicators
      className={slotClassNames.indicators}
      componentState={componentState}
    >
      {keys.map((item, index) => (
        <SwiperIndicator
          className={slotClassNames.indicator}
          componentState={componentState}
          style={getIndicatorStyle(index)}
          key={item}
        />
      ))}
    </SwiperIndicators>
  );

  return (
    <SwiperContext.Provider value={ctxValue}>
      <SwiperRoot
        className={clsx(slotClassNames.root, className)}
        ref={containerRef}
        style={{
          height: vertical ? itemSize : undefined,
          ...style,
        }}
        {...omit(rest, ['activeIndex', 'defaultActiveIndex', 'onChange'])}
        componentState={componentState}
      >
        <StyledSwiperMeasure
          ref={setRef}
          style={{ width: itemWidth, height: itemHeight }}
        />
        <StyledSwiperContainer
          style={{
            ...transforms,
            [sizeKey]: contentSize,
          }}
          componentState={componentState}
          ref={contentRef}
        >
          {swiperItemList.map((item, index) => {
            const itemSprings = springs[index];

            return React.cloneElement(item, {
              style: {
                ...item.props.style,
                [axis]: itemSprings[axis],
                [sizeKey]: itemSize,
              },
              key: item.key ?? index,
            });
          })}
        </StyledSwiperContainer>
        {showIndicators
          ? (renderIndicators || defaultRenderIndicators)(
              progress,
              itemSize,
              activeIndex,
              length,
            )
          : null}
      </SwiperRoot>
    </SwiperContext.Provider>
  );
});

export default Swiper;
