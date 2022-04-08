import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { useControllableValue } from '@rmc-vant/hooks';
import CollapseItem from '../CollapseItem';
import Collapse from '../Collapse';
import { CollapseProps } from '../interface';

const testId = 'collapse';

const App: React.FC<Pick<CollapseProps, 'activeKey' | 'onChange'>> = (props) => {
  const [activeKey, setActiveKey] = useControllableValue<string[]>(props, {
    valuePropName: 'activeKey',
  });
  return (
    <Collapse data-testid={testId} onChange={setActiveKey} activeKey={activeKey}>
      <CollapseItem title="1" data-testid="1" key="1" />
      <CollapseItem title="2" data-testid="2" key="2" />
    </Collapse>
  );
};

test('render correctly', () => {
  const tree = render(<Collapse />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with defaultActiveKey', () => {
  render(
    <Collapse data-testid={testId} defaultActiveKey="1">
      <CollapseItem data-testid="1" key="1" />
      <CollapseItem data-testid="2" key="2" />
    </Collapse>,
  );

  expect(screen.getByTestId('1')).toHaveAttribute('aria-expanded', 'true');
  expect(screen.getByTestId('2')).toHaveAttribute('aria-expanded', 'false');
});

test('render with activeKey and onChange', async () => {
  const handler = jest.fn();

  const com = render(<App onChange={handler} />);

  expect(screen.getByTestId('1')).toHaveAttribute('aria-expanded', 'false');
  expect(screen.getByTestId('2')).toHaveAttribute('aria-expanded', 'false');

  act(() => {
    fireEvent.click(screen.getByTestId('1').firstElementChild as HTMLElement);
  });

  expect(screen.getByTestId('1')).toHaveAttribute('aria-expanded', 'true');
  expect(handler).toBeCalledWith(['1']);

  com.rerender(<App onChange={handler} activeKey={[]} />);

  expect(screen.getByTestId('1')).toHaveAttribute('aria-expanded', 'false');

  com.rerender(<App onChange={handler} activeKey={['2']} />);

  expect(screen.getByTestId('1')).toHaveAttribute('aria-expanded', 'false');
  expect(screen.getByTestId('2')).toHaveAttribute('aria-expanded', 'true');
});
