/* eslint-disable react-dom/no-missing-iframe-sandbox */
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { useDemoComponentContext } from './context';
import { BACK_EVENT, ROUTE_CHANGE_EVENT, parseMessageEvent } from './utils';

const FloatDemo = () => {
  const ref = useRef<HTMLIFrameElement | null>(null);
  const { back, push } = useRouter();
  const { demoComponentName, demoRoute } = useDemoComponentContext();

  useEffect(() => {
    const win = ref.current?.contentWindow;
    if (win) {
      win.postMessage(
        JSON.stringify({
          event: ROUTE_CHANGE_EVENT,
          data: demoComponentName
            ? `/mobile-demo/${demoComponentName}`
            : '/mobile-demo',
        }),
        location.origin,
      );
    }
  }, [demoComponentName]);

  useEffect(() => {
    const handler = (evt: MessageEvent) => {
      const data = parseMessageEvent(evt);

      if (data?.event === BACK_EVENT) {
        back();
      }
      else if (data?.event === ROUTE_CHANGE_EVENT) {
        push(data.data);
      }
    };
    window.addEventListener('message', handler);

    return () => {
      window.removeEventListener('message', handler);
    };
  }, [back, push]);

  return (
    <iframe
      ref={ref}
      src={`${demoRoute || '/mobile-demo'}`}
      className={clsx(
        'sticky top-[80px] z-10 flex-shrink-0',
        'h-[896px] max-h-[calc(100dvh-140px)] w-[390px] transition-[opacity] max-2xl:w-[400px] 2xl:w-[414px]',
        'z-20 hidden rounded-3xl border-0 bg-slate-50 shadow-xl lg:block',
      )}
    />
  );
};

export default FloatDemo;
