import { generateComponentClassNameUtility } from '@rmc-vant/system';

export const SafeAreaName = 'SafeArea';

export const {
  safeAreaClassNames,
  composeSafeAreaSlotClassNames,
  getSafeAreaSlotClassNames,
} = generateComponentClassNameUtility(SafeAreaName, {
  root: true,
});
