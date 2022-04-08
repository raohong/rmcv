import React from 'react';
import Circle from '..';
import { render } from '@testing-library/react';

test('render correctly', () => {
  const tree = render(<Circle />);

  expect(tree.asFragment()).toMatchSnapshot();
});
