import { generateComponentClassNameUtility } from '@rmc-vant/system';
import { camelCase, firstUpper } from '@rmc-vant/utils';
import type { PopoverComponentState, PopoverNSlot, PopoverSlot } from './interface';

export const PopoverName = 'Popover';

export const {
  getPopoverClassName,
  composePopoverSlotClassNames,
  getPopoverSlotClassNames,
} = generateComponentClassNameUtility<
  typeof PopoverName,
  PopoverComponentState,
  PopoverSlot,
  PopoverNSlot
>(
  PopoverName,
  {
    root: true,
    menu: true,
    menuIcon: true,
    menuText: true,
    themeDarkMenu: true,
    themeDarkMenuIcon: true,
    themeDarkMenuText: true,
    themeDarkMenus: true,
    menus: true,
    themeDark: true,
    themeLight: true,
    arrow: true,
    themeDarkMenuArrow: true,
  },
  ({ theme }: PopoverComponentState) => ({
    root: ['root', camelCase(`theme-${theme}`)],
    menu: ['menu', theme === 'dark' && `theme${firstUpper(theme)}Menu`],
    menuIcon: ['menuIcon', theme === 'dark' && `theme${firstUpper(theme)}MenuIcon`],
    menuText: ['menuText', theme === 'dark' && `theme${firstUpper(theme)}MenuText`],
    menus: ['menus', theme === 'dark' && `theme${firstUpper(theme)}Menus`],
    arrow: ['arrow', theme === 'dark' && `theme${firstUpper(theme)}Arrow`],
  }),
);
