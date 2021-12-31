import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';
import '../style';

const FriendsFilledSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M627.305472 113.777664c109.966336 0 199.11168 89.145344 199.11168 199.11168 0 79.837184-46.989312 148.70016-114.82112 180.441088v-0.013312c146.973696 38.060032 255.514624 171.58144 255.514624 330.45504l-0.003072-0.47104 0.003072 0.47104c0 15.70816-12.734464 28.443648-28.443648 28.443648H312.889344l-0.47104-0.003072c-15.49312-0.251904-27.973632-12.889088-27.973632-28.440576l0.045056-5.645312c2.547712-157.09184 111.219712-288.387072 257.447936-325.315584l0.002048 0.012288c-67.252224-31.963136-113.74592-100.519936-113.74592-179.934208 0-109.96736 89.145344-199.11168 199.11168-199.11168z m-227.80928 66.184192c9.293824 0 18.409472 0.763904 27.287552 2.233344-25.996288 36.982784-41.255936 82.056192-41.255936 130.69312 0 67.386368 29.563904 129.440768 78.27456 171.784192-123.872256 53.94944-210.394112 172.865536-220.939264 310.652928l-105.381888 0.002048-0.392192-0.003072c-12.909568-0.20992-23.31136-10.740736-23.31136-23.70048l0.037888-4.704256c2.122752-130.911232 92.683264-240.323584 214.541312-271.096832l0.001024 0.01024c-56.04352-26.63424-94.788608-83.765248-94.788608-149.94432 0-91.638784 74.288128-165.926912 165.925888-165.926912z" />
  </svg>
);

const FriendsFilled = createIcon(FriendsFilledSvgComponent, 'FriendsFilled');

export default FriendsFilled;
