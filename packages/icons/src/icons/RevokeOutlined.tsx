import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';

const RevokeOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M390.233088 434.658304c9.874432 9.874432 10.971136 25.20064 3.29216 36.287488l-3.29216 3.939328c-9.873408 9.873408-25.20064 10.971136-36.286464 3.291136l-3.940352-3.291136-170.667008-170.668032-2.132992-2.382848-2.40128-3.521536-1.657856-3.365888-1.193984-3.55328-0.63488-3.076096-0.206848-1.777664-0.103424-3.035136c0.03072-1.206272 0.13312-2.410496 0.310272-3.605504l-0.310272 4.204544 0.160768-3.039232 0.784384-4.2496 1.765376-4.847616 2.3296-4.036608 2.61632-3.241984L350.006272 93.323264c11.108352-11.108352 29.118464-11.108352 40.226816 0 9.874432 9.874432 10.971136 25.20064 3.29216 36.287488l-3.29216 3.939328-122.172416 122.109952h231.76704c195.181568 0 353.850368 152.56576 353.850368 341.33504 0 184.573952-151.69536 334.53568-340.893696 341.10976l-12.956672 0.22528H199.452672C183.743488 938.329088 171.008 925.5936 171.008 909.88544c0-13.964288 10.061824-25.578496 23.33184-27.98592l5.112832-0.458752h300.37504c164.251648 0 296.961024-127.60576 296.961024-284.44672 0-152.817664-125.991936-277.88288-284.3904-284.194816l-12.570624-0.25088H268.060672l122.17344 122.109952z" />
  </svg>
);

const RevokeOutlined = createIcon(RevokeOutlinedSvgComponent, 'RevokeOutlined');

export default RevokeOutlined;
