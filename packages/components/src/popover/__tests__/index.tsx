import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { Popover } from '..';

const testId = 'popover';

it('render correctly', () => {
  const tree = render(
    <Popover actions={[{ text: '1', icon: '1' }]}>
      <button>VIEW</button>
    </Popover>,
  );

  expect(tree.asFragment()).toMatchSnapshot();
});

it('render with onSelect', async () => {
  const onSelect = jest.fn();
  const actions = [
    { 'text': '1', 'icon': '1', 'className': 'action1', 'data-testid': 'action' },
  ];

  render(
    <Popover open onSelect={onSelect} actions={actions}>
      <button data-testid={testId}>SHOW</button>
    </Popover>,
  );

  await userEvent.click(screen.getByTestId('action'));

  expect(onSelect).toHaveBeenCalledWith(actions[0], 0);
});

it('render with controlled visible', async () => {
  const actions = [{ text: '1', icon: '1', className: 'action1' }];

  const App = () => {
    const [open, set] = useState(false);

    return (
      <Popover
        open={open}
        onOpenChange={set}
        actions={actions}
        data-testid='popper'
        closeOnClickAction
      >
        <button data-testid={testId}>SHOW</button>
      </Popover>
    );
  };

  render(<App />);

  await userEvent.click(screen.getByTestId(testId));
  expect(screen.getByTestId('popper')).toHaveAttribute('aria-hidden', 'false');

  await userEvent.click(screen.getByTestId('popper').querySelector('.action1')!);
  expect(screen.getByTestId('popper')).toHaveAttribute('aria-hidden', 'true');
});
