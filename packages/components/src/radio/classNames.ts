import { generateComponentClassNameUtility } from '@rmc-vant/system';
import type {
  RadioComponentState,
  RadioGroupComponentState,
  RadioGroupNSlot,
  RadioGroupSlot,
  RadioNSlot,
  RadioSlot,
} from './interface';

export const RadioName = 'Radio';
export const RadioGroupName = 'RadioGroup';

export const {
  radioClassNames,
  composeRadioSlotClassNames,
  getRadioSlotClassNames,
} = generateComponentClassNameUtility<
  typeof RadioName,
  RadioComponentState,
  RadioSlot,
  RadioNSlot
>(
  RadioName,
  {
    root: true,
    label: true,
    inner: true,
    icon: true,
    checked: true,
    disabled: true,
  },
  ({ checked, disabled }) => ({
    root: ['root', checked && 'checked', disabled && 'disabled'],
    inner: ['inner'],
    icon: ['icon'],
    label: ['label'],
  }),
);

export const {
  radioGroupClassNames,
  composeRadioGroupSlotClassNames,
  getRadioGroupSlotClassNames,
} = generateComponentClassNameUtility<
  typeof RadioGroupName,
  RadioGroupComponentState,
  RadioGroupSlot,
  RadioGroupNSlot
>(
  RadioGroupName,
  {
    root: true,
    disabled: true,
    vertical: true,
    horizontal: true,
  },
  ({ disabled, direction }) => ({
    root: ['root', disabled && 'disabled', direction],
  }),
);
