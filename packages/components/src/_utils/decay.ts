import { useEffect, useRef, useCallback } from 'react';
import type { SpringValue } from '@react-spring/web';
import raf from 'raf';

export type DecayAnimationOptions = {
  power?: number;
  timeConst?: number;
  from?: number;
  velocity?: number;
  modifyTarget?: (dist: number, velocity: number) => number;
  restDelta?: number;
};

type DecayAnimationState = {
  finished: boolean;
  value: number;
  velocity: number;
};

const decay = ({
  power = 0.8,
  timeConst = 300,
  from = 0,
  velocity = 0,
  restDelta = 0.2,
  modifyTarget,
}: DecayAnimationOptions) => {
  let movement = velocity * power * timeConst;
  const ideal = movement + from;

  const target = modifyTarget ? modifyTarget(ideal, velocity) : ideal;
  const state: DecayAnimationState = {
    finished: false,
    value: from,
    velocity,
  };

  if (target !== ideal) {
    movement = target - from;
  }

  return {
    next: (t: number) => {
      // y = a * Math.exp(kt)

      const dx = Math.exp((1 / -timeConst) * t);
      const delta = -movement * dx;

      state.finished = Math.abs(delta) < restDelta;
      state.value = state.finished ? target : target + delta;
      state.velocity = velocity * dx;

      return state;
    },
  };
};

export const runDecayAnimation = ({
  onChange,
  ...options
}: DecayAnimationOptions & {
  onChange: (state: DecayAnimationState) => void;
}) => {
  let id: number | null = null;
  let active = true;
  const startTime = Date.now();

  const generator = decay(options);

  const cancel = () => {
    if (id !== null) {
      raf.cancel(id);
      id = null;
    }

    active = false;
  };

  const run = () => {
    id = raf(() => {
      if (active) {
        const now = Date.now();
        const state = generator.next(now - startTime);

        onChange(state);

        if (!state.finished) {
          run();
        }
      }
    });
  };

  run();

  return cancel;
};

export const useDecayAnimation = () => {
  const unmountedRef = useRef(false);
  const canceller = useRef<(() => void)[]>([]);

  const cancelAnimation = useCallback(() => {
    if (canceller.current) {
      canceller.current.forEach((item) => item());
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
            cb();
            canceller.current = canceller.current.filter((item) => item !== cb);

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

      canceller.current.push(cb);
    },
    [],
  );

  useEffect(() => {
    return () => {
      cancelAnimation();
    };
  }, [cancelAnimation]);

  return { runDecay, cancelAnimation };
};
