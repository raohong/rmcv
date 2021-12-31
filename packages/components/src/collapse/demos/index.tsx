import React from 'react';
import { Collapse, Cell } from 'rmc-vant';

export default () => {
  return (
    <Cell.Group title="基础用法">
      <Collapse
        accordion
        onChange={(evt) => {
          console.log('change', evt);
        }}
      >
        <Collapse.Item value="test" key="title" title="标题1" border>
          代码是写出来给人看的，附带能在机器上运行
        </Collapse.Item>
        <Collapse.Item key="21" title="标题2">
          代码是写出来给人看的，附带能在机器上运行
        </Collapse.Item>
        <Collapse.Item title="标题2">
          代码是写出来给人看的，附带能在机器上运行
        </Collapse.Item>
        <span />
      </Collapse>
    </Cell.Group>
  );
};
