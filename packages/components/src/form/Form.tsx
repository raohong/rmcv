import React from 'react';
import RCForm, { FormInstance, useForm } from 'rc-field-form';
import { useDeepMemo } from '@rmc-vant/hooks';
import classNames from 'classnames';
import { FormProps } from './interface';
import { FormContext } from './context';
import { useConfigContext } from '../config-provider';

const Form = <Store extends any>(
  {
    labelWidth,
    className,
    name,
    children,
    form,
    disabled,
    requiredMark = true,
    labelAlign = 'left',
    ...props
  }: FormProps<Store>,
  ref: React.Ref<FormInstance<Store>>,
) => {
  const { getPrefixCls } = useConfigContext();
  const [formInstance] = useForm(form);

  const ctxValue = useDeepMemo(
    () => ({
      labelAlign,
      requiredMark,
      name,
      labelWidth,
      formInstance,
      disabled,
    }),
    [labelAlign, labelWidth, requiredMark, name, formInstance, disabled],
  );
  const cls = getPrefixCls('form');

  return (
    <FormContext.Provider value={ctxValue}>
      <RCForm
        ref={ref}
        className={classNames(cls, className)}
        name={name}
        form={formInstance}
        {...props}
      >
        {children}
      </RCForm>
    </FormContext.Provider>
  );
};

export default React.forwardRef(Form);
