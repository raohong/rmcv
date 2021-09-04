import { isBoolean, isNil } from './is';

export const isEmpty = (val: any) => val === '' || isNil(val) || isBoolean(val);
