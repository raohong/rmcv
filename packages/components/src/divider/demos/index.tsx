import { DemoBlock } from '@rmc-vant/demo';
import React from 'react';
import { Divider } from 'rmc-vant';

export default () => (
  <div style={{ background: '#fff', minHeight: '100vh', padding: 1 }}>
    <DemoBlock title="基础用法">
      <Divider />
    </DemoBlock>
    <DemoBlock title="展示文本">
      <Divider>文本</Divider>
    </DemoBlock>

    <DemoBlock title="内容位置">
      <Divider contentPosition="left">左边</Divider>
      <Divider contentPosition="right">右边</Divider>
    </DemoBlock>
    <DemoBlock title="虚线">
      <Divider dashed>文本</Divider>
    </DemoBlock>
    <DemoBlock title="自定义样式">
      <Divider
        sx={{
          color: '#1989fa',
          borderColor: '#1989fa',
          padding: '0 16px',
        }}
      >
        文本
      </Divider>
    </DemoBlock>
  </div>
);
