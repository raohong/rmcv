import { generateComponentClassNameUtility } from '@rmc-vant/system';
import type {
  CheckboxComponentState,
  CheckboxGroupComponentState,
  CheckboxGroupNSlot,
  CheckboxGroupSlot,
  CheckboxNSlot,
  CheckboxSlot,
} from './interface';

export const CheckboxName = 'Checkbox';
export const CheckboxGroupName = 'CheckboxGroup';

export const {
  checkboxClassNames,
  composeCheckboxSlotClassNames,
  getCheckboxSlotClassNames,
} = generateComponentClassNameUtility<
  typeof CheckboxName,
  CheckboxComponentState,
  CheckboxSlot,
  CheckboxNSlot
>(
  CheckboxName,
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
  checkboxGroupClassNames,
  composeCheckboxGroupSlotClassNames,
  getCheckboxGroupSlotClassNames,
} = generateComponentClassNameUtility<
  typeof CheckboxGroupName,
  CheckboxGroupComponentState,
  CheckboxGroupSlot,
  CheckboxGroupNSlot
>(
  CheckboxGroupName,
  {
    root: true,
    disabled: true,
  },
  ({ disabled }) => ({
    root: ['root', disabled && 'disabled'],
  }),
);
