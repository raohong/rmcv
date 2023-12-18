import { generateComponentClassNameUtility } from '@rmc-vant/system';
import type { SliderComponentState, SliderNSlot, SliderSlot } from './interface';

export const SliderName = 'Slider';

export const {
  sliderClassNames,
  composeSliderSlotClassNames,
  getSliderSlotClassNames,
} = generateComponentClassNameUtility<
  typeof SliderName,
  SliderComponentState,
  SliderSlot,
  SliderNSlot
>(
  SliderName,
  {
    root: true,
    thumb: true,
    rail: true,
    track: true,
    button: true,
    readonly: true,
    disabled: true,
    vertical: true,
    animating: true,
    reverse: true,
  },
  ({ readonly, reverse, disabled, animating, vertical }) => ({
    root: [
      'root',
      readonly && 'readonly',
      reverse && 'reverse',
      disabled && 'disabled',
      animating && 'animating',
      vertical && 'vertical',
    ],
    thumb: ['thumb'],
    rail: ['rail'],
    track: ['track'],
    button: ['button'],
  }),
);
