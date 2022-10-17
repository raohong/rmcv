import { animated } from '@react-spring/web';
import { DemoBlock } from '@rmc-vant/demo';
import React, { useRef } from 'react';
import { Button, Image, Swiper, SwiperItem, SwiperRef } from 'rmc-vant';

const Block: React.FC = ({ children }) => {
  return (
    <div
      style={{
        color: '#fff',
        fontSize: 20,
        lineHeight: '150px',
        textAlign: 'center',
        backgroundColor: '#39a9ed',
        userSelect: 'none',
      }}
    >
      {children}
    </div>
  );
};

export default () => {
  const images = [
    'https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG91cnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1528127269322-539801943592?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dG91cnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1595614007536-6e6a8ef82139?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHRvdXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  ];

  const ref = useRef<SwiperRef>(null);

  return (
    <>
      <DemoBlock title="基础用法">
        <Swiper>
          {images.map((item, index) => (
            <SwiperItem key={item}>
              <Block>{index + 1}</Block>
            </SwiperItem>
          ))}
        </Swiper>
      </DemoBlock>

      <DemoBlock title="监听 change 事件">
        <Swiper
          onChange={(index) => {
            console.log('Swiper Index :', index);
          }}
        >
          {images.map((item, index) => (
            <SwiperItem key={item}>
              <Block>{index + 1}</Block>
            </SwiperItem>
          ))}
        </Swiper>
      </DemoBlock>
      <DemoBlock title="纵向滚动">
        <Swiper vertical height={150}>
          {images.map((item, index) => (
            <SwiperItem key={item}>
              <Block>{index + 1}</Block>
            </SwiperItem>
          ))}
        </Swiper>
      </DemoBlock>

      <DemoBlock title="自定义滑块大小">
        <Swiper width={300}>
          {images.map((item, index) => (
            <SwiperItem key={item}>
              <Block>{index + 1}</Block>
            </SwiperItem>
          ))}
        </Swiper>
      </DemoBlock>

      <DemoBlock title="自定义指示器">
        <Swiper
          loop={false}
          renderIndicators={(progress) => (
            <div
              style={{
                position: 'absolute',
                bottom: 30,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 50,
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                borderRadius: 5,
              }}
            >
              <animated.div
                style={{
                  height: 3,
                  borderRadius: 5,
                  width: progress.to(
                    (val) => `${((val + 1) / images.length) * 100}%`,
                  ),
                  backgroundColor: '#fff',
                }}
              />
            </div>
          )}
        >
          {images.map((item, index) => (
            <SwiperItem key={item}>
              <Block>{index + 1}</Block>
            </SwiperItem>
          ))}
        </Swiper>
      </DemoBlock>
    </>
  );
};
