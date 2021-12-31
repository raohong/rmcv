import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getPrefixCls } from '../../_utils';
import CollapseItem from '../CollapseItem';

const testId = 'collapse-item';

test('render correctly', () => {
  const tree = render(<CollapseItem />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with border', () => {
  const com = render(<CollapseItem data-testid={testId} border />);

  expect(screen.getByTestId(testId)).toHaveClass(
    getPrefixCls('collapse-item-border'),
  );

  expect(
    screen
      .getByTestId(testId)
      .querySelector(`.${getPrefixCls('collapse-item-header')}`),
  ).toHaveClass(getPrefixCls('cell-border'));

  com.rerender(<CollapseItem data-testid={testId} border collapsed />);

  expect(
    screen
      .getByTestId(testId)
      .querySelector(`.${getPrefixCls('collapse-item-header')}`),
  ).not.toHaveClass(getPrefixCls('cell-border'));
});

test('render with collapsed', () => {
  render(<CollapseItem collapsed data-testid={testId} />);

  expect(screen.getByTestId(testId)).toHaveAttribute('aria-expanded', 'false');
});

test('render with toggle', () => {
  const handler = jest.fn();

  render(<CollapseItem toggle={handler} data-testid={testId} />);

  userEvent.click(
    screen
      .getByTestId(testId)
      .querySelector(`.${getPrefixCls('collapse-item-header')}`)!,
  );

  expect(handler).toBeCalled();
});

test('render with disabled', () => {
  const handler = jest.fn();

  render(<CollapseItem disabled toggle={handler} data-testid={testId} />);

  userEvent.click(
    screen
      .getByTestId(testId)
      .querySelector(`.${getPrefixCls('collapse-item-header')}`)!,
  );

  expect(handler).not.toBeCalled();
});
