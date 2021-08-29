import { isBoolean, isNil } from 'lodash';

export const isEmpty = (val: any) => val === '' || isNil(val) || isBoolean(val);
