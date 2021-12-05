import { PopupPositon, PopupTransitionConfig } from './type';

export const defaultPopupTransitions: Record<
  PopupPositon,
  PopupTransitionConfig
> = {
  bottom: {
    from: {
      y: '100%',
    },
    enter: {
      y: '0%',
    },
    leave: {
      y: '100%',
    },
  },
  top: {
    from: {
      y: '-100%',
    },
    enter: {
      y: '0%',
    },
    leave: {
      y: '-100%',
    },
  },
  left: {
    from: {
      x: '-100%',
    },
    enter: {
      x: '0%',
    },
    leave: {
      x: '-100%',
    },
  },
  right: {
    from: {
      x: '100%',
    },
    enter: {
      x: '0%',
    },
    leave: {
      x: '100%',
    },
  },
  center: {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
    config: {
      duration: 300,
    },
  },
  none: {
    from: {},
    enter: {},
    leave: {},
  },
};
