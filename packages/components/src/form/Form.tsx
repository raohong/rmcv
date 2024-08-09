'use-client';

import { useDeepMemorizedMemo } from '@rmc-vant/hooks';
import type { FormInstance } from 'rc-field-form';
import { useForm } from 'rc-field-form';
import React, { useMemo } from 'react';
import { useThemeProps } from '../config-provider';
import { FormName } from './classNames';
import { FormContext } from './context';
import type { FormComponentState, FormProps } from './interface';
import { FormRoot } from './styles';

const Form = <Store,>(
  _props: FormProps<Store>,
  ref: React.Ref<FormInstance<Store>>,
) => {
  const {
    name,
    children,
    form,
    labelWidth = '6.2em',
    disabled = false,
    requiredMark = true,
    labelAlign = 'left',
    ...props
  } = useThemeProps(FormName, _props);
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
