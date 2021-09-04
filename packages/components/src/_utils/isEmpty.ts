import { isBoolean, isNil } from '@rmc-vant/utils';

export const isEmpty = (val: any) => val === '' || isNil(val) || isBoolean(val);
