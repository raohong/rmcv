import { generateComponentClassNameUtility } from '@rmc-vant/system';
import { camelCase } from '@rmc-vant/utils';
import type { ToastComponentState, ToastNSlot, ToastSlot } from './interface';

export const ToastName = 'Toast';

export const {
  toastClassNames,
  composeToastSlotClassNames,
  getToastSlotClassNames,
} = generateComponentClassNameUtility<
  typeof ToastName,
  ToastComponentState,
  ToastSlot,
  ToastNSlot
>(
  ToastName,
  {
    root: true,
    message: true,
    positionBottom: true,
    positionCenter: true,
    positionTop: true,
    loading: true,
    success: true,
    fail: true,
    normal: true,
    icon: true,
    loadingIcon: true,
  },
  ({ position, type }) => ({
    root: ['root', type, camelCase(`position-${position}`)],
    message: ['message'],
    icon: ['icon'],
    loadingIcon: ['loadingIcon'],
  }),
);
