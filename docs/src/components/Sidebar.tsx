import classNames from 'classnames';
import { Link } from 'gatsby';
import React from 'react';
import { MenuItem } from '../type';
import * as styles from './Sidebar.module.less';
import { usePageContext } from './context';

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  const { menus, pagePath } = usePageContext();

  const renderMenuItem = (item: MenuItem) => {
    return (
      <Link
        className={classNames(styles.menuItem, {
          [styles.active]: item.pagePath === pagePath,
        })}
        key={item.id}
        title={item.menuName}
        role="itemitem"
        to={item.pagePath}
      >
        {item.menuName}
      </Link>
    );
  };

  return (
    <div {...props} className={classNames(styles.sidebar, className)} ref={ref}>
      {menus.map((item, index) => {
        return (
          <ul className={styles.menuContainer} key={item.menuName || index}>
            {item.menuName && <li className={styles.title}>{item.menuName}</li>}
            <li role="menu" className={styles.menuList}>
              {item.children.map((menu) => renderMenuItem(menu))}
            </li>
          </ul>
        );
      })}
    </div>
  );
});

export default Sidebar;
