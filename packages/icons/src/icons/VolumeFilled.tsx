import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const VolumeFilledSvgComponent: React.FC<IconComponentProps> = props => (
  <svg
    {...props}
    viewBox='0 0 1024 1024'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M525.835264 139.611136c18.944-11.377664 43.065344 2.275328 43.065344 24.404992V859.99616c0 22.129664-24.121344 35.782656-43.065344 24.404992L297.938944 747.639808c-8.818688-5.291008-18.944-8.07936-29.298688-8.07936H113.788928c-31.459328 0-56.88832-25.428992-56.88832-56.88832V341.34016c0-31.459328 25.428992-56.889344 56.88832-56.889344h154.851328c10.354688 0 20.48-2.787328 29.298688-8.134656z m259.441664 30.446592c11.094016-11.092992 29.12768-11.092992 40.220672 0 91.307008 91.363328 141.596672 212.822016 141.596672 341.95968 0 129.08032-50.289664 250.537984-141.596672 341.902336a28.3904 28.3904 0 0 1-20.139008 8.361984c-7.22432 0-14.505984-2.787328-20.08064-8.361984-11.094016-11.094016-11.094016-29.07136 0-40.220672 80.553984-80.611328 124.928-187.734016 124.928-301.681664 0-113.948672-44.374016-221.12768-124.928-301.739008-11.094016-11.092992-11.094016-29.126656 0-40.220672z m-120.718336 120.71936c11.094016-11.094016 29.12768-11.094016 40.220672 0 59.107328 59.049984 91.648 137.613312 91.648 221.24032 0 83.56864-32.540672 162.132992-91.648 221.184a28.3904 28.3904 0 0 1-20.139008 8.361984c-7.22432 0-14.505984-2.787328-20.08064-8.361984-11.094016-11.094016-11.094016-29.07136 0-40.220672 48.411648-48.299008 74.979328-112.58368 74.979328-180.963328 0-68.380672-26.56768-132.665344-74.980352-181.020672-11.092992-11.092992-11.092992-29.12768 0-40.220672z' />
  </svg>
);

const VolumeFilled = createIcon(VolumeFilledSvgComponent, 'VolumeFilled');

export default VolumeFilled;
