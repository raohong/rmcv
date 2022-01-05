import React, { useRef, useEffect, useMemo } from 'react';
import { ROUTE_CHANGE_EVENT } from 'src/constants';
import { triggerRouteEvent } from '../utils';
import * as styles from './DemoNavContainer.module.less';

const DemoNavContainer: React.FC<{ url: string; demoNav: string }> = ({
  url,
  demoNav,
}) => {
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = ref.current;

    if (iframe) {
      const win = iframe.contentWindow;

      if (win) {
        triggerRouteEvent(ROUTE_CHANGE_EVENT, win, {
          path: url,
        });
      }
    }
  }, [url, demoNav]);

  const src = useMemo(() => `${demoNav}?initial=${url}`, [demoNav]);

  return (
    <div className={styles.container}>
      <iframe className={styles.iframe} ref={ref} src={src} />
    </div>
  );
};

export default DemoNavContainer;
