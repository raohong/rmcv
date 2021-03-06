import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated, SpringConfig } from '@react-spring/web';
import { rubberbandIfOutOfBounds } from '@use-gesture/react';
import {
  useMeasure,
  useUpdateEffect,
  useUnmountedRef,
  usePersistFn,
  useControllableValue,
  useLockScroll,
  useMergeRefs,
} from '@rmc-vant/hooks';
import { noop } from '@rmc-vant/utils';
import { getDataOrAriaProps } from '../_utils';
import { useConfigContext } from '../config-provider';
import { DragExitHandler, ImagePreviewProps } from './interface';
import ImagePreviewItem from './ImagePreviewItem';
import { clampTo } from './utils';
import Portal from '../portal';

const VisibleAnimationSpringConfig: SpringConfig = {
  tension: 500,
  friction: 40,
  precision: 0.1,
};
const XOffsetAnimationSpringConfig: SpringConfig = {
  tension: 450,
  friction: 40,
  precision: 0.1,
};

const ImagePreview: React.FC<ImagePreviewProps> = ({
  onClose,
  closeable,
  teleport,
  showIndex = true,
  visible = false,
  lazyRender = true,
  afterClose = noop,
  maxZoom = 3,
  minZoom = 1 / 3,
  images = [],
  ...rest
}) => {
  const { getPrefixCls } = useConfigContext();
  const [activeIndex, setActiveIndex] = useControllableValue<number>(rest, {
    valuePropName: 'activeIndex',
    defaultValuePropName: 'defaultActiveIndex',
    defaultValue: 0,
    format: (val) => clampTo(0, val ?? 0, images.length - 1),
  });
  const [animateActiveIndex, setAnimateActiveIndex] = useState(activeIndex);
  const unmountedRef = useUnmountedRef();
  const [isAnimate, setIsAnimate] = useState(true);
  const lockRef = useLockScroll(visible);
  const {
    setRef,
    data: { width, height },
  } = useMeasure();
  const mergedContentRef = useMergeRefs(lockRef, setRef);

  const [animateVisible, setAnimateVisible] = useState(!!visible);
  const [{ x }, xCtrl] = useSpring(() => ({
    x: 0,
    config: {
      precision: VisibleAnimationSpringConfig.precision,
    },
  }));
  const [{ y, progress }, ctrl] = useSpring(() => ({
    y: 0,
    progress: 0,
    config: VisibleAnimationSpringConfig,
  }));
  const lastVelocity = useRef(0);
  const persistedAfterClose = usePersistFn(afterClose);

  const handleTap = () => {
    onClose?.();
  };

  const handleDragExit: DragExitHandler = ({
    movement,
    last,
    velocity,
    direction,
  }) => {
    const progress = movement >= 0 ? Math.min(1, movement / height) : 0;

    if (!last) {
      ctrl.set({ progress: 1 - progress, y: movement });

      return;
    }

    if ((movement >= height / 6 || Math.abs(velocity) >= 1) && direction >= 0) {
      onClose?.();
    } else {
      ctrl.start({
        progress: 1,
        y: 0,
        config: {
          velocity,
        },
      });
    }
  };

  const handleDrag = (
    movement: number,
    dir: number,
    velocity: number,
    last: boolean,
  ) => {
    const MOVEMENT_BOUNDARY = width / 3;
    const VELOCITY_BOUNDARY = 0.7;
    const len = images.length;

    let val = -width * activeIndex + movement;
    val = rubberbandIfOutOfBounds(val, -width * (len - 1), 0);

    if (!last) {
      xCtrl.set({ x: val });
      return;
    }

    let nextActiveIndex = activeIndex;
    let v = 0;

    if (Math.abs(movement) >= MOVEMENT_BOUNDARY) {
      nextActiveIndex += -Math.sign(dir);
    } else if (Math.abs(velocity) >= VELOCITY_BOUNDARY) {
      nextActiveIndex += -Math.sign(dir);
      v = velocity;
    }

    nextActiveIndex = clampTo(nextActiveIndex, 0, len - 1);
    nextActiveIndex = (nextActiveIndex + len) % len;

    if (activeIndex !== nextActiveIndex) {
      setActiveIndex(nextActiveIndex);
      lastVelocity.current = v;
    } else {
      xCtrl.start({ x: nextActiveIndex * -width });
    }
  };

  useUpdateEffect(() => {
    if (visible) {
      setAnimateVisible(true);
    }
  }, [visible]);

  useEffect(() => {
    if (!width || activeIndex === animateActiveIndex) {
      return;
    }

    const dest = activeIndex * -width;

    if (dest === x.get()) {
      return;
    }

    // visible ??? false => true ??? x ????????????
    if (!isAnimate) {
      xCtrl.set({
        x: dest,
      });
      setAnimateActiveIndex(activeIndex);
      setIsAnimate(true);
    } else {
      xCtrl.start({
        x: dest,
        config: {
          ...XOffsetAnimationSpringConfig,
          velocity: lastVelocity.current,
        },
        onRest({ finished }) {
          if (finished && !unmountedRef.current) {
            setAnimateActiveIndex(activeIndex);
          }
        },
      });

      lastVelocity.current = 0;
    }
  }, [activeIndex, width, xCtrl, x, isAnimate, animateActiveIndex]);

  useEffect(() => {
    if (height === 0) {
      return;
    }

    ctrl.start({
      y: visible ? 0 : height,
      progress: visible ? 1 : 0,
      onRest: {
        y({ finished }) {
          if (!unmountedRef.current && finished && !visible) {
            setAnimateVisible(false);
          }
        },
      },
    });
  }, [visible, ctrl, height]);

  useUpdateEffect(() => {
    if (!animateVisible) {
      persistedAfterClose();
      setIsAnimate(false);
    }
  }, [persistedAfterClose, animateVisible]);

  const cls = getPrefixCls('image-preview');
  const content = (
    <Portal disablePortal={!teleport} teleport={teleport}>
      <div className={cls} {...getDataOrAriaProps(rest)}>
        <animated.div
          style={{
            opacity: progress,
          }}
          className={`${cls}-overlay`}
        />
        <div ref={mergedContentRef} className={`${cls}-content`}>
          {!!showIndex && (
            <animated.div
              style={{
                y: progress.to([0, 1], ['-100%', '0%'], 'clamp'),
              }}
              className={`${cls}-header`}
            >
              <span className={`${cls}-index`}>
                {activeIndex + 1} / {images.length}
              </span>
            </animated.div>
          )}
          <animated.div
            style={{
              width: `${100 * images.length}vw`,
              x,
              y,
            }}
            className={`${cls}-list`}
          >
            {images.map((item, index) => (
              <ImagePreviewItem
                key={index}
                imageUrl={item}
                containerHeight={height}
                containerWidth={width}
                onDrag={handleDrag}
                onDragExit={handleDragExit}
                onTap={handleTap}
                maxScale={maxZoom}
                minScale={minZoom}
                visible={animateActiveIndex === index}
                gestureEnabled={activeIndex === animateActiveIndex}
              />
            ))}
          </animated.div>
        </div>
      </div>
    </Portal>
  );

  return <>{lazyRender ? (animateVisible ? content : null) : content}</>;
};

export default ImagePreview;
