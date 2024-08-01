import { generateComponentClassNameUtility } from '@rmc-vant/system';
import type {
  NumberKeyboardComponentState,
  NumberKeyboardNSlot,
  NumberKeyboardSlot,
} from './interface';

export const NumberKeyboardName = 'NumberKeyboard';

export const {
  numberKeyboardClassNames,
  composeNumberKeyboardSlotClassNames,
  getNumberKeyboardSlotClassNames,
} = generateComponentClassNameUtility<
  typeof NumberKeyboardName,
  NumberKeyboardComponentState,
  NumberKeyboardSlot,
  NumberKeyboardNSlot
>(
  NumberKeyboardName,
  {
    root: true,
    header: true,
    title: true,
    closeButton: true,
    confirmButton: true,
    key: true,
    collapseButton: true,
    loadingIcon: true,
    deleteButton: true,
    collapseIcon: true,
    deleteIcon: true,
    custom: true,
    open: true,
    sidebar: true,
  },
  ({ open, theme }) => ({
    root: ['root', open && 'open', theme === 'custom' && 'custom'],
    header: ['header'],
    title: ['title'],
    closeButton: ['closeButton'],
    confirmButton: ['confirmButton'],
    key: ['key'],
    collapseButton: ['collapseButton'],
    loadingIcon: ['loadingIcon'],
    deleteButton: ['deleteButton'],
    collapseIcon: ['collapseIcon'],
    deleteIcon: ['deleteIcon'],
    sidebar: ['sidebar'],
  }),
);
