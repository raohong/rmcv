import { useFormContext } from './context';

const useFormInstance = () => {
  return useFormContext()?.formInstance;
};

export default useFormInstance;
