import { createContext } from 'react';

export type IContext = {
  setDemoUrl: (url: string | null) => void;
};

const DemoContext = createContext<IContext | null>(null);

export default DemoContext;
