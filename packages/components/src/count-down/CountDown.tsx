import {
  useIsomorphicLayoutEffect,
  usePersistFn,
  useUnmountedRef,
  useUpdateIsomorphicLayoutEffect,
} from '@rmc-vant/hooks';
import { isFunction, noop } from '@rmc-vant/utils';
import classNames from 'classnames';
import React, { useImperativeHandle, useRef, useState } from 'react';
import { useConfigContext } from '../config-provider';
import CountDownTimer from './Timer';
import type { CountDownProps, CountDownRef, CountDownTimeData } from './interface';
import { calCountDownTimeData, formatCountDownTimeData, sanitizeTime } from './util';

const CountDown = React.forwardRef<CountDownRef, CountDownProps>(
  (
    {
      className,
      children,
      millisecond,
      time,
      onFinish = noop,
      onChange = noop,
      autoStart = true,
      format = 'HH:mm:ss',
      ...rest
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();
    const unmountedRef = useUnmountedRef();
    const timer = useRef<CountDownTimer | null>(null);
    const [data, setData] = useState<CountDownTimeData | null>(() => {
      return calCountDownTimeData(autoStart ? sanitizeTime(time) : 0);
    });

    const persistedOnChange = usePersistFn(onChange);
    const persistedOnFinish = usePersistFn(onFinish);

    useIsomorphicLayoutEffect(() => {
      const currentTimer = new CountDownTimer(sanitizeTime(time), {
        autoStart,
        millisecond,
        onChange: (next) => {
          if (!unmountedRef.current) {
            setData(next);
            persistedOnChange(next);
          }
        },
        onFinish: persistedOnFinish,
      });

      timer.current = currentTimer;

      return () => {
        currentTimer.destroy();
        timer.current = null;
      };
    }, []);

    useUpdateIsomorphicLayoutEffect(() => {
      timer.current?.updateConfig(sanitizeTime(time), {
        millisecond,
        autoStart,
      });
    }, [time, millisecond, autoStart]);

    useImperativeHandle(ref, () => ({
      start: () => timer.current?.start(),
      pause: () => timer.current?.pause(),
      reset: () => timer.current?.reset(),
    }));

    return (
      <div className={classNames(getPrefixCls('count-down'), className)} {...rest}>
        {
          // eslint-disable-next-line no-nested-ternary
          data !== null
            ? isFunction(children)
              ? children(data)
              : formatCountDownTimeData(data.totalTime, format)
            : null
        }
      </div>
    );
  },
);

export default CountDown;
