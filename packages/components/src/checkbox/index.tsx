import './style';

import _CheckboxGroup from './CheckboxGroup';
import _Checkbox from './Checkbox';

export type {
  CheckboxGroupDirection,
  CheckboxGroupProps,
  CheckboxLabelPosition,
  CheckboxProps,
  CheckboxShape,
  CheckboxValue,
} from './interface';

export const Checkbox = _Checkbox;
export const CheckboxGroup = _CheckboxGroup;
