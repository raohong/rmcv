import { createContext } from 'react';
import type { SwiperComponentState } from './interface';

export const SwiperContext = createContext<{
  itemClassName?: string;
  componentState: SwiperComponentState;
}>({
  componentState: { vertical: false },
});
