import type { SystemStyleInterpolation, SystemStyleObject, SystemStyledComponentProps } from '@rmc-vant/system';
import type React from 'react';
import type { CSSProperties } from 'react';
import type {
  ComponentStyleOverrides,
  IntrinsicElementsKeys,
  JSXIntrinsicElementProps,
} from '../types';

export type TouchableBaseProps = {
  component?: IntrinsicElementsKeys;
  disabled?: boolean;
  activeClassName?: string;
  delay?: number;
  style?: React.CSSProperties;
  className?: string;
  activeStyle?: SystemStyleObject | SystemStyleInterpolation;
  touchAction?: CSSProperties['touchAction'];
};

export type TouchablePropsFactory<C extends IntrinsicElementsKeys = 'button'> =
  JSXIntrinsicElementProps<TouchableBaseProps, C> & SystemStyledComponentProps;

export type TouchableProps = JSXIntrinsicElementProps<TouchableBaseProps, 'button'> &
  SystemStyledComponentProps;

export type TouchableComponentState = {
  active: boolean;
  disabled: boolean;
  touchAction?: CSSProperties['touchAction'];
};

export type TouchableStyleOverrides =
  ComponentStyleOverrides<TouchableComponentState>;
