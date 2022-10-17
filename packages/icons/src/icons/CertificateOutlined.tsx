import React from 'react';
import type { IconComponentProps } from '../interface';
import '../style/index.less';
import createIcon from '../utils/createIcon';

const CertificateOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M906.715136 458.913792A401.88928 401.88928 0 0 1 910.222336 512c0 219.931648-178.290688 398.222336-398.222336 398.222336-219.931648 0-398.222336-178.290688-398.222336-398.222336 0-219.931648 178.290688-398.222336 398.222336-398.222336 61.83936 0 120.38656 14.09536 172.604416 39.24992l-24.68864 51.2512c-45.7216-22.023168-95.936512-33.611776-147.915776-33.611776-188.51328 0-341.332992 152.819712-341.332992 341.332992 0 188.51328 152.819712 341.332992 341.332992 341.332992 188.51328 0 341.332992-152.819712 341.332992-341.332992 0-15.353856-1.009664-30.5664-3.009536-45.574144l56.39168-7.512064zM673.942528 207.845376c-15.710208 0-28.444672-12.734464-28.444672-28.444672 0-15.709184 12.734464-28.443648 28.444672-28.443648 15.70816 0 28.443648 12.734464 28.443648 28.443648 0 15.710208-12.734464 28.444672-28.443648 28.444672z m204.68224 285.375488c-15.709184 0-28.444672-12.734464-28.444672-28.443648 0-15.710208 12.735488-28.444672 28.444672-28.444672s28.444672 12.734464 28.444672 28.444672c0 15.70816-12.735488 28.443648-28.444672 28.443648z m-531.217408-24.585216c-7.10144-7.090176-8.249344-18.11456-1.990656-26.005504l14.635008-18.448384c5.998592-7.563264 17.219584-9.46176 25.14944-4.16768l126.665728 84.54144c6.6816 4.45952 18.180096 3.878912 24.418304-1.18272l334.702592-271.543296c7.522304-6.10304 19.306496-5.582848 25.901056 1.001472l8.2432 8.23296c7.176192 7.163904 6.653952 18.536448-0.867328 26.046464L545.031168 625.81248c-11.17696 11.160576-29.52704 10.672128-41.03168-0.816128L347.406336 468.635648z" />
  </svg>
);

const CertificateOutlined = createIcon(
  CertificateOutlinedSvgComponent,
  'CertificateOutlined',
);

export default CertificateOutlined;
