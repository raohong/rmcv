import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PasswordInput from '../PasswordInput';
import { getPrefixCls } from '../../_utils';

const testId = 'password-input';

test('render correctly', () => {
  const tree = render(<PasswordInput />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with length', () => {
  render(<PasswordInput data-testid={testId} length={6} />);

  expect(
    screen
      .getByTestId(testId)
      .querySelectorAll(`.${getPrefixCls('password-input')}-item`).length,
  ).toBe(6);
});

test('render with value', () => {
  render(<PasswordInput data-testid={testId} value="123" />);

  expect(
    screen
      .getByTestId(testId)
      .querySelector(`.${getPrefixCls('password-input-input')}`),
  ).toHaveValue('123');
});

test('render with gutter', () => {
  render(<PasswordInput data-testid={testId} gutter={10} />);

  const inner = screen
    .getByTestId(testId)
    .querySelector(`.${getPrefixCls('password-input-inner')}`);

  expect(inner).toHaveStyle({
    'column-gap': '10px',
  });
  expect(inner).not.toHaveClass(getPrefixCls('password-input-inner-inset'));
});

test('render with mask', () => {
  render(<PasswordInput data-testid={testId} value="12" />);

  expect(
    screen
      .getByTestId(testId)
      .querySelectorAll(`.${getPrefixCls('password-input-mask-dot')}`).length,
  ).toBe(2);
});

test('render with focused', () => {
  render(<PasswordInput data-testid={testId} focused />);

  expect(
    screen
      .getByTestId(testId)
      .querySelector(`.${getPrefixCls('password-input-cursor')}`),
  ).toBeInTheDocument();
});
