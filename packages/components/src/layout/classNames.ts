import { generateComponentClassNameUtility } from '@rmc-vant/system';

export const RowName = 'Row';
export const ColName = 'Col';

export const { rowClassNames, getRowSlotClassNames } =
  generateComponentClassNameUtility(RowName, {
    root: true,
  });

export const { colClassNames, getColSlotClassNames } =
  generateComponentClassNameUtility(ColName, {
    root: true,
  });
