import { generateComponentClassNameUtility } from '@rmc-vant/system';
import type {
  PasswordInputComponentState,
  PasswordInputNSlot,
  PasswordInputSlot,
} from './interface';

export const PasswordInputName = 'PasswordInput';

export const {
  passwordInputClassNames,
  composePasswordInputSlotClassNames,
  getPasswordInputSlotClassNames,
} = generateComponentClassNameUtility<
  typeof PasswordInputName,
  PasswordInputComponentState,
  PasswordInputSlot,
  PasswordInputNSlot
>(
  PasswordInputName,
  {
    root: true,
    info: true,
    item: true,
    mask: true,
    cursor: true,
    errorInfo: true,
    focused: true,
    inner: true,
    input: true,
  },
  ({ focused, errorInfo }) => ({
    root: ['root', focused && 'focused'],
    info: ['info', errorInfo && 'errorInfo'],
    item: ['item'],
    mask: ['mask'],
    cursor: ['cursor'],
    input: ['input'],
    inner: ['inner'],
  }),
);
