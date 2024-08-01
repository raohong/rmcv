import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const FailureOutlinedSvgComponent: React.FC<IconComponentProps> = props => (
  <svg
    {...props}
    viewBox='0 0 1024 1024'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M796.444672 113.777664c31.418368 0 56.88832 25.469952 56.88832 56.889344v739.555328c0 31.418368-25.469952 56.88832-56.88832 56.88832H227.555328c-31.418368 0-56.88832-25.469952-56.88832-56.88832V170.667008c0-31.419392 25.469952-56.889344 56.88832-56.889344H398.22336v56.889344H227.555328v739.555328h568.889344V170.667008H625.77664V113.77664h170.667008z m-369.777664 0c-15.710208 0-28.444672 12.735488-28.444672 28.444672s12.734464 28.444672 28.444672 28.444672h170.665984c15.710208 0 28.444672-12.735488 28.444672-28.444672s-12.734464-28.444672-28.444672-28.444672H426.667008zM554.029056 512l63.044608 63.043584c11.606016 11.606016 11.606016 30.42304 0 42.03008-11.606016 11.606016-30.42304 11.606016-42.03008 0L512 554.029056l-63.945728 63.945728c-11.108352 11.108352-29.11744 11.108352-40.225792 0l-1.80224-1.80224c-11.109376-11.109376-11.109376-29.119488 0-40.226816L469.96992 512l-63.044608-63.043584c-11.606016-11.606016-11.606016-30.42304 0-42.03008 11.606016-11.606016 30.42304-11.606016 42.03008 0L512 469.970944l63.945728-63.945728c11.107328-11.108352 29.11744-11.108352 40.225792 0l1.80224 1.80224c11.109376 11.109376 11.109376 29.118464 0 40.226816L554.03008 512zM426.667008 56.889344h170.665984c47.128576 0 85.334016 38.20544 85.334016 85.332992 0 47.128576-38.20544 85.332992-85.334016 85.332992H426.667008c-47.128576 0-85.334016-38.20544-85.334016-85.332992 0-47.128576 38.20544-85.332992 85.334016-85.332992z' />
  </svg>
);

const FailureOutlined = createIcon(FailureOutlinedSvgComponent, 'FailureOutlined');

export default FailureOutlined;
