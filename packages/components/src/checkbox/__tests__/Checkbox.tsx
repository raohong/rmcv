import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Checkbox } from '..';
import { getPrefixCls } from '../../_utils';

const testId = 'checkbox';

test('render correctly', () => {
  const tree = render(<Checkbox>name</Checkbox>);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with checked', () => {
  render(<Checkbox data-testid={testId} checked />);

  expect(screen.getByTestId(testId)).toHaveClass(getPrefixCls('checkbox-checked'));
});

test('render with shape', () => {
  render(<Checkbox data-testid={testId} shape="square" />);

  expect(screen.getByTestId(testId)).toHaveClass(
    getPrefixCls('checkbox-shape-square'),
  );
});

test('render with onChange', () => {
  const onChange = jest.fn();

  render(<Checkbox data-testid={testId} value={1} onChange={onChange} />);

  fireEvent.click(screen.getByTestId(testId));

  expect(onChange).toHaveBeenCalledWith(true);
});

test('render with disabled', () => {
  const onChange = jest.fn();

  render(<Checkbox data-testid={testId} onChange={onChange} disabled />);

  fireEvent.click(screen.getByTestId(testId));

  expect(screen.getByTestId(testId)).toHaveClass(getPrefixCls('checkbox-disabled'));
  expect(onChange).not.toHaveBeenCalled();
});

test('render with labelPosition', () => {
  render(<Checkbox data-testid={testId} labelPosition="left" />);

  expect(screen.getByTestId(testId)).toHaveClass(
    getPrefixCls('checkbox-position-left'),
  );
});

test('render with iconSize', () => {
  render(<Checkbox data-testid={testId} iconSize={18} checked />);

  expect(
    screen.getByTestId(testId).querySelector(`.${getPrefixCls('checkbox-inner')}`),
  ).toHaveStyle({
    'font-size': '18px',
  });
});

test('render with checkedColor', () => {
  render(<Checkbox data-testid={testId} checkedColor="red" checked />);

  expect(
    screen.getByTestId(testId).querySelector(`.${getPrefixCls('checkbox-inner')}`),
  ).toHaveStyle({
    'border-color': 'red',
    'background-color': 'red',
  });
});

test('render with renderIcon', () => {
  const com = render(
    <Checkbox
      data-testid={testId}
      renderIcon={(checked) => <span>{checked ? 'checked' : 'unchecked'}</span>}
      checked
    />,
  );

  expect(screen.getByText('checked')).toBeInTheDocument();

  com.rerender(
    <Checkbox
      data-testid={testId}
      renderIcon={(checked) => <span>{checked ? 'checked' : 'unchecked'}</span>}
      checked={false}
    />,
  );

  expect(screen.getByText('unchecked')).toBeInTheDocument();
});
