import React from 'react';
import Tag from '..';
import { render, screen } from '../../_test-utils';

const testId = 'tag';

test('render correctly', () => {
  const tree = render(<Tag />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test(`render with type `, () => {
  render(<Tag type="danger" data-testid={testId} />);

  expect(screen.getByTestId(testId)).toHaveClass(getPrefixCls(`tag-danger`));
});

test('render with round', () => {
  render(<Tag round data-testid={testId} />);
  expect(screen.getByTestId(testId)).toHaveClass(getPrefixCls('tag-round'));
});

test('render with plain', () => {
  render(<Tag plain data-testid={testId} />);
  expect(screen.getByTestId(testId)).toHaveClass(getPrefixCls('tag-plain'));
});

test('render with mark', () => {
  render(<Tag mark data-testid={testId} />);
  expect(screen.getByTestId(testId)).toHaveClass(getPrefixCls('tag-mark'));
});

test('render with color', () => {
  const color = 'red';

  render(<Tag color={color} data-testid={testId} />);
  expect(screen.getByTestId(testId)).toHaveStyle({
    'background-color': color,
  });
});

test('render with textColor', () => {
  const color = 'red';
  const com = render(<Tag textColor={color} data-testid={testId} />);
  expect(screen.getByTestId(testId)).toHaveStyle({
    color,
  });

  com.rerender(<Tag textColor={color} plain data-testid={testId} />);
  expect(screen.getByTestId(testId)).toHaveStyle({
    color,
  });
});

test('render with textColor and color', () => {
  const color = 'red';
  const textColor = 'green';
  const com = render(
    <Tag textColor={textColor} color={color} data-testid={testId} />,
  );
  expect(screen.getByTestId(testId)).toHaveStyle({
    color: textColor,
    'background-color': color,
  });
  com.rerender(
    <Tag plain textColor={textColor} color={color} data-testid={testId} />,
  );

  expect(screen.getByTestId(testId)).toHaveStyle({
    color: textColor,
  });
});

test('render with closeable', () => {
  const onClose = jest.fn();
  const com = render(<Tag closeable onClose={onClose} data-testid={testId} />);

  expect(com.container).toContainElement(
    com.container.querySelector(`.${getPrefixCls('tag-close-icon')}`),
  );
});
