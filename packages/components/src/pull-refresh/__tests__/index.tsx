import React from 'react';
import { render } from '@testing-library/react';
import PullRefresh from '..';

test('render correctly', () => {
  const tree = render(<PullRefresh />);

  expect(tree.asFragment()).toMatchSnapshot();
});
