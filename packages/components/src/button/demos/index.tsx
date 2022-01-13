import React, { useRef } from 'react';
import { Button, Space } from 'rmc-vant';
import { DemoBlock } from '@rmc-vant/demo';
import { Plus } from '@rmc-vant/icons';

export default () => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  return (
    <>
      <DemoBlock title="按钮类型">
        <Space size="middle">
          <Button>默认按钮</Button>
          <Button type="primary">主要按钮</Button>
          <Button type="success">成功按钮</Button>
          <Button type="warning">警告按钮</Button>
          <Button type="danger">危险按钮</Button>
        </Space>
      </DemoBlock>
      <DemoBlock title="朴素按钮">
        <Space size="middle">
          <Button type="primary" plain>
            朴素按钮
          </Button>
          <Button type="success" plain>
            朴素按钮
          </Button>
        </Space>
      </DemoBlock>
      <DemoBlock title="细边框">
        <Space size="middle">
          <Button type="primary" plain hairline>
            细边框按钮
          </Button>
          <Button type="success" plain hairline>
            细边框按钮
          </Button>
        </Space>
      </DemoBlock>
      <DemoBlock title="禁用状态">
        <Space size="middle">
          <Button type="primary" disabled>
            禁用状态
          </Button>
          <Button type="success" disabled>
            禁用状态
          </Button>
        </Space>
      </DemoBlock>
      <DemoBlock title="加载状态">
        <Space size="middle">
          <Button type="primary" loading></Button>
          <Button type="primary" loadingType="spinner" loading></Button>
          <Button
            type="success"
            loadingType="spinner"
            loadingText="加载中..."
            loading
          ></Button>
        </Space>
      </DemoBlock>
      <DemoBlock title="按钮形状">
        <Space size="middle">
          <Button type="primary">方形按钮</Button>
          <Button type="success" shape="round">
            圆形按钮
          </Button>
        </Space>
      </DemoBlock>
      <DemoBlock title="图标按钮">
        <Space size="middle">
          <Button type="primary" icon={<Plus />} />
          <Button type="primary" icon={<Plus />}>
            图标
          </Button>
          <Button
            type="primary"
            icon={
              <img
                style={{ width: '1em', height: '1em' }}
                src="https://img.yzcdn.cn/vant/user-active.png"
              />
            }
            plain
          >
            图标
          </Button>
        </Space>
      </DemoBlock>
      <DemoBlock title="按钮尺寸">
        <Space direction="vertical" size="middle" block>
          <Button type="primary" size="large">
            大号按钮
          </Button>
          <Space size="middle">
            <Button type="primary">普通按钮</Button>
            <Button type="primary" size="small">
              小型按钮
            </Button>
            <Button type="primary" size="mini">
              迷你按钮
            </Button>
          </Space>
        </Space>
      </DemoBlock>
      <DemoBlock title="块级按钮">
        <Button type="primary" block>
          按钮
        </Button>
      </DemoBlock>
      <DemoBlock title="自定义颜色">
        <Space size="middle">
          <Button color="#7232dd">单色按钮</Button>
          <Button color="#7232dd" plain>
            单色按钮
          </Button>
          <Button color="linear-gradient(to right, #ff6034, #ee0a24)">
            渐变色按钮
          </Button>
        </Space>
      </DemoBlock>
    </>
  );
};
