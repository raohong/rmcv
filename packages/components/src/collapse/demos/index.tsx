import React from 'react';
import { Collapse, CollapseItem, CellGroup } from 'rmc-vant';

export default () => {
  return (
    <CellGroup title="基础用法">
      <Collapse
        accordion
        onChange={(evt) => {
          console.log('change', evt);
        }}
      >
        <CollapseItem value="test" key="title" title="标题1" border>
          代码是写出来给人看的，附带能在机器上运行
        </CollapseItem>
        <CollapseItem key="21" title="标题2">
          代码是写出来给人看的，附带能在机器上运行
        </CollapseItem>
        <CollapseItem title="标题2">
          代码是写出来给人看的，附带能在机器上运行
        </CollapseItem>
        <span />
      </Collapse>
    </CellGroup>
  );
};
