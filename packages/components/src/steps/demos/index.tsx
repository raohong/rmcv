import { DemoBlock } from '@rmc-vant/demo';
import { Arrow, Success } from '@rmc-vant/icons';
import React, { useState } from 'react';
import { Steps, Button, StepItem } from 'rmc-vant';

export default () => {
  const [current, set] = useState(0);

  return (
    <>
      <DemoBlock title="基础用法" expand>
        <Steps current={current}>
          <StepItem>买家下单</StepItem>
          <StepItem>商家接单</StepItem>
          <StepItem>买家提货</StepItem>
          <StepItem>交易完成</StepItem>
        </Steps>
      </DemoBlock>
      <DemoBlock style={{ marginTop: 32 }}>
        <Button onClick={() => set((current + 1) % 4)}>下一步</Button>
      </DemoBlock>
      <DemoBlock title="自定义样式" expand>
        <Steps
          activeColor="#38f"
          current={current}
          activeIcon={<Success />}
          inactiveIcon={<Arrow />}
        >
          <StepItem>买家下单</StepItem>
          <StepItem>商家接单</StepItem>
          <StepItem>买家提货</StepItem>
          <StepItem>交易完成</StepItem>
        </Steps>
      </DemoBlock>
      <DemoBlock title="竖向步骤条" expand>
        <Steps direction="vertical">
          <StepItem>
            <b>【城市】物流状态1</b>
            <div>2016-07-12 12:40</div>
          </StepItem>
          <StepItem>
            <b>【城市】物流状态2</b>
            <div>2016-07-11 10:00</div>
          </StepItem>
          <StepItem>
            <b>快件已发货</b>
            <div>2016-07-10 09:30</div>
          </StepItem>
        </Steps>
      </DemoBlock>
    </>
  );
};
