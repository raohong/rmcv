import classNames from 'classnames';
import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import {
  Arrow,
  Cross,
  PassedOutlined,
  InfoOutlined,
  WarningOutlined,
  CloseOutlined,
} from '@rmc-vant/icons';
import isNil from 'lodash/isNil';
import { useConfigContext } from '../config-provider';
import type { NoticeBarProps, NoticeBarType } from './interface';
import {
  useIsomorphicLayoutEffect,
  useMeasure,
  useUnmountedRef,
} from '../_hooks';

const LeftIconMaps: Record<NoticeBarType, typeof PassedOutlined> = {
  success: PassedOutlined,
  info: InfoOutlined,
  warning: WarningOutlined,
  error: CloseOutlined,
};

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
      scrollable,
      wrapable,
      className,
      type,
      style,
      iconColor,
      speed = 60,
      ...rest
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();
    const [visible, setVisible] = useState(true);
    const basCls = getPrefixCls('notice-bar');
    const unmountedRef = useUnmountedRef();

    const { setRef, data: contentSize } = useMeasure();
    const {
      setRef: setWrapperRef,
      data: { width },
    } = useMeasure();

    const distance = contentSize.width;

    const [{ x }, ctrl] = useSpring(
      {
        x: 0,
      },
      [],
    );

    useIsomorphicLayoutEffect(() => {
      if (width === 0 || distance === 0 || !scrollable) {
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
          }
        },
      });

      return () => {
        ctrl.stop();
      };
    }, [width, distance, scrollable, ctrl, speed]);

    const handleClose = () => {
      setVisible(false);
      onClose?.();
    };

    const iconStyle = {
      color: iconColor ?? color,
    };

    const renderLeftIcon = () => {
      const internalLeftIcon: React.ReactNode =
        leftIcon ??
        (type && LeftIconMaps[type] && React.createElement(LeftIconMaps[type]));

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
        <Cross
          style={iconStyle}
          className={rightIconCls}
          onClick={handleClose}
        />
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
                [`${basCls}-wrapable`]: !scrollable && wrapable,
                [`${basCls}-${type}`]: type,
                [`${basCls}-scrollable`]: scrollable,
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
            <div ref={setWrapperRef} className={`${basCls}-wrapper`}>
              <animated.div
                style={
                  scrollable
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
