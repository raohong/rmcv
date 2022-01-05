import React from 'react';
import { CartOutlined } from '@rmc-vant/icons';
import { Cell, CellGroup } from 'rmc-vant';

export default () => {
  return (
    <div>
      <CellGroup title="示例1">
        <Cell border icon={<CartOutlined />} title="单元格" value="内容" />
        <Cell border title="单元格" value="内容" isLink />
      </CellGroup>
      <CellGroup title="示例2">
        <Cell
          title="单元格单元格单元格单元格单元格单元格单元格"
          label="单元格单元格单元格单元格单元格单元格单元格"
          value="内容"
          clickable
          border
        />
        <Cell title="单元格" value="内容" clickable border />
        <Cell
          title="居中"
          center
          value="内容格单元格格单元格格单元格格单元格格单元格"
          clickable
          border
        />
      </CellGroup>
      <Cell
        title="大尺寸"
        size="large"
        value="内容"
        label="label"
        clickable
        border
      />
    </div>
  );
};
