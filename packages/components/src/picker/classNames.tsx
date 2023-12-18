import { generateComponentClassNameUtility } from '@rmc-vant/system';
import { PickerComponentState, PickerNSlot, PickerSlot } from './interface';

export const PickerName = 'Picker';

export const {
  getPickerClassName,
  getPickerSlotClassNames,
  pickerClassNames,
  composePickerSlotClassNames,
} = generateComponentClassNameUtility<
  typeof PickerName,
  PickerComponentState,
  PickerSlot,
  PickerNSlot
>(
  PickerName,
  {
    root: true,
    popup: true,
    positionBottom: true,
    toolbar: true,
    confirmButton: true,
    cancelButton: true,
    loading: true,
    mask: true,
    indicator: true,
    columnContainer: true,
    columnRoot: true,
    option: true,
    optionDisabled: true,
    title: true,
  },
  ({ toolbarPosition }) => ({
    popup: ['popup'],
    loading: ['loading'],
    root: ['root', toolbarPosition === 'bottom' && 'positionBottom'],
    toolbar: ['toolbar'],
    confirmButton: ['confirmButton'],
    cancelButton: ['cancelButton'],
    loadingIcon: ['loadingIcon'],
    mask: ['mask'],
    columnContainer: ['columnContainer'],
    indicator: ['indicator'],
    option: ['option'],
    columnRoot: ['columnRoot'],
    title: ['title'],
  }),
);
