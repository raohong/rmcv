import React from 'react';
import { render, screen } from '@testing-library/react';
import { sleep } from '../../_test-utils';
import Overlay from '..';

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

  await sleep(350);

  expect(screen.getByTestId('test')).toHaveStyle({
    opacity: 1,
    'z-index': 1,
  });
  dom.rerender(<Overlay data-testid="test" />);

  await sleep(350);

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

  await sleep(duration / 2);
  expect(getOpacity()).toBeLessThan(1);
});
