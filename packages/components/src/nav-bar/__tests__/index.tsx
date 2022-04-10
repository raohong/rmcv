import React from 'react';
import { render, screen } from '@testing-library/react';
import { getPrefixCls } from '../../_utils';
import NavBar from '../NavBar';

const testId = 'nav-bar';

test('render correctly', () => {
  const tree = render(<NavBar />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with title', () => {
  render(<NavBar title="title" />);

  expect(screen.getByText('title')).toBeInTheDocument();
});

test('render with leftArrow', () => {
  render(<NavBar title="title" data-testid={testId} leftArrow />);

  expect(screen.getByRole('img')).toHaveClass(getPrefixCls('nav-bar-arrow-icon'));
});

test('render with leftText', () => {
  render(<NavBar leftText="left-text" />);

  expect(screen.getByText('left-text')).toBeInTheDocument();
});

test('render with rightText', () => {
  render(<NavBar rightText="right-text" />);

  expect(screen.getByText('right-text')).toBeInTheDocument();
});

test('render with left', () => {
  render(<NavBar left={<span data-testid="left" />} />);

  expect(screen.getByTestId('left')).toBeInTheDocument();
});

test('render with right', () => {
  render(<NavBar right={<span data-testid="right" />} />);

  expect(screen.getByTestId('right')).toBeInTheDocument();
});

test('render with zIndex', () => {
  render(<NavBar zIndex={2} data-testid={testId} />);

  expect(screen.getByTestId(testId)).toHaveStyle({
    'z-index': 2,
  });
});

test('render with placeholder', () => {
  const com = render(<NavBar placeholder />);

  expect(
    com.container.querySelector(`.${getPrefixCls('placeholder')}`),
  ).not.toBeInTheDocument();

  com.rerender(<NavBar placeholder fixed />);

  expect(
    com.container.querySelector(`.${getPrefixCls('placeholder')}`),
  ).not.toBeInTheDocument();
});
