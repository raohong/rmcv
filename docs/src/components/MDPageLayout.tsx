import React, { useEffect, useRef } from 'react';
import { navigate } from 'gatsby';
import { parseRouteEvent } from '../utils';
import { DEMO_NAV_URL, ROUTE_BACK_EVENT, ROUTE_CHANGE_EVENT } from '../constants';
import { usePageContext } from './context';
import DemoNavContainer from './DemoNavContainer';
import Header from './Header';
import Sidebar from './Sidebar';
import * as styles from './MDPageLayout.module.less';

const Layout: React.FC = ({ children }) => {
  const headerRef = useRef<HTMLHeadElement | null>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const { demoMap, currentDemoPath } = usePageContext();

  useEffect(() => {
    const handler = (evt: MessageEvent) => {
      const data = parseRouteEvent(evt);

      if (!data) {
        return null;
      }

      if (data.event === ROUTE_BACK_EVENT) {
        console.log('navigate', data);
        navigate(-1);

        console.log(window === window.top);

        //  window.history.back();
      } else if (data.event === ROUTE_CHANGE_EVENT) {
        const demoPagePath = data.data.path;

        if (demoPagePath) {
          const currentPagePath = Array.from(demoMap.entries()).find(
            (item) => item[1].demoPath === demoPagePath,
          )?.[0];

          if (currentPagePath) {
            navigate(currentPagePath);
          }
        }
      }
    };

    window.addEventListener('message', handler);

    return () => {
      window.removeEventListener('message', handler);
    };
  }, [demoMap]);

  useEffect(() => {
    const handler = () => {
      const header = headerRef.current;

      if (header && sidebarRef.current) {
        const { height, top } = header.getBoundingClientRect();

        if (sidebarRef.current)
          sidebarRef.current.style.top = `${Math.max(
            0,
            height - Math.max(0, -top),
          )}px`;
      }
    };

    window.addEventListener('scroll', handler);
    handler();

    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  return (
    <section className={styles.layout}>
      <Header ref={headerRef} />
      <Sidebar ref={sidebarRef} />
      <main className={styles.main}>{children}</main>
      <DemoNavContainer demoNav={DEMO_NAV_URL} url={currentDemoPath} />
    </section>
  );
};

export default Layout;
