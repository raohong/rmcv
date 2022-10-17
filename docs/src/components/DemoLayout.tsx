import classNames from 'classnames';
import { navigate } from 'gatsby';
import { isString } from 'lodash';
import qs from 'qs';
import React, { useEffect, useRef } from 'react';
import { ROUTE_BACK_EVENT, ROUTE_CHANGE_EVENT } from '../constants';
import { getTopWindow, parseRouteEvent, triggerRouteEvent } from '../utils';
import * as styles from './DemoLayout.module.less';
import { usePageContext } from './context';

const ArrowLeft = () => (
  <svg viewBox="0 0 1000 1000" width="1em" height="1em">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M296.114 508.035c-3.22-13.597.473-28.499 11.079-39.105l333.912-333.912c16.271-16.272 42.653-16.272 58.925 0s16.272 42.654 0 58.926L395.504 498.47l304.574 304.574c16.272 16.272 16.272 42.654 0 58.926s-42.654 16.272-58.926 0L307.241 528.058a41.472 41.472 0 0 1-11.127-20.023z"
    ></path>
  </svg>
);

const DemoLayout: React.FC = ({ children }) => {
  const { pagePath, demoMap } = usePageContext();
  const ref = useRef(pagePath);
  const token = useRef(0);

  ref.current = pagePath;

  useEffect(() => {
    const { initial } = qs.parse(location.search.replace('?', ''));

    if (isString(initial) && initial !== location.pathname) {
      navigate(initial);
    }
  }, []);

  useEffect(() => {
    const handler = (evt: MessageEvent) => {
      const data = parseRouteEvent(evt);

      if (!data) {
        return;
      }

      if (data.event === ROUTE_CHANGE_EVENT && ref.current !== data.data.path) {
        if (token.current) {
          token.current--;

          return;
        }

        navigate(data.data.path);
      }
    };

    window.addEventListener('message', handler);

    return () => {
      window.removeEventListener('message', handler);
    };
  }, [demoMap]);

  const target = Array.from(demoMap.entries()).find(
    (item) => item[1].demoPath === pagePath,
  )?.[1];

  const title = target?.title;

  return (
    <section
      className={classNames(
        styles.layout,
        target?.theme === 'light' && styles.light,
      )}
    >
      {title && (
        <nav className={styles.nav}>
          <button
            className={styles.back}
            onClick={() => {
              const win = getTopWindow();

              if (win) {
                token.current++;
                triggerRouteEvent(ROUTE_BACK_EVENT, win);
              }
              navigate(-1);
            }}
          >
            <ArrowLeft />
          </button>
          <h1 className={styles.title}>{title}</h1>
        </nav>
      )}
      <div className={styles.container}>{children}</div>
    </section>
  );
};

export default DemoLayout;
