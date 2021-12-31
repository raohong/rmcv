import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';
import '../style';

const TvOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M170.667008 113.777664h682.665984c31.460352 0 56.889344 25.428992 56.889344 56.889344v512c0 31.459328-25.428992 56.88832-56.889344 56.88832H540.444672v113.777664h170.665984c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672H312.889344c-15.710208 0-28.444672-12.735488-28.444672-28.444672s12.734464-28.444672 28.444672-28.444672h170.665984v-113.77664H170.667008c-31.460352 0-56.889344-25.430016-56.889344-56.889344v-512c0-31.460352 25.428992-56.889344 56.889344-56.889344z m0 568.889344h682.665984v-512H170.667008v512z m461.11744-248.138752l-192.397312 96.198656c-14.050304 7.02464-31.136768 1.330176-38.162432-12.721152a28.444672 28.444672 0 0 1-3.002368-12.720128V312.889344c0-15.710208 12.734464-28.444672 28.444672-28.444672 4.415488 0 8.77056 1.028096 12.720128 3.002368l192.396288 96.198656c14.051328 7.02464 19.746816 24.111104 12.721152 38.162432a28.444672 28.444672 0 0 1-12.721152 12.720128z" />
  </svg>
);

const TvOutlined = createIcon(TvOutlinedSvgComponent, 'TvOutlined');

export default TvOutlined;
