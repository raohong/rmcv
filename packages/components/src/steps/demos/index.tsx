import { Arrow, Success } from '@rmc-vant/icons';
import React, { useState } from 'react';
import { Steps, Button, StepItem } from 'rmc-vant';

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
        <StepItem>买家下单</StepItem>
        <StepItem>商家接单</StepItem>
        <StepItem>买家提货</StepItem>
      </Steps>
      <Steps current={current} onChange={set}>
        <StepItem>买家下单</StepItem>
        <StepItem>商家接单</StepItem>
        <StepItem>买家提货</StepItem>
      </Steps>
      <Button type="primary" onClick={() => set((current + 1) % 3)}>
        SET
      </Button>
    </div>
  );
};
