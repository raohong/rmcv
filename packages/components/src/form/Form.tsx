import { useDeepMemorizedMemo } from '@rmc-vant/hooks';
import { FormInstance, useForm } from 'rc-field-form';
import React, { useMemo } from 'react';
import { FormContext } from './context';
import { FormComponentState, FormProps } from './interface';
import { FormRoot } from './styles';

const Form = <Store extends any = unknown>(
  {
    name,
    children,
    form,
    labelWidth = '6.5em',
    disabled = false,
    requiredMark = true,
    labelAlign = 'left',
    ...props
  }: FormProps<Store>,
  ref: React.Ref<FormInstance<Store>>,
) => {
  const [formInstance] = useForm<Store>(form);

  const ctxValue = useDeepMemorizedMemo(
    () => ({
      labelAlign,
      requiredMark,
      name,
      labelWidth,
      formInstance,
      disabled,
    }),
    [labelAlign, requiredMark, name, formInstance, disabled],
  );
  const componentState: FormComponentState = useMemo(
    () => ({ disabled }),
    [disabled],
  );

  return (
    <FormContext.Provider value={ctxValue}>
      <FormRoot
        componentState={componentState}
        ref={ref}
        name={name}
        form={formInstance}
        {...props}
      >
        {children}
      </FormRoot>
    </FormContext.Provider>
  );
};

export default React.forwardRef(Form);
