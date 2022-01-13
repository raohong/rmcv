import React from 'react';
import { render, screen } from '@testing-library/react';
import Toast from '../ToastComponent';
import { getPrefixCls } from '../../_utils';

const testId = 'test';

test('render correctly', () => {
  const tree = render(<Toast visible />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with visible', () => {
  const com = render(<Toast data-testid={testId} />);

  expect(screen.queryByTestId(testId)).not.toBeInTheDocument();

  com.rerender(<Toast visible data-testid={testId} />);

  expect(screen.queryByTestId(testId)).toBeInTheDocument();
});

test('render with position', () => {
  render(<Toast position="top" data-testid={testId} visible />);

  expect(screen.getByTestId(testId)).toHaveClass(getPrefixCls('toast-position-top'));
});

test('render with message', () => {
  const com = render(<Toast message="content" visible />);

  expect(com.container).toHaveTextContent('content');
});

test('render with type', () => {
  render(<Toast type="success" message="content" visible />);

  expect(screen.getByLabelText('Success')).toBeInTheDocument();
});

test('render with icon', () => {
  render(<Toast icon="icon" data-testid={testId} visible />);

  expect(screen.getByTestId(testId)).toHaveTextContent('icon');
});

test('render with closeOnClick', () => {
  const onClose = jest.fn();
  render(<Toast closeOnClick onClose={onClose} data-testid={testId} visible />);

  screen.getByTestId(testId).click();

  expect(onClose).toBeCalled();
});
