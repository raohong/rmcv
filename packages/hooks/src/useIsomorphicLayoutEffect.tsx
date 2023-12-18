import { isBrowser } from '@rmc-vant/utils';
import { useEffect, useLayoutEffect } from 'react';

export const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;
