import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const AfterSaleOutlinedSvgComponent: React.FC<IconComponentProps> = props => (
  <svg
    {...props}
    viewBox='0 0 1024 1024'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M872.945664 670.112768l-51.80928-23.497728c-30.065664 66.290688-79.821824 121.71264-144.278528 158.925824C508.705792 902.623232 293.689344 845.010944 196.608 676.857856 99.52256 508.705792 157.136896 293.689344 325.289984 196.608 493.442048 99.52256 708.458496 157.136896 805.53984 325.289984l49.267712-28.444672C742.014976 101.48352 492.20608 34.547712 296.845312 147.339264 101.48352 260.132864 34.547712 509.94176 147.339264 705.302528c112.7936 195.361792 362.601472 262.2976 557.963264 149.506048 76.725248-44.29824 133.64224-109.728768 167.643136-184.695808zM705.302528 854.808576c76.725248-44.29824 133.64224-109.728768 167.643136-184.695808l-51.80928-23.497728c-30.065664 66.290688-79.821824 121.71264-144.278528 158.925824C508.705792 902.623232 293.689344 845.010944 196.608 676.857856 99.52256 508.705792 157.136896 293.689344 325.289984 196.608 493.442048 99.52256 708.458496 157.136896 805.53984 325.289984l49.267712-28.444672C742.014976 101.48352 492.20608 34.547712 296.845312 147.339264 101.48352 260.132864 34.547712 509.94176 147.339264 705.302528c112.7936 195.361792 362.601472 262.2976 557.963264 149.506048z m125.568-514.16576c15.709184 0 28.444672-12.735488 28.444672-28.444672s-12.735488-28.444672-28.444672-28.444672-28.444672 12.735488-28.444672 28.444672 12.735488 28.444672 28.444672 28.444672zM756.4288 618.853376l179.77344 80.039936a0.256 0.256 0 0 0 0.349184-0.3072l-43.772928-143.59552a0.256 0.256 0 0 0-0.35328-0.156672l-136.000512 63.553536a0.256 0.256 0 0 0 0.004096 0.46592zM621.96736 298.667008c13.604864 7.85408 18.266112 25.250816 10.411008 38.85568l-47.453184 82.190336h62.343168c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672H533.490688v56.88832h113.777664c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672H533.490688v113.777664c0 15.709184-12.734464 28.444672-28.443648 28.444672-15.710208 0-28.444672-12.735488-28.444672-28.444672l-0.001024-113.777664H362.82368c-15.710208 0-28.444672-12.735488-28.444672-28.444672s12.734464-28.444672 28.444672-28.444672h113.77664v-56.88832H362.82368c-15.710208 0-28.444672-12.735488-28.444672-28.444672s12.734464-28.444672 28.444672-28.444672h40.18176l-47.451136-82.190336c-7.776256-13.468672-3.284992-30.65344 10.006528-38.617088l0.405504-0.238592c13.604864-7.855104 31.000576-3.193856 38.85568 10.411008l63.875072 110.635008h50.537472l63.875072-110.635008c7.855104-13.604864 25.25184-18.266112 38.856704-10.411008z' />
  </svg>
);

const AfterSaleOutlined = createIcon(
  AfterSaleOutlinedSvgComponent,
  'AfterSaleOutlined',
);

export default AfterSaleOutlined;
