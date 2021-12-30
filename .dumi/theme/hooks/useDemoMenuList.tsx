import { useContext, useMemo } from 'react';
import { context } from 'dumi/theme';
import useMenuList from './useMenuList';

type IDemoMenuItem = {
  path?: string;
  title: string;
  meta?: Record<string, any>;
  children?: IDemoMenuItem[];
};

const useDemoMenuList = (): IDemoMenuItem[] => {
  const { demos } = useContext(context);
  const menuList = useMenuList();

  const demoMenuList = useMemo(() => {
    const map = Object.fromEntries(
      Object.keys(demos)
        .map((item) => item.replace('-demos', ''))
        .map((item) => [item, true]),
    );

    const filter = (menu: IDemoMenuItem): boolean => {
      if (menu.path && !menu.children) {
        return map[menu.path.replace(/^\//, '')];
      }

      if (menu.children) {
        menu.children = menu.children.filter((item) =>
          filter({
            ...item,
            path: menu.path && item.path?.replace(menu.path, ''),
          }),
        );

        return menu.children.length > 0;
      }

      return false;
    };

    return menuList.filter(filter);
  }, [demos, menuList]);

  return demoMenuList;
};

export default useDemoMenuList;
