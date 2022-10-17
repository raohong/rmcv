import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Picker from '..';
import { getPrefixCls } from '../../_utils';

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
