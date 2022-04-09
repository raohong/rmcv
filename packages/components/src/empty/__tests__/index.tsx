import React from 'react';
import { render, screen } from '@testing-library/react';
import Empty from '..';

const testId = 'empty';

test('render correctly', () => {
  const tree = render(<Empty />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with description', () => {
  render(<Empty data-testid={testId} description="desc" />);

  expect(screen.getByText('desc')).not.toBeNull();
});

test('render with image', () => {
  render(<Empty data-testid={testId} image={<span>image</span>} />);

  expect(screen.getByText('image')).not.toBeNull();
  expect(screen.getByTestId(testId).querySelector('svg')).not.toBeInTheDocument();
});
