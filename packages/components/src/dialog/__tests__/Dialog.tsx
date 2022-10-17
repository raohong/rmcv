import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { getPrefixCls } from '../../_utils';
import Dialog from '../Dialog';

const id = 'dialog';

test('render correctly', () => {
  const tree = render(<Dialog />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with title', () => {
  render(<Dialog title={<span data-testid="title" />} />);

  expect(screen.getByTestId('title')).toBeInTheDocument();
});

test('render with width', () => {
  render(<Dialog width={200} data-testid={id} />);

  expect(screen.getByTestId(id)).toHaveStyle({
    width: '200px',
  });
});

test('render with message', () => {
  render(<Dialog message={<div data-testid="message" />} />);

  expect(screen.getByTestId('message')).toBeInTheDocument();
});

test('render with footer', () => {
  render(<Dialog data-testid={id} footer={<div data-testid="footer" />} />);

  expect(screen.getByTestId('footer')).toBeInTheDocument();
  expect(
    screen.getByTestId(id).querySelector(`.${getPrefixCls('dialog-footer')}`),
  ).toHaveClass(getPrefixCls('dialog-footer-custom'));
});

test('render with theme', () => {
  render(<Dialog theme="round-button" data-testid={id} />);

  expect(screen.getByTestId(id)).toHaveClass(
    getPrefixCls('dialog-theme-round-button'),
  );
});

test('render with showConfirmButton', () => {
  render(<Dialog showConfirmButton={false} data-testid={id} />);

  expect(
    screen
      .getByTestId(id)
      .querySelector(`.${getPrefixCls('dialog-button-confirm')}`),
  ).toBeNull();
});

test('render with showCancelButton', () => {
  render(<Dialog showCancelButton data-testid={id} />);

  expect(
    screen.getByTestId(id).querySelector(`.${getPrefixCls('dialog-button-cancel')}`),
  ).not.toBeNull();
});

test('render with confirmButtonText', () => {
  render(<Dialog confirmButtonText="button-text" data-testid={id} />);

  expect(screen.getByText('button-text')).not.toBeNull();
});

test('render with confirmButtonColor', () => {
  render(<Dialog confirmButtonColor="red" data-testid={id} />);

  expect(
    screen
      .getByTestId(id)
      .querySelector(`.${getPrefixCls('dialog-button-confirm')}`),
  ).toHaveStyle({
    color: 'red',
  });
});

test('render with cancelButtonText', () => {
  render(
    <Dialog showCancelButton cancelButtonText="button-text" data-testid={id} />,
  );

  expect(screen.getByText('button-text')).not.toBeNull();
});

test('render with cancelButtonColor', () => {
  render(<Dialog showCancelButton cancelButtonColor="blue" data-testid={id} />);

  expect(
    screen.getByTestId(id).querySelector(`.${getPrefixCls('dialog-button-cancel')}`),
  ).toHaveStyle({
    color: 'blue',
  });
});

test('render with visible', () => {
  const com = render(<Dialog visible data-testid={id} />);

  expect(screen.getByTestId(id)).toHaveAttribute('aria-hidden', 'false');
});

test('render with onConfirm', () => {
  const onConfirm = jest.fn();

  render(<Dialog visible onConfirm={onConfirm} data-testid={id} />);

  userEvent.click(
    screen
      .getByTestId(id)
      .querySelector(`.${getPrefixCls('dialog-button-confirm')}`)!,
  );

  expect(onConfirm).toHaveBeenCalled();
});
