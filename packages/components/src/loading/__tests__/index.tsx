import React from 'react';
import { render, screen } from '@testing-library/react';
import { getPrefixCls } from '../../_utils';
import Loading from '../Loading';

test('render correctly', () => {
  const tree = render(<Loading />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with type', () => {
  render(<Loading type="circle" />);

  const com = screen.getByRole('alert');

  expect(com.tagName).toBe('SPAN');
  expect(
    com.querySelector(`.${getPrefixCls('loading-ios-spinner')}`),
  ).toContainHTML('i');
});

test('render with className', () => {
  const name = 'test';

  render(<Loading className={name} />);

  expect(screen.getByRole('alert')).toHaveClass(name);
});

test('render with size and color', () => {
  render(<Loading size={40} color="red" />);

  const spinnerContainer = screen
    .getByRole('alert')
    .querySelector(`.${getPrefixCls('loading-spinner')}`);

  expect(spinnerContainer).toHaveStyle({
    'font-size': '40px',
    color: 'red',
  });
});

test('render with children', () => {
  const text = 'loading...';

  render(<Loading>{text}</Loading>);

  expect(screen.getByRole('alert')).toHaveTextContent(text);
});

test('render with textColor and empty child', () => {
  render(<Loading textColor="green"></Loading>);

  const dom = screen.getByRole('alert');

  expect(dom).not.toContainElement(
    dom.querySelector(`.${getPrefixCls('loading-text')}`),
  );
});

test('render with textColor and textSize', () => {
  const text = 'loading...';

  render(
    <Loading textSize={10} textColor="green">
      {text}
    </Loading>,
  );

  const dom = screen.getByRole('alert');
  const textContainer = dom.querySelector(`.${getPrefixCls('loading-text')}`);

  expect(textContainer).toBeInTheDocument();
  expect(textContainer).toHaveStyle({
    'font-size': '10px',
    color: 'green',
  });
});
