import MobileNav from '@/components/MobileNav';
import { NextPage } from 'next';

const MobileNavPage: NextPage & {
  layout: boolean;
} = () => {
  return <></>
};


export default MobileNavPage;

// @ts-ignore
MobileNavPage.layout = 'mobile-demo'


