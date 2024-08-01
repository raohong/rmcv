import { createContext, useContext } from 'react';
import type { CollapseContextState } from './interface';

export const CollapseContext = createContext<CollapseContextState>({});

export const useCollapseContext = () => useContext(CollapseContext);
