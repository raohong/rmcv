import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';

const FlagOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M715.155456 385.266688c-39.262208-10.346496-70.588416-27.63776-108.435456-55.95136-7.17312-5.36576-14.087168-10.71616-27.201536-20.928512-42.791936-33.16224-67.456-47.673344-103.824384-57.64096-39.800832-10.909696-81.45408-15.322112-125.215744-13.186048l-75.323392 281.109504c47.54432-1.4336 92.83584 3.124224 135.7824 13.795328 44.10368 10.957824 76.52352 30.015488 117.547008 63.42144 4.953088 4.03456 9.938944 8.174592 19.264512 15.945728 42.058752 34.922496 65.615872 49.005568 103.942144 57.897984 31.391744 7.283712 54.610944 8.503296 70.372352 5.57056l74.442752-277.825536c-27.159552-1.011712-54.306816-5.082112-81.350656-12.208128z m-457.79968 200.720384l-70.79936 258.535424c-4.840448 17.676288-23.095296 28.082176-40.771584 23.241728-17.677312-4.840448-28.0832-23.095296-23.241728-40.771584l63.432704-231.636992-0.084992 0.016384 100.478976-374.990848c7.46496-27.85792 32.065536-47.706112 60.87168-49.113088 50.68288-2.473984 99.34848 2.681856 145.9968 15.46752 111.604736 30.589952 149.420032 110.790656 238.829568 134.350848 51.16928 13.484032 102.321152 13.689856 153.453568 0.6144L778.120192 722.52928c-31.331328 22.510592-78.47424 26.462208-141.42976 11.854848-118.598656-27.517952-147.074048-113.98144-241.757184-137.506816-42.684416-10.605568-88.544256-14.235648-137.577472-10.889216z" />
  </svg>
);

const FlagOutlined = createIcon(FlagOutlinedSvgComponent, 'FlagOutlined');

export default FlagOutlined;
