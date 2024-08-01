import { fireEvent, render, screen } from '@testing-library/react';
import { Checkbox, checkboxClassNames } from '..';

const testId = 'checkbox';

it('render correctly', () => {
  const tree = render(<Checkbox>name</Checkbox>);

  expect(tree.asFragment()).toMatchSnapshot();
});

it('render with checked', () => {
  render(<Checkbox data-testid={testId} checked />);

  expect(screen.getByTestId(testId)).toHaveClass(checkboxClassNames.checked);
});

it('render with value', () => {
  render(<Checkbox value='test' data-testid={testId} checked />);

  expect(
    screen.getByTestId(testId).querySelector(`.${checkboxClassNames.input}`),
  ).toHaveAttribute('value', 'test');
});

it('render with shape', () => {
  render(<Checkbox data-testid={testId} shape='square' />);

  expect(
    screen.getByTestId(testId).querySelector(`.${checkboxClassNames.inner}`),
  ).not.toHaveStyleRule('border-radius', '0.5em');
});

it('render with onChange', () => {
  const onChange = jest.fn();

  render(<Checkbox data-testid={testId} value={1} onChange={onChange} />);

  fireEvent.click(screen.getByTestId(testId));

  expect(onChange).toHaveBeenCalledWith(true);
});

it('render with disabled', () => {
  const onChange = jest.fn();

  render(<Checkbox data-testid={testId} onChange={onChange} disabled />);

  fireEvent.click(screen.getByTestId(testId));

  expect(screen.getByTestId(testId)).toHaveClass(checkboxClassNames.disabled);
  expect(onChange).not.toHaveBeenCalled();
});

it('render with labelPosition', () => {
  render(<Checkbox data-testid={testId} labelPosition='left' />);

  expect(screen.getByTestId(testId)).toHaveStyleRule(
    'flex-direction',
    'row-reverse',
  );
});

it('render with iconSize', () => {
  render(<Checkbox data-testid={testId} iconSize={18} checked />);

  expect(
    screen.getByTestId(testId).querySelector(`.${checkboxClassNames.inner}`),
  ).toHaveStyle({
    'font-size': '18px',
  });
});

it('render with checkedColor', () => {
  render(<Checkbox data-testid={testId} checkedColor='red' checked />);

  expect(
    screen.getByTestId(testId).querySelector(`.${checkboxClassNames.inner}`),
  ).toHaveStyleRule('border-color', 'red');
  expect(
    screen.getByTestId(testId).querySelector(`.${checkboxClassNames.inner}`),
  ).toHaveStyleRule('background-color', 'red');
});

it('render with renderIcon', () => {
  const com = render(
    <Checkbox
      data-testid={testId}
      renderIcon={checked => <span>{checked ? 'checked' : 'unchecked'}</span>}
      checked
    />,
  );

  expect(screen.getByText('checked')).toBeInTheDocument();

  com.rerender(
    <Checkbox
      data-testid={testId}
      renderIcon={checked => <span>{checked ? 'checked' : 'unchecked'}</span>}
      checked={false}
    />,
  );

  expect(screen.getByText('unchecked')).toBeInTheDocument();
});
