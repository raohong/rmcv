import React, { useRef } from 'react';
import { animated } from '@react-spring/web';
import { Swiper, Image, SwiperRef, Button, SwiperItem } from 'rmc-vant';

export default () => {
  const images = [
    'https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG91cnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1528127269322-539801943592?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dG91cnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1595614007536-6e6a8ef82139?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHRvdXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  ];

  const ref = useRef<SwiperRef>(null);

  return (
    <div>
      <Swiper loop autoplay>
        {images.map((item) => (
          <SwiperItem key={item}>
            <Image src={item} height={200} />
          </SwiperItem>
        ))}
      </Swiper>

      <Swiper ref={ref} loop>
        {images.map((item) => (
          <SwiperItem key={item}>
            <Image src={item} height={200} />
          </SwiperItem>
        ))}
      </Swiper>

      <Button
        type="primary"
        onClick={() => {
          ref.current?.prev();
        }}
      >
        PREV
      </Button>
      <Button
        type="primary"
        onClick={() => {
          ref.current?.next();
        }}
      >
        NEXT
      </Button>

      <h3>自定义 indicators</h3>

      <Swiper
        loop={false}
        renderIndicators={(progress) => (
          <div
            style={{
              position: 'absolute',
              bottom: 30,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 200,
              backgroundColor: '#fff',
              borderRadius: 5,
            }}
          >
            <animated.div
              style={{
                height: 10,
                borderRadius: 5,
                width: progress.to((val) => `${((val + 1) / images.length) * 100}%`),
                backgroundColor: '#1989fa',
              }}
            />
          </div>
        )}
      >
        {images.map((item) => (
          <SwiperItem key={item}>
            <Image src={item} height={200} />
          </SwiperItem>
        ))}
      </Swiper>
    </div>
  );
};
