import { isBrowser } from '@rmc-vant/utils';
import { useEffect, useLayoutEffect } from 'react';

const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
