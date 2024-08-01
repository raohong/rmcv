import { useRouter } from 'next/router';
import type { PropsWithChildren } from 'react';
import { useMemo, useState } from 'react';
import type { INavigationMenu } from '../../scripts/docs';
import FloatDemo from './FloatDemo';
import Header from './Header';
import Nav from './Nav';
import Prose from './Prose';
import { DemoComponentContext } from './context';

const Layout = ({
  children,
  navigationMenus,
}: PropsWithChildren<{
  navigationMenus: INavigationMenu[];
}>) => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const { asPath } = useRouter();

  const matched = asPath.match(/components\/([^/]+)/);
  const componentName = matched?.[1];
  const demoMenu = navigationMenus
    .map(item => item.menus.map(v => v.subMenus).flat())
    .flat()
    .find(item => item.route === asPath);

  const allMenus = navigationMenus.map(item => item.menus).flat();
  const currentCategory = allMenus.find(v => v.subMenus.find(menu => menu.route === asPath))?.title;

  const value = useMemo(() => ({ demoComponentName: componentName, demoRoute: demoMenu?.demoRoute }), [
    componentName,
    demoMenu?.demoRoute,
  ]);

  return (
    <DemoComponentContext.Provider
      value={value}
    >
      <section className='flex min-h-dvh flex-col font-sans text-base'>
        <Header
          menus={navigationMenus.map(item => ({
            route: item.menus[0].subMenus[0].route,
            title: item.title,
          }))}
          onOpenNav={() => setIsOpenNav(true)}
        />
        <article className='flex w-full px-4 lg:mx-auto lg:max-w-[120rem]'>
          <Nav
            open={isOpenNav}
            onClose={() => setIsOpenNav(false)}
            data={navigationMenus}
            className='flex-shrink-0'
          />
          <main className='flex-1 overflow-x-hidden bg-white md:px-2 py-8 md:py-16'>
            <Prose>
              {currentCategory && <p className='font-display text-sm font-medium text-sky-500'>{ currentCategory}</p>}
              {children}
            </Prose>
          </main>
          <FloatDemo />
        </article>
      </section>
    </DemoComponentContext.Provider>
  );
};

export default Layout;
