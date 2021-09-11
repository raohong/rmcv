import React from 'react';
import { CartOutlined } from '@rmc-vant/icons';
import { Cell, CellGroup } from 'rmc-vant';

export default () => {
  return (
    <div>
      <CellGroup title="示例">
        <Cell icon={<CartOutlined />} title="单元格" value="内容"></Cell>
        <Cell border title="单元格" value="内容" isLink></Cell>
      </CellGroup>
      <Cell title="单元格" value="内容" clickable></Cell>
    </div>
  );
};
