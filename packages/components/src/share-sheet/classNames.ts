import { generateComponentClassNameUtility } from '@rmc-vant/system';
import type {
  ShareSheetComponentState,
  ShareSheetNSlot,
  ShareSheetSlot,
} from './interface';

export const ShareSheetName = 'ShareSheet';

export const {
  shareSheetClassNames,
  composeShareSheetSlotClassNames,
  getShareSheetSlotClassNames,
} = generateComponentClassNameUtility<
  typeof ShareSheetName,
  ShareSheetComponentState,
  ShareSheetSlot,
  ShareSheetNSlot
>(
  ShareSheetName,
  {
    root: true,
    header: true,
    title: true,
    cancelButton: true,
    option: true,
    optionDescription: true,
    optionName: true,
    description: true,
    optionIcon: true,
    options: true,
  },
  () => ({
    root: ['root'],
    options: ['options'],
    header: ['header'],
    title: ['title'],
    cancelButton: ['cancelButton'],
    option: ['option'],
    optionDescription: ['optionDescription'],
    optionName: ['optionName'],
    description: ['description'],
    optionIcon: ['optionIcon'],
  }),
);
