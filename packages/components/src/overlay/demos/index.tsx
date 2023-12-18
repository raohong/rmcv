import { DemoBlock } from '@rmc-vant/demo';
import React, { useState } from 'react';
import { Button, Overlay } from 'rmc-vant';

export default () => {
  const [open, set] = useState(false);
  const [customVisible, setCustomVisible] = useState(false);

  return (
    <div>
      <DemoBlock title="基础用法">
        <Button onClick={() => set(true)} type="primary">
          显示遮罩层
        </Button>
      </DemoBlock>
      <DemoBlock title="自定义内容">
        <Button onClick={() => setCustomVisible(true)} type="primary">
          自定义内容
        </Button>
      </DemoBlock>
      <Overlay open={open} onClick={() => set(false)} lazyRender />
      <Overlay
        open={customVisible}
        onClick={() => setCustomVisible(false)}
        lazyRender
      >
        <div
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              padding: '40px 60px',
              background: '#fff',
            }}
          >
            自定义内容
          </div>
        </div>
      </Overlay>
    </div>
  );
};
