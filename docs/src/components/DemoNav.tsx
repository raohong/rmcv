import { Link } from 'gatsby';
import React from 'react';
import { ROUTE_CHANGE_EVENT } from '../constants';
// @ts-ignore
import logo from '../images/logo.png';
import { getTopWindow, triggerRouteEvent } from '../utils';
import * as styles from './DemoNav.module.less';
import { usePageContext } from './context';

const DemoNav: React.FC = () => {
  const {
    site: { title },
    demoMenus,
  } = usePageContext();

  const desc = '轻量、可靠的移动端组件库';

  const onClick = (evt: React.MouseEvent, path: string) => {
    const win = getTopWindow();

    if (win) {
      evt.preventDefault();
      triggerRouteEvent(ROUTE_CHANGE_EVENT, win, { path });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.desc}>
        <h1>
          <img src={logo} alt="" />
          <span>{title}</span>
        </h1>
        <h2>{desc}</h2>
      </div>
      {demoMenus.map((item) => (
        <div key={item.menuName}>
          <h2 className={styles.title}>{item.menuName}</h2>
          {item.children.map((menu) => (
            <Link
              onClick={(evt) => onClick(evt, menu.demoPath!)}
              className={styles.menu}
              to={menu.demoPath!}
              key={menu.title}
            >
              {menu.menuName}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DemoNav;
