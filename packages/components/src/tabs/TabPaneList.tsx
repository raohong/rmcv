import classNames from 'classnames';
import React from 'react';
import { useConfigContext } from '../config-provider';
import { TabPaneListProps } from './interface';

const TabPaneList: React.FC<TabPaneListProps> = ({ tabPaneList, lazyRender }) => {
  const { getPrefixCls } = useConfigContext();

  return (
    <div className={getPrefixCls('tabs-content')}>
      {tabPaneList.map((item) => (
        <div
          style={{
            display: item.active ? '' : 'none',
          }}
          className={classNames(getPrefixCls('tabs-panel'), item.className)}
          key={item.key}
          role="tabpanel"
          id={item.tabPanelId}
          aria-labelledby={item.tabPanelId}
        >
          {!lazyRender || item.active ? item.children : null}
        </div>
      ))}
    </div>
  );
};

export default TabPaneList;
