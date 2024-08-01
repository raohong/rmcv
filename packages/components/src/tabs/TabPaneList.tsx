import clsx from 'clsx';
import React from 'react';
import type { TabPaneListProps } from './interface';
import { StyledDefaultContent, StyledTabPanel } from './styles';

const TabPaneList: React.FC<TabPaneListProps> = ({
  items,
  lazyRender,
  componentState,
  slotClassNames,
}) => {
  return (
    <StyledDefaultContent
      className={slotClassNames.panels}
      componentState={componentState}
    >
      {items.map(item => (
        <StyledTabPanel
          style={{
            display: item.active ? '' : 'none',
          }}
          componentState={componentState}
          className={clsx(slotClassNames.panel, item.className)}
          key={item.key}
          role='tabpanel'
          id={item.tabPanelId}
          aria-labelledby={item.tabPanelId}
        >
          {!lazyRender || item.active ? item.children : null}
        </StyledTabPanel>
      ))}
    </StyledDefaultContent>
  );
};

export default TabPaneList;
