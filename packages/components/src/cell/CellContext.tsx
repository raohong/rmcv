import { createContext, useContext } from 'react';
import { CellContextState } from './interface';

const CellContext = createContext<CellContextState | null>(null);

export const useCellContext = () => useContext(CellContext);
export default CellContext;
