import { useControllableValue } from '@rmc-vant/hooks';
import { act, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import type { CollapseProps } from '..';
import { Collapse, CollapseItem } from '..';

const testId = 'collapse';

const App: React.FC<Pick<CollapseProps, 'activeKey' | 'onChange'>> = (props) => {
  const [activeKey, setActiveKey] = useControllableValue(props, {
    valuePropName: 'activeKey',
  });
  return (
    <Collapse data-testid={testId} onChange={setActiveKey} activeKey={activeKey}>
      <CollapseItem title='1' data-testid='1' key='1' />
      <CollapseItem title='2' data-testid='2' key='2' />
    </Collapse>
  );
};

it('render correctly', () => {
  const tree = render(<Collapse />);

  expect(tree.asFragment()).toMatchSnapshot();
});

it('render with defaultActiveKey', () => {
  render(
    <Collapse data-testid={testId} defaultActiveKey='1'>
      <CollapseItem data-testid='1' key='1' />
      <CollapseItem data-testid='2' key='2' />
    </Collapse>,
  );

  expect(screen.getByTestId('1')).toHaveAttribute('aria-expanded', 'true');
  expect(screen.getByTestId('2')).toHaveAttribute('aria-expanded', 'false');
});

it('render with activeKey and onChange', async () => {
  const handler = jest.fn();

  const com = render(<App onChange={handler} />);

  expect(screen.getByTestId('1')).toHaveAttribute('aria-expanded', 'false');
  expect(screen.getByTestId('2')).toHaveAttribute('aria-expanded', 'false');

  act(() => {
    fireEvent.click(screen.getByTestId('1').firstElementChild as HTMLElement);
  });

  expect(screen.getByTestId('1')).toHaveAttribute('aria-expanded', 'true');
  expect(handler).toHaveBeenCalledWith(['1']);

  com.rerender(<App onChange={handler} activeKey={[]} />);

  expect(screen.getByTestId('1')).toHaveAttribute('aria-expanded', 'false');

  com.rerender(<App onChange={handler} activeKey={['2']} />);

  expect(screen.getByTestId('1')).toHaveAttribute('aria-expanded', 'false');
  expect(screen.getByTestId('2')).toHaveAttribute('aria-expanded', 'true');
});
