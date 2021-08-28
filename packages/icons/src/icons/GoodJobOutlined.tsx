import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../type';
import '../style';

const GoodJobOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg {...props} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M341.220352 398.246912c17.26976-6.244352 29.75232-11.569152 37.44768-15.9744 21.505024-12.312576 39.745536-29.079552 54.720512-50.300928 22.723584-32.201728 26.955776-47.039488 51.61984-137.167872 1.619968-5.922816 4.880384-14.014464 9.7792-24.274944 22.669312-37.996544 54.940672-56.951808 96.813056-56.864768 40.452096 0 72.810496 18.95424 97.0752 56.864768 6.047744 10.46528 10.329088 22.153216 12.843008 35.06688 2.514944 12.91264 2.514944 27.74016 0 44.48256l-44.780544 156.270592c-0.792576 2.480128-0.792576 4.291584 0 5.436416 0.854016 1.232896 2.100224 1.849344 3.739648 1.849344h136.04352l-0.150528 0.316416h17.739776c52.799488 0 96 41.6 96 94.399488 0 8.000512-1.600512 16-3.2 24.000512l-47.879168 305.759232c-9.6 41.6-48 72.000512-92.8 72.000512H170.553344c-31.419392 0-56.889344-25.469952-56.889344-56.889344v-398.22336c0-31.418368 25.469952-56.88832 56.889344-56.88832h170.667008v0.137216z m0 62.841856v392.132608h424.35584c14.400512 0 27.200512-9.6 30.400512-23.999488 38.163456-203.78112 57.244672-310.204416 57.244672-319.270912 0-17.600512-14.399488-32-32-32h-55.215104l-0.280576 0.591872H662.10816c-22.842368 0-40.967168-7.847936-54.3744-23.544832-20.110336-23.543808-18.884608-44.239872-11.570176-70.516736 16.66048-59.84768 30.769152-111.65696 42.330112-155.429888-0.334848-30.70976-14.444544-48.01024-42.330112-51.90144-27.884544-3.8912-46.319616 11.464704-55.305216 46.068736l-23.852032 82.64704c-27.285504 73.653248-80.637952 123.363328-160.05632 149.132288l-15.730688 6.090752zM170.553344 853.221376h113.777664v-398.22336H170.553344v398.22336z" />
  </svg>
);

const GoodJobOutlined = createIcon(GoodJobOutlinedSvgComponent, 'GoodJobOutlined');

export default GoodJobOutlined;
