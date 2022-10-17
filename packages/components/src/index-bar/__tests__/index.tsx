import { render } from '@testing-library/react';
import React from 'react';
import IndexAnchor from '../IndexAnchor';
import IndexBar from '../IndexBar';

test('render correctly', () => {
  const tree = render(
    <IndexBar>
      <IndexAnchor index="A" />
      <p>A1</p>
      <IndexAnchor index="B" />
      <p>B1</p>
    </IndexBar>,
  );

  expect(tree.asFragment()).toMatchSnapshot();
});
