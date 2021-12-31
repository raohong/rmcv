import { Arrow, Success } from '@rmc-vant/icons';
import React, { useState } from 'react';
import { Steps, Button } from 'rmc-vant';

const { Item } = Steps;

export default () => {
  const [current, set] = useState(0);

  return (
    <div>
      <Steps
        direction="horizontal"
        current={current}
        onChange={set}
        inactiveIcon={<Arrow />}
        activeIcon={<Success />}
      >
        <Item>买家下单</Item>
        <Item>商家接单</Item>
        <Item>买家提货</Item>
      </Steps>
      <Steps current={current} onChange={set}>
        <Item>买家下单</Item>
        <Item>商家接单</Item>
        <Item>买家提货</Item>
      </Steps>
      <Button type="primary" onClick={() => set((current + 1) % 3)}>
        SET
      </Button>
    </div>
  );
};
