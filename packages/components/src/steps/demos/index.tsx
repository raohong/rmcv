import { Arrow, Success } from '@rmc-vant/icons';
import React, { useState } from 'react';
import { Step, Steps, Button } from 'rmc-vant';

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
        <Step>买家下单</Step>
        <Step>商家接单</Step>
        <Step>买家提货</Step>
      </Steps>
      <Steps current={current} onChange={set}>
        <Step>买家下单</Step>
        <Step>商家接单</Step>
        <Step>买家提货</Step>
      </Steps>
      <Button type="primary" onClick={() => set((current + 1) % 3)}>
        SET
      </Button>
    </div>
  );
};
