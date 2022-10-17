import { render, screen } from '@testing-library/react';
import React from 'react';
import Skeleton from '..';
import { getPrefixCls } from '../../_utils';

const testId = 'skeleton';

test('render correctly', () => {
  const tree = render(<Skeleton>content</Skeleton>);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with loading', () => {
  const com = render(<Skeleton data-testid={testId}>content</Skeleton>);

  expect(screen.getByTestId(testId)).not.toHaveTextContent('content');

  com.rerender(
    <Skeleton loading={false} data-testid={testId}>
      content
    </Skeleton>,
  );
  expect(screen.getByTestId(testId)).toHaveTextContent('content');
  expect(screen.getByTestId(testId)).not.toHaveClass(
    getPrefixCls('skeleton-animate'),
  );
});

test('render with avatar', () => {
  render(<Skeleton data-testid={testId} avatar />);

  expect(
    screen.getByTestId(testId).querySelector(`.${getPrefixCls('skeleton-avatar')}`),
  ).toBeInTheDocument();
});

test('render with avatarShape', () => {
  render(<Skeleton data-testid={testId} avatar avatarShape="square" />);

  expect(
    screen.getByTestId(testId).querySelector(`.${getPrefixCls('skeleton-avatar')}`),
  ).toHaveClass(getPrefixCls('skeleton-avatar-square'));
});

test('render with avatarSize', () => {
  render(<Skeleton data-testid={testId} avatar avatarSize="2rem" />);

  expect(
    screen.getByTestId(testId).querySelector(`.${getPrefixCls('skeleton-avatar')}`),
  ).toHaveStyle({
    width: '2rem',
    height: '2rem',
  });
});

test('render with round', () => {
  render(<Skeleton data-testid={testId} round />);

  expect(screen.getByTestId(testId)).toHaveClass(getPrefixCls('skeleton-round'));
});

test('render with animate', () => {
  render(<Skeleton data-testid={testId} animate={false} />);

  expect(screen.getByTestId(testId)).not.toHaveClass(
    getPrefixCls('skeleton-animate'),
  );
});

test('render with titleWidth', () => {
  render(<Skeleton data-testid={testId} titleWidth="50%" />);

  expect(
    screen.getByTestId(testId).querySelector(`.${getPrefixCls('skeleton-title')}`),
  ).toHaveStyle({
    width: '50%',
  });
});

test('render with row', () => {
  render(<Skeleton data-testid={testId} row={4} />);

  const rows = screen
    .getByTestId(testId)
    .querySelectorAll(`.${getPrefixCls('skeleton-row')}`);

  expect(rows.length).toBe(4);
});

test('render with rowWidth', () => {
  render(<Skeleton data-testid={testId} row={2} rowWidth={['10%', '20%']} />);

  const rows = screen
    .getByTestId(testId)
    .querySelectorAll(`.${getPrefixCls('skeleton-row')}`);

  expect(rows[0]).toHaveStyle({
    width: '10%',
  });
  expect(rows[1]).toHaveStyle({
    width: '20%',
  });
});
