import React, { useCallback, useEffect, useRef } from 'react';
import { animated, to, SpringValue, useSpring } from '@react-spring/web';
import { usePinch, useDrag, rubberbandIfOutOfBounds } from '@use-gesture/react';
import { useMeasure, useIsomorphicLayoutEffect } from '@rmc-vant/hooks';
import Image from '../image';
import { useDecayAnimation } from '../_utils';
import type { ImagePreviewItemProps, Vector2 } from './interface';
import { useConfigContext } from '../config-provider';
import {
  clampTo,
  Direction,
  getDragDirection,
  subV,
  scaleTo,
  isOutOfBounds,
  clampScaleOrigin,
} from './utils';

enum DragState {
  NONE,
  DRAG,
  EXIT,
  LOCKED,
}

const TAP_INTEVAL = 250;
const DOUBLE_TAP_INTERVL = 300;

const ImagePreviewItem: React.FC<ImagePreviewItemProps> = ({
  imageUrl,
  onDragExit,
  containerHeight,
  maxScale,
  minScale,
  onDrag,
  containerWidth,
  visible,
  onTap,

  gestureEnabled,
}) => {
  const { getPrefixCls } = useConfigContext();
  const cls = getPrefixCls('image-preview-item');
  const ref = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const {
    data: { width, height },
  } = useMeasure({ ref });
  const [{ x, y, scale }, springRef] = useSpring(
    {
      x: 0,
      y: 0,
      scale: 1,
    },
    [],
  );
  const { runDecay, cancelAnimation } = useDecayAnimation();

  const dragState = useRef(DragState.NONE);
  const movementWhenExit = useRef([0, 0]);
  const lastTapAt = useRef(0);
  const tapTimer = useRef(0);

  const origin: Vector2 = [containerWidth / 2, containerHeight / 2];
  const getContentSize: (cs?: number) => Vector2 = (cs = scale.get()) => [
    width * cs,
    height * cs,
  ];

  const getInitialYOffset = useCallback(() => {
    return height > containerHeight ? (height - containerHeight) / 2 : 0;
  }, [height, containerHeight]);

  const getBounds = (cs = scale.get()) => {
    const size = getContentSize(cs);

    return {
      left: Math.min(0, (containerWidth - size[0]) / 2),
      right: Math.max(0, (size[0] - containerWidth) / 2),
      bottom: Math.max(0, (size[1] - containerHeight) / 2),
      top: Math.min(0, (containerHeight - size[1]) / 2),
    };
  };
  const getDragState = (
    currentDirection: Direction,
    bounds = getBounds(),
  ): DragState => {
    const cx = x.get();
    const cy = y.get();

    let state = DragState.DRAG;
    if (
      (currentDirection === Direction.LEFT && cx <= bounds.left) ||
      (currentDirection === Direction.RIGHT && cx >= bounds.right)
    ) {
      state = DragState.LOCKED;
    } else if (currentDirection === Direction.BOTTOM && cy >= bounds.bottom) {
      state = DragState.EXIT;
    }

    return state;
  };

  const handleDoubleTap = (values: Vector2) => {
    const cs = scale.get();
    const nextScale = cs > 1 ? 1 : maxScale;
    const base: Vector2 = [x.get(), y.get()];
    const scaleOrigin = clampScaleOrigin(
      subV(values, origin),
      base,
      nextScale / cs,
      getBounds(nextScale),
    );

    if (nextScale === 1) {
      x.start(0);
      y.start(getInitialYOffset());
      scale.start(nextScale);
    } else {
      scale.start(nextScale, {
        onChange(d) {
          const val = d as unknown as number;
          const scaleDelta = val / cs;
          const xy = scaleTo(scaleOrigin, base, scaleDelta);

          x.set(xy[0]);
          y.set(xy[1]);
        },
      });
    }
  };

  const handleCheckOffset = (
    value: number,
    velocity: number,
    spring: SpringValue<number>,
    dir: number,
    axis: 'x' | 'y',
  ) => {
    const bounds = getBounds();
    const boundaryVector: Vector2 =
      axis === 'x' ? [bounds.left, bounds.right] : [bounds.top, bounds.bottom];
    const nearest =
      Math.abs(value - boundaryVector[0]) < Math.abs(value - boundaryVector[1])
        ? boundaryVector[0]
        : boundaryVector[1];

    if (isOutOfBounds(value, boundaryVector)) {
      spring.start(nearest, {
        config: {
          velocity,
        },
      });
    } else {
      runDecay(spring, dir, boundaryVector[dir === -1 ? 0 : 1], {
        velocity,
        from: value,
      });
    }
  };

  const stopAnimation = useCallback(() => {
    springRef.stop();
    cancelAnimation();
  }, [springRef, cancelAnimation]);

  const clearTapTimer = useCallback(() => {
    if (tapTimer.current) {
      clearTimeout(tapTimer.current);
      tapTimer.current = 0;
    }
  }, []);

  const setupTapHandler = () => {
    tapTimer.current = window.setTimeout(() => {
      onTap();
    }, TAP_INTEVAL);
  };

  useDrag(
    ({
      offset: [ox, oy],
      last,
      first,
      movement,
      tap,
      values,
      velocity,
      direction,
      touches,
    }) => {
      if (!tap && !last && touches > 1) {
        return;
      }

      clearTapTimer();

      if (tap) {
        stopAnimation();
        cancelAnimation();

        const now = Date.now();

        if (lastTapAt.current && now - lastTapAt.current <= DOUBLE_TAP_INTERVL) {
          handleDoubleTap(values);
          lastTapAt.current = 0;
        } else {
          if (!scale.isAnimating) {
            setupTapHandler();
          }
          lastTapAt.current = now;
        }

        return;
      }
      if (first) {
        stopAnimation();
        return;
      }

      /**
       * dragState 转换
       *
       * LOCKED =>|
       * EXIT => DRAG
       * DRAG =>| EXIT
       *
       */

      if (dragState.current === DragState.NONE && !last) {
        const currentDirection = getDragDirection(movement);
        dragState.current = getDragState(currentDirection);

        if (dragState.current === DragState.EXIT) {
          movementWhenExit.current = movement.slice();
        }
      }

      const vx = velocity[0] * direction[0];
      const vy = velocity[1] * direction[1];

      switch (dragState.current) {
        case DragState.DRAG:
          if (!last) {
            const bounds = getBounds();
            const currentState = getDragState(getDragDirection(movement));

            if (currentState === DragState.EXIT) {
              dragState.current = currentState;
              movementWhenExit.current = movement.slice();
              return;
            }

            const nx = rubberbandIfOutOfBounds(ox, bounds.left, bounds.right);
            const ny = rubberbandIfOutOfBounds(oy, bounds.top, bounds.bottom);

            x.set(nx);
            y.set(ny);
          } else {
            handleCheckOffset(ox, vx, x, direction[0], 'x');
            handleCheckOffset(oy, vy, y, direction[1], 'y');
          }

          break;
        case DragState.EXIT:
          onDragExit({
            first,
            last,
            velocity: vy,
            direction: direction[1],
            movement: movement[1] - movementWhenExit.current[1],
          });

          break;
        case DragState.LOCKED:
          onDrag(movement[0], direction[0], vx, last);
          // 整体拖拽
          break;
      }

      if (last) {
        dragState.current = DragState.NONE;
      }
    },
    {
      target: containerRef,
      enabled: height > 0 && gestureEnabled,
      filterTaps: true,
      from: () => [x.get(), y.get()],
    },
  );

  usePinch(
    ({ pinching, axis, origin: pinchOrigin, offset: [cs], first }) => {
      if (first) {
        stopAnimation();
      }

      if (axis === 'scale') {
        const pinchScaleDelta = cs / scale.get();
        const cx = x.get();
        const cy = y.get();
        const scaleOrigin = subV(pinchOrigin, origin);
        const [nx, ny] = scaleTo(scaleOrigin, [cx, cy], pinchScaleDelta);

        if (pinching) {
          x.set(nx);
          y.set(ny);
          scale.set(cs);
        } else if (cs <= 1) {
          x.start(0);
          y.start(getInitialYOffset());
          scale.start(1);
        } else {
          const bounds = getBounds(cs);
          x.start(clampTo(nx, bounds.left, bounds.right));
          y.start(clampTo(ny, bounds.top, bounds.bottom));
          scale.start(cs);
        }
      }
    },
    {
      target: containerRef,
      scaleBounds: {
        min: minScale,
        max: maxScale,
      },
      from: () => [scale.get(), 0],
      rubberband: true,
      preventDefault: true,
      enabled: gestureEnabled,
    },
  );

  useIsomorphicLayoutEffect(() => {
    y.set(getInitialYOffset());
    x.set(0);
    scale.set(1);
  }, [getInitialYOffset, y, visible, x, scale, visible]);

  useEffect(() => {
    return () => {
      stopAnimation();
      clearTapTimer();
    };
  }, [stopAnimation, clearTapTimer]);

  const transform = to(
    [x, y, scale],
    (x1, y1, s1) => `translate3d(${x1}px, ${y1}px, 0) scale(${s1})`,
  );

  return (
    <div
      style={{ width: containerWidth > 0 ? containerWidth : undefined }}
      className={cls}
      ref={containerRef}
    >
      <animated.div
        style={{
          transform,
        }}
        className={`${cls}-image-container`}
      >
        <Image ref={ref} className={`${cls}-image`} src={imageUrl} />
      </animated.div>
    </div>
  );
};

export default ImagePreviewItem;
