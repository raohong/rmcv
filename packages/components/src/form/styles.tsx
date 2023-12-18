import { StyledComponent, styled } from '@rmc-vant/system';
import RCForm, { FormInstance, FormProps } from 'rc-field-form';
import React from 'react';
import { baseStyleReset } from '../_styles';
import Cell from '../cell';
import {
  FormItemName,
  FormName,
  getFormItemSlotClassNames,
  getFormSlotClassNames,
} from './classNames';
import { FormComponentState, FormItemComponentState } from './interface';

export const FormRoot = styled<typeof RCForm, FormComponentState>(RCForm, {
  name: FormName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getFormSlotClassNames(componentState).root,
})(baseStyleReset) as StyledComponent<
  FormProps<any> & {
    componentState: FormComponentState;
    ref?: React.Ref<FormInstance<any>>;
  }
>;

export const FormItemRoot = styled<typeof Cell, FormItemComponentState>(Cell, {
  name: FormItemName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getFormItemSlotClassNames(componentState).root,
})();

export const FormItemLabel = styled<'label', FormItemComponentState>('label', {
  name: FormItemName,
  slot: 'label',
  overridesResolver: ({ componentState }) =>
    getFormItemSlotClassNames(componentState).label,
})(({ componentState: { required, labelAlign }, theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  textAlign: labelAlign,
  justifyContent: labelAlign === 'right' ? 'end' : labelAlign,
  gap: theme.space.padding.sm,
  color: theme.palette.gray700,

  ...(required && {
    '&::before': {
      content: '"*"',
      color: theme.palette.red,
      lineHeight: 1,
      fontFamily: 'SimSun, sans-serif',
    },
  }),
}));

export const FormItemControl = styled<'div', FormItemComponentState>('div', {
  name: FormItemName,
  slot: 'control',
  overridesResolver: ({ componentState }) =>
    getFormItemSlotClassNames(componentState).control,
})(({ theme }) => ({
  boxSizing: 'border-box',
  textAlign: 'left',
  flex: 1,
  color: theme.palette.text.primary,
}));

export const FormItemHelp = styled<'div', FormItemComponentState>('div', {
  name: FormItemName,
  slot: 'help',
  overridesResolver: ({ componentState }) =>
    getFormItemSlotClassNames(componentState).control,
})({
  boxSizing: 'border-box',
  textAlign: 'left',
});

export const FormItemHelpError = styled<'div', FormItemComponentState>('div', {
  name: FormItemName,
  slot: 'helpError',
  overridesResolver: ({ componentState }) =>
    getFormItemSlotClassNames(componentState).helpError,
})(({ componentState: { status }, theme }) => ({
  boxSizing: 'border-box',
  ...(status === 'error' && {
    fontSize: 12,
    color: theme.palette.danger,
  }),
}));
