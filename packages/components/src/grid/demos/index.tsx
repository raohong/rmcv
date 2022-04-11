import React from 'react';
import { HomeOutlined, PhotoOutlined, SearchOutlined } from '@rmc-vant/icons';
import { Grid, GridItem, Image } from 'rmc-vant';
import { DemoBlock } from '@rmc-vant/demo';

const renderItems = (num: number) =>
  Array.from({ length: num }, (_, i) => (
    <GridItem text="文字" key={i} icon={<PhotoOutlined />} />
  ));

export default () => {
  return (
    <>
      <DemoBlock title="基础用法">
        <Grid>{renderItems(4)}</Grid>
      </DemoBlock>
      <DemoBlock title="自定义列数">
        <Grid column={3}>{renderItems(6)}</Grid>
      </DemoBlock>

      <DemoBlock title="自定义内容">
        <Grid column={3} border={false}>
          <GridItem>
            <Image src="https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg" />
          </GridItem>
          <GridItem>
            <Image src="https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg" />
          </GridItem>
          <GridItem>
            <Image src="https://cdn.jsdelivr.net/npm/@vant/assets/apple-3.jpeg" />
          </GridItem>
        </Grid>
      </DemoBlock>
      <DemoBlock title="正方形格子">
        <Grid square>{renderItems(8)}</Grid>
      </DemoBlock>
      <DemoBlock title="格子间距">
        <Grid gutter={10}>{renderItems(8)}</Grid>
      </DemoBlock>
      <DemoBlock title="内容横排">
        <Grid direction="horizontal" column={3}>
          {renderItems(3)}
        </Grid>
      </DemoBlock>

      <DemoBlock title="徽标提示">
        <Grid column={2} clickable>
          <GridItem dot text="文字" icon={<HomeOutlined />} />
          <GridItem badge={100} text="文字" icon={<SearchOutlined />} />
        </Grid>
      </DemoBlock>
    </>
  );
};
