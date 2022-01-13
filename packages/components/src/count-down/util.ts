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
  };
};

const formatMap: Record<string, keyof CountDownTimeData> = {
  D: 'days',
  H: 'hours',
  m: 'minutes',
  s: 'seconds',
};

export const formatCountDownTimeData = (data: CountDownTimeData, format: string) => {
  return format.replace(/[DHms]{1,2}|S{1,3}/g, (matched) => {
    if (matched === undefined) {
      return '';
    }

    if (/^S+$/.test(matched)) {
      return String(data.milliseconds)
        .slice(0, matched.length)
        .padStart(matched.length, '0');
    }

    const key = formatMap[matched[0]];
    const value = String(data[key]);

    return matched.length === 2 ? value.padStart(2, '0') : value;
  });
};

export const santilizeTime = (time?: number) =>
  (isNumber(time) ? Math.max(0, Math.floor(time)) : 0) * 1000;
