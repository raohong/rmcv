import React from 'react';
import { Cell, CellGroup, Toast } from 'rmc-vant';

export default () => (
  <div>
    <CellGroup title="基础用法">
      <Cell
        title="文字提示"
        clickable
        onClick={() => {
          Toast('message');
        }}
      />
      <Cell
        title="加载提示"
        clickable
        onClick={() => {
          Toast.loading({
            message: '加载中...',
          });
        }}
      />
      <Cell
        title="成功提示"
        clickable
        onClick={() => {
          Toast.success({
            message: '成功',
          });
        }}
      />
      <Cell
        title="失败提示"
        clickable
        onClick={() => {
          Toast.fail({
            message: '加载失败',
          });
        }}
      />
    </CellGroup>
  </div>
);
