import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../type';
import '../style';

const DescendingFilledSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg {...props} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M769.340416 678.680576l67.331072-67.331072c16.662528-16.662528 43.677696-16.662528 60.340224 0 16.662528 16.661504 16.662528 43.676672 0 60.3392L760.374272 808.326144c-5.884928 7.56736-14.26432 13.101056-23.902208 15.366144-14.06976 3.529728-29.589504-0.206848-40.593408-11.210752-10.192896-10.19392-14.150656-24.261632-11.872256-37.464064V241.712128c0-23.564288 19.10272-42.667008 42.667008-42.667008s42.667008 19.10272 42.667008 42.667008v436.968448z m-612.179968-424.61184h369.77664c23.565312 0 42.667008 19.101696 42.667008 42.665984 0 23.564288-19.101696 42.667008-42.665984 42.667008H157.160448c-23.564288 0-42.667008-19.10272-42.667008-42.667008s19.10272-42.667008 42.667008-42.667008z m0 227.555328h369.77664c23.565312 0 42.667008 19.101696 42.667008 42.665984 0 23.564288-19.101696 42.667008-42.665984 42.667008H157.160448c-23.564288 0-42.667008-19.10272-42.667008-42.667008s19.10272-42.665984 42.667008-42.665984z m0 227.555328h369.77664c23.565312 0 42.667008 19.10272 42.667008 42.665984 0 23.564288-19.101696 42.667008-42.665984 42.667008H157.160448c-23.564288 0-42.667008-19.10272-42.667008-42.667008 0-23.563264 19.10272-42.665984 42.667008-42.665984z" />
  </svg>
);

const DescendingFilled = createIcon(DescendingFilledSvgComponent, 'DescendingFilled');

export default DescendingFilled;
