import { render, screen } from '@testing-library/react';
import { Tabs, tabsClassNames } from '..';

const testId = 'tabs';

it('render correctly', () => {
  const tree = render(<Tabs items={[{ tab: 1 }]}></Tabs>);

  expect(tree.asFragment()).toMatchSnapshot();
});

it('render with defaultActiveKey', () => {
  render(
    <Tabs
      data-testid={testId}
      items={[
        {
          tab: '1',
        },
        {
          tab: '2',
        },
        {
          tab: '3',
        },
      ]}
      defaultActiveKey='3'
    />,
  );

  const tabNav = screen.getAllByRole('tabpanel');

  tabNav.forEach((item, index) => {
    if (index === 2) {
      expect(item).toHaveStyle({
        display: 'none',
      });
    }
    else {
      expect(item).not.toHaveStyle({ display: 'none' });
    }
  });
});

it('render with activeKey', () => {
  render(
    <Tabs
      data-testid={testId}
      items={[
        {
          tab: '1',
        },
        {
          tab: '2',
        },
      ]}
      activeKey='2'
    />,
  );

  const target = screen.getAllByRole('tab')[1];

  expect(target).toHaveAttribute('tabindex', '0');
});

it('render with titleActiveColor and titleInactiveColor', () => {
  render(
    <Tabs
      data-testid={testId}
      titleActiveColor='red'
      items={[
        {
          tab: '1',
        },
        {
          tab: '2',
        },
      ]}
      titleInactiveColor='blue'
    />,
  );

  const [t1, t2] = screen.getAllByRole('tab');

  expect(t1).toHaveStyleRule('color', 'red');
  expect(t2).toHaveStyleRule('color', 'blue');
});

it('render with color and backgroundColor', () => {
  const app = render(
    <Tabs
      color='red'
      backgroundColor='blue'
      items={[
        {
          tab: '1',
        },
        {
          tab: '2',
        },
      ]}
    />,
  );

  const [t1] = screen.getAllByRole('tab');

  expect(t1).not.toHaveStyleRule('background', 'blue');

  app.rerender(
    <Tabs
      color='red'
      backgroundColor='blue'
      items={[
        {
          tab: '1',
        },
        {
          tab: '2',
        },
      ]}
      type='card'
    />,
  );
  const [tab1, tab2] = screen.getAllByRole('tab');

  expect(tab1).toHaveStyleRule('background', 'blue');
  expect(tab2).toHaveStyleRule('color', 'red');
});

it('render with lazyRender', () => {
  render(
    <Tabs
      data-testid={testId}
      items={[
        {
          tab: '1',
        },
        {
          tab: '2',
        },
      ]}
      lazyRender
    />,
  );

  const target = screen
    .getByTestId(testId)
    .querySelectorAll(`.${tabsClassNames.panel}`)[1];

  expect(target).toBeEmptyDOMElement();
});
