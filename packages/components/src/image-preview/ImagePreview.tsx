import { SpringConfig, useSpring } from '@react-spring/web';
import {
  useControllableValue,
  useEventCallback,
  useLockScroll,
  useMeasure,
  useMergeRefs,
  useUnmountedRef,
  useUpdateEffect,
} from '@rmc-vant/hooks';
import { noop } from '@rmc-vant/utils';
import { rubberbandIfOutOfBounds } from '@use-gesture/react';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { getDataOrAriaProps } from '../_utils';
import { useThemeProps } from '../config-provider';
import Portal from '../portal';
import ImagePreviewItem from './ImagePreviewItem';
import { ImagePreviewName, composeImagePreviewSlotClassNames } from './classNames';
import type {
  DragExitHandler,
  ImagePreviewComponentState,
  ImagePreviewProps,
} from './interface';
import {
  ImagePreviewContent,
  ImagePreviewHeader,
  ImagePreviewIndex,
  ImagePreviewList,
  ImagePreviewOverlay,
  ImagePreviewRoot,
} from './styles';
import { clampTo } from './utils';

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

const ImagePreview: React.FC<ImagePreviewProps> = (props) => {
  const {
    onClose,
    teleport,
    classNames,
    open = false,
    showIndex = true,
    lazyRender = true,
    afterClose = noop,
    maxZoom = 3,
    minZoom = 1 / 3,
    images = [],
    ...rest
  } = useThemeProps(ImagePreviewName, props);
  const [activeIndex, setActiveIndex] = useControllableValue(rest, {
    valuePropName: 'activeIndex',
    defaultValuePropName: 'defaultActiveIndex',
    defaultValue: 0,
    format: (val) => clampTo(0, val ?? 0, images.length - 1),
  });
  const [animateActiveIndex, setAnimateActiveIndex] = useState(activeIndex);
  const unmountedRef = useUnmountedRef();
  const [isAnimate, setIsAnimate] = useState(true);
  const lockRef = useLockScroll(open);
  const {
    setRef,
    data: { width, height },
  } = useMeasure();
  const mergedContentRef = useMergeRefs(lockRef, setRef);

  const [animateVisible, setAnimateVisible] = useState(!!open);
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
  const afterCloseCallback = useEventCallback(afterClose);

  const componentState = useMemo<ImagePreviewComponentState>(() => ({}), []);
  const slotClassNames = composeImagePreviewSlotClassNames(
    componentState,
    classNames,
  );

  const handleTap = () => {
    onClose?.();
  };

  const handleDragExit: DragExitHandler = ({
    movement,
    last,
    velocity,
    direction,
  }) => {
    const dragProgress = movement >= 0 ? Math.min(1, movement / height) : 0;

    if (!last) {
      ctrl.set({ progress: 1 - dragProgress, y: movement });

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

    if (activeIndex !== nextActiveIndex) {
      setActiveIndex(nextActiveIndex);
      lastVelocity.current = v;
    } else {
      xCtrl.start({ x: nextActiveIndex * -width });
    }
  };

  useUpdateEffect(() => {
    if (open) {
      setAnimateVisible(true);
    }
  }, [open]);

  useEffect(() => {
    if (!width || activeIndex === animateActiveIndex) {
      return;
    }

    const dest = activeIndex * -width;

    if (dest === x.get()) {
      return;
    }

    // visible 由 false => true 时 x 关闭动画
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
  }, [activeIndex, width, xCtrl, x, isAnimate, animateActiveIndex, unmountedRef]);

  useEffect(() => {
    if (height === 0) {
      return;
    }

    ctrl.start({
      y: open ? 0 : height,
      progress: open ? 1 : 0,
      onRest: {
        y({ finished }) {
          if (!unmountedRef.current && finished && !open) {
            setAnimateVisible(false);
          }
        },
      },
    });
  }, [open, ctrl, height, unmountedRef]);

  useUpdateEffect(() => {
    if (!animateVisible) {
      afterCloseCallback();
      setIsAnimate(false);
    }
  }, [afterCloseCallback, animateVisible]);

  const content = (
    <Portal disablePortal={!teleport} teleport={teleport}>
      <ImagePreviewRoot
        className={slotClassNames.root}
        componentState={componentState}
        {...getDataOrAriaProps(rest)}
      >
        <ImagePreviewOverlay
          style={{
            opacity: progress,
          }}
        />
        <ImagePreviewContent ref={mergedContentRef}>
          {!!showIndex && (
            <ImagePreviewHeader
              style={{
                y: progress.to([0, 1], ['-100%', '0%'], 'clamp'),
              }}
              className={slotClassNames.header}
              componentState={componentState}
            >
              <ImagePreviewIndex
                componentState={componentState}
                className={slotClassNames.index}
              >
                {activeIndex + 1} / {images.length}
              </ImagePreviewIndex>
            </ImagePreviewHeader>
          )}
          <ImagePreviewList
            style={{
              width: `${100 * images.length}vw`,
              x,
              y,
            }}
          >
            {images.map((item, index) => (
              <ImagePreviewItem
                // eslint-disable-next-line react/no-array-index-key
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
                slotClassNames={slotClassNames}
                componentState={componentState}
              />
            ))}
          </ImagePreviewList>
        </ImagePreviewContent>
      </ImagePreviewRoot>
    </Portal>
  );

  return <>{lazyRender ? (animateVisible ? content : null) : content}</>;
};

export default ImagePreview;
