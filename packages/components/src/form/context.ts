import { createContext, useContext } from 'react';
import type { FormContextState } from './interface';

export const FormContext = createContext<FormContextState>({});

export const useFormContext = () => useContext(FormContext);
