import { render, screen } from '@testing-library/react';
import React from 'react';
import Overlay from '../Overlay';

test('render correctly', () => {
  const tree = render(<Overlay />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with zIndex', () => {
  render(<Overlay data-testid="test" zIndex={2} />);

  expect(screen.getByTestId('test')).toHaveStyle({
    'z-index': 2,
  });
});

test('render with visible', async () => {
  render(<Overlay visible data-testid="test" />);

  expect(screen.getByTestId('test')).toHaveAttribute('aria-hidden', 'false');
});

test('render with duration', async () => {
  const duration = 6;

  render(<Overlay visible duration={duration} data-testid="test" />);

  expect(screen.getByTestId('test')).toHaveStyle({
    'animation-duration': '6s',
  });
});
