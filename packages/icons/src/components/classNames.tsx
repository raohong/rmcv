import { generateComponentClassNameUtility } from '@rmc-vant/system';

export const IconName = 'Icon';

export const { composeIconSlotClassNames, iconClassNames, getIconSlotClassNames }
  = generateComponentClassNameUtility(IconName, { root: true }, () => ({
    root: ['root'],
  }));
