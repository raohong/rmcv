import { useEffect, useLayoutEffect } from 'react';
import { isBrowser } from '../_utils';

export const useIsomorphicLayoutEffect = isBrowser
  ? useLayoutEffect
  : useEffect;
