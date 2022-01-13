import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';
import '../style/index.less';

const SettingOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M232.57088 208.62976c12.62592 43.70432 7.553024 91.60704-16.17408 132.703232-23.74656 41.129984-62.74048 69.486592-106.942464 80.384-6.5536 29.3632-9.899008 59.579392-9.899008 90.283008s3.345408 60.919808 9.899008 90.281984c44.203008 10.898432 83.195904 39.25504 106.942464 80.384 23.72608 41.096192 28.798976 88.999936 16.173056 132.704256 44.756992 41.255936 98.0992 72.2176 156.326912 90.40384 31.541248-32.842752 75.60192-52.441088 123.103232-52.441088 47.501312 0 91.561984 19.598336 123.103232 52.441088 58.228736-18.18624 111.56992-49.147904 156.326912-90.40384-12.62592-43.70432-7.554048-91.60704 16.173056-132.703232 23.74656-41.129984 62.74048-69.486592 106.942464-80.384 6.5536-29.3632 9.899008-59.579392 9.899008-90.283008s-3.345408-60.919808-9.899008-90.281984c-44.203008-10.898432-83.195904-39.25504-106.942464-80.384-23.72608-41.096192-28.798976-88.999936-16.173056-132.704256-44.756992-41.255936-98.0992-72.2176-156.326912-90.40384-31.541248 32.842752-75.60192 52.441088-123.103232 52.441088-47.501312 0-91.561984-19.598336-123.103232-52.441088-58.228736 18.18624-111.56992 49.147904-156.326912 90.40384zM612.468736 53.444608c96.59392 21.066752 182.074368 71.877632 246.363136 142.353408-21.472256 34.509824-23.7056 79.43168-1.961984 117.091328 21.76512 37.697536 61.845504 58.228736 102.51264 56.84224 14.257152 44.873728 21.94944 92.672 21.94944 142.268416 0 49.595392-7.692288 97.394688-21.950464 142.26944-40.666112-1.38752-80.746496 19.14368-102.51264 56.84224-21.741568 37.658624-19.509248 82.58048 1.963008 117.090304-64.288768 70.475776-149.77024 121.286656-246.36416 142.353408-19.135488-35.899392-56.948736-60.33408-100.468736-60.33408-43.52 0-81.333248 24.434688-100.46976 60.33408-96.59392-21.066752-182.074368-71.877632-246.363136-142.353408 21.472256-34.509824 23.7056-79.43168 1.961984-117.091328-21.76512-37.697536-61.845504-58.228736-102.51264-56.84224C50.36032 609.395712 42.668032 561.59744 42.668032 512c0-49.595392 7.692288-97.394688 21.950464-142.26944 40.666112 1.38752 80.746496-19.14368 102.51264-56.84224 21.741568-37.658624 19.509248-82.58048-1.963008-117.090304 64.288768-70.475776 149.77024-121.286656 246.36416-142.353408 19.135488 35.899392 56.948736 60.33408 100.468736 60.33408 43.52 0 81.333248-24.434688 100.46976-60.33408zM512 341.332992c-94.256128 0-170.667008 76.41088-170.667008 170.667008S417.743872 682.667008 512 682.667008 682.667008 606.256128 682.667008 512 606.256128 341.332992 512 341.332992z m0 56.889344c62.83776 0 113.777664 50.939904 113.777664 113.777664S574.83776 625.777664 512 625.777664 398.222336 574.83776 398.222336 512 449.16224 398.222336 512 398.222336z" />
  </svg>
);

const SettingOutlined = createIcon(SettingOutlinedSvgComponent, 'SettingOutlined');

export default SettingOutlined;
