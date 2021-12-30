import React from 'react';
import {
  HomeOutlined,
  PhoneOutlined,
  PhotoOutlined,
  SearchOutlined,
} from '@rmc-vant/icons';
import { GridItem, Grid } from 'rmc-vant';

export default () => {
  const list = Array.from({ length: 2 }, (_, i) => ({
    text: `文字是否311233到期hi hi ${i + 1}`,
  }));

  return (
    <div>
      <Grid column={3}>
        {list.map((item, index) => (
          <GridItem
            icon={index % 2 === 0 ? <PhotoOutlined /> : <PhoneOutlined />}
            text={item.text}
            key={item.text}
            badge={10}
          />
        ))}
      </Grid>
      <div>
        <Grid column={2} clickable>
          <GridItem dot text="文字" icon={<HomeOutlined />} />
          <GridItem badge={100} text="文字" icon={<SearchOutlined />} />
        </Grid>
      </div>
    </div>
  );
};
