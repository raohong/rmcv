import React from 'react';
import type { TabPaneProps } from './interface';

export const TAB_PANE_SYMBOL = Symbol('TAB_PANE');

const TabPane: React.FC<TabPaneProps> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

// @ts-ignore
TabPane[TAB_PANE_SYMBOL] = true;

export default TabPane;
