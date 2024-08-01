import Layout from '@/components/Layout';
import MobileDemoLayout from '@/components/MobileDemoLayout';
import '@docsearch/css';
import { CacheProvider, createEmotionCache } from '@rmc-vant/system';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ConfigProvider } from 'rmc-vant';
import { I18nProvider } from '../../locales';
import type { INavigationMenu } from '../../scripts/docs';
import navigationMenus from '../navigation.json';
import '../style/public.css';

const inter = Inter({ subsets: ['latin'] });

const cache = createEmotionCache({ key: 'rmc-vant' });

const CustomApp = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter();
  const InternalLayout
    // @ts-ignore
    = Component.layout === 'mobile-demo' ? MobileDemoLayout : Layout;

  return (
    <I18nProvider locale={pageProps.locale}>
      <main className={inter.className}>
        <Head>
          <meta
            name='viewport'
            content='width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, viewport-fit=cover'
          />
        </Head>
        <CacheProvider value={cache}>
          <ConfigProvider>
            <InternalLayout
              navigationMenus={
                navigationMenus[
                  locale as keyof typeof navigationMenus
                ] as INavigationMenu[]
              }
            >
              <Component {...pageProps} />
            </InternalLayout>
          </ConfigProvider>
        </CacheProvider>
      </main>
    </I18nProvider>
  );
};

export default CustomApp;
