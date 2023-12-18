import { generateComponentClassNameUtility } from '@rmc-vant/system';
import type { SwitchComponentState, SwitchNSlot, SwitchSlot } from './interface';

export const SwitchName = 'Switch';

export const {
  switchClassNames,
  composeSwitchSlotClassNames,
  getSwitchSlotClassNames,
} = generateComponentClassNameUtility<
  typeof SwitchName,
  SwitchComponentState,
  SwitchSlot,
  SwitchNSlot
>(
  SwitchName,
  {
    root: true,
    node: true,
    checked: true,
    disabled: true,
    loadingIcon: true,
  },
  ({ checked, disabled }) => ({
    root: ['root', checked && 'checked', disabled && 'disabled'],
    node: ['node'],
    loadingIcon: ['loadingIcon'],
  }),
);
