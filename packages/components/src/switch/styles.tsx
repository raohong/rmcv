import { styled } from '@rmc-vant/system';
import { toPX } from '@rmc-vant/utils';
import { baseStyleReset } from '../_styles';
import { Loading } from '../loading';
import { SwitchName, getSwitchSlotClassNames } from './classNames';
import type { SwitchComponentState } from './interface';

export const SwitchRoot = styled<'button', SwitchComponentState>('button', {
  name: SwitchName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getSwitchSlotClassNames(componentState).root,
})(
  ({
    theme,
    componentState: { disabled, loading, checked, activeColor, inactiveColor, size },
  }) => ({
    ...baseStyleReset({ theme }),
    display: 'inline-flex',
    fontSize: size,
    width: '2em',
    height: '1em',
    borderRadius: `calc(${toPX(size)} / 2)`,
    border: `${theme.borderBaseWidth}px  solid rgba(0, 0, 0, 0.1)`,
    boxSizing: 'content-box',
    backgroundColor: checked ? activeColor : inactiveColor,
    cursor: loading ? 'unset' : disabled ? 'not-allowed' : 'pointer',
    transitionProperty: 'background-color, opacity',
    transitionDuration: theme.transition.duration.base,
    opacity: disabled ? theme.disabledOpacity : undefined,
  }),
);

export const SwitchNode = styled<'span', SwitchComponentState>('span', {
  name: SwitchName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getSwitchSlotClassNames(componentState).node,
})(({ theme, componentState: { checked } }) => ({
  boxSizing: 'border-box',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  left: 0,
  top: '50%',
  width: '1em',
  height: '1em',
  borderRadius: '50%',
  boxShadow: '0 3px 1px 0 rgba(0, 0, 0, 0.05)',
  transform: checked ? 'translate(calc(2em - 100%), -50%)' : 'translate(0, -50%)',
  transitionDuration: 'inherit',
  transitionProperty: 'transform, background-color',
  backgroundColor: theme.palette.white,
}));

export const SwitchLoadingIcon = styled<typeof Loading, SwitchComponentState>(
  Loading,
  {},
)(({ componentState: { size } }) => ({
  fontSize: `calc(${toPX(size)} / 2)`,
}));
