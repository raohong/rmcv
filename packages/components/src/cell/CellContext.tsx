import { createContext, useContext } from 'react';
import { CellContextState } from './interface';

export const CellContext = createContext<CellContextState | null>(null);

export const useCellContext = () => useContext(CellContext);
