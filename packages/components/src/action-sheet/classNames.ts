import { generateComponentClassNameUtility } from '@rmc-vant/system';
import {
  ActionSheetComponentState,
  ActionSheetNSlot,
  ActionSheetSlot,
} from './interface';

export const ActionSheetName = 'ActionSheet';

export const {
  actionSheetClassNames,
  composeActionSheetSlotClassNames,
  getActionSheetSlotClassNames,
  getActionSheetClassName,
} = generateComponentClassNameUtility<
  typeof ActionSheetName,
  ActionSheetComponentState,
  ActionSheetSlot,
  ActionSheetNSlot
>(
  ActionSheetName,
  {
    root: true,
    title: true,
    description: true,
    content: true,
    cancelButton: true,
    item: true,
    itemSubname: true,
    loadingIcon: true,
    closeIcon: true,
    itemDisabled: true,
    itemLoading: true,
  },
  () => ({
    root: ['root'],
    title: ['title'],
    closeIcon: ['closeIcon'],
    description: ['description'],
    content: ['content'],
    cancelButton: ['cancelButton'],
    item: ['item'],
    itemSubname: ['itemSubname'],
    loadingIcon: ['loadingIcon'],
  }),
);
