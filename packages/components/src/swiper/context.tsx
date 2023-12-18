import { createContext } from 'react';
import { SwiperComponentState } from './interface';

export const SwiperContext = createContext<{
  itemClassName?: string;
  componentState: SwiperComponentState;
}>({
  componentState: { vertical: false },
});
