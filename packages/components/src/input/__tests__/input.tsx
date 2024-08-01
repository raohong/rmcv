import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '..';

const testId = 'input';

it('snapshot', () => {
  const com = render(<Input />);

  expect(com.asFragment()).toMatchSnapshot();
});

it('render with value', () => {
  render(<Input value='input' data-testid={testId} />);

  expect(screen.getByDisplayValue('input')).toBeInTheDocument();
});

it('render with onChange', async () => {
  const onChange = jest.fn();

  render(<Input onChange={onChange} data-testid={testId} />);

  await userEvent.type(screen.getByTestId(testId), '123');

  expect(onChange).toHaveBeenCalledWith('123');
});

it('render with formatter', async () => {
  const formatter = jest.fn(val => val.replace(/\D/g, ''));
  const com = render(<Input formatter={formatter} data-testid={testId} />);

  await userEvent.type(screen.getByTestId(testId), '12k');

  expect(formatter).toHaveBeenCalledWith('12k');
  expect(screen.getByDisplayValue('12')).toBeInTheDocument();

  com.rerender(
    <Input formatTrigger='onBlur' formatter={formatter} data-testid={testId} />,
  );

  await userEvent.type(screen.getByTestId(testId), 'blur');
  expect(screen.getByDisplayValue('12blur')).toBeInTheDocument();

  fireEvent.focusOut(screen.getByTestId(testId));
  expect(formatter).toHaveBeenCalledWith('12blur');
  expect(screen.getByDisplayValue('12')).toBeInTheDocument();
});
