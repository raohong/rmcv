import { styled } from '@rmc-vant/system';
import { isString } from '@rmc-vant/utils';
import { baseStyleReset } from '../_styles';
import { SpaceName, getSpaceSlotClassNames } from './classNames';
import type { SpaceComponentState } from './interface';

const defaultSizes = {
  small: 8,
  middle: 16,
  large: 24,
};

export const SpaceRoot = styled<'div', SpaceComponentState>('div', {
  name: SpaceName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getSpaceSlotClassNames(componentState).root,
})(({ componentState: { direction, size, wrap, fill, align }, theme }) => ({
  ...baseStyleReset({ theme }),
  display: fill ? 'flex' : 'inline-flex',
  flexWrap: direction === 'horizontal' && wrap ? 'wrap' : undefined,
  gap:
    isString(size) && defaultSizes[size as keyof typeof defaultSizes]
      ? defaultSizes[size as keyof typeof defaultSizes]
      : size,
  alignItems: direction === 'horizontal' ? align : undefined,
  flexDirection: direction === 'vertical' ? 'column' : undefined,
}));

export const SpaceItem = styled<'div', SpaceComponentState>('div', {
  name: SpaceName,
  slot: 'item',
  overridesResolver: ({ componentState }) =>
    getSpaceSlotClassNames(componentState).item,
})({
  position: 'relative',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
});

export const SpaceSplit = styled<'div', SpaceComponentState>('div', {
  name: SpaceName,
  slot: 'split',
  overridesResolver: ({ componentState }) =>
    getSpaceSlotClassNames(componentState).split,
})({
  position: 'relative',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
});
