import React from 'react';
import type { IconComponentProps } from '../interface';
import '../style/index.less';
import createIcon from '../utils/createIcon';

const VideoOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M170.667008 170.667008v682.665984h682.665984V170.667008H170.667008z m0-56.889344h682.665984c31.419392 0 56.889344 25.469952 56.889344 56.889344v682.665984c0 31.419392-25.469952 56.889344-56.889344 56.889344H170.667008c-31.419392 0-56.889344-25.469952-56.889344-56.889344V170.667008c0-31.419392 25.469952-56.889344 56.889344-56.889344zM170.667008 284.444672h682.665984v56.88832H170.667008zM631.783424 622.775296L439.38816 718.972928c-14.050304 7.02464-31.136768 1.3312-38.162432-12.721152a28.444672 28.444672 0 0 1-3.002368-12.720128V501.13536c0-15.709184 12.734464-28.444672 28.444672-28.444672 4.415488 0 8.77056 1.028096 12.720128 3.003392l192.396288 96.197632c14.051328 7.02464 19.746816 24.111104 12.721152 38.162432a28.444672 28.444672 0 0 1-12.721152 12.721152z m-62.89408-25.442304l-113.778688-56.88832v113.77664l113.778688-56.88832zM284.444672 170.667008h56.88832l57.2416 113.77664h-56.889344zM455.110656 170.667008H512l57.2416 113.77664h-56.889344zM625.777664 170.667008h56.889344l57.2416 113.77664H683.01824z" />
  </svg>
);

const VideoOutlined = createIcon(VideoOutlinedSvgComponent, 'VideoOutlined');

export default VideoOutlined;
