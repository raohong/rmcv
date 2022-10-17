import type React from 'react';
import { IntrinsicElementsKeys } from '../types';

type TouchableBaseProps = {
  component?: IntrinsicElementsKeys;
  touchDisabled?: boolean;
  activeClassName?: string;
  delay?: number;
  style?: React.CSSProperties;
  className?: string;
};

export type TouchableProps = TouchableBaseProps;
