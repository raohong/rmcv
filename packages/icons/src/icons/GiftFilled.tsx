import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../type';
import '../style';

const GiftFilledSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg {...props} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M478.69952 227.555328c-11.71456-33.142784-43.322368-56.88832-80.477184-56.88832-37.154816 0-68.763648 23.745536-80.478208 56.88832H478.69952z m-219.854848 0c13.177856-64.91648 70.572032-113.77664 139.37664-113.77664 46.524416 0 87.830528 22.337536 113.778688 56.873984 25.94816-34.536448 67.254272-56.875008 113.777664-56.875008 68.805632 0 126.199808 48.861184 139.37664 113.777664h88.178688c31.419392 0 56.889344 25.469952 56.889344 56.889344v170.665984c0 31.419392-25.469952 56.889344-56.889344 56.889344v341.332992c0 31.419392-25.469952 56.889344-56.88832 56.889344H227.555328c-31.418368 0-56.88832-25.469952-56.88832-56.889344V512c-31.419392 0-56.889344-25.469952-56.889344-56.889344V284.444672c0-31.419392 25.469952-56.889344 56.889344-56.889344h88.177664z m286.455808 0h160.955392c-11.71456-33.142784-43.323392-56.88832-80.478208-56.88832s-68.762624 23.745536-80.477184 56.88832z m-90.189824 0V910.22336h113.778688V227.555328H455.110656z" />
  </svg>
);

const GiftFilled = createIcon(GiftFilledSvgComponent, 'GiftFilled');

export default GiftFilled;
