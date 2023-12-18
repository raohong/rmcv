import { generateComponentClassNameUtility } from '@rmc-vant/system';
import { InputComponentState, InputNSlot, InputSlot } from './interface';

export const InputName = 'Input';

export const TextareaName = 'Textarea';

export const {
  inputClassNames,
  getInputSlotClassNames,
  composeInputSlotClassNames,
} = generateComponentClassNameUtility<
  typeof InputName,
  InputComponentState,
  InputSlot,
  InputNSlot
>(
  InputName,
  {
    root: true,
    counter: true,
    input: true,
    addonAfter: true,
    addonBefore: true,
    clearIcon: true,
    suffix: true,
    readonly: true,
    disabled: true,
    sizeLarge: true,
    border: true,
    focused: true,
    prefix: true,
  },
  ({ readonly, disabled, border, focused }) => ({
    root: ['root'],
    suffix: ['suffix'],
    clearIcon: ['clearIcon'],
    addonAfter: ['addonAfter'],
    addonBefore: ['addonBefore'],
    counter: ['counter'],
    input: [
      'input',
      readonly && 'readonly',
      disabled && 'disabled',
      border && 'border',
      focused && 'focused',
    ],
    prefix: ['prefix'],
  }),
);

export const textareaClassNames = {
  ...inputClassNames,
};
