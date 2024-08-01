import type { SystemStyledComponentProps } from '@rmc-vant/system';
import type { FormInstance, FormProps as RCFormProps } from 'rc-field-form';
import type { FieldProps } from 'rc-field-form/es/Field';
import type { NamePath as RCNamePath } from 'rc-field-form/es/interface';
import type React from 'react';
import type { ComponentStyleOverrides, ComponentThemeConfig } from '../types';
import type { FormItemName, FormName } from './classNames';

export type NamePath = RCNamePath;

type FormItemCommonProps = {
  labelAlign?: 'left' | 'right' | 'center';
  labelWidth?: string | number;
  requiredMark?: boolean;
};

export type FormProps<Store = any> = FormItemCommonProps & {
  disabled?: boolean;
} & RCFormProps<Store> &
SystemStyledComponentProps;

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
} & Omit<FieldProps, 'children'> &
SystemStyledComponentProps;

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

export type FormComponentState = {
  disabled: boolean;
};

export type FormItemComponentState = {
  required: boolean;
  labelAlign: 'left' | 'right' | 'center';
  status?: 'error';
};

export type FormStyleOverrides = ComponentStyleOverrides<FormComponentState>;
export type FormThemeConfig = ComponentThemeConfig<
  typeof FormName,
  FormProps,
  FormStyleOverrides
>;

export type FormItemNSlot =
  | 'root'
  | 'help'
  | 'label'
  | 'control'
  | 'controlInput'
  | 'helpError';

export type FormItemSlot = FormItemNSlot | 'required' | 'error';

export type FormItemStyleOverrides = ComponentStyleOverrides<
  FormItemComponentState,
  FormItemSlot
>;
export type FormItemThemeConfig = ComponentThemeConfig<
  typeof FormItemName,
  FormItemProps,
  FormStyleOverrides
>;
