import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const AlipayFilledSvgComponent: React.FC<IconComponentProps> = props => (
  <svg
    {...props}
    viewBox='0 0 1024 1024'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M782.793728 113.777664c70.086656 0 127.428608 57.460736 127.428608 127.68768v413.384704S884.736 651.656192 770.051072 613.352448c-31.860736-11.172864-74.866688-27.136-122.652672-44.691456 28.672-49.475584 50.968576-106.93632 66.89792-167.586816h-157.696v-55.865344H749.34272v-31.921152H556.601344v-94.168064h-78.052352c-13.760512 0-14.3104 13.236224-14.332928 14.29504v81.46944H269.882368v31.922176h194.331648v54.265856H303.331328v31.920128h312.20736c-11.15136 39.904256-27.077632 76.611584-44.599296 110.130176-100.353024-33.518592-208.672768-60.647424-277.16608-43.091968-43.009024 11.169792-71.682048 30.323712-87.609344 49.477632-74.86464 90.975232-20.707328 229.834752 136.989696 229.834752 93.979648 0 184.773632-52.66944 254.860288-138.85952 103.02976 50.05312 303.966208 133.832704 311.9616 137.163776l0.24576 0.1024v4.7872c0 70.22592-57.341952 127.685632-127.42656 127.685632H241.20832c-70.08768 0-127.43168-57.459712-127.43168-127.685632v-541.07136c0-70.22592 57.344-127.68768 127.43168-127.68768z m-474.68544 432.5376c73.27744-7.979008 141.768704 20.750336 223.007744 60.653568-58.93632 73.416704-130.61632 119.7056-202.297344 119.7056-124.24704 0-160.883712-97.357824-98.75968-151.629824 20.70528-17.55648 57.345024-27.129856 78.04928-28.72832z' />
  </svg>
);

const AlipayFilled = createIcon(AlipayFilledSvgComponent, 'AlipayFilled');

export default AlipayFilled;
