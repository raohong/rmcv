import React from 'react';
import { render, screen } from '@testing-library/react';
import CellGroup from '../CellGroup';

const testId = 'cell-group';

test('render correctly', () => {
  const tree = render(<CellGroup />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with gutter', () => {
  render(<CellGroup data-testid={testId} title="title" />);

  expect(screen.getByText('title')).not.toBeNull();
});
