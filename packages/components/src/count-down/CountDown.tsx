import { useUnmountedRef, useUpdateEffect } from '@rmc-vant/hooks';
import { isFunction, noop } from '@rmc-vant/utils';
import clsx from 'clsx';
import React, { useEffect, useImperativeHandle, useState } from 'react';
import { useThemeProps } from '../config-provider';
import CountDownTimer from './Timer';
import { CountDownName, countDownClassNames } from './classNames';
import type { CountDownProps, CountDownRef, CountDownTimeData } from './interface';
import { CountDownRoot } from './styles';
import { calCountDownTimeData, formatCountDownTimeData, sanitizeTime } from './util';

const CountDown = React.forwardRef<CountDownRef, CountDownProps>((props, ref) => {
  const {
    children,
    millisecond,
    time,
    className,
    onFinish = noop,
    onChange = noop,
    autoStart = true,
    format = 'HH:mm:ss',
    ...rest
  } = useThemeProps(CountDownName, props);

  const unmountedRef = useUnmountedRef();
  const [data, setData] = useState<CountDownTimeData | null>(() => {
    return calCountDownTimeData(autoStart ? sanitizeTime(time) : 0);
  });
  const [timer] = useState(
    () =>
      new CountDownTimer(sanitizeTime(time), {
        autoStart,
        millisecond,
        onFinish,
        onChange(next) {
          if (!unmountedRef.current) {
            setData(next);
            onChange?.(next);
          }
        },
      }),
  );

  timer.updateCallbacks({
    onFinish,
    onChange(next) {
      if (!unmountedRef.current) {
        setData(next);
        onChange?.(next);
      }
    },
  });

  useUpdateEffect(() => {
    timer.updateConfig(sanitizeTime(time), {
      autoStart,
      millisecond,
    });
  }, [autoStart, time, millisecond]);

  useEffect(() => {
    return () => timer.destroy();
  }, [timer]);

  useImperativeHandle(ref, () => ({
    start: () => timer.start(),
    pause: () => timer.pause(),
    reset: () => timer.reset(),
  }));

  return (
    <CountDownRoot
      className={clsx(countDownClassNames.root, className)}
      {...rest}
      componentState={{}}
    >
      {

        data !== null
          ? isFunction(children)
            ? children(data)
            : formatCountDownTimeData(data.totalTime, format)
          : null
      }
    </CountDownRoot>
  );
});

export default CountDown;
