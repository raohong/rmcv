import { isFunction } from './is';

const setRef = <T extends any = any>(
  ref:
    | ((inst: T | null) => void)
    | React.MutableRefObject<T | null | undefined>
    | null
    | undefined,
  value: T | null,
) => {
  if (isFunction(ref)) {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
};

export default setRef;
