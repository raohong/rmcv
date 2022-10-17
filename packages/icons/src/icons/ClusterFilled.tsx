import React from 'react';
import type { IconComponentProps } from '../interface';
import '../style/index.less';
import createIcon from '../utils/createIcon';

const ClusterFilledSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M540.444672 341.332992v86.411264c151.99232 11.561984 278.300672 115.011584 323.497984 254.922752h46.27968c31.418368 0 56.88832 25.469952 56.88832 56.88832v113.777664c0 31.419392-25.469952 56.889344-56.88832 56.889344H796.444672c-31.419392 0-56.889344-25.469952-56.889344-56.889344v-113.77664c0-31.419392 25.469952-56.889344 56.889344-56.889344h7.114752c-42.225664-108.12416-142.861312-186.998784-263.114752-197.8368v197.8368h28.444672c31.418368 0 56.88832 25.469952 56.88832 56.88832v113.777664c0 31.419392-25.469952 56.889344-56.88832 56.889344H455.110656c-31.418368 0-56.88832-25.469952-56.88832-56.889344v-113.77664c0-31.419392 25.469952-56.889344 56.88832-56.889344h28.444672v-197.8368c-120.25344 10.838016-220.889088 89.71264-263.114752 197.8368h7.114752c31.419392 0 56.889344 25.469952 56.889344 56.88832v113.777664c0 31.419392-25.469952 56.889344-56.889344 56.889344h-113.77664c-31.419392 0-56.889344-25.469952-56.889344-56.889344v-113.77664c0-31.419392 25.469952-56.889344 56.88832-56.889344h46.27968c45.197312-139.911168 171.505664-243.360768 323.497984-254.922752v-86.411264h-28.444672c-31.418368 0-56.88832-25.469952-56.88832-56.88832V170.667008c0-31.419392 25.469952-56.889344 56.88832-56.889344h113.778688c31.418368 0 56.88832 25.469952 56.88832 56.889344v113.77664c0 31.419392-25.469952 56.889344-56.88832 56.889344h-28.444672z" />
  </svg>
);

const ClusterFilled = createIcon(ClusterFilledSvgComponent, 'ClusterFilled');

export default ClusterFilled;
