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

const runDecayAnimation = ({
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

export default runDecayAnimation;
