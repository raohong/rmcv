import { styled } from '@rmc-vant/system';
import { baseStyleReset } from '../_styles';
import { CountDownName, getCountDownSlotClassNames } from './classNames';

export const CountDownRoot = styled('div', {
  name: CountDownName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getCountDownSlotClassNames(componentState).root,
})(({ theme }) => ({
  ...baseStyleReset({ theme }),
  color: theme.palette.text.primary,
  fontSize: theme.typography.fontSize.md,
  lineHeight: theme.typography.lineHeights.md,
}));
