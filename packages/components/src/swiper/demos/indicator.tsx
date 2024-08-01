import { animated } from '@react-spring/web';
import type { PropsWithChildren } from 'react';
import { Swiper, SwiperItem } from 'rmc-vant';

const Box = ({
  children,
  index = 0,
}: PropsWithChildren<{
  index?: number;
}>) => {
  const colors = ['#66AAF9', '#AE7EDE', '#74DFA2', '#F871A0', '#FF95E1'];

  return (
    <div
      style={{
        height: 120,
        background: colors[index],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  );
};

export default () => (
  <Swiper
    loop={false}
    renderIndicators={progress => (
      <div
        style={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 50,
          backgroundColor: '#AE7EDE',
          borderRadius: 5,
        }}
      >
        <animated.div
          style={{
            height: 3,
            borderRadius: 5,
            width: progress.to(val => `${((val + 1) / 3) * 100}%`),
            backgroundColor: '#fff',
          }}
        />
      </div>
    )}
  >
    <SwiperItem>
      <Box>1</Box>
    </SwiperItem>
    <SwiperItem>
      <Box index={1}>2</Box>
    </SwiperItem>
    <SwiperItem>
      <Box index={2}>3</Box>
    </SwiperItem>
  </Swiper>
);
