import { DemoBlock } from '@rmc-vant/demo';
import { Success } from '@rmc-vant/icons';
import React, { useState } from 'react';
import { Button, Steps } from 'rmc-vant';

export default () => {
  const [current, set] = useState(0);

  const items = ['买家下单', '商家接单', '买家提货', '交易完成'].map((item) => ({
    key: item,
    label: item,
  }));

  return (
    <>
      <DemoBlock title="基础用法" expand>
        <Steps current={current} items={items} />
      </DemoBlock>
      <DemoBlock style={{ marginTop: 32 }}>
        <Button onClick={() => set((current + 1) % 4)}>下一步</Button>
      </DemoBlock>
      <DemoBlock title="自定义样式" expand>
        <Steps
          activeColor="#38f"
          current={current}
          activeIcon={<Success />}
          items={items}
        />
      </DemoBlock>
      <DemoBlock title="竖向步骤条" expand>
        <Steps
          direction="vertical"
          items={[
            {
              label: (
                <>
                  <span>【城市】物流状态1</span>
                  <div>2016-07-12 12:40</div>
                </>
              ),
            },
            {
              label: (
                <>
                  <span>【城市】物流状态2</span>
                  <div>2016-07-11 10:00</div>
                </>
              ),
            },
            {
              label: (
                <>
                  <span>快件已发货</span>
                  <div>2016-07-10 09:30</div>
                </>
              ),
            },
          ]}
        />
      </DemoBlock>
    </>
  );
};
