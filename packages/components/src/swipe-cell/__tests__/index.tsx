import { render, screen } from '@testing-library/react';
import React from 'react';
import SwipeCell from '..';

const testId = 'swipe-cell';

test('render correctly', () => {
  const tree = render(<SwipeCell />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with left', () => {
  render(
    <SwipeCell
      data-testid={testId}
      left={<button data-testid="left-button">Left Button</button>}
    />,
  );

  expect(screen.getByTestId('left-button')).toBeInTheDocument();
});

test('render with right', () => {
  render(
    <SwipeCell
      data-testid={testId}
      left={<button data-testid="right-button">Right Button</button>}
    />,
  );

  expect(screen.getByTestId('right-button')).toBeInTheDocument();
});
