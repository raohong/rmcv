import { useMergeRefs } from '@rmc-vant/hooks';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';
import { lock, unlock } from 'tua-body-scroll-lock';
import logo from '../../public/favicon.png';
import type { INavigationMenu } from '../../scripts/docs';

const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    strokeWidth='2'
    strokeLinecap='round'
    {...props}
  >
    <path d='M5 5l14 14M19 5l-14 14'></path>
  </svg>
);

const Nav = (
  {
    data,
    className,
    onClose,
    open,
  }: {
    data: INavigationMenu[];
    className?: string;
    open?: boolean;
    onClose?: () => void;
  },
  ref: React.ForwardedRef<HTMLElement | null>,
) => {
  const { asPath: pathname } = useRouter();
  const containerRef = useRef<HTMLElement | null>(null);

  const mergedRef = useMergeRefs(containerRef, ref);

  useEffect(() => {
    const container = containerRef.current;
    if (open) {
      lock(container);
    }

    return () => unlock(container);
  }, [open]);

  const menus = data.map(item => item.menus).flat();

  return (
    <>
      {open && (
        <div
          tabIndex={0}
          onClick={onClose}
          className='fixed bottom-0 left-0 right-0 top-0 z-20 backdrop-blur-xl'
        />
      )}
      <aside
        className={clsx(
          className,
          'flex flex-col',
          'fixed bottom-0 left-0 top-0 z-20 h-full bg-white',
          'overflow-y-auto overflow-x-hidden lg:sticky lg:bottom-[unset] lg:left-[inset] lg:top-[68px] lg:z-10 lg:block lg:h-[calc(100dvh-68px)]',
          'w-full max-w-[18rem] px-4 pb-12 pt-6 lg:pt-10',
          open ? 'block z-10' : 'hidden',
        )}
        ref={mergedRef}
      >
        <div className='flex items-center gap-6 lg:hidden'>
          <button onClick={() => onClose?.()} tabIndex={0}>
            <CloseIcon className='h-6 w-6 stroke-slate-500' />
          </button>
          <img src={logo.src} className='size-8' />
        </div>
        <nav className='relative z-10 text-sm 2xl:text-base'>
          {menus.map(({ title, subMenus, group }) => (
            <ul
              role='menubar'
              key={group}
              className='flex flex-col gap-4 pt-4 lg:pt-5'
            >
              <li role='none'>
                <h2 className='font-medium capitalize text-slate-900'>{title}</h2>
                <ul
                  className='mt-2 space-y-2 border-l-2 border-slate-100'
                  role='menu'
                  aria-label={title}
                >
                  {subMenus.map(menu => (
                    <li role='menuitem' className='relative ps-4' key={menu.route}>
                      <Link
                        className={clsx(
                          'after:absolute after:-left-[1px] after:top-1/2 after:size-1.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full hover:after:block',
                          pathname !== menu.route
                            ? 'text-slate-500 after:hidden after:bg-slate-300 hover:text-slate-600'
                            : 'text-sky-500 after:block after:bg-sky-500',
                          'block py-1 lg:py-1.5',
                        )}
                        onClick={onClose}
                        href={menu.route}
                      >
                        {menu.title}
                        {menu.subTitle ? ` ${menu.subTitle}` : ''}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default React.forwardRef(Nav);
