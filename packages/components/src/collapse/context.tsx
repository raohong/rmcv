import { createContext, useContext } from 'react';
import { CollapseContextState } from './interface';

export const CollapseContext = createContext<CollapseContextState>({});

export const useCollapseContext = () => useContext(CollapseContext);
