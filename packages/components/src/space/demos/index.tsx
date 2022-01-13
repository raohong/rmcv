import React from 'react';
import { Button, Space } from 'rmc-vant';

export default () => {
  return (
    <div>
      <Space
        align="center"
        split={<div style={{ width: 2, background: 'red', height: '1em' }} />}
      >
        <Button>按钮</Button>
        <Button type="primary" size="large">
          Large XXXXX
        </Button>
        <Button>按钮</Button>
      </Space>
    </div>
  );
};
