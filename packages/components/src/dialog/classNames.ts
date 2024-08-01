import { generateComponentClassNameUtility } from '@rmc-vant/system';
import type { DialogComponentState, DialogNSlot, DialogSlot } from './interface';

export const DialogName = 'Dialog';

export const {
  dialogClassNames,
  composeDialogSlotClassNames,
  getDialogSlotClassNames,
} = generateComponentClassNameUtility<
  typeof DialogName,
  DialogComponentState,
  DialogSlot,
  DialogNSlot
>(
  DialogName,
  {
    root: true,
    title: true,
    footer: true,
    footerBorder: true,
    cancelButton: true,
    confirmButton: true,
    message: true,
    themeRoundButton: true,
    titleIsIsolated: true,
  },
  ({ theme, footerBorder, titleIsIsolated }) => ({
    root: ['root', theme === 'round-button' && 'themeRoundButton'],
    title: ['title', titleIsIsolated && 'titleIsIsolated'],
    footer: ['footer', footerBorder && 'footerBorder'],
    cancelButton: ['cancelButton'],
    confirmButton: ['confirmButton'],
    message: ['message'],
  }),
);
