import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const RecordsOutlinedSvgComponent: React.FC<IconComponentProps> = props => (
  <svg
    {...props}
    viewBox='0 0 1024 1024'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M540.444672 113.777664H223.403008c-29.12768 0-52.736 23.609344-52.736 52.736v747.860992c0 29.12768 23.60832 52.736 52.736 52.736h520.30464c29.12768 0 52.736-23.60832 52.736-52.736V369.777664c0-15.700992-12.742656-28.444672-28.443648-28.444672s-28.444672 12.74368-28.444672 28.444672V910.22336h-512V170.667008h312.889344c15.700992 0 28.444672-12.74368 28.444672-28.444672 0-15.700992-12.74368-28.444672-28.444672-28.444672m-56.889344 568.889344H312.889344c-15.702016 0-28.444672 12.742656-28.444672 28.443648 0 15.702016 12.742656 28.444672 28.444672 28.444672h170.665984c15.702016 0 28.444672-12.742656 28.444672-28.444672 0-15.700992-12.742656-28.443648-28.444672-28.443648m0 113.77664H312.889344c-15.702016 0-28.444672 12.74368-28.444672 28.445696 0 15.700992 12.742656 28.443648 28.444672 28.443648h170.665984c15.702016 0 28.444672-12.742656 28.444672-28.443648 0-15.702016-12.742656-28.444672-28.444672-28.444672M744.390656 56.889344c-7.22432 0-14.505984 2.787328-20.08064 8.30464l-215.552 215.609344a30.078976 30.078976 0 0 0-7.794688 13.539328L471.552 404.081664c-5.006336 18.489344 9.329664 35.612672 27.193344 35.612672 2.445312 0 4.948992-0.340992 7.451648-1.024l109.681664-29.411328c5.12-1.366016 9.785344-4.03968 13.540352-7.793664l215.66464-215.552c11.037696-11.15136 11.037696-29.07136 0-40.164352l-80.610304-80.553984c-5.57568-5.51936-12.8-8.305664-20.082688-8.305664m0 68.72064l40.220672 40.220672-190.350336 190.35136-54.89664 14.733312 14.676992-54.953984 190.349312-190.35136' />
  </svg>
);

const RecordsOutlined = createIcon(RecordsOutlinedSvgComponent, 'RecordsOutlined');

export default RecordsOutlined;
