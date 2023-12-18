import Button from './Button';
import type { WithButton } from './interface';

export type {
  ButtonProps,
  ButtonSize,
  ButtonType,
  ButtonShape,
  ButtonVariant,
  ButtonThemeConfig,
} from './interface';
export default Button as WithButton;

export { buttonClassNames } from './classNames';
