import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';
import '../style';

const DiamondOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M118.79424 415.399936l393.243648 433.903616 393.16992-433.820672-124.901376-187.927552H243.636224L118.79424 415.399936z m-51.597312 27.783168c-12.20096-13.438976-13.713408-32.3584-3.776512-47.244288l136.517632-205.410304c8.249344-12.341248 23.056384-19.878912 39.022592-19.861504h546.07872c15.98464 0 30.795776 7.569408 39.021568 19.946496l136.521728 205.410304c9.9328 14.881792 8.420352 33.80224-3.780608 47.244288L547.245056 895.17056c-8.653824 9.542656-21.602304 15.069184-35.265536 15.051776-13.662208-0.013312-26.59328-5.572608-35.2256-15.136768L67.196928 443.184128z m245.692416-101.850112h398.221312c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672H312.889344c-15.710208 0-28.444672-12.735488-28.444672-28.444672s12.734464-28.444672 28.444672-28.444672z" />
  </svg>
);

const DiamondOutlined = createIcon(
  DiamondOutlinedSvgComponent,
  'DiamondOutlined',
);

export default DiamondOutlined;
