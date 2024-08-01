import { fireEvent, render, screen } from '@testing-library/react';
import { Radio } from '../';
import { radioClassNames } from '../classNames';

const testId = 'radio';

it('render correctly', () => {
  const tree = render(<Radio>name</Radio>);

  expect(tree.asFragment()).toMatchSnapshot();
});

it('render with checked', () => {
  render(<Radio data-testid={testId} checked />);

  expect(screen.getByTestId(testId)).toHaveClass(radioClassNames.checked);
});

it('render with shape', () => {
  render(<Radio data-testid={testId} shape='square' />);

  expect(
    screen.getByTestId(testId).querySelector(`.${radioClassNames.inner}`),
  ).not.toHaveStyleRule('border-radius', '50%');
});

it('render with onChange', () => {
  const onChange = jest.fn();

  render(<Radio data-testid={testId} value={1} onChange={onChange} />);

  fireEvent.click(screen.getByTestId(testId));

  expect(onChange).toHaveBeenCalledWith(1);
});

it('render with disabled', () => {
  const onChange = jest.fn();

  render(<Radio data-testid={testId} onChange={onChange} disabled />);

  fireEvent.click(screen.getByTestId(testId));

  expect(screen.getByTestId(testId)).toHaveClass(radioClassNames.disabled);
  expect(onChange).not.toHaveBeenCalled();
});

it('render with labelPosition', () => {
  render(<Radio data-testid={testId} labelPosition='left' />);

  expect(screen.getByTestId(testId)).toHaveStyleRule(
    'flex-direction',
    'row-reverse',
  );
});

it('render with iconSize', () => {
  render(<Radio data-testid={testId} size={18} checked />);

  expect(
    screen.getByTestId(testId).querySelector(`.${radioClassNames.inner}`),
  ).toHaveStyleRule('height', '18px');
});

it('render with checkedColor', () => {
  render(<Radio data-testid={testId} checkedColor='red' checked />);

  expect(
    screen.getByTestId(testId).querySelector(`.${radioClassNames.inner}`),
  ).toHaveStyleRule('border-color', 'red');
  expect(
    screen.getByTestId(testId).querySelector(`.${radioClassNames.inner}`),
  ).toHaveStyleRule('background-color', 'red');
});

it('render with renderIcon', () => {
  const com = render(
    <Radio
      data-testid={testId}
      renderIcon={checked => <span>{checked ? 'checked' : 'unchecked'}</span>}
      checked
    />,
  );

  expect(screen.getByText('checked')).toBeInTheDocument();

  com.rerender(
    <Radio
      data-testid={testId}
      renderIcon={checked => <span>{checked ? 'checked' : 'unchecked'}</span>}
    />,
  );

  expect(screen.getByText('unchecked')).toBeInTheDocument();
});
