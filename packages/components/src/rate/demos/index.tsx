import { DemoBlock } from '@rmc-vant/demo';
import { LikeFilled, LikeOutlined, StarFilled } from '@rmc-vant/icons';
import React from 'react';
import { Rate, Toast } from 'rmc-vant';

export default () => {
  return (
    <>
      <DemoBlock title="基础用法">
        <Rate defaultValue={3} />
      </DemoBlock>
      <DemoBlock title="自定义图标">
        <Rate defaultValue={3} icon={<LikeFilled />} voidIcon={<LikeOutlined />} />
      </DemoBlock>
      <DemoBlock title="自定义样式">
        <Rate
          size={25}
          defaultValue={3}
          color="#ffd21e"
          voidColor="#eee"
          voidIcon={<StarFilled />}
        />
      </DemoBlock>
      <DemoBlock title="半星">
        <Rate defaultValue={2.5} allowHalf />
      </DemoBlock>
      <DemoBlock title="自定义数量">
        <Rate defaultValue={3} count={6} />
      </DemoBlock>
      <DemoBlock title="禁用状态">
        <Rate defaultValue={3} disabled />
      </DemoBlock>
      <DemoBlock title="只读状态">
        <Rate defaultValue={3} allowHalf readonly />
      </DemoBlock>
      <DemoBlock title="只读状态显示小数">
        <Rate defaultValue={3.3} allowHalf readonly />
      </DemoBlock>
      <DemoBlock title="滑动">
        <Rate defaultValue={1} allowHalf />
      </DemoBlock>
      <DemoBlock title="监听 onChange 事件">
        <Rate
          defaultValue={1}
          onChange={(value) => {
            Toast(`当前值：${value}`);
          }}
        />
      </DemoBlock>
    </>
  );
};
