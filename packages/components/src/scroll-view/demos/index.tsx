import React from 'react';
import { animated } from '@react-spring/web';
import { ScrollView, Image } from 'rmc-vant';

export default () => {
  const images = [
    'https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG91cnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1528127269322-539801943592?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dG91cnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1595614007536-6e6a8ef82139?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHRvdXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG91cnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1528127269322-539801943592?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dG91cnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1595614007536-6e6a8ef82139?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHRvdXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  ];

  const width = 200;

  return (
    <ScrollView horizontal decay>
      {images.map((item, index) => {
        return (
          <animated.div key={index} draggable={false}>
            <Image src={item} width={width} height={300} />
          </animated.div>
        );
      })}
    </ScrollView>
  );
};
