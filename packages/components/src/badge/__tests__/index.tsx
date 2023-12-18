import React from 'react';
import Badge, { badgeClassNames } from '..';
import { render, screen } from '../../_test-utils';

const testId = 'badge-test';

test('render correctly', () => {
  const tree = render(
    <Badge>
      <span />
    </Badge>,
  );

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with content', () => {
  render(<Badge content={<span data-testid={testId} />} />);

  expect(screen.getByTestId(testId)).toBeInTheDocument();
});

test('render with dot', () => {
  const com = render(<Badge dot />);

  expect(com.container.querySelector(`.${badgeClassNames.dot}`)).toBeInTheDocument();
});

test('render with dot and content', () => {
  const com = render(<Badge dot content={<span data-testid="content" />} />);
  const { container } = com;

  expect(container).toContainElement(
    container.querySelector(`.${badgeClassNames.dot}`),
  );
  expect(screen.queryByTestId('content')).not.toBeInTheDocument();

  com.rerender(<Badge content={<span data-testid="content" />} />);

  expect(container).not.toContainElement(
    container.querySelector(`.${badgeClassNames.dot}`),
  );
  expect(screen.queryByTestId('content')).toBeInTheDocument();
});

test('render with number content', () => {
  const { container } = render(<Badge content={10} />);

  expect(container.querySelector('[title="10"]')).toBeInTheDocument();
});

test('render with max', () => {
  render(<Badge max={4} content={10} />);

  expect(screen.queryByText('4+')).toBeInTheDocument();
});

test('render with position', () => {
  render(<Badge position="top-left" data-testid={testId} content="1" />);

  expect(screen.getByTestId(testId)).toHaveClass(badgeClassNames.positionTopLeft);
});
