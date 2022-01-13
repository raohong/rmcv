import { PhoneCircleOutlined, UserOutlined, PhotoOutlined } from '@rmc-vant/icons';
import React from 'react';
import { Popover, Button, Grid, GridItem } from 'rmc-vant';

export default () => {
  return (
    <div
      style={{
        padding: 20,
      }}
    >
      <Popover
        actions={[
          {
            text: '选项一',
            icon: <PhoneCircleOutlined />,
          },
          {
            text: '选项二',
            icon: <UserOutlined />,
          },
          {
            text: '选项一',
            icon: <PhoneCircleOutlined />,
          },
        ]}
        placement="left"
      >
        <Button type="primary">SHOW </Button>
      </Popover>
      <div style={{ marginTop: 100 }} />
      <Popover
        placement="top"
        renderContent={() => (
          <Grid style={{ width: 250 }} clickable square direction="vertical">
            {Array.from({ length: 9 }, (_, i) => (
              <GridItem key={i} icon={<PhotoOutlined />} text="选项" />
            ))}
          </Grid>
        )}
      >
        <Button type="primary">CUSTOM</Button>
      </Popover>
    </div>
  );
};
