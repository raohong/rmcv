import React, { useState } from 'react';
import { Image, Button } from 'rmc-vant';

export default () => {
  const [i, set] = useState(2);

  const images = [
    'https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG91cnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1528127269322-539801943592?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dG91cnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1595614007536-6e6a8ef82139?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHRvdXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  ];

  return (
    <div>
      <Image fit="contain" src={images[0]} height={100} lazyLoad />
      <Image fit="scale-down" src={images[1]} height={100} lazyLoad />
      <Image src={images[i]} height={100} lazyLoad />

      <Button
        type="primary"
        onClick={() => {
          set((i + 1) % images.length);
        }}
      >
        CHANGE
      </Button>
    </div>
  );
};
