import { createContext, useContext } from 'react';
import { IndexBarContextState } from './interface';

export const IndexBarContext = createContext<IndexBarContextState | null>(null);

export const useIndexBarContext = () => useContext(IndexBarContext);
