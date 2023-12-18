import { generateComponentClassNameUtility } from '@rmc-vant/system';

export const OverlayName = 'Overlay';

export const { overlayClassNames } = generateComponentClassNameUtility(OverlayName, {
  root: true,
});
