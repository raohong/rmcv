import React from 'react';
import { render, screen } from '@testing-library/react';

import Badge from '..';
import { getPrefixCls } from '../../_utils';

const testId = 'badge-test';

test('render correctly', () => {
  const tree = render(<Badge />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with content', () => {
  const com = render(<Badge content={<span data-testid={testId} />} />);

  expect(screen.getByTestId(testId)).toBeInTheDocument();

  com.rerender(<Badge content={<span data-testid={testId} />}>0</Badge>);
  expect(com.container).toContainElement(
    com.container.querySelector(`.${getPrefixCls('badge-fixed')}`),
  );

  com.rerender(
    <Badge content={<span data-testid={testId} />} children=""></Badge>,
  );
  expect(com.container).toContainElement(
    com.container.querySelector(`.${getPrefixCls('badge-fixed')}`),
  );
});

test('render with dot', () => {
  const com = render(<Badge dot />);

  expect(com.container).toContainElement(
    com.container.querySelector(`.${getPrefixCls('badge-dot')}`),
  );
});

test('render with dot and content', () => {
  const com = render(
    <Badge dot content={<span className="content"></span>}></Badge>,
  );
  const container = com.container;

  expect(container).toContainElement(
    container.querySelector(`.${getPrefixCls('badge-dot')}`),
  );
  expect(container).not.toContainElement(container.querySelector('.content'));

  com.rerender(<Badge content={<span className="content"></span>}></Badge>);
  expect(container).not.toContainElement(
    container.querySelector(`.${getPrefixCls('badge-dot')}`),
  );
  expect(container).toContainElement(container.querySelector('.content'));
});

test('render with number content', () => {
  const com = render(<Badge content={10}></Badge>);
  const container = com.container;

  expect(container).toContainElement(
    container.querySelector(`.${getPrefixCls('badge-number-wrapper')}`),
  );
  expect(
    container.querySelector(`.${getPrefixCls('badge-number-wrapper')}`),
  ).toHaveAttribute('title', '10');

  com.rerender(<Badge content={100}></Badge>);
  expect(screen.getByText('99+')).toBeInTheDocument();
});

test('render with max', () => {
  render(<Badge max={4} content={10}></Badge>);
  expect(screen.getByText('4+')).toBeInTheDocument();
});
