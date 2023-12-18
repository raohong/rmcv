import userEvent from '@testing-library/user-event';
import React from 'react';
import Button, { buttonClassNames } from '..';
import { render, screen } from '../../_test-utils';
import { loadingClassNames } from '../../loading';

test('render correctly', () => {
  const tree = render(<Button />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test(`render with type`, () => {
  render(<Button type="primary" />);
  expect(screen.getByRole('button')).toHaveClass(buttonClassNames.containedPrimary);
});

test(`render with size`, () => {
  render(<Button size="large" />);

  expect(screen.getByRole('button')).toHaveClass(
    buttonClassNames.containedSizeLarge,
  );
});

test('render with block', () => {
  render(<Button block />);

  expect(screen.getByRole('button')).toHaveClass(buttonClassNames.block);
});

test('render with variant', () => {
  const com = render(<Button variant="contained" />);

  expect(screen.getByRole('button')).toHaveClass(buttonClassNames.contained);
  com.rerender(<Button variant="outlined" />);
  expect(screen.getByRole('button')).toHaveClass(buttonClassNames.outlined);
});

test('render with shape', () => {
  render(<Button shape="round" />);

  expect(screen.getByRole('button')).toHaveClass(
    buttonClassNames.containedShapeRound,
  );
});

test('render with icon', () => {
  const Arrow = () => <span data-testid="icon" />;

  render(<Button icon={<Arrow />} />);
  expect(screen.getByTestId('icon')).toBeInTheDocument();
});

test('render with disabled', () => {
  const handler = jest.fn();

  render(<Button disabled onClick={handler} />);
  userEvent.click(screen.getByRole('button'));

  expect(handler).not.toHaveBeenCalled();
  expect(screen.getByRole('button')).toHaveClass(buttonClassNames.disabled);
  expect(screen.getByRole('button')).toHaveProperty('disabled');
});

test('render with loading', () => {
  const handler = jest.fn();

  render(<Button loading onClick={handler} />);
  userEvent.click(screen.getByRole('button'));

  expect(handler).not.toHaveBeenCalled();
});

test('render with loadingType', () => {
  render(<Button loading loadingType="circular" />);

  expect(screen.getByRole('button').querySelector('svg')).toBeInTheDocument();
});

test('render with loadingSize', () => {
  render(<Button loadingSize={30} loading />);

  const loading = screen
    .getByRole('button')
    .querySelector(`.${loadingClassNames.root}`);

  expect(loading).toBeInTheDocument();
  expect(loading).toHaveStyleRule('font-size', '30px');
});
