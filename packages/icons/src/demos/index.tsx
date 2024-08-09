import type { IconProps } from '@rmc-vant/icons';
import * as datas from '@rmc-vant/icons';
import React from 'react';
import { Grid, Space, Tabs } from 'rmc-vant';

const { ICONS, Icon, ...data } = datas;

type KEY = keyof typeof data;

const SIcon: React.FC<{ name: KEY } & Omit<IconProps, 'name'>> = ({
  name,
  ...rest
}) => {
  return React.createElement(data[name], {
    size: 32,
    ...rest,
  });
};

export default () => {
  const tabs = [
    {
      key: 'base',
      tab: '基础图标',
    },
    {
      key: 'outlined',
      tab: '线框风格',
    },
    {
      key: 'filled',
      tab: '填充风格',
    },
  ] as const;

  const base = (
    <>
      <h3>基础用法</h3>
      <Space>
        <datas.ChatOutlined />
        <datas.UserCircleOutlined />
      </Space>
      <h3>图标颜色</h3>
      <Space>
        <datas.CartOutlined color='#1989fa' />
        <datas.FireOutlined color='#ee0a24' />
      </Space>
      <h3>图标大小</h3>
      <Space>
        <datas.ChatOutlined />
        <datas.ChatOutlined size={48} />
      </Space>
    </>
  );

  return (
    <Tabs
      sx={t => ({
        color: t.theme.palette.gray700,
        h3: {
          marginBottom: 8,
          fontSize: 16,
          marginTop: 36,
        },
      })}
      items={[
        {
          tab: '用法示例',
          children: base,
        },
        ...tabs.map(item => ({
          tab: item.tab,
          children: (
            <Grid
              style={{ marginTop: 16 }}
              items={ICONS[item.key].map(name => ({
                key: name,
                label: name,
                icon: <SIcon name={name as KEY} />,
              }))}
              column={3}
              border={false}
            />
          ),
        })),
      ]}
      lazyRender
    >
    </Tabs>
  );
};
