import { DemoBlock } from '@rmc-vant/demo';
import { HomeOutlined, PhotoOutlined, SearchOutlined } from '@rmc-vant/icons';
import React from 'react';
import { Grid, Image } from 'rmc-vant';

const renderItems = (num: number) =>
  Array.from({ length: num }, (_, i) => ({
    text: '文字',
    icon: <PhotoOutlined />,
    key: i,
  }));

export default () => {
  return (
    <>
      <DemoBlock title="基础用法">
        <Grid items={renderItems(4)} />
      </DemoBlock>
      <DemoBlock title="自定义列数">
        <Grid items={renderItems(6)} column={3} />
      </DemoBlock>

      <DemoBlock title="自定义内容">
        <Grid
          column={3}
          border={false}
          items={[
            {
              key: 1,
              children: (
                <Image src="https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg" />
              ),
            },
            {
              key: 2,
              children: (
                <Image src="https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg" />
              ),
            },
            {
              key: 3,
              children: (
                <Image src="https://cdn.jsdelivr.net/npm/@vant/assets/apple-3.jpeg" />
              ),
            },
          ]}
        />
      </DemoBlock>
      <DemoBlock title="正方形格子">
        <Grid square items={renderItems(8)} />
      </DemoBlock>
      <DemoBlock title="格子间距">
        <Grid gutter={10} items={renderItems(8)} />
      </DemoBlock>
      <DemoBlock title="内容横排">
        <Grid direction="horizontal" column={3} items={renderItems(3)} />
      </DemoBlock>

      <DemoBlock title="徽标提示">
        <Grid
          column={2}
          clickable
          items={[
            {
              dot: true,
              text: '文字',
              icon: <HomeOutlined />,
            },
            {
              badge: 100,
              text: '文字',
              icon: <SearchOutlined />,
            },
          ]}
        />
      </DemoBlock>
    </>
  );
};
