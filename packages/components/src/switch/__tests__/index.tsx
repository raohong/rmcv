import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getPrefixCls } from '../../_utils';
import Switch from '../Switch';

const testId = 'switch';

test('render correctly', () => {
  const tree = render(<Switch />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with defaultChecked', () => {
  render(<Switch defaultChecked />);

  expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
  expect(screen.getByRole('switch')).toHaveClass(getPrefixCls('switch-checked'));
});

test('render with value', () => {
  const App = () => {
    const [checked, set] = useState(false);

    return <Switch checked={checked} onChange={set} />;
  };
  render(<App />);

  expect(screen.getByRole('switch')).not.toHaveClass(getPrefixCls('switch-checked'));
  userEvent.click(screen.getByRole('switch'));
  expect(screen.getByRole('switch')).toHaveClass(getPrefixCls('switch-checked'));
});

test('render with loading', () => {
  render(<Switch loading />);

  userEvent.click(screen.getByRole('switch'));
  expect(
    screen
      .getByRole('switch')
      .querySelector(`.${getPrefixCls('switch-loading-icon')}`),
  ).toBeInTheDocument();
  expect(screen.getByRole('switch')).not.toHaveClass(getPrefixCls('switch-checked'));
});

test('render with disabled', () => {
  render(<Switch disabled />);

  userEvent.click(screen.getByRole('switch'));

  expect(screen.getByRole('switch')).toHaveClass(getPrefixCls('switch-disabled'));
  expect(screen.getByRole('switch')).not.toHaveClass(getPrefixCls('switch-checked'));
});

test('render with size', () => {
  render(<Switch size={20} />);

  expect(screen.getByRole('switch')).toHaveStyle({
    'font-size': '20px',
  });
});

test('render with  activeColor', () => {
  render(<Switch activeColor="red" />);

  userEvent.click(screen.getByRole('switch'));
  expect(screen.getByRole('switch')).toHaveStyle({
    'background-color': 'red',
  });
});

test('render with inactiveColor', () => {
  render(<Switch inactiveColor="#eee" />);

  expect(screen.getByRole('switch')).toHaveStyle({
    'background-color': '#eee',
  });
});

test('render with node', () => {
  render(<Switch node={(checked) => (checked ? 'checked' : 'unchecked')} />);

  expect(screen.getByRole('switch')).toHaveTextContent('unchecked');
  userEvent.click(screen.getByRole('switch'));
  expect(screen.getByRole('switch')).toHaveTextContent('checked');
});
