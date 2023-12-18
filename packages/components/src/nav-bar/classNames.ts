import { generateComponentClassNameUtility } from '@rmc-vant/system';
import type { NavBarComponentState, NavBarNSlot, NavBarSlot } from './interface';

export const NavBarName = 'NavBar';

export const {
  composeNavBarSlotClassNames,
  navBarClassNames,
  getNavBarSlotClassNames,
} = generateComponentClassNameUtility<
  typeof NavBarName,
  NavBarComponentState,
  NavBarSlot,
  NavBarNSlot
>(
  NavBarName,
  {
    root: true,
    left: true,
    right: true,
    title: true,
    text: true,
    arrowIcon: true,
    border: true,
  },
  ({ border }) => ({
    root: ['root', border && 'border'],
    left: ['left'],
    right: ['right'],
    title: ['title'],
    text: ['text'],
    arrowIcon: ['arrowIcon'],
  }),
);
