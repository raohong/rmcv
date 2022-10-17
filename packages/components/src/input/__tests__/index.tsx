import { fireEvent } from '@testing-library/dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import CommonInput from '../CommonInput';

const testId = 'input';

test('snapshot', () => {
  const com = render(<CommonInput />);

  expect(com.asFragment()).toMatchSnapshot();
});

test('render with value', () => {
  render(<CommonInput value="input" data-testid={testId} />);

  expect(screen.getByDisplayValue('input')).toBeInTheDocument();
});

test('render with onChange', () => {
  const onChange = jest.fn();

  render(<CommonInput onChange={onChange} data-testid={testId} />);

  userEvent.type(screen.getByTestId(testId), '123');

  expect(onChange).toHaveBeenCalledWith('123');
});

test('render with formatter', () => {
  const formatter = jest.fn((val) => val.replace(/\D/g, ''));
  const com = render(<CommonInput formatter={formatter} data-testid={testId} />);

  userEvent.type(screen.getByTestId(testId), '12k');

  expect(formatter).toHaveBeenCalledWith('12k');
  expect(screen.getByDisplayValue('12')).toBeInTheDocument();

  com.rerender(
    <CommonInput
      formatTrigger="onBlur"
      formatter={formatter}
      data-testid={testId}
    />,
  );

  userEvent.type(screen.getByTestId(testId), 'blur');
  expect(screen.getByDisplayValue('12blur')).toBeInTheDocument();

  fireEvent.focusOut(screen.getByTestId(testId));
  expect(formatter).toHaveBeenCalledWith('12blur');
  expect(screen.getByDisplayValue('12')).toBeInTheDocument();
});
