import { SpringValue } from '@react-spring/web';
import { useCallback, useEffect, useRef } from 'react';
import runDecayAnimation, { DecayAnimationOptions } from './animation';

const useDecayAnimation = () => {
  const unmountedRef = useRef(false);
  const canceller = useRef<(() => void) | null>(null);

  const cancelAnimation = useCallback(() => {
    if (canceller.current) {
      canceller.current();
      canceller.current = null;
    }
  }, []);

  const runDecay = useCallback(
    (
      spring: SpringValue<number>,
      dir: number,
      boundary: number,
      options: DecayAnimationOptions,
    ) => {
      const cb = runDecayAnimation({
        ...options,
        onChange({ velocity, value }) {
          if (unmountedRef.current) {
            return;
          }

          if (
            (dir === 1 && value >= boundary) ||
            (dir === -1 && value <= boundary)
          ) {
            cancelAnimation();

            spring.start({
              to: boundary,
              config: {
                decay: false,
                velocity,
              },
            });
          } else {
            spring.set(value);
          }
        },
      });

      canceller.current = cb;
    },
    [],
  );

  useEffect(() => {
    return () => {
      canceller.current?.();
    };
  }, []);

  return { runDecay, cancelAnimation };
};

export default useDecayAnimation;
