import { useSpring } from '@react-spring/web';
import {
  useEventCallback,
  useIsomorphicLayoutEffect,
  useMeasure,
  useUnmountedRef,
} from '@rmc-vant/hooks';
import { Arrow, Cross } from '@rmc-vant/icons';
import { isNil, noop, omit } from '@rmc-vant/utils';
import clsx from 'clsx';
import React, { useMemo, useRef, useState } from 'react';
import { useThemeProps } from '../config-provider';
import { NoticeBarName, composeNoticeBarSlotClassNames } from './classNames';
import type { NoticeBarComponentState, NoticeBarProps } from './interface';
import {
  NoticeBarContent,
  NoticeBarLeftIcon,
  NoticeBarRightIcon,
  NoticeBarRoot,
  NoticeBarWrapper,
} from './styles';

const NoticeBar = React.forwardRef<HTMLDivElement, NoticeBarProps>((props, ref) => {
  const {
    mode,
    text,
    children,
    color,
    background,
    leftIcon,
    onClose,
    className,
    iconColor,
    classNames,
    wrappable = false,
    onRepeat = noop,
    speed = 60,
    ...rest
  } = useThemeProps(NoticeBarName, props);
  const [visible, setVisible] = useState(true);
  const unmountedRef = useUnmountedRef();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [{ x }, ctrl] = useSpring(
    {
      x: 0,
    },
    [],
  );
  const repeatCallback = useEventCallback(onRepeat);
  const {
    data: { width: distance },
    setRef,
  } = useMeasure();
  const {
    data: { width, scrollWidth },
    measure,
  } = useMeasure({
    ref: wrapperRef,
    format: (node) => {
      if (!node) {
        return { width: 0, scrollWidth: 0 };
      }

      return {
        width: node.clientWidth,
        scrollWidth: node.scrollWidth,
      };
    },
  });

  const scrollableControllable = 'scrollable' in rest;
  const outerScrollable = !!rest.scrollable;
  const internalScrollable = scrollableControllable
    ? !!rest.scrollable
    : scrollWidth > width && !wrappable;
  const componentState: NoticeBarComponentState = useMemo(
    () => ({
      background,
      color,
      iconColor: iconColor ?? color,
      wrappable: !outerScrollable && !!wrappable,
      scrollable: internalScrollable,
    }),
    [internalScrollable, wrappable, outerScrollable, color, iconColor, background],
  );

  const slotClassNames = composeNoticeBarSlotClassNames(componentState, classNames);

  useIsomorphicLayoutEffect(() => {
    if (!scrollableControllable && wrapperRef.current && !wrappable) {
      measure(wrapperRef.current);
    }
  }, [scrollableControllable, measure, wrappable]);

  useIsomorphicLayoutEffect(() => {
    if (width === 0 || distance === 0 || !internalScrollable) {
      return undefined;
    }

    const startLoop = () => {
      ctrl.start({
        from: {
          x: width,
        },
        to: {
          x: -distance,
        },
        loop: true,
        config: {
          duration: ((distance + width) / speed) * 1000,
        },
      });
    };

    ctrl.start({
      from: {
        x: 0,
      },
      x: -distance,
      config: {
        duration: (distance / speed) * 1000,
      },
      onRest(result) {
        if (result.finished && !unmountedRef.current) {
          startLoop();
          repeatCallback();
        }
      },
    });

    return () => {
      ctrl.stop();
    };
  }, [width, distance, internalScrollable, ctrl, speed, repeatCallback]);

  const handleClose = () => {
    setVisible(false);
    onClose?.();
  };

  const renderLeftIcon = () => {
    if (isNil(leftIcon)) {
      return null;
    }

    return (
      <NoticeBarLeftIcon
        componentState={componentState}
        className={slotClassNames.leftIcon}
      >
        {leftIcon}
      </NoticeBarLeftIcon>
    );
  };

  const renderRightIcon = () => {
    if (!mode) {
      return null;
    }

    return mode === 'closeable'
      ? (
          <NoticeBarRightIcon
            className={slotClassNames.rightIcon}
            componentState={componentState}
            tabIndex={0}
            role='button'
            onClick={handleClose}
            sx={{ cursor: 'pointer' }}
          >
            <Cross />
          </NoticeBarRightIcon>
        )
      : (
          <NoticeBarRightIcon
            className={slotClassNames.rightIcon}
            componentState={componentState}
          >
            <Arrow />
          </NoticeBarRightIcon>
        );
  };

  const content = text ?? children;

  return (
    <>
      {visible && (
        <NoticeBarRoot
          className={clsx(slotClassNames.root, className)}
          ref={ref}
          {...omit(rest, ['scrollable'])}
          componentState={componentState}
        >
          {renderLeftIcon()}
          <NoticeBarWrapper ref={wrapperRef} componentState={componentState}>
            <NoticeBarContent
              componentState={componentState}
              style={
                internalScrollable
                  ? {
                      x,
                    }
                  : undefined
              }
              ref={setRef}
              className={slotClassNames.content}
            >
              {content}
            </NoticeBarContent>
          </NoticeBarWrapper>
          {renderRightIcon()}
        </NoticeBarRoot>
      )}
    </>
  );
});

export default NoticeBar;
