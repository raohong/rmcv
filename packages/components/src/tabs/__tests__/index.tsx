import { render, screen } from '@testing-library/react';
import React from 'react';
import { TabPane, Tabs } from '..';
import { getPrefixCls } from '../../_utils';

const testId = 'tabs';

test('render correctly', () => {
  const tree = render(
    <Tabs>
      <TabPane key="1" tab="1" />
      <TabPane key="2" tab="2" />
    </Tabs>,
  );

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with defaulActiveKey', () => {
  render(
    <Tabs data-testid={testId} defaultActiveKey="3">
      <TabPane key="1" tab="1" />
      <TabPane key="2" tab="2" />
      <TabPane key="3" tab="3" />
    </Tabs>,
  );

  const tabNav = screen.getAllByRole('tabpanel');

  tabNav.forEach((item, index) => {
    if (index === 2) {
      expect(item).toHaveStyle({
        display: 'none',
      });
    } else {
      expect(item).not.toHaveStyle({ display: 'none' });
    }
  });
});

test('render with activeKey', () => {
  render(
    <Tabs data-testid={testId} activeKey="2">
      <TabPane key="1" tab="1" />
      <TabPane key="2" tab="2" />
    </Tabs>,
  );

  const target = screen.getAllByRole('tab')[1];

  expect(target).toHaveAttribute('tabindex', '0');
});

test('render with titleActiveColor and titleInactiveColor', () => {
  render(
    <Tabs data-testid={testId} titleActiveColor="red" titleInactiveColor="blue">
      <TabPane key="1" tab="1" />
      <TabPane key="2" tab="2" />
    </Tabs>,
  );

  const [t1, t2] = screen.getAllByRole('tab');

  expect(t1).toHaveStyle({
    color: 'red',
  });
  expect(t2).toHaveStyle({
    color: 'blue',
  });
});

test('render with color and backgroundColor', () => {
  const app = render(
    <Tabs color="red" backgroundColor="blue">
      <TabPane key="1" tab="1" />
      <TabPane key="2" tab="2" />
    </Tabs>,
  );

  const [t1] = screen.getAllByRole('tab');

  expect(t1).not.toHaveStyle({
    'background-color': 'blue',
  });

  app.rerender(
    <Tabs color="red" backgroundColor="blue" type="card">
      <TabPane key="1" tab="1" />
      <TabPane key="2" tab="2" />
    </Tabs>,
  );
  const [tab1, tab2] = screen.getAllByRole('tab');

  expect(tab1).toHaveStyle({
    'background-color': 'blue',
  });
  expect(tab2).toHaveStyle({
    color: 'red',
  });
});

test('render with lazyRender', () => {
  render(
    <Tabs data-testid={testId} lazyRender>
      <TabPane key="1" tab="1">
        1
      </TabPane>
      <TabPane key="2" tab="2">
        2
      </TabPane>
    </Tabs>,
  );

  const target = screen
    .getByTestId(testId)
    .querySelectorAll(`.${getPrefixCls('tabs-panel')}`)[1];

  expect(target).toBeEmptyDOMElement();
});
