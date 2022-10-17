import { render } from '@testing-library/react';
import React from 'react';
import Circle from '..';

test('render correctly', () => {
  const tree = render(<Circle />);

  expect(tree.asFragment()).toMatchSnapshot();
});
