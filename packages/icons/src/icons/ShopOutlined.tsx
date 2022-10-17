import React from 'react';
import type { IconComponentProps } from '../interface';
import '../style/index.less';
import createIcon from '../utils/createIcon';

const ShopOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M804.45952 198.769664c26.104832 0 48.859136 17.7664 55.190528 43.091968l35.75808 143.030272c9.622528 20.4032 14.702592 42.79296 14.702592 65.815552 0 48.293888-22.170624 91.409408-56.889344 119.724032V895.66208c0 23.564288-19.10272 42.667008-42.667008 42.667008H213.219328c-23.563264 0-42.665984-19.10272-42.665984-42.667008V570.431488C135.8336 542.117888 113.664 499.001344 113.664 450.707456c0-23.021568 5.07904-45.412352 14.702592-65.815552l35.75808-143.030272c6.331392-25.325568 29.085696-43.091968 55.190528-43.091968h585.14432z m-170.667008 346.7264c-28.254208 36.284416-72.353792 59.624448-121.905152 59.624448s-93.650944-23.340032-121.905152-59.625472c-28.254208 36.28544-72.353792 59.625472-121.905152 59.625472-14.063616 0-27.687936-1.880064-40.635392-5.402624V881.43872H796.33408V599.717888c-12.947456 3.52256-26.5728 5.402624-40.635392 5.402624-49.55136 0-93.650944-23.340032-121.905152-59.625472z m170.667008-289.837056h-585.14432l-37.269504 149.078016-0.397312 0.749568c-7.08608 13.5168-11.09504 28.900352-11.09504 45.21984 0 53.8624 43.66336 97.52576 97.523712 97.52576 53.322752 0 96.65024-42.795008 97.511424-95.911936l0.012288-1.6128h48.76288l0.012288 1.6128c0.861184 53.116928 44.188672 95.910912 97.511424 95.910912s96.65024-42.79296 97.511424-95.910912l0.012288-1.6128h48.76288l0.012288 1.6128c0.861184 53.116928 44.188672 95.910912 97.511424 95.910912 53.861376 0 97.523712-43.66336 97.523712-97.523712 0-16.320512-4.00896-31.704064-11.09504-45.220864l-0.397312-0.749568-37.269504-149.078016zM796.33408 84.992c15.70816 0 28.443648 12.735488 28.443648 28.444672s-12.734464 28.444672-28.443648 28.444672H227.44064c-15.70816 0-28.443648-12.735488-28.443648-28.444672S211.73248 84.992 227.44064 84.992H796.33408z" />
  </svg>
);

const ShopOutlined = createIcon(ShopOutlinedSvgComponent, 'ShopOutlined');

export default ShopOutlined;
