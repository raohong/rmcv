import { generateComponentClassNameUtility } from '@rmc-vant/system';

export const TouchableName = 'Touchable';

export const { touchableClassNames } = generateComponentClassNameUtility(
  TouchableName,
  {
    root: true,
  },
);
