import { FormProps as RCFormProps, FormInstance } from 'rc-field-form';
import type { NamePath as RCNamePath } from 'rc-field-form/es/interface';
import type { FieldProps } from 'rc-field-form/es/Field';
import React from 'react';

export type NamePath = RCNamePath;

type FormItemCommonProps = {
  labelAlign?: 'left' | 'right' | 'center';
  labelWidth?: string | number;
};

export type FormProps<Store = any> = FormItemCommonProps & {
  disabled?: boolean;
  requiredMark?: boolean;
} & RCFormProps<Store>;

export type FormItemProps = FormItemCommonProps & {
  label?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  required?: boolean;
  help?: React.ReactNode;
  disabled?: boolean;
  children?: React.ReactNode | ((inst: FormInstance) => React.ReactNode);
  extra?: React.ReactNode;
  htmlFor?: string;
  noStyle?: boolean;
} & Omit<FieldProps, 'children'>;

export type FormContextState = FormItemCommonProps & {
  name?: string;
  formInstance?: FormInstance<any>;
  disabled?: boolean;
  requiredMark?: boolean;
};

export type FormDependencyProps<Values = Record<string, any>> = {
  name?: NamePath[];
  children?: (values: Values) => React.ReactNode;
};
