import React from 'react';
import type { IconComponentProps } from '../interface';
import '../style/index.less';
import createIcon from '../utils/createIcon';

const MusicFilledSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M512 56.889344c251.35104 0 455.110656 203.759616 455.110656 455.110656S763.35104 967.110656 512 967.110656 56.889344 763.35104 56.889344 512 260.64896 56.889344 512 56.889344z m30.036992 170.665984h-3.18464c-13.76768 0-24.576 10.467328-26.226688 23.665664-0.05632 0.683008-0.284672 1.195008-0.340992 1.878016-0.057344 0.454656-0.284672 0.852992-0.284672 1.307648v341.618688c-14.961664-7.964672-31.686656-12.914688-49.777664-12.914688h-71.11168c-58.88 0-106.665984 47.787008-106.665984 106.667008s47.785984 106.667008 106.665984 106.667008h71.11168c58.88 0 106.667008-47.787008 106.667008-106.667008 0-2.446336-0.569344-4.721664-0.740352-7.110656h0.740352V305.26464l76.34432 44.089344a28.326912 28.326912 0 0 0 14.164992 3.811328c9.842688 0 19.39968-5.12 24.633344-14.222336 7.907328-13.596672 3.243008-31.004672-10.353664-38.912l-116.451328-67.185664c-4.380672-3.072-9.387008-5.291008-15.190016-5.291008zM462.22336 640C489.643008 640 512 662.356992 512 689.777664s-22.356992 49.777664-49.777664 49.777664h-71.11168c-27.419648 0-49.77664-22.356992-49.77664-49.77664 0-27.421696 22.356992-49.778688 49.77664-49.778688h71.11168z" />
  </svg>
);

const MusicFilled = createIcon(MusicFilledSvgComponent, 'MusicFilled');

export default MusicFilled;
