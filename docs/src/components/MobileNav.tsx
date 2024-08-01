import { Arrow } from '@rmc-vant/icons';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import type { PropsWithChildren } from 'react';
import logo from '../../public/favicon.png';
import type { INavigationMenu } from '../../scripts/docs';
import { ROUTE_CHANGE_EVENT } from './utils';

const MobileNav = ({
  menus,
}: PropsWithChildren & {
  menus: INavigationMenu['menus'];
}) => {
  const { push } = useRouter();

  return (
    <section className='bg-slate-50 px-4 pb-12 pt-6'>
      <div className={clsx('ms-5 flex flex-col rounded-lg pt-2')}>
        <div className={clsx('flex items-center gap-4')}>
          <img src={logo.src} className='size-12' />
          <h1 className='text-2xl'>RMC Vant</h1>
        </div>
        <p className='mt-4 text-slate-500'>可定制的移动端 React 组件库</p>
      </div>
      <div className='flex flex-col'>
        <nav className='relative z-10 text-sm leading-8 lg:text-base'>
          <ul role='menubar' className='flex flex-col gap-8 pt-14 lg:pt-0'>
            {menus.map(({ title, subMenus, group }) => (
              <li role='none' key={group}>
                <h2 className='ms-5 font-normal capitalize text-slate-500'>
                  {title}
                </h2>
                <ul className='mt-2 space-y-4' role='menu' aria-label={title}>
                  {subMenus.map(menu => (
                    <li role='menuitem' className='relative' key={menu.route}>
                      <a
                        className={clsx(
                          'flex items-center justify-between rounded-full bg-white px-5 py-1.5 text-slate-700 lg:py-2',
                          'hover:text-sky-700',
                        )}
                        onClick={() => {
                          if (window.frameElement) {
                            window.parent.postMessage(
                              JSON.stringify({
                                event: ROUTE_CHANGE_EVENT,
                                data: menu.route,
                              }),
                            );
                          }
                          else {
                            push(menu.route.replace('components', 'mobile-demo'));
                          }
                        }}
                        href={menu.route.replace('components', 'mobile-demo')}
                      >
                        <span>
                          {menu.title}
                          {menu.subTitle ? ` ${menu.subTitle}` : ''}
                        </span>
                        <span className='text-slate-400 hover:text-sky-600'>
                          <Arrow />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default MobileNav;
