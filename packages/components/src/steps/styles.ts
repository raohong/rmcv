import { StyledComponent, Theme, styled } from '@rmc-vant/system';
import Touchable from '../touchable';
import { TouchablePropsFactory } from '../touchable/interface';
import {
  StepName,
  StepsName,
  getStepSlotClassNames,
  getStepsSlotClassNames,
  stepClassNames,
} from './classNames';
import type {
  StepComponentState,
  StepStatus,
  StepsComponentState,
} from './interface';

export const StepsRoot = styled<'div', StepsComponentState>('div', {
  name: StepsName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getStepsSlotClassNames(componentState).root,
})(({ theme, componentState: { direction } }) => ({
  boxSizing: 'border-box',
  display: 'flex',
  position: 'relative',
  background: theme.palette.background.light,
  ...(direction === 'horizontal' && { padding: 22 }),
  ...(direction === 'vertical' && {
    paddingLeft: theme.space.padding.xl,
    flexDirection: 'column',
  }),
}));

const getStepColors = (
  {
    status,
    activeColor,
    inactiveColor,
  }: Pick<StepComponentState, 'activeColor' | 'inactiveColor' | 'status'>,
  { palette }: Theme,
) => {
  const configs: Record<
    StepStatus,
    {
      title: string;
      dot: string;
      tail?: string;
      icon?: string;
    }
  > = {
    wait: {
      title: inactiveColor,
      dot: inactiveColor,
      tail: palette.border,
      icon: inactiveColor,
    },
    process: {
      title: activeColor,
      dot: activeColor,
      icon: activeColor,
    },
    finish: {
      title: palette.gray800,
      tail: activeColor,
      dot: activeColor,
      icon: activeColor,
    },
  };

  const keys = ['tail', 'title', 'dot', 'icon'] as const;

  return Object.fromEntries(
    keys.map((key) => [key, configs[status][key] || configs.wait[key]!]),
  ) as {
    title: string;
    dot: string;
    tail: string;
    icon: string;
  };
};

export const StepRoot = styled<typeof Touchable, StepComponentState>(Touchable, {
  name: StepName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getStepSlotClassNames(componentState).root,
})(({ componentState: { direction }, theme }) => ({
  flex: 1,
  position: 'relative',
  padding: direction === 'vertical' ? `10px 0` : `0 0 22px 0`,
  lineHeight: 1,
  ...(direction === 'horizontal' && {
    '&:first-child': {
      [`.${stepClassNames.iconWrapper}`]: {
        transform: 'translateY(-50%)',
      },
    },

    [`&:not(:first-child):not(:last-child) .${stepClassNames.title}`]: {
      transform: 'translateX(-50%)',
    },

    '&:last-child': {
      position: 'absolute',
      right: 10,
      alignItems: 'end',
      textAlign: 'right',

      [`.${stepClassNames.iconWrapper}`]: {
        right: `calc(${theme.space.padding.xs}px / -2)`,
        left: 'unset',
        transform: 'translate(0, -50%)',
      },
    },
  }),
})) as StyledComponent<
  TouchablePropsFactory<'div'>,
  React.RefAttributes<HTMLDivElement> & {
    componentState: StepComponentState;
  }
>;

export const StepTitle = styled<'div', StepComponentState>('div', {
  name: StepName,
  slot: 'title',
  overridesResolver: ({ componentState }) =>
    getStepSlotClassNames(componentState).title,
})(({ theme, componentState: { direction, ...state } }) => ({
  fontSize:
    direction === 'horizontal'
      ? theme.typography.fontSize.sm
      : theme.typography.fontSize.md,
  color: getStepColors(state, theme).title,
  display: direction === 'horizontal' ? 'inline-flex' : undefined,
  lineHeight: theme.typography.lineHeights.base,
}));

export const StepDot = styled<'div', StepComponentState>('div', {
  name: StepName,
  slot: 'dot',
  overridesResolver: ({ componentState }) =>
    getStepSlotClassNames(componentState).dot,
})(({ theme, componentState }) => ({
  display: 'block',
  width: 5,
  height: 5,
  borderRadius: '50%',
  background: getStepColors(componentState, theme).dot,
}));

export const StepIcon = styled<'span', StepComponentState>('span', {
  name: StepName,
  slot: 'icon',
  overridesResolver: ({ componentState }) =>
    getStepSlotClassNames(componentState).icon,
})(({ theme, componentState }) => ({
  fontSize: 12,
  color: getStepColors(componentState, theme).icon,
}));

export const StepTail = styled<'div', StepComponentState>('div', {
  name: StepName,
  slot: 'tail',
  overridesResolver: ({ componentState }) =>
    getStepSlotClassNames(componentState).tail,
})(({ theme, componentState: { direction, ...state } }) => ({
  position: 'absolute',

  ...(direction === 'horizontal'
    ? {
        top: 30,
        left: 0,
        transform: 'translateY(-50%) scaleY(0.5)',
        transformOrigin: 'bottom center',
        width: '100%',
        height: 1,
      }
    : {
        top: 19,
        left: `calc(${theme.space.padding.xl}px / -2)`,
        transform: 'translateX(-50%) scaleX(0.5)',
        transformOrigin: 'left center',

        width: 1,
        height: '100%',
      }),
  backgroundColor: getStepColors(state, theme).tail,
  '&:last-child': {
    display: 'none',
  },
}));

export const StepIconWrapper = styled<'div', StepComponentState>('div', {
  name: StepName,
  slot: 'tail',
  overridesResolver: ({ componentState }) =>
    getStepSlotClassNames(componentState).tail,
})(({ theme, componentState: { direction } }) => ({
  position: 'absolute',
  ...(direction === 'vertical' && {
    top: 19,
    left: `calc(${theme.space.padding.xl}px / -2)`,
    transform: ' translate3d(-50%, -50%, 0)',
  }),
  ...(direction === 'horizontal' && {
    top: 30,
    left: -theme.space.padding.xs,
    transform: 'translate(-50%, -50%)',
    backgroundColor: theme.palette.white,
    padding: `0 ${theme.space.padding.xs}px`,
  }),

  zIndex: 1,
  lineHeight: 0,
}));
