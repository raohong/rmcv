import { DemoBlock } from '@rmc-vant/demo';
import React from 'react';
import { Loading, Space } from 'rmc-vant';

export default () => (
  <>
    <DemoBlock title="加载类型">
      <Space size="middle">
        <Loading />
        <Loading type="spinner" />
      </Space>
    </DemoBlock>
    <DemoBlock title="自定义颜色">
      <Space size="middle">
        <Loading color="#1989fa" />
        <Loading type="spinner" color="#1989fa" />
      </Space>
    </DemoBlock>
    <DemoBlock title="自定义大小">
      <Space size="middle">
        <Loading size={24} />
        <Loading type="spinner" size={24} />
      </Space>
    </DemoBlock>
    <DemoBlock title="加载文案">
      <Space size="middle">
        <Loading size={24} />
        <Loading type="spinner" size={24}>
          加载中...
        </Loading>
      </Space>
    </DemoBlock>
    <DemoBlock title="垂直排列">
      <Space size="middle">
        <Loading type="spinner" size={24} vertical>
          加载中...
        </Loading>
      </Space>
    </DemoBlock>
    <DemoBlock title="自定义文案颜色">
      <Space size="middle">
        <Loading color="#0094ff" vertical>
          加载中...
        </Loading>
        <Loading type="spinner" textColor="#0094ff" vertical>
          加载中...
        </Loading>
      </Space>
    </DemoBlock>
  </>
);
