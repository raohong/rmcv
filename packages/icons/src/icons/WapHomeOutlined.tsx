import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';
import '../style';

const WapHomeOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M549.02272 108.048384l358.114304 306.95424c11.927552 10.223616 13.308928 28.18048 3.085312 40.108032s-28.18048 13.308928-40.108032 3.085312l-16.781312-14.383104v409.520128c0 31.419392-25.515008 56.89344-56.99072 56.89344h-170.56768c-31.475712 0-56.99072-25.474048-56.99072-56.89344V682.667008l-114.236416-0.004096 0.028672 170.674176c0 31.418368-25.516032 56.88832-56.991744 56.88832H227.657728c-31.475712 0-56.99072-25.473024-56.99072-56.892416V443.81184l-16.781312 14.384128c-11.927552 10.223616-29.884416 8.84224-40.108032-3.085312-10.223616-11.926528-8.84224-29.884416 3.085312-40.108032l358.11328-306.95424c21.305344-18.260992 52.742144-18.260992 74.046464 0zM512 151.240704l-284.343296 243.72224v458.37312h169.928704l-0.028672-170.665984c-0.004096-31.418368 25.50784-56.892416 56.988672-56.895488l114.23744 0.003072c31.475712 0 56.991744 25.469952 56.991744 56.889344v170.67008h170.56768V394.962944L512 151.240704z" />
  </svg>
);

const WapHomeOutlined = createIcon(
  WapHomeOutlinedSvgComponent,
  'WapHomeOutlined',
);

export default WapHomeOutlined;
