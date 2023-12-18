import { isNumber } from './is';

export const toPX = (val: string | number) => {
  return isNumber(val) ? `${val}px` : val;
};
