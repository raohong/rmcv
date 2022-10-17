import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import Rate from '..';
import { getPrefixCls } from '../../_utils';

const testId = 'rate';

test('render correctly', () => {
  const tree = render(<Rate />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with defaultValue', () => {
  render(<Rate defaultValue={2} data-testid={testId} />);

  expect(
    screen.getByTestId(testId).querySelectorAll(`.${getPrefixCls('rate-full-icon')}`)
      .length,
  ).toBe(2);
});

test('render with  onChange', () => {
  const onChange = jest.fn();

  render(<Rate onChange={onChange} data-testid={testId} />);

  const second = screen
    .getByTestId(testId)
    .querySelector(`.${getPrefixCls('rate-item')}:nth-child(2)`)!;

  userEvent.click(second);

  expect(onChange).toHaveBeenCalledWith(2);
});

test('render with value', () => {
  const App = () => {
    const [value, setValue] = useState(0);

    return <Rate value={value} onChange={setValue} data-testid={testId} />;
  };
  render(<App />);

  const second = screen
    .getByTestId(testId)
    .querySelector(`.${getPrefixCls('rate-item')}:nth-child(2)`)!;

  userEvent.click(second);

  expect(
    second.querySelector(`.${getPrefixCls('rate-item-overlay')}`),
  ).not.toBeNull();
});

test('render with allowHalf', () => {
  render(<Rate defaultValue={1.5} data-testid={testId} allowHalf />);

  const target = screen
    .getByTestId(testId)
    .querySelector(
      `.${getPrefixCls('rate-item')}:nth-child(2) .${getPrefixCls(
        'rate-item-overlay',
      )}`,
    );

  expect(target).toHaveStyle({
    'clip-path': 'inset(0 50% 0 0)',
  });
});

test('render with readonly', () => {
  const onChange = jest.fn();
  render(<Rate onChange={onChange} data-testid={testId} readonly />);

  const second = screen
    .getByTestId(testId)
    .querySelector(`.${getPrefixCls('rate-item')}:nth-child(2)`)!;

  userEvent.click(second);
  expect(onChange).not.toHaveBeenCalled();
  expect(screen.getByTestId(testId)).toHaveClass(getPrefixCls('rate-readonly'));
});

test('render with disabled', () => {
  const onChange = jest.fn();
  render(<Rate onChange={onChange} data-testid={testId} disabled />);

  const second = screen
    .getByTestId(testId)
    .querySelector(`.${getPrefixCls('rate-item')}:nth-child(2)`)!;

  userEvent.click(second);
  expect(onChange).not.toHaveBeenCalled();
  expect(screen.getByTestId(testId)).toHaveClass(getPrefixCls('rate-disabled'));
});

test('render decimal value', () => {
  render(<Rate data-testid={testId} defaultValue={1.2} readonly allowHalf />);

  const target = screen
    .getByTestId(testId)
    .querySelector(
      `.${getPrefixCls('rate-item')}:nth-child(2) .${getPrefixCls(
        'rate-item-overlay',
      )}`,
    );

  expect(target).toHaveStyle({
    'clip-path': 'inset(0 80% 0 0)',
  });
});
