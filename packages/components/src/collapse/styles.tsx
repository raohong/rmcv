import { animated } from '@react-spring/web';
import { styled } from '@rmc-vant/system';
import { baseStyleReset } from '../_styles';
import {
  CollapseItemName,
  CollapseName,
  getCollapseItemSlotClassNames,
} from './classNames';
import { CollapseComponentState, CollapseItemComponentState } from './interface';

export const CollapseRoot = styled<'div', CollapseComponentState>('div', {
  name: CollapseName,
  slot: 'root',
  overridesResolver: () => ['root'],
})(baseStyleReset);

export const CollapseItemRoot = styled<'div', CollapseItemComponentState>('div', {
  name: CollapseItemName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getCollapseItemSlotClassNames(componentState).root,
})(baseStyleReset);

export const CollapseItemContent = styled<
  typeof animated.div,
  CollapseItemComponentState
>(animated.div, {
  name: CollapseItemName,
  slot: 'content',
  overridesResolver: ({ componentState }) =>
    getCollapseItemSlotClassNames(componentState).content,
})(({ theme }) => ({
  boxSizing: 'border-box',
  padding: `${theme.space.padding.sm}px ${theme.space.padding.md}px`,
  fontSize: theme.typography.fontSize.md,
  color: theme.palette.text.secondary,
  background: theme.palette.background.light,
}));

export const CollapseExpandIcon = styled<
  typeof animated.div,
  CollapseItemComponentState
>(animated.div, {
  name: CollapseItemName,
  slot: 'expandIcon',
  overridesResolver: ({ componentState }) =>
    getCollapseItemSlotClassNames(componentState).expandIcon,
})(({ theme, componentState: { disabled } }) => ({
  boxSizing: 'border-box',
  color: disabled ? theme.palette.text.third : undefined,
  display: 'inline-flex',
}));
