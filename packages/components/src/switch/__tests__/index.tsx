import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import Switch from '../Switch';
import { switchClassNames } from '../classNames';

it('render correctly', () => {
  const tree = render(<Switch />);

  expect(tree.asFragment()).toMatchSnapshot();
});

it('render with defaultChecked', () => {
  render(<Switch defaultChecked />);

  expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
});

it('render with value', async () => {
  const App = () => {
    const [checked, set] = useState(false);

    return <Switch checked={checked} onChange={set} />;
  };
  render(<App />);

  expect(screen.getByRole('switch')).not.toHaveAttribute('aria-checked', 'true');
  await userEvent.click(screen.getByRole('switch'));
  expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
});

it('render with loading', () => {
  render(<Switch loading />);

  userEvent.click(screen.getByRole('switch'));
  expect(
    screen.getByRole('switch').querySelector(`.${switchClassNames.loadingIcon}`),
  ).toBeInTheDocument();
  expect(screen.getByRole('switch')).not.toHaveAttribute('aria-checked', 'true');
});

it('render with disabled', () => {
  render(<Switch disabled />);

  userEvent.click(screen.getByRole('switch'));

  expect(screen.getByRole('switch')).toHaveClass(switchClassNames.disabled);
  expect(screen.getByRole('switch')).not.toHaveClass(switchClassNames.checked);
});

it('render with size', () => {
  render(<Switch size={20} />);

  expect(screen.getByRole('switch')).toHaveStyle({
    'font-size': '20px',
  });
});

it('render with  activeColor', async () => {
  render(<Switch activeColor='red' />);

  await userEvent.click(screen.getByRole('switch'));
  expect(screen.getByRole('switch')).toHaveStyleRule('background-color', 'red');
});

it('render with inactiveColor', () => {
  render(<Switch inactiveColor='#eee' />);

  expect(screen.getByRole('switch')).toHaveStyle({
    'background-color': '#eee',
  });
});

it('render with node', () => {
  render(<Switch node={checked => (checked ? 'checked' : 'unchecked')} />);

  expect(screen.getByRole('switch')).toHaveTextContent('unchecked');
  userEvent.click(screen.getByRole('switch'));
  expect(screen.getByRole('switch')).toHaveTextContent('checked');
});
