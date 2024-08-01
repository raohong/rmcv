import { isNumber } from '@rmc-vant/utils';
import type { CountDownTimeData } from './interface';

const DAY = 3600 * 1000 * 24;

const HOUR = 3600 * 1000;

const MINUTE = 60 * 1000;

const SECOND = 1000;

export const calCountDownTimeData = (time: number): CountDownTimeData => {
  let value = time;

  const days = Math.floor(value / DAY);
  value -= days * DAY;

  const hours = Math.floor(value / HOUR);
  value -= hours * HOUR;

  const minutes = Math.floor(value / MINUTE);
  value -= minutes * MINUTE;

  const seconds = Math.floor(value / SECOND);
  value -= seconds * SECOND;

  const milliseconds = value;

  return {
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
    totalTime: time,
  };
};

const CONFIG_LIST = [
  {
    key: 'S',
    base: 1,
  },
  {
    key: 's',
    base: 1000,
  },
  {
    key: 'm',
    base: 60 * 1000,
  },
  {
    key: 'H',
    base: 60 * 60 * 1000,
  },
  {
    key: 'D',
    base: 24 * 60 * 60 * 1000,
  },
];

export const formatCountDownTimeData = (time: number, format: string) => {
  const matchedKeys = format.match(/[DHms]{1,2}|S{1,3}/g);

  if (!matchedKeys) {
    return format;
  }

  matchedKeys.sort(
    (a, b) =>
      CONFIG_LIST.findIndex(item => item.key === b[0])
      - CONFIG_LIST.findIndex(item => item.key === a[0]),
  );

  let result = format;
  let currentTime = time;

  matchedKeys.forEach((key) => {
    const config = CONFIG_LIST.find(item => item.key === key[0])!;

    result = result.replace(key, () => {
      let value = Math.floor(currentTime / config.base);

      currentTime -= config.base * value;

      if (key.startsWith('S')) {
        value = Math.trunc(value / 10 ** (3 - key.length));
      }

      return String(value).padStart(key.length, '0');
    });
  });

  return result;
};

export const sanitizeTime = (time?: number) =>
  isNumber(time) ? Math.max(0, Math.floor(time)) : 0;
