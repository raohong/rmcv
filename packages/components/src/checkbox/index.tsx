import _Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';

export type {
  CheckboxGroupDirection,
  CheckboxGroupProps,
  CheckboxLabelPosition,
  CheckboxProps,
  CheckboxShape,
  CheckboxValue,
} from './interface';

type CheckboxType = typeof _Checkbox;

export interface CheckboxInterface extends CheckboxType {
  Group: typeof CheckboxGroup;
}

const Checkbox = _Checkbox as CheckboxInterface;
Checkbox.Group = CheckboxGroup;

export { checkboxClassNames, checkboxGroupClassNames } from './classNames';

export default Checkbox;
