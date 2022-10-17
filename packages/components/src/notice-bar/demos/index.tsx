import { DemoBlock } from '@rmc-vant/demo';
import { InfoOutlined, VolumeOutlined } from '@rmc-vant/icons';
import React from 'react';
import { NoticeBar, Swiper, SwiperItem } from 'rmc-vant';

export default () => {
  return (
    <>
      <DemoBlock title="基础用法">
        <NoticeBar
          leftIcon={<VolumeOutlined />}
          text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
        />
      </DemoBlock>
      <DemoBlock title="滚动播放">
        <NoticeBar text="米袋虽空——樱花开哉！" scrollable />
        <NoticeBar
          style={{ marginTop: 8 }}
          text="不会回头的东西有四件：说出口的话、离弦的箭、逝去的生活和失去的机会。"
          scrollable={false}
        />
      </DemoBlock>
      <DemoBlock title="多行展示">
        <NoticeBar
          text="不会回头的东西有四件：说出口的话、离弦的箭、逝去的生活和失去的机会。"
          wrappable
        />
      </DemoBlock>
      <DemoBlock title="通知栏模式">
        <NoticeBar mode="closeable">米袋虽空——樱花开哉！</NoticeBar>
        <NoticeBar style={{ marginTop: 8 }} mode="link">
          米袋虽空——樱花开哉！
        </NoticeBar>
      </DemoBlock>
      <DemoBlock title="自定义样式">
        <NoticeBar leftIcon={<InfoOutlined />} color="#1989fa" background="#ecf9ff">
          米袋虽空——樱花开哉！
        </NoticeBar>
      </DemoBlock>
      <DemoBlock title="垂直滚动">
        <NoticeBar leftIcon={<InfoOutlined />} scrollable={false}>
          <Swiper showIndicators={false} height={40} autoplay vertical>
            <SwiperItem style={{ display: 'flex', alignItems: 'center' }}>
              明月直入，无心可猜。
            </SwiperItem>
            <SwiperItem style={{ display: 'flex', alignItems: 'center' }}>
              仙人抚我顶，结发受长生。
            </SwiperItem>
            <SwiperItem style={{ display: 'flex', alignItems: 'center' }}>
              今人不见古时月，今月曾经照古人。
            </SwiperItem>
          </Swiper>
        </NoticeBar>
      </DemoBlock>
    </>
  );
};
