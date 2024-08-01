import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const PointsOutlinedSvgComponent: React.FC<IconComponentProps> = props => (
  <svg
    {...props}
    viewBox='0 0 1024 1024'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M512 483.555328c-234.037248 0-426.667008-82.55488-426.667008-199.110656C85.332992 167.888896 277.962752 85.332992 512 85.332992c234.037248 0 426.667008 82.55488 426.667008 199.11168 0 116.555776-192.62976 199.110656-426.667008 199.110656z m0-56.88832c205.826048 0 369.777664-70.264832 369.777664-142.22336 0-71.95648-163.951616-142.221312-369.777664-142.221312-205.826048 0-369.777664 70.264832-369.777664 142.222336 0 71.95648 163.951616 142.222336 369.777664 142.222336zM204.24192 371.923968l24.38144 51.39968c-56.819712 26.95168-86.401024 59.247616-86.401024 88.676352 0 71.95648 163.951616 142.222336 369.777664 142.222336 205.826048 0 369.777664-70.264832 369.777664-142.222336 0-31.140864-33.158144-65.395712-95.87712-93.006848l22.921216-52.066304C889.915392 402.62656 938.667008 452.988928 938.667008 512c0 116.555776-192.62976 199.110656-426.667008 199.110656-234.037248 0-426.667008-82.55488-426.667008-199.110656 0-56.266752 44.3904-104.727552 118.908928-140.076032zM204.76928 599.230464l24.307712 51.433472c-57.10336 26.988544-86.85568 59.378688-86.85568 88.891392 0 71.957504 163.95264 142.22336 369.778688 142.22336s369.777664-70.265856 369.777664-142.22336c0-30.838784-32.512-64.74752-94.180352-92.254208l23.17312-51.954688c79.926272 35.649536 127.896576 85.680128 127.896576 144.20992 0 116.554752-192.62976 199.110656-426.667008 199.110656-234.037248 0-426.667008-82.55488-426.667008-199.11168 0-56.400896 44.599296-104.955904 119.436288-140.324864z' />
  </svg>
);

const PointsOutlined = createIcon(PointsOutlinedSvgComponent, 'PointsOutlined');

export default PointsOutlined;
