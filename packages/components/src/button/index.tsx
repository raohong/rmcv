import _Button from './Button';
import type { WithButton } from './interface';

export { buttonClassNames } from './classNames';
export type {
  ButtonProps,
  ButtonShape,
  ButtonSize,
  ButtonThemeConfig,
  ButtonType,
  ButtonVariant,
} from './interface';
export const Button = _Button as WithButton;
