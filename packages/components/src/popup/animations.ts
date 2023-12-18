import { SpringConfig } from '@react-spring/web';
import type { PopupPosition } from './interface';

export const generatePopupAnimationConfigs = (
  duration: number,
  config?: SpringConfig,
) => {
  const configs: Record<
    string,
    {
      from: object;
      to: object;
    }
  > = {
    center: {
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    },
    left: {
      from: {
        x: '-100%',
      },
      to: {
        x: '0%',
      },
    },
    top: {
      from: { y: '-100%' },
      to: { y: '0%' },
    },
    right: {
      from: {
        x: '100%',
      },
      to: {
        x: '0%',
      },
    },
    bottom: {
      from: { y: '100%' },
      to: { y: '0%' },
    },
  };

  return Object.fromEntries(
    Object.entries(configs).map(([position, configItem]) => {
      return [
        position,
        {
          from: configItem.from,
          enter: configItem.to,
          leave: configItem.from,
          config: config || {
            duration,
          },
        },
      ];
    }),
  ) as Record<
    PopupPosition,
    {
      from: object;
      enter: object;
      leave: object;
      config: SpringConfig;
    }
  >;
};
