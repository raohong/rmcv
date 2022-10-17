import { DemoBlock } from '@rmc-vant/demo';
import React, { useState } from 'react';
import { Button, Progress, Space } from 'rmc-vant';

export default () => {
  const [p, set] = useState(0);

  return (
    <>
      <DemoBlock title="基础用法">
        <Progress percentage={50} />
      </DemoBlock>
      <DemoBlock title="线条粗细">
        <Progress percentage={50} strokeWidth={8} />
      </DemoBlock>
      <DemoBlock title="置灰">
        <Progress percentage={50} inactive />
      </DemoBlock>
      <DemoBlock title="样式定制">
        <Progress percentage={25} pivotText="橙色" color="#f2826a" />
        <Progress percentage={50} pivotText="红色" color="#ee0a24" />
        <Progress
          percentage={75}
          pivotText="紫色"
          pivotColor="#7232dd"
          color="linear-gradient(to right, #be99ff, #7232dd)"
        />
      </DemoBlock>
      <DemoBlock title="过渡效果">
        <Progress percentage={p} />
        <Space>
          <Button
            size="small"
            type="primary"
            onClick={() => set(Math.min(100, p + 10))}
          >
            增加
          </Button>
          <Button
            size="small"
            type="danger"
            onClick={() => set(Math.max(0, p - 10))}
          >
            减少
          </Button>
        </Space>
      </DemoBlock>
    </>
  );
};
