import { useEffect, useLayoutEffect } from 'react';
import { isBrowser } from '@rmc-vant/utils';

const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
