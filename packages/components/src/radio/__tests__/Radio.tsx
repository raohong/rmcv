import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { getPrefixCls } from '../../_utils';
import { Radio } from '../';

const testId = 'radio';

test('render correctly', () => {
  const tree = render(<Radio>name</Radio>);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with checked', () => {
  render(<Radio data-testid={testId} checked />);

  expect(screen.getByTestId(testId)).toHaveClass(getPrefixCls('radio-checked'));
});

test('render with shape', () => {
  render(<Radio data-testid={testId} shape="square" />);

  expect(screen.getByTestId(testId)).toHaveClass(getPrefixCls('radio-shape-square'));
});

test('render with onChange', () => {
  const onChange = jest.fn();

  render(<Radio data-testid={testId} value={1} onChange={onChange} />);

  fireEvent.click(screen.getByTestId(testId));

  expect(onChange).toBeCalledWith(1);
});

test('render with disabled', () => {
  const onChange = jest.fn();

  render(<Radio data-testid={testId} onChange={onChange} disabled />);

  fireEvent.click(screen.getByTestId(testId));

  expect(screen.getByTestId(testId)).toHaveClass(getPrefixCls('radio-disabled'));
  expect(onChange).not.toBeCalled();
});

test('render with labelPosition', () => {
  render(<Radio data-testid={testId} labelPosition="left" />);

  expect(screen.getByTestId(testId)).toHaveClass(
    getPrefixCls('radio-position-left'),
  );
});

test('render with iconSize', () => {
  render(<Radio data-testid={testId} iconSize={18} checked />);

  expect(
    screen.getByTestId(testId).querySelector(`.${getPrefixCls('radio-inner')}`),
  ).toHaveStyle({
    'font-size': '18px',
  });
});

test('render with checkedColor', () => {
  render(<Radio data-testid={testId} checkedColor="red" checked />);

  expect(
    screen.getByTestId(testId).querySelector(`.${getPrefixCls('radio-inner')}`),
  ).toHaveStyle({
    'border-color': 'red',
    'background-color': 'red',
  });
});

test('render with renderIcon', () => {
  const com = render(
    <Radio
      data-testid={testId}
      renderIcon={(checked) => <span>{checked ? 'checked' : 'unchecked'}</span>}
      checked
    />,
  );

  expect(screen.getByText('checked')).toBeInTheDocument();

  com.rerender(
    <Radio
      data-testid={testId}
      renderIcon={(checked) => <span>{checked ? 'checked' : 'unchecked'}</span>}
    />,
  );

  expect(screen.getByText('unchecked')).toBeInTheDocument();
});
