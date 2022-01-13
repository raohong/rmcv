import React from 'react';
import { render, screen } from '@testing-library/react';
import { getPrefixCls } from '../../_utils';
import Progress from '..';

const testId = 'progress';

test('render correctly', () => {
  const tree = render(<Progress />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with percentage', () => {
  const com = render(<Progress data-testid={testId} percentage={20} />);

  expect(screen.getByText('20%')).toBeInTheDocument();

  com.rerender(<Progress data-testid={testId} percentage={120} />);

  expect(screen.queryByText('120%')).toBeInTheDocument();
});

test('render with strokeWidth', () => {
  render(<Progress data-testid={testId} strokeWidth={10} />);

  expect(screen.getByTestId(testId)).toHaveStyle({
    height: '10px',
  });
});

test('render with strokeColor', () => {
  const com = render(<Progress data-testid={testId} strokeColor="blue" />);

  expect(com.container.querySelector(`.${getPrefixCls('progress-bg')}`)).toHaveStyle(
    {
      'background-color': 'blue',
    },
  );
  expect(
    screen.getByTestId(testId).querySelector(`.${getPrefixCls('progress-pivot')}`),
  ).toHaveStyle({
    'background-color': 'blue',
  });
});

test('render with trailColor', () => {
  render(<Progress data-testid={testId} trailColor="blue" />);

  expect(screen.getByTestId(testId)).toHaveStyle({
    'background-color': 'blue',
  });
});

test('render with showPivot', () => {
  render(<Progress data-testid={testId} showPivot={false} />);

  expect(
    screen.getByTestId(testId).querySelector(`.${getPrefixCls('progress-pivot')}`),
  ).toBeNull();
});

test('render with pivotColor', () => {
  render(<Progress data-testid={testId} pivotColor="red" />);

  expect(
    screen.getByTestId(testId).querySelector(`.${getPrefixCls('progress-pivot')}`),
  ).toHaveStyle({
    'background-color': 'red',
  });
});

test('render with pivotTextColor', () => {
  render(<Progress data-testid={testId} pivotTextColor="pink" />);

  expect(
    screen.getByTestId(testId).querySelector(`.${getPrefixCls('progress-pivot')}`),
  ).toHaveStyle({
    color: 'pink',
  });
});

test('render with pivotText', () => {
  render(<Progress data-testid={testId} pivotText="text" />);

  expect(screen.getByText('text')).toBeInTheDocument();
});

test('render with format', () => {
  const format = (p: number) => `current:${p}%`;

  render(<Progress data-testid={testId} percentage={20} format={format} />);

  expect(screen.getByText(format(20))).toBeInTheDocument();
});

test('render with inactive', () => {
  render(<Progress data-testid={testId} inactive />);

  expect(screen.getByTestId(testId)).toHaveClass(getPrefixCls('progress-inactive'));
});
