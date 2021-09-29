import { useEffect, useLayoutEffect } from 'react';
import { isBrowser } from '../_utils';

const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
