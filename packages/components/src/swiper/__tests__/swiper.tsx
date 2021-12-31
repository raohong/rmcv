import React from 'react';
import { render } from '@testing-library/react';
import SwiperItem from '../SwiperItem';
import Swiper from '../Swiper';

test('render correctly', () => {
  const tree = render(
    <Swiper>
      <SwiperItem>1</SwiperItem>
      <SwiperItem>2</SwiperItem>
    </Swiper>,
  );

  expect(tree.asFragment()).toMatchSnapshot();
});
