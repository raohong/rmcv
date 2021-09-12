import React from 'react';
import { render, screen } from '@testing-library/react';
import { getPrefixCls } from '../../_utils';
import { Cell } from '..';

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

  expect(
    com.container.querySelector(`.${getPrefixCls('cell-title')}`),
  ).toHaveClass(name);
});

test('render with value', () => {
  render(<Cell value="value" />);

  expect(screen.getByText('value')).not.toBeNull();
});

test('render with valueClassName', () => {
  const name = 'value-class-name';
  const com = render(<Cell valueClassName={name} value="value" />);

  expect(
    com.container.querySelector(`.${getPrefixCls('cell-value')}`),
  ).toHaveClass(name);
});

test('render with label', () => {
  render(<Cell label="label" />);

  expect(screen.getByText('label')).not.toBeNull();
});

test('render with labelClassName', () => {
  const name = 'label-class-name';
  const com = render(<Cell labelClassName={name} label="label" />);

  expect(
    com.container.querySelector(`.${getPrefixCls('cell-label')}`),
  ).toHaveClass(name);
});

test('render with icon', () => {
  render(<Cell icon={<span>icon</span>} label="label" />);

  expect(screen.getByText('icon')).toBeInTheDocument();
});

test('render with iconClassName', () => {
  render(<Cell iconClassName="icon" icon={<span>icon</span>} label="label" />);

  expect(screen.getByText('icon').parentNode).toHaveClass('icon');
});
