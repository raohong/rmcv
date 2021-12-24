import { IntrinsicElementsKeys, JSXIntrinsicElementProps } from '../types';

type TouableBaseProps = {
  component?: IntrinsicElementsKeys;
  touchDisabled?: boolean;
  activeClassName?: string;
  delay?: number;
};

export type TouchableProps = JSXIntrinsicElementProps<TouableBaseProps>;
