import { generateComponentClassNameUtility } from '@rmc-vant/system';
import { camelCase } from '@rmc-vant/utils';
import type {
  CellComponentState,
  CellGroupComponentState,
  CellGroupNSlot,
  CellGroupSlot,
  CellNSlot,
  CellSlot,
} from './interface';

export const CellName = 'Cell';
export const CellGroupName = 'CellGroup';

export const { cellClassNames, getCellSlotClassNames, composeCellSlotClassNames }
  = generateComponentClassNameUtility<
    typeof CellName,
    CellComponentState,
    CellSlot,
    CellNSlot
  >(
    CellName,
    {
      root: true,
      arrow: true,
      icon: true,
      label: true,
      title: true,
      value: true,
      rightIcon: true,
      sizeLarge: true,
      sizeNormal: true,
    },
    ({ size }) => ({
      root: ['root', camelCase(`size-${size}`)],
      icon: ['icon'],
      title: ['title'],
      value: ['value'],
      label: ['label'],
      rightIcon: ['rightIcon'],
      arrow: ['arrow'],
    }),
  );

export const {
  getCellGroupSlotClassNames,
  composeCellGroupSlotClassNames,
  cellGroupClassNames,
} = generateComponentClassNameUtility<
  typeof CellGroupName,
  CellGroupComponentState,
  CellGroupSlot,
  CellGroupNSlot
>(
  CellGroupName,
  {
    root: true,
    title: true,
    content: true,
    border: true,
    inset: true,
  },
  ({ border, inset }) => ({
    root: ['root', border && 'border', inset && 'inset'],
    title: ['title'],
    content: ['content'],
  }),
);
