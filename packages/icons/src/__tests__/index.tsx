import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Icon, { Arrow } from '..';

const prefixCls = 'rmc-vant-icon';

const CustomSvgComponent: React.FC = (props) => (
  <svg
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="3356"
    data-testid="svg"
    {...props}
  >
    <path
      d="M682.666667 554.666667V213.333333H256v341.333334a85.333333 85.333333 0 0 0 85.333333 85.333333h256a85.333333 85.333333 0 0 0 85.333334-85.333333zM213.333333 128h640a85.333333 85.333333 0 0 1 85.333334 85.333333v128a85.333333 85.333333 0 0 1-85.333334 85.333334h-85.333333v128a170.666667 170.666667 0 0 1-170.666667 170.666666H341.333333a170.666667 170.666667 0 0 1-170.666666-170.666666V170.666667a42.666667 42.666667 0 0 1 42.666666-42.666667z m554.666667 85.333333v128h85.333333V213.333333h-85.333333zM128 810.666667h682.666667a42.666667 42.666667 0 0 1 0 85.333333H128a42.666667 42.666667 0 0 1 0-85.333333z"
      p-id="3357"
    />
  </svg>
);

test('render correctly', () => {
  const tree = render(<Arrow />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render builtin icon', () => {
  render(<Arrow />);

  const com = screen.getByRole('img');

  expect(com.tagName).toBe('SPAN');
  expect(com.className).toBe(prefixCls);
});

test('render with className', () => {
  render(<Arrow className="test" />);

  expect(screen.getByRole('img')).toHaveClass('test');
});

test('render custom icon', () => {
  render(<Icon component={CustomSvgComponent} />);

  expect(screen.getByTestId('svg')).toHaveAttribute('width', '1em');
});
