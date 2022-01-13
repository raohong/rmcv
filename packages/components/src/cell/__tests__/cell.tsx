import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getPrefixCls } from '../../_utils';
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

test('render with titleClassName', () => {
  const name = 'title-class-name';
  const com = render(<Cell titleClassName={name} title="title" />);

  expect(com.container.querySelector(`.${getPrefixCls('cell-title')}`)).toHaveClass(
    name,
  );
});

test('render with value', () => {
  render(<Cell value="value" />);

  expect(screen.getByText('value')).not.toBeNull();
});

test('render with valueClassName', () => {
  const name = 'value-class-name';
  const com = render(<Cell valueClassName={name} value="value" />);

  expect(com.container.querySelector(`.${getPrefixCls('cell-value')}`)).toHaveClass(
    name,
  );
});

test('render with label', () => {
  render(<Cell label="label" />);

  expect(screen.getByText('label')).not.toBeNull();
});

test('render with labelClassName', () => {
  const name = 'label-class-name';
  const com = render(<Cell labelClassName={name} label="label" />);

  expect(com.container.querySelector(`.${getPrefixCls('cell-label')}`)).toHaveClass(
    name,
  );
});

test('render with icon', () => {
  render(<Cell icon={<span>icon</span>} />);

  expect(screen.getByText('icon')).toBeInTheDocument();
});

test('render with iconClassName', () => {
  render(<Cell iconClassName="icon" icon={<span>icon</span>} />);

  expect(screen.getByText('icon').parentNode).toHaveClass('icon');
});

test('render with rightIcon', () => {
  render(<Cell rightIcon={<span>rightIcon</span>} />);

  expect(screen.getByText('rightIcon')).toBeInTheDocument();
});

test('render with clickable', () => {
  render(<Cell clickable data-testid={testId} />);

  expect(screen.getByTestId(testId)).toHaveClass(getPrefixCls('touchable'));
});

test('render with isLink', () => {
  const com = render(<Cell isLink data-testid={testId} />);

  expect(screen.getByTestId(testId)).toHaveClass(getPrefixCls('touchable'));
  expect(screen.getByTestId(testId)).toContainElement(
    com.container.querySelector(`.${getPrefixCls('cell-right-icon')}`),
  );
});

test('render with center', () => {
  render(<Cell center data-testid={testId} />);

  expect(screen.getByTestId(testId)).toHaveClass(getPrefixCls('cell-center'));
});

test('render with arrowDirection', () => {
  render(<Cell isLink arrowDirection="down" data-testid={testId} />);

  expect(screen.getByLabelText('Arrow-Down')).toBeInTheDocument();
});

test('render with onClick', () => {
  const handler = jest.fn();

  render(<Cell onClick={handler} data-testid={testId} />);

  userEvent.click(screen.getByTestId(testId));
  expect(handler).toBeCalled();
});

test('render with children', () => {
  render(<Cell>child</Cell>);

  expect(screen.getByText('child')).toHaveClass(getPrefixCls('cell-value'));
});

test('render with size', () => {
  render(<Cell data-testid={testId} size="large" />);

  expect(screen.getByTestId(testId)).toHaveClass(getPrefixCls('cell-large'));
});
