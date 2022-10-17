import React from 'react';
import { Cell, IndexAnchor, IndexBar, TabPane, Tabs } from 'rmc-vant';

const defaultIndexList = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i),
);

const customIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default () => {
  return (
    <Tabs lazyRender>
      <TabPane tab="基础用法" key="1">
        <IndexBar>
          {defaultIndexList.map((item) => (
            <div key={item}>
              <IndexAnchor index={item} />
              <Cell title="文本" />
              <Cell title="文本" />
              <Cell title="文本" />
            </div>
          ))}
        </IndexBar>
      </TabPane>
      <TabPane tab="自定义" key="2">
        <IndexBar indexList={customIndex}>
          {customIndex.map((item) => (
            <div key={item}>
              <IndexAnchor index={item}>标题 {item}</IndexAnchor>
              <Cell title="文本" />
              <Cell title="文本" />
              <Cell title="文本" />
            </div>
          ))}
        </IndexBar>
      </TabPane>
    </Tabs>
  );
};
