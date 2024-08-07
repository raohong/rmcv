import { DocSearch } from '@docsearch/react';
import Link from 'next/link';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import logo from '../../public/favicon.png';

const GitHubIcon = (props: React.ComponentPropsWithoutRef<'svg'>) => (
  <svg aria-hidden='true' viewBox='0 0 16 16' {...props}>
    <path d='M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z' />
  </svg>
);

const MenuIcon = (props: React.ComponentPropsWithoutRef<'svg'>) => (
  <svg
    aria-hidden='true'
    viewBox='0 0 24 24'
    fill='none'
    strokeWidth='2'
    strokeLinecap='round'
    {...props}
  >
    <path d='M4 7h16M4 12h16M4 17h16'></path>
  </svg>
);

const Header = ({
  onOpenNav,
  menus,
}: {
  onOpenNav?: () => void;
  menus?: {
    route: string;
    title: string;
  }[];
}) => {
  const { asPath } = useRouter();

  const internalMenus = menus?.map((item) => {
    const active = item.route === '/' ? asPath === item.route : asPath.startsWith(item.route);

    return {
      ...item,
      active,
    };
  });
  return (
    <header className='sticky top-0 z-20 flex items-center justify-between bg-white/95 px-4 py-4 shadow-md backdrop-blur-md lg:px-8'>
      <div className='flex items-center'>
        <Link href='/' className='flex items-center gap-2 lg:gap-3'>
          <img src={logo.src} alt='rmc vant' className='size-7 object-contain' />
          <span className='hidden text-xl font-semibold capitalize tracking-widest text-slate-700 lg:inline-block'>
            RMC Vant
          </span>
        </Link>
        {internalMenus && (
          <nav className='ml-8 hidden items-center gap-4 text-base lg:flex'>
            {internalMenus.map(menu => (
              <Link
                key={menu.route}
                href={menu.route}
                className={clsx('hover:text-sky-500 focus-visible:outline-2 focus-visible:outline focus-visible:outline-offset-2 focus:outline-sky-500', menu.active && 'text-sky-500')}
              >
                {menu.title}
              </Link>
            ))}
          </nav>
        )}
      </div>
      <div className='flex items-center justify-end gap-3'>
        <DocSearch
          appId='CS973Y7UCU'
          apiKey='63810a110d013e2d611b3ea80dca3a3b'
          indexName='rmcv-ashy'
        />
        <Link
          href='https://github.com/raohong/rmcv.git'
          aria-label='GitHub'
          className='h-6 w-6 fill-gray-500 hover:fill-slate-600'
        >
          <GitHubIcon />
        </Link>
        <MenuIcon
          role='button'
          tabIndex={0}
          onClick={onOpenNav}
          className='size-6 stroke-gray-500 lg:hidden'
        />
      </div>
    </header>
  );
};

export default Header;
