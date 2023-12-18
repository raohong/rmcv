import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { cellClassNames } from 'rmc-vant';
import Cell from '../Cell';

const testId = 'cell';

test('render correctly', () => {
  const tree = render(<Cell />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with title', () => {
  render(<Cell title="title" />);

  expect(screen.getByText('title')).not.toBeNull();
});

test('render with value', () => {
  render(<Cell value="value" />);

  expect(screen.getByText('value')).not.toBeNull();
});

test('render with label', () => {
  render(<Cell label="label" />);

  expect(screen.getByText('label')).not.toBeNull();
});

test('render with icon', () => {
  render(<Cell icon={<span>icon</span>} />);

  expect(screen.getByText('icon')).toBeInTheDocument();
});

test('render with rightIcon', () => {
  render(<Cell rightIcon={<span data-testid="right-icon">rightIcon</span>} />);

  expect(screen.getByTestId('right-icon')).toBeInTheDocument();
});

test('render with clickable', () => {
  render(<Cell clickable data-testid={testId} />);

  expect(screen.getByTestId(testId)).toHaveStyleRule('cursor', 'pointer');
});

test('render with isLink', () => {
  const { container } = render(<Cell isLink data-testid={testId} />);

  expect(screen.getByTestId(testId)).toHaveStyleRule('cursor', 'pointer');
  expect(
    container.querySelector(`.${cellClassNames.rightIcon}`),
  ).toBeInTheDocument();
});

test('render with center', () => {
  render(<Cell center data-testid={testId} />);

  expect(screen.getByTestId(testId)).toHaveStyleRule('align-items', 'center');
});

test('render with arrowDirection', () => {
  render(<Cell isLink arrowDirection="down" data-testid={testId} />);

  expect(screen.getByLabelText('Arrow-Down')).toBeInTheDocument();
});

test('render with onClick', () => {
  const handler = jest.fn();

  render(<Cell onClick={handler} data-testid={testId} />);

  userEvent.click(screen.getByTestId(testId));
  expect(handler).toHaveBeenCalled();
});

test('render with children', () => {
  render(<Cell>child</Cell>);

  expect(screen.getByText('child')).toHaveClass(cellClassNames.value);
});

test('render with size', () => {
  render(<Cell data-testid={testId} size="large" />);

  expect(screen.getByTestId(testId)).toHaveClass(cellClassNames.sizeLarge);
});
