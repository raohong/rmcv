import { isArray, isNumber } from '@rmc-vant/utils';
import { clamp } from '../_utils';

export const sanitize = (number?: number) => (isNumber(number) ? number : 0);

export const formatStep = (step: number, min: number, max: number) => {
  return (max - min) % step === 0 && step > 0 ? step : 1;
};

export const getOffset = (val: number, min: number, max: number) =>
  `${((val - min) / (max - min)) * 100}%`;

export const normalizeValue = (
  value: number | [number, number],
  range: boolean,
): [number, number] => {
  if (range) {
    return isArray(value) ? value : [value, value];
  }

  return [isArray(value) ? value[0] : value, 0];
};

const getOffsetPropKey = (vertical?: boolean, reverse?: boolean) => {
  if (vertical) {
    return reverse ? 'bottom' : 'top';
  }

  return reverse ? 'right' : 'left';
};

export const getPropKeys = (vertical?: boolean, reverse?: boolean) => {
  const sizePropKey = vertical ? 'width' : 'height';
  const offsetPropKey = getOffsetPropKey(vertical, reverse);
  const valuePropKey = vertical ? 'height' : 'width';

  return { sizePropKey, offsetPropKey, valuePropKey } as const;
};

export const calculateNextValueByOffset = (
  offset: number,
  {
    last,
    distance,
    min,
    step,
    stepOffset,
    max,
  }: {
    last?: boolean;
    distance: number;
    step: number;
    min: number;
    stepOffset: number;
    max: number;
  },
) => {
  let currentOffset = offset;

  if (last) {
    currentOffset = clamp(
      Math.round(currentOffset / stepOffset) * stepOffset,
      0,
      distance,
    );
  } else {
    currentOffset -= currentOffset % stepOffset;
  }

  return clamp(Math.round(currentOffset / stepOffset) * step + min, min, max);
};
