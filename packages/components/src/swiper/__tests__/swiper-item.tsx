import { render } from '@testing-library/react';
import React from 'react';
import SwiperItem from '../SwiperItem';

test('render correctly', () => {
  const tree = render(<SwiperItem />);

  expect(tree.asFragment()).toMatchSnapshot();
});
