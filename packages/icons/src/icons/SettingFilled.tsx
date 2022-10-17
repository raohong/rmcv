import React from 'react';
import type { IconComponentProps } from '../interface';
import '../style/index.less';
import createIcon from '../utils/createIcon';

const SettingFilledSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M612.46464 53.444608c96.596992 21.065728 182.080512 71.877632 246.370304 142.35648-21.47328 34.5088-23.7056 79.429632-1.964032 117.088256 21.763072 37.695488 61.83936 58.225664 102.503424 56.84224 14.265344 44.869632 21.958656 92.670976 21.958656 142.268416s-7.693312 97.398784-21.951488 142.27456c-40.670208-1.389568-80.74752 19.140608-102.510592 56.836096-21.742592 37.658624-19.510272 82.58048 1.96096 117.090304-64.28672 70.4768-149.77024 121.288704-246.366208 142.354432l-0.002048-0.012288c-19.13856-35.8912-56.948736-60.320768-100.463616-60.320768s-81.325056 24.428544-100.463616 60.320768l-0.001024 0.013312c-96.596992-21.066752-182.080512-71.878656-246.370304-142.35648 21.47328-34.5088 23.7056-79.430656 1.964032-117.08928-21.763072-37.695488-61.840384-58.225664-102.504448-56.84224C50.36032 609.399808 42.667008 561.598464 42.667008 512s7.693312-97.398784 21.951488-142.27456c40.670208 1.389568 80.74752-19.140608 102.510592-56.836096 21.742592-37.658624 19.510272-82.58048-1.96096-117.090304 64.28672-70.4768 149.77024-121.288704 246.367232-142.355456l0.002048 0.014336c19.13856 35.8912 56.947712 60.319744 100.462592 60.319744 43.358208 0 81.051648-24.252416 100.25472-59.931648zM512 398.222336c-62.83776 0-113.777664 50.939904-113.777664 113.777664S449.16224 625.777664 512 625.777664 625.777664 574.83776 625.777664 512 574.83776 398.222336 512 398.222336z" />
  </svg>
);

const SettingFilled = createIcon(SettingFilledSvgComponent, 'SettingFilled');

export default SettingFilled;
