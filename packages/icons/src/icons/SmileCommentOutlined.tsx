import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../type';
import '../style';

const SmileCommentOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg {...props} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M349.821952 739.555328h503.51104V170.667008H170.667008v568.88832h113.77664V791.8592l65.378304-52.302848z m19.955712 56.889344l-142.222336 113.77664v-113.77664h-56.88832c-31.419392 0-56.889344-25.469952-56.889344-56.889344V170.667008c0-31.419392 25.469952-56.889344 56.889344-56.889344h682.665984c31.419392 0 56.889344 25.469952 56.889344 56.889344v568.88832c0 31.419392-25.469952 56.889344-56.889344 56.889344H369.777664zM676.49536 455.110656h0.0768c0 94.257152-75.044864 170.667008-167.61856 170.667008-92.457984 0-167.432192-76.219392-167.61856-170.314752v-0.142336c0-15.709184 12.734464-28.444672 28.443648-28.444672 15.639552 0 28.331008 12.621824 28.443648 28.234752 0 63.065088 49.80736 113.778688 110.731264 113.778688 60.2624 0 109.648896-49.619968 110.712832-111.731712a28.874752 28.874752 0 0 1-0.059392-1.84832c0-15.710208 12.734464-28.444672 28.444672-28.444672 15.642624 0 28.337152 12.627968 28.443648 28.246016zM369.77664 284.444672c15.709184 0 28.444672 12.734464 28.444672 28.444672 0 15.70816-12.735488 28.443648-28.444672 28.443648s-28.444672-12.734464-28.444672-28.443648c0-15.710208 12.735488-28.444672 28.444672-28.444672z m284.444672 0c15.709184 0 28.444672 12.734464 28.444672 28.444672 0 15.70816-12.735488 28.443648-28.444672 28.443648s-28.444672-12.734464-28.444672-28.443648c0-15.710208 12.735488-28.444672 28.444672-28.444672z" />
  </svg>
);

const SmileCommentOutlined = createIcon(SmileCommentOutlinedSvgComponent, 'SmileCommentOutlined');

export default SmileCommentOutlined;
