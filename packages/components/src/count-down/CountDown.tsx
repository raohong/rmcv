import classNames from 'classnames';
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { useConfigContext } from '../config-provider';
import { usePersistFn, useUnmountedRef, useUpdateEffect } from '../_hooks';
import { isFunction, noop } from '../_utils';
import CountDownTimer from './Timer';
import type { CountDownRef, CountDownProps, CountDownTimeData } from './type';
import {
  calCountDownTimeData,
  formatCountDownTimeData,
  santilizeTime,
} from './util';

const CountDown = React.forwardRef<CountDownRef, CountDownProps>(
  (
    {
      className,
      children,
      onFinish = noop,
      onChange = noop,
      autoStart,
      millisecond,
      time,
      format = 'DD:HH:mm:ss',
      ...rest
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();
    const unmountedRef = useUnmountedRef();
    const timer = useRef<CountDownTimer | null>(null);
    const [data, setData] = useState<CountDownTimeData | null>(() => {
      return calCountDownTimeData(autoStart ? santilizeTime(time) : 0);
    });

    const persistedOnChange = usePersistFn(onChange);
    const persistedOnFinish = usePersistFn(onFinish);

    useEffect(() => {
      const currentTimer = new CountDownTimer(santilizeTime(time), {
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

      // eslint-disable-next-line consistent-return
      return () => {
        currentTimer.destory();
        timer.current = null;
      };
    }, []);

    useUpdateEffect(() => {
      if (timer.current) {
        timer.current.updateConfig(santilizeTime(time), {
          millisecond,
          autoStart,
        });
      }
    }, [time, millisecond, autoStart]);

    useImperativeHandle(ref, () => ({
      start: () => timer.current?.start(),
      pause: () => timer.current?.pause(),
      reset: () => timer.current?.reset(),
    }));

    return (
      <div
        className={classNames(getPrefixCls('count-down'), className)}
        {...rest}
      >
        {
          // eslint-disable-next-line no-nested-ternary
          data !== null
            ? isFunction(children)
              ? children(data)
              : formatCountDownTimeData(data, format)
            : null
        }
      </div>
    );
  },
);

export default CountDown;
