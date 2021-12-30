import { useContext } from 'react';
import { context } from 'dumi/theme';
import type { IMenuItem } from '@umijs/preset-dumi/lib/routes/getMenuFromRoutes';

const hideMenu = (menus: IMenuItem[]) => {
  return menus
    .map((item) => ({ ...item }))
    .filter((item) => {
      if (item.meta?.hideInMenu) {
        return false;
      }

      if (item.children) {
        item.children = hideMenu(item.children);
      }

      return true;
    });
};

const useMenuList = () => {
  const {
    config: { menus },
    locale = 'en-US',
  } = useContext(context);

  /**
   * 假定没有 nav 取 * 下面的menu
   * 1. 每个 md 都需要设定好 group ，相当于菜单栏的分组
   * 2. 暂时假定没有二级菜单
   */
  const menuList = hideMenu(menus[locale]['*'] || []);

  return menuList;
};

export default useMenuList;
