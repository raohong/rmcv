import { createContext, useContext } from 'react';
import { RowContextState } from './interface';

const RowContext = createContext<RowContextState | null>(null);

export default RowContext;

export const useRowContext = () => useContext(RowContext);
