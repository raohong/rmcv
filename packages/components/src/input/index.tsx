import InternalInput from './Input';
import InternalTextarea from './Textarea';

export { inputClassNames, textareaClassNames } from './classNames';
export type { InputThemeConfig, TextareaThemeConfig } from './interface';

type InputType = typeof InternalInput;

export interface InputInterface extends InputType {
  Textarea: typeof InternalTextarea;
}

const Input = InternalInput as InputInterface;

Input.Textarea = InternalTextarea;

export default Input;
