import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Arrow, Cross } from '@rmc-vant/icons';
import { usePersistFn } from '@rmc-vant/hooks';
import { isNil, noop } from '@rmc-vant/utils';
import {
  useIsomorphicLayoutEffect,
  useMeasure,
  useUnmountedRef,
} from '@rmc-vant/hooks';
import { useConfigContext } from '../config-provider';
import type { NoticeBarProps } from './interface';

const NoticeBar = React.forwardRef<HTMLDivElement, NoticeBarProps>(
  (
    {
      mode,
      text,
      children,
      color,
      background,
      leftIcon,
      onClose,
      wrappable,
      className,
      style,
      iconColor,
      onRepeat = noop,
      speed = 60,
      ...props
    },
    ref,
  ) => {
    const { scrollable, ...rest } = props;
    const { getPrefixCls } = useConfigContext();
    const [visible, setVisible] = useState(true);
    const basCls = getPrefixCls('notice-bar');
    const unmountedRef = useUnmountedRef();
    const wrapperRef = useRef<HTMLDivElement>(null);

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

    const [{ x }, ctrl] = useSpring(
      {
        x: 0,
      },
      [],
    );
    const persistedOnRepeat = usePersistFn(onRepeat);

    const scrollableControllable = 'scrollable' in props;
    const internalScrollable = scrollableControllable
      ? scrollable
      : scrollWidth > width;

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
            persistedOnRepeat();
          }
        },
      });

      return () => {
        ctrl.stop();
      };
    }, [width, distance, internalScrollable, ctrl, speed, persistedOnRepeat]);

    const handleClose = () => {
      setVisible(false);
      onClose?.();
    };

    const iconStyle = {
      color: iconColor ?? color,
    };

    const renderLeftIcon = () => {
      const internalLeftIcon: React.ReactNode = leftIcon;

      if (isNil(internalLeftIcon)) {
        return null;
      }

      if (React.isValidElement(internalLeftIcon)) {
        return React.cloneElement(internalLeftIcon, {
          // @ts-ignore
          className: classNames(
            // @ts-ignore
            internalLeftIcon.props.className,
            `${basCls}-icon`,
          ),
          style: {
            // @ts-ignore
            ...internalLeftIcon.props.style,
            ...iconStyle,
          },
        });
      }

      return (
        <div style={iconStyle} className={`${basCls}-icon`}>
          {internalLeftIcon}
        </div>
      );
    };

    const renderRightIcon = () => {
      const rightIconCls = classNames(`${basCls}-icon`, `${basCls}-right-icon`);

      return mode === 'closeable' ? (
        <Cross style={iconStyle} className={rightIconCls} onClick={handleClose} />
      ) : (
        <Arrow style={iconStyle} className={rightIconCls} />
      );
    };

    const content = text ?? children;

    return (
      <>
        {visible && (
          <div
            className={classNames(
              basCls,
              {
                [`${basCls}-wrappable`]: !internalScrollable && wrappable,
                [`${basCls}-scrollable`]: internalScrollable,
              },
              className,
            )}
            ref={ref}
            style={{
              color,
              backgroundColor: background,
              ...style,
            }}
            {...rest}
          >
            {renderLeftIcon()}
            <div ref={wrapperRef} className={`${basCls}-wrapper`}>
              <animated.div
                style={
                  internalScrollable
                    ? {
                        x,
                      }
                    : undefined
                }
                ref={setRef}
                className={`${basCls}-content`}
              >
                {content}
              </animated.div>
            </div>
            {mode && renderRightIcon()}
          </div>
        )}
      </>
    );
  },
);

export default NoticeBar;
