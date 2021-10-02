import React from 'react';
import { render } from '@testing-library/react';
import { SwiperItem } from '..';

test('render correctly', () => {
  const tree = render(<SwiperItem />);

  expect(tree.asFragment()).toMatchSnapshot();
});
