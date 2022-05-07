import { createContext, useContext } from 'react';
import type { RadioContextState } from './interface';

const RadioContext = createContext<RadioContextState | null>(null);

export default RadioContext;

export const useRadioContext = () => useContext(RadioContext);
