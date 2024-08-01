import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const BookmarkFilledSvgComponent: React.FC<IconComponentProps> = props => (
  <svg
    {...props}
    viewBox='0 0 1024 1024'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M341.332992 398.222336c0 94.256128 76.41088 170.667008 170.667008 170.667008s170.667008-76.41088 170.667008-170.667008c0-15.709184-12.735488-28.444672-28.444672-28.444672s-28.444672 12.735488-28.444672 28.444672C625.777664 461.060096 574.83776 512 512 512s-113.777664-50.939904-113.777664-113.777664c0-15.709184-12.735488-28.444672-28.444672-28.444672s-28.444672 12.735488-28.444672 28.444672zM227.556352 56.889344h568.88832c31.418368 0 56.88832 25.469952 56.88832 56.88832v794.779648c0 31.419392-25.469952 56.889344-56.88832 56.889344a56.889344 56.889344 0 0 1-35.934208-12.785664l-212.48-173.121536c-20.918272-17.043456-50.930688-17.047552-71.85408-0.01024L263.4752 952.71936c-24.364032 19.837952-60.196864 16.16896-80.03584-8.194048a56.889344 56.889344 0 0 1-12.773376-35.919872V113.77664c0-31.418368 25.469952-56.88832 56.88832-56.88832z' />
  </svg>
);

const BookmarkFilled = createIcon(BookmarkFilledSvgComponent, 'BookmarkFilled');

export default BookmarkFilled;
