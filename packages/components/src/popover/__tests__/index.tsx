import { fireEvent, render, screen } from '@testing-library/react';
import React, { useState } from 'react';
import Popover from '..';

const testId = 'popover';

test('render correctly', () => {
  const tree = render(
    <Popover actions={[{ text: '1', icon: '1' }]}>
      <button>VIEW</button>
    </Popover>,
  );

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with onSelect', () => {
  const onSelect = jest.fn();
  const actions = [{ text: '1', icon: '1', className: 'action1' }];

  const com = render(
    <Popover visible onSelect={onSelect} actions={actions}>
      <button data-testid={testId}>SHOW</button>
    </Popover>,
  );

  fireEvent.click(com.container.querySelector('.action1')!);

  expect(onSelect).toHaveBeenCalledWith(actions[0], 0);
});

test('render with controlled visible', () => {
  const actions = [{ text: '1', icon: '1', className: 'action1' }];

  const App = () => {
    const [visible, set] = useState(false);

    return (
      <Popover
        visible={visible}
        onVisibleChange={set}
        actions={actions}
        data-testid="popper"
        closeOnClickAction
      >
        <button data-testid={testId}>SHOW</button>
      </Popover>
    );
  };

  render(<App />);

  fireEvent.click(screen.getByTestId(testId));
  expect(screen.getByTestId('popper')).toHaveAttribute('aria-hidden', 'false');

  fireEvent.click(screen.getByTestId('popper').querySelector('.action1')!);
  expect(screen.getByTestId('popper')).toHaveAttribute('aria-hidden', 'true');
});
