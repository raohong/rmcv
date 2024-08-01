/* eslint-disable react-dom/no-dangerously-set-innerhtml */
import { ArrowLeft } from '@rmc-vant/icons';
import clsx from 'clsx';
import Head from 'next/head';
import { useRouter } from 'next/router';
import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';
import type { INavigationMenu } from '../../scripts/docs';
import MobileNav from './MobileNav';
import { BACK_EVENT, ROUTE_CHANGE_EVENT, parseMessageEvent } from './utils';

const Layout = ({
  children,
  navigationMenus,
}: PropsWithChildren & {
  navigationMenus: INavigationMenu[];
}) => {
  const { pathname, back, push } = useRouter();

  const menus = navigationMenus.find(item => item.category === 'components')?.menus;

  const matched = pathname.match(/mobile-demo\/([^/]+)/);
  const componentName = matched?.[1];
  const targetComponent
    = componentName
    && menus
      ?.map(item => item.subMenus)
      ?.flat()
      .find(item => item.route.endsWith(componentName));

  useEffect(() => {
    const handler = (evt: MessageEvent) => {
      const data = parseMessageEvent(evt);

      if (data?.event === ROUTE_CHANGE_EVENT) {
        push(data.data);
      }
    };
    window.addEventListener('message', handler);

    return () => {
      window.removeEventListener('message', handler);
    };
  }, [push]);

  return (
    <section className={clsx('mx-auto h-dvh', 'max-w-3xl')}>
      {targetComponent
        ? (
            <>
              {targetComponent.style && (
                <Head>
                  <style
                    dangerouslySetInnerHTML={{ __html: targetComponent.style }}
                    type='text/css'
                  />
                </Head>
              )}
              <header
                className={clsx(
                  'relative flex h-12 items-center justify-center bg-white',
                  targetComponent.theme === 'light' && 'shadow-sm',
                )}
              >
                <button
                  className='absolute left-2 top-[50%] flex -translate-y-1/2 cursor-pointer items-center justify-center p-2 text-xl text-gray-500'
                  onClick={() => {
                    const parent = window.parent;
                    if (window.frameElement) {
                      parent.postMessage(
                        JSON.stringify({
                          event: BACK_EVENT,
                        }),
                      );
                    }
                    else {
                      back();
                    }
                  }}
                >
                  <ArrowLeft />
                </button>
                <h1 className='text-center text-base'>
                  {targetComponent.title}
                  {' '}
                  {targetComponent.subTitle}
                </h1>
              </header>
              <div
                className={clsx(
                  'mobile-demo-layout',
                  'flex-1 overflow-y-auto px-4 py-6',
                  targetComponent.theme === 'light' ? 'bg-white' : 'bg-slate-50',
                )}
              >
                {children}
              </div>
            </>
          )
        : (
            menus && <MobileNav menus={menus} />
          )}
    </section>
  );
};

export default Layout;
