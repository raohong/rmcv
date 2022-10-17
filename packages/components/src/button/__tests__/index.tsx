import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Button from '..';
import { getPrefixCls } from '../../_utils';

test('render correctly', () => {
  const tree = render(<Button />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test(`render with type`, () => {
  render(<Button type="primary" />);
  expect(screen.getByRole('button')).toHaveClass(getPrefixCls(`button-primary`));
});

test(`render with size`, () => {
  render(<Button size="large" />);

  expect(screen.getByRole('button')).toHaveClass(getPrefixCls(`button-size-large`));
});

test('render with block', () => {
  render(<Button block />);

  expect(screen.getByRole('button')).toHaveClass(getPrefixCls('button-block'));
});

test('render with plain', () => {
  render(<Button plain />);

  expect(screen.getByRole('button')).toHaveClass(getPrefixCls('button-plain'));
});

test('render with shape', () => {
  render(<Button shape="round" />);

  expect(screen.getByRole('button')).toHaveClass(getPrefixCls('button-round'));
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
  expect(screen.getByRole('button')).toHaveClass(getPrefixCls('button-disabled'));
  expect(screen.getByRole('button')).toHaveProperty('disabled');
});

test('render with loading', () => {
  const handler = jest.fn();

  render(<Button loading onClick={handler} />);
  userEvent.click(screen.getByRole('button'));

  expect(handler).not.toHaveBeenCalled();
});

test('render with loadingText', () => {
  const text = 'loading...';
  render(
    <Button loading loadingText={text}>
      <span data-testid="child" />
    </Button>,
  );

  expect(screen.getByRole('button')).toContainHTML(text);
});

test('render with loadingType', () => {
  render(<Button loading loadingType="circular" />);

  expect(screen.getByRole('button').querySelector('svg')).toBeInTheDocument();
});

test('render with loadingSize', () => {
  render(<Button loadingSize={30} loading />);

  expect(
    screen.getByRole('button').querySelector(`.${getPrefixCls('loading-spinner')}`),
  ).toHaveStyle({
    'font-size': '30px',
  });
});
