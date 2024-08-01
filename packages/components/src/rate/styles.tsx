import { styled } from '@rmc-vant/system';
import { baseStyleReset } from '../_styles';
import { RateName, getRateSlotClassNames } from './classNames';
import type { RateComponentState } from './interface';

export const RateRoot = styled<'div', RateComponentState>('div', {
  name: RateName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getRateSlotClassNames(componentState).root,
})(
  ({
    theme,
    componentState: { gutter, disabled, readonly, voidColor, size, disabledColor },
  }) => ({
    ...baseStyleReset({ theme }),
    display: 'inline-flex',
    columnGap: gutter,
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    cursor: disabled ? 'not-allowed' : readonly ? undefined : 'pointer',
    color: disabled ? disabledColor : voidColor,
    fontSize: size,
  }),
);

export const RateIcon = styled<'span', RateComponentState>('span', {
  name: RateName,
  slot: 'icon',
  overridesResolver: ({ componentState }) =>
    getRateSlotClassNames(componentState).icon,
})({
  boxSizing: 'border-box',
  width: '1em',
  height: '1em',
  display: 'inline-flex',
});

export const RateItem = styled<'div', RateComponentState>('div', {
  name: RateName,
  slot: 'item',
  overridesResolver: ({ componentState }) =>
    getRateSlotClassNames(componentState).item,
})({
  boxSizing: 'border-box',
  position: 'relative',
  width: '1em',
  height: '1em',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const RateMask = styled<'div', RateComponentState>('div', {
  name: RateName,
  slot: 'mask',
  overridesResolver: ({ componentState }) =>
    getRateSlotClassNames(componentState).mask,
})({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const RateFullIcon = styled<typeof RateIcon, RateComponentState>(RateIcon, {
  name: RateName,
  slot: 'fullIcon',
  overridesResolver: ({ componentState }) =>
    getRateSlotClassNames(componentState).fullIcon,
})(({ componentState: { color, disabled, disabledColor } }) => ({
  color: disabled ? disabledColor : color,
}));
