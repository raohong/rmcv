import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const MusicOutlinedSvgComponent: React.FC<IconComponentProps> = props => (
  <svg
    {...props}
    viewBox='0 0 1024 1024'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M512 910.222336c-219.534336 0-398.222336-178.688-398.222336-398.222336S292.465664 113.777664 512 113.777664 910.222336 292.465664 910.222336 512 731.534336 910.222336 512 910.222336m0-853.332992c-251.334656 0-455.110656 203.776-455.110656 455.110656 0 251.334656 203.776 455.110656 455.110656 455.110656 251.334656 0 455.110656-203.776 455.110656-455.110656 0-251.334656-203.776-455.110656-455.110656-455.110656m-49.777664 682.665984h-71.11168c-27.419648 0-49.77664-22.356992-49.77664-49.77664 0-27.421696 22.356992-49.778688 49.77664-49.778688h71.11168C489.643008 640 512 662.356992 512 689.777664s-22.356992 49.777664-49.777664 49.777664M673.678336 300.032l-116.451328-67.185664c-4.380672-3.072-9.387008-5.291008-15.190016-5.291008H538.851328c-13.766656 0-24.576 10.467328-26.22464 23.665664-0.057344 0.683008-0.285696 1.195008-0.342016 1.878016-0.057344 0.454656-0.284672 0.852992-0.284672 1.307648v341.618688c-14.961664-7.964672-31.686656-12.914688-49.777664-12.914688h-71.11168c-58.88 0-106.665984 47.787008-106.665984 106.667008s47.785984 106.667008 106.665984 106.667008h71.11168c58.88 0 106.667008-47.787008 106.667008-106.667008 0-2.446336-0.569344-4.721664-0.740352-7.110656h0.740352V305.26464l76.34432 44.089344a28.326912 28.326912 0 0 0 14.164992 3.811328c9.842688 0 19.39968-5.12 24.633344-14.222336 7.907328-13.596672 3.243008-31.004672-10.353664-38.912' />
  </svg>
);

const MusicOutlined = createIcon(MusicOutlinedSvgComponent, 'MusicOutlined');

export default MusicOutlined;
