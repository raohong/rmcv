import { styled } from '@rmc-vant/system';
import { baseStyleReset } from '../_styles';
import { RateName } from './classNames';
import { RateComponentState } from './interface';

export const RateRoot = styled<'div', RateComponentState>('div', {
  name: RateName,
  slot: 'root',
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

export const RateIcon = styled('span')({
  boxSizing: 'border-box',
  width: '1em',
  height: '1em',
  display: 'inline-flex',
});

export const RateItem = styled('div')({
  boxSizing: 'border-box',
  position: 'relative',
  width: '1em',
  height: '1em',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const RateMask = styled('div')({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const RateFullIcon = styled<typeof RateIcon, RateComponentState>(RateIcon)(
  ({ componentState: { color, disabled, disabledColor } }) => ({
    color: disabled ? disabledColor : color,
  }),
);
