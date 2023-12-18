import { styled } from '@rmc-vant/system';
import { toPX } from '@rmc-vant/utils';
import { baseStyleReset } from '../_styles';
import { SliderName, getSliderSlotClassNames } from './classNames';
import { SliderComponentState } from './interface';

export const SliderRoot = styled<'div', SliderComponentState>('div', {
  name: SliderName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getSliderSlotClassNames(componentState).root,
})(
  ({
    theme,
    componentState: {
      barHeight,
      sizeProp,
      readonly,
      disabled,
      vertical,
      buttonSize,
    },
  }) => {
    const margin = `calc((${toPX(buttonSize)} - ${toPX(barHeight)}) / 2)`;
    return {
      ...baseStyleReset({ theme }),
      [sizeProp]: barHeight,
      borderRadius: theme.radii.max,
      cursor: disabled ? 'not-allowed' : readonly ? 'unset' : 'pointer',
      opacity: disabled ? theme.disabledOpacity : undefined,
      display: vertical ? 'inline-block' : undefined,
      margin: vertical ? `0 ${margin}` : `${margin} 0`,
    };
  },
);

export const SliderRail = styled<'div', SliderComponentState>('div', {
  name: SliderName,
  slot: 'rail',
  overridesResolver: ({ componentState }) =>
    getSliderSlotClassNames(componentState).rail,
})(({ componentState: { inactiveColor } }) => ({
  boxSizing: 'border-box',
  height: '100%',
  borderRadius: 'inherit',
  backgroundColor: inactiveColor,
}));

export const SliderTrack = styled<'div', SliderComponentState>('div', {
  name: SliderName,
  slot: 'track',
  overridesResolver: ({ componentState }) =>
    getSliderSlotClassNames(componentState).track,
})(
  ({
    componentState: { activeColor, sizeProp, animating, reverse, vertical },
    theme,
  }) => ({
    boxSizing: 'border-box',
    position: 'absolute',
    [vertical ? 'left' : 'top']: 0,
    [sizeProp]: '100%',
    backgroundColor: activeColor,
    willChange: 'left, width, top, height, bottom,height',
    borderRadius: 'inherit',
    transitionProperty: 'left, width, top, height, bottom,height',
    transitionDuration: animating ? theme.transition.duration.fast : undefined,
  }),
);

export const SliderThumb = styled<'div', SliderComponentState>('div', {
  name: SliderName,
  slot: 'thumb',
  overridesResolver: ({ componentState }) =>
    getSliderSlotClassNames(componentState).thumb,
})(({ componentState: { vertical, reverse, animating, disabled }, theme }) => ({
  boxSizing: 'border-box',
  position: 'absolute',
  [vertical ? 'left' : 'top']: '50%',
  transform: reverse
    ? vertical
      ? 'translate(-50%, 50%)'
      : 'translate(50%, -50%)'
    : 'translate(-50%, -50%)',
  cursor: disabled ? undefined : 'grab',
  touchAction: vertical ? 'pan-x' : 'pan-y',
  transitionProperty: 'left, top',
  display: 'inline-flex',
  transitionDuration: animating ? theme.transition.duration.fast : undefined,
}));

export const SliderButton = styled<'button', SliderComponentState>('button', {
  name: SliderName,
  slot: 'button',
  overridesResolver: ({ componentState }) =>
    getSliderSlotClassNames(componentState).button,
})(({ componentState: { buttonSize }, theme }) => ({
  boxSizing: 'border-box',
  width: buttonSize,
  height: buttonSize,
  borderRadius: '50%',
  display: 'inline-flex',
  alignItems: 'center',
  cursor: 'unset',
  justifyContent: 'center',
  backgroundColor: theme.palette.white,
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
}));
