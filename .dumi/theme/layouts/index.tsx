import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useHistory, useLocation } from 'umi';
import { context } from 'dumi/theme';
import type { IRouteComponentProps } from '@umijs/types';
import { DemoNavContainer, Header, Sidebar } from '../components';
import { styled } from '../styles';
import DemoContext from '../context';
import './layout.less';

const StyledLayout = styled('section', {
  minHeight: '100vh',
  backgroundColor: '$bg',
  color: '$text',
  fontSize: '$1',

  '&:::-webkit-scrollbar': {
    width: 6,
    height: 6,
    backgroundColor: 'transparent',
  },
  '&:::-webkit-scrollbar-thumb': {
    borderRadius: 6,
    backgroundColor: 'transparent',
  },
});

const StyledMain = styled('main', {
  padding: '24px 24px 75px',
  marginLeft: '$contentMargin',
  '& > h1, .markdown h2': {
    color: '$gray600',
    fonWweight: 400,
    lineHeight: 1.5,
  },
  '& > h1': {
    margin: '0 0 30px',
    fontSize: 34,
  },
  '.markdown h2': {
    margin: '45px 0 20px',
    fontSize: 26,
  },
});

export default ({
  children,
  history,
  location: { pathname },
}: PropsWithChildren<IRouteComponentProps>) => {
  const {
    config: {
      theme: { redirectUrl },
    },
    meta: { title },
  } = useContext(context);
  const headerRef = useRef<HTMLHeadElement | null>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const isMobile = true;
  const [currentDemoUrl, setCurrentDemoUrl] = useState<string | null>(null);
  const demoNavUrl = '/~demos-nav';
  const pathnameRef = useRef(pathname);
  const demoNavVisible = isMobile ? pathname !== demoNavUrl : !currentDemoUrl;

  pathnameRef.current = pathname;

  const contextValue = useMemo(
    () => ({
      setDemoUrl: setCurrentDemoUrl,
    }),
    [setCurrentDemoUrl],
  );

  useEffect(() => {
    const handler = (evt: MessageEvent) => {
      if (evt.data) {
        try {
          const { data, type } = JSON.parse(evt.data);

          console.log('receive', type, data, pathnameRef.current);

          if (type === 'DEMO_ROUTE_CHANGE' && data !== pathnameRef.current) {
            history.push(data);
          }
        } catch {}
      }
    };

    window.addEventListener('message', handler);

    return () => window.removeEventListener('message', handler);
  }, []);

  useLayoutEffect(() => {
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
    <DemoContext.Provider value={contextValue}>
      {isMobile ? (
        children
      ) : (
        <StyledLayout>
          <Header ref={headerRef} />
          <Sidebar ref={sidebarRef} />
          <StyledMain>
            <h1>{title}</h1>
            {children}
          </StyledMain>
        </StyledLayout>
      )}
      {demoNavVisible && (
        <DemoNavContainer mobile={isMobile} url={demoNavUrl} />
      )}
    </DemoContext.Provider>
  );
};
