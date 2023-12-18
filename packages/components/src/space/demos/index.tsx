import { DemoBlock } from '@rmc-vant/demo';
import { Arrow } from '@rmc-vant/icons';
import React from 'react';
import { Button, Space } from 'rmc-vant';

export default () => {
  const renderButtons = (num: number, block?: boolean) =>
    Array.from({ length: num }, (_, i) => (
      <Button type="primary" block={block} key={i}>
        按钮
      </Button>
    ));

  return (
    <>
      <DemoBlock title="基础用法">
        <Space>{renderButtons(4)}</Space>
      </DemoBlock>
      <DemoBlock title="垂直排列">
        <Space direction="vertical" fill>
          {renderButtons(4, true)}
        </Space>
      </DemoBlock>
      <DemoBlock title="自定义间距">
        <Space size={20}>{renderButtons(3)}</Space>
        <Space sx={{ marginTop: 12 }} size="2rem">
          {renderButtons(3)}
        </Space>
      </DemoBlock>
      <DemoBlock title="自动换行">
        <Space wrap>{renderButtons(10)}</Space>
      </DemoBlock>
      <DemoBlock title="自定义分割线">
        <Space split={<Arrow style={{ color: '#858585' }} />}>
          <span>链接1</span>
          <span>链接2</span>
          <span style={{ color: '#1989fa' }}>链接3</span>
        </Space>
      </DemoBlock>
    </>
  );
};
