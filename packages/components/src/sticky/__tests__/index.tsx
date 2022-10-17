import { render } from '@testing-library/react';
import React from 'react';
import Sticky from '../Sticky';

test('render correctly', () => {
  const tree = render(<Sticky />);

  expect(tree.asFragment()).toMatchSnapshot();
});
