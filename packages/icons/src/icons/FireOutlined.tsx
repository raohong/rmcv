import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const FireOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M881.777664 657.979392c0-68.33664-26.144768-133.638144-70.122496-193.550336a470.111232 470.111232 0 0 0-48.028672-55.687168c-20.472832 26.892288-39.94112 45.9008-54.607872 57.1392-21.163008 16.218112-51.003392-2.977792-45.02016-28.959744 29.174784-126.6944-13.152256-221.017088-103.144448-290.709504-25.1392-19.469312-52.204544-35.410944-79.2576-48.001024a473.81504 473.81504 0 0 0-2.394112-1.10592c-16.151552 106.058752-65.24928 165.267456-176.601088 252.08832l-2.79552 2.180096C179.939328 444.827648 142.22336 499.06688 142.22336 625.77664c0 122.462208 81.90976 221.529088 220.367872 285.55776-44.795904-72.400896-58.544128-141.91616-44.4416-207.535104 12.332032-57.380864 44.91264-107.523072 91.078656-150.63552 20.478976-19.125248 42.326016-35.607552 64.192512-49.48992 13.244416-8.40704 23.729152-14.168064 30.108672-17.26464 26.253312-12.741632 52.378624 17.59232 35.88608 41.66656-0.308224 0.45056-1.598464 2.886656-3.140608 7.12704-15.212544 41.82016-0.39936 98.715648 75.639808 171.575296 57.79456 59.05408 67.264512 131.65568 30.779392 213.351424 161.084416-77.031424 239.084544-164.864 239.084544-262.151168zM735.127552 350.478336c9.156608-14.034944 28.399616-17.152 41.519104-6.725632 5.4784 4.354048 14.49984 12.254208 25.888768 23.45984a526.482432 526.482432 0 0 1 54.980608 63.553536c50.568192 68.892672 81.150976 145.275904 81.150976 227.213312 0 134.273024-108.817408 245.459968-319.848448 335.302656l-11.14112 2.27328h-24.496128c-22.93248 0-36.438016-25.74336-23.40352-44.611584 60.16-87.083008 62.440448-152.301568 12.130304-203.727872-65.906688-63.133696-95.14496-122.631168-97.600512-174.758912a369.16736 369.16736 0 0 0-26.252288 22.285312c-38.344704 35.80928-64.6912 76.355584-74.288128 121.010176-14.788608 68.814848 10.40384 145.722368 87.768064 232.420352 16.3584 18.331648 3.346432 47.382528-21.223424 47.382528h-13.6448l-8.994816-1.4592C214.667264 926.42816 85.332992 797.39904 85.332992 625.77664c0-148.26496 47.17568-216.105984 179.493888-319.268864l2.794496-2.178048c112.551936-87.7568 150.580224-138.491904 159.1296-249.623552 1.400832-18.212864 19.360768-30.40256 36.804608-24.98048 8.850432 2.751488 23.496704 8.27392 42.04544 16.90624 30.676992 14.278656 61.34272 32.339968 90.085376 54.59968 83.607552 64.748544 133.623808 150.217728 134.378496 256.804864 1.69984-2.473984 3.388416-4.994048 5.062656-7.559168z" />
  </svg>
);

const FireOutlined = createIcon(FireOutlinedSvgComponent, 'FireOutlined');

export default FireOutlined;
