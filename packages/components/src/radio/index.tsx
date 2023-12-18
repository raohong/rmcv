import _Radio from './Radio';
import RadioGroup from './RadioGroup';

export type {
  RadioGroupDirection,
  RadioGroupProps,
  RadioLabelPosition,
  RadioProps,
  RadioShape,
  RadioValue,
  RadioThemeConfig,
  RadioGroupThemeConfig,
  RadioOption,
} from './interface';

type RadioType = typeof _Radio;

export interface RadioInterface extends RadioType {
  Group: typeof RadioGroup;
}

const Radio = _Radio as RadioInterface;

Radio.Group = RadioGroup;

export default Radio;
