import React from 'react';
import { render, screen } from '@testing-library/react';
import { getPrefixCls } from '../../_utils';
import Loading from '../../loading';
import Image from '..';

const testId = 'image';
const height = 100;

test('render correctly', () => {
  const tree = render(<Image height={height} />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with fit', () => {
  render(<Image height={height} fit="contain" data-testid={testId} />);

  expect(screen.getByTestId(testId)).toHaveClass(getPrefixCls('image-contain'));
});

test('render with radius', () => {
  render(<Image height={height} radius={10} data-testid={testId} />);

  expect(screen.getByTestId(testId)).toHaveStyle({
    'border-radius': '10px',
  });
});

test('render with round', () => {
  render(<Image height={height} round data-testid={testId} />);

  expect(screen.getByTestId(testId)).toHaveClass(getPrefixCls('image-round'));
});

test('render with showLoading', () => {
  render(<Image height={height} showLoading={false} round data-testid={testId} />);

  expect(
    screen
      .getByTestId(testId)
      .querySelector(`.${getPrefixCls('image-placeholder')}`),
  ).toBeNull();
});

test('render with loadingIcon', () => {
  render(
    <Image
      height={height}
      loadingIcon={<Loading data-testid="loading-icon" />}
      round
      data-testid={testId}
    />,
  );

  expect(screen.getByTestId('loading-icon')).toBeInTheDocument();
});
