import { render, screen } from '@testing-library/react';
import React, { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { getPrefixCls } from '../../_utils';
import Picker from '..';

const options = ['A', 'B', 'C'].map((item) => ({ value: item }));

const testId = 'picker';

test('render correctly', () => {
  const tree = render(<Picker columns={[['A']]} />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with title', () => {
  render(<Picker title="test-title" data-testid={testId} />);

  expect(screen.getByText('test-title')).toBeInTheDocument();
});

test('render with showToolbar', () => {
  render(<Picker showToolbar={false} data-testid={testId} />);

  expect(
    screen.getByTestId(testId).querySelector(`.${getPrefixCls('picker-toolbar')}`),
  ).not.toBeInTheDocument();
});

test('render with confirmButtonText', () => {
  render(<Picker confirmButtonText="ok" data-testid={testId} />);

  expect(screen.getByText('ok')).toBeInTheDocument();
});

test('render with cancelButtonText', () => {
  render(<Picker cancelButtonText="cancel" data-testid={testId} />);

  expect(screen.getByText('cancel')).toBeInTheDocument();
});

test('render with toolbarPosition', () => {
  render(<Picker toolbarPosition="bottom" data-testid={testId} />);

  expect(screen.getByTestId(testId)).toHaveClass(
    getPrefixCls('picker-position-bottom'),
  );
});

test('render with internalControllable', () => {
  const onConfirm = jest.fn();
  render(<Picker onConfirm={onConfirm} columns={[options]} data-testid={testId} />);

  const confirm = screen
    .getByTestId(testId)
    .querySelector(`.${getPrefixCls('picker-confirm-button')}`)!;

  userEvent.click(confirm);

  expect(onConfirm).toBeCalledWith(['A']);
});

describe('render with value', () => {
  it('internalControllable', () => {
    const onConfirm = jest.fn();

    render(
      <Picker columns={[options]} data-testid={testId} onConfirm={onConfirm} />,
    );

    const option = screen
      .getByTestId(testId)
      .querySelector(`.${getPrefixCls('picker-option')}:nth-child(2)`)!;

    userEvent.click(option);

    expect(option).toHaveAttribute('data-selected', 'true');

    const confirm = screen
      .getByTestId(testId)
      .querySelector(`.${getPrefixCls('picker-confirm-button')}`)!;

    userEvent.click(confirm);

    expect(onConfirm).toBeCalledWith(['B']);
  });
});
