import { generateComponentClassNameUtility } from '@rmc-vant/system';
import type {
  FormComponentState,
  FormItemComponentState,
  FormItemNSlot,
  FormItemSlot,
} from './interface';

export const FormName = 'Form';

export const FormItemName = 'FormItem';

export const { formClassNames, composeFormSlotClassNames, getFormSlotClassNames } =
  generateComponentClassNameUtility<
    typeof FormName,
    FormComponentState,
    'root',
    'root'
  >(FormName, { root: true }, () => ({
    root: ['root'],
  }));

export const {
  formItemClassNames,
  composeFormItemSlotClassNames,
  getFormItemSlotClassNames,
} = generateComponentClassNameUtility<
  typeof FormItemName,
  FormItemComponentState,
  FormItemSlot,
  FormItemNSlot
>(
  FormItemName,
  {
    root: true,
    required: true,
    help: true,
    label: true,
    control: true,
    error: true,
    controlInput: true,
    helpError: true,
  },
  ({ required, status }) => ({
    root: ['root', required && 'required', status === 'error' && 'error'],
    help: ['help'],
    control: ['control'],
    label: ['label'],
    controlInput: ['controlInput'],
    helpError: ['helpError'],
  }),
);
