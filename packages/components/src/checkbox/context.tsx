import { createContext, useContext } from 'react';
import type { CheckboxContextState } from './interface';

const CheckboxContext = createContext<CheckboxContextState | null>(null);

export default CheckboxContext;

export const useCheckboxContext = () => useContext(CheckboxContext);
