import { DemoBlock } from '@rmc-vant/demo';
import React, { useState } from 'react';
import { Button, Image, Skeleton, Space } from 'rmc-vant';

export default () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <DemoBlock title="基础用法">
        <Skeleton row={3} title />
      </DemoBlock>
      <DemoBlock title="显示头像">
        <Skeleton row={3} title avatar />
      </DemoBlock>
      <DemoBlock title="显示子组件">
        <Space style={{ marginBottom: 24 }}>
          <Button size="small" type="primary" onClick={() => setLoading(false)}>
            显示子组件
          </Button>
          <Button size="small" type="primary" onClick={() => setLoading(true)} plain>
            隐藏子组件
          </Button>
        </Space>

        <Skeleton row={3} loading={loading} title avatar>
          <div style={{ display: 'flex', gap: 8 }}>
            <Image
              width={32}
              height={32}
              src="https://cdn.jsdelivr.net/npm/@vant/assets/logo.png"
              round
            />
            <div>
              <h3 style={{ fontSize: 18, margin: 0 }}>关于 Vant</h3>
              <p>
                Vant 是一套轻量、可靠的移动端 Vue
                组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。
              </p>
            </div>
          </div>
        </Skeleton>
      </DemoBlock>
    </>
  );
};
