import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Overlay from '..';

const wait = (timeout = 300) =>
  new Promise<void>((r) => setTimeout(() => r(), timeout));

test('render correctly', () => {
  const tree = render(<Overlay />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with zIndex', () => {
  render(<Overlay data-testid="test" zIndex={2} />);

  expect(screen.getByTestId('test').getAttribute('style')).toContain(
    'z-index: 2;',
  );
});

test('render with visible', async () => {
  const dom = render(<Overlay visible data-testid="test" />);

  expect(screen.getByTestId('test')).toHaveStyle({
    opacity: 0,
    'z-index': 1,
    display: 'none',
  });

  await waitFor(() => wait(350));

  expect(screen.getByTestId('test')).toHaveStyle({
    opacity: 1,
    'z-index': 1,
  });
  dom.rerender(<Overlay data-testid="test" />);

  await waitFor(() => wait(350));

  expect(screen.getByTestId('test')).toHaveStyle({
    opacity: 0,
    'z-index': 1,
    display: 'none',
  });
});

test('render with duration', async () => {
  const duration = 600;
  const getOpacity = () =>
    Number(getComputedStyle(screen.getByTestId('test')).opacity);

  render(<Overlay visible duration={duration} data-testid="test" />);

  expect(getOpacity()).toBeGreaterThanOrEqual(0);

  await waitFor(() => wait(duration / 2));
  expect(getOpacity()).toBeGreaterThanOrEqual(0.5);

  await waitFor(() => wait(duration / 2));
  expect(getOpacity()).toBeGreaterThanOrEqual(1);
});
