import { styled } from '@rmc-vant/system';
import { StickyName, getStickySlotClassNames } from './classNames';
import { StickyComponentState } from './interface';

export const StickyRoot = styled<'div', StickyComponentState>('div', {
  name: StickyName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getStickySlotClassNames(componentState).root,
})(({ componentState: { affixed } }) => ({
  boxSizing: 'border-box',
  position: affixed ? 'fixed' : undefined,
}));

export const StickyContent = styled<'div', StickyComponentState>('div', {
  name: StickyName,
  slot: 'content',
  overridesResolver: ({ componentState }) =>
    getStickySlotClassNames(componentState).content,
})({
  boxSizing: 'border-box',
});
