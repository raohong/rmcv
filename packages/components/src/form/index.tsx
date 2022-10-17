import { FormProvider, List, useForm, useWatch } from 'rc-field-form';
import InternalForm from './Form';
import InternalFormItem from './Item';
import './style';
import useFormInstance from './useFormInstance';

export type {
  Rule,
  RuleError,
  RuleObject,
  RuleRender,
  RuleType,
  NamePath,
  ValidatorRule,
  StoreValue,
  ValidateMessages,
  FormInstance,
} from 'rc-field-form/es/interface';

export type { FormItemProps, FormProps } from './interface';

type InternalFormType = typeof InternalForm;

interface FormType extends InternalFormType {
  List: typeof List;
  useForm: typeof useForm;
  useWatch: typeof useWatch;
  Provider: typeof FormProvider;
  Item: typeof InternalFormItem;
  useFormInstance: typeof useFormInstance;
}

const Form = InternalForm as FormType;
Form.List = List;
Form.useForm = useForm;
Form.useWatch = useWatch;
Form.Provider = FormProvider;
Form.Item = InternalFormItem;
Form.useFormInstance = useFormInstance;

export { useForm, useWatch, FormProvider, useFormInstance };

export const FormItem = InternalFormItem;
export const FormList = List;

export default Form;
