import { useState } from 'react';
import type { ListProps } from 'rmc-vant';
import { Cell, List, PullRefresh, Tabs } from 'rmc-vant';

const range = (start: number, end: number) =>
  Array.from({ length: end - start }, (_, i) => start + i);
const sleep = (wait = 3000) =>
  new Promise<void>(resolve =>
    setTimeout(() => {
      resolve();
    }, wait),
  );

const Base = (props: ListProps) => {
  const [data, setData] = useState<number[]>([]);

  return (
    <List
      onLoad={async () => {
        await sleep();

        setData(prev => prev.concat(range(prev.length + 1, prev.length + 1 + 20)));
      }}
      {...props}
    >
      {data.map(item => (
        <Cell key={item} title={`项目 ${item}`} />
      ))}
    </List>
  );
};

const ErrorExample = (props: ListProps) => {
  const [data] = useState<number[]>(range(1, 15));

  return (
    <List
      onLoad={async () => {
        await sleep();

        return false;
      }}
      {...props}
    >
      {data.map(item => (
        <Cell key={item} title={`项目 ${item}`} />
      ))}
    </List>
  );
};

export default () => {
  return (
    <Tabs
      sx={{
        'margin': '0 -16px',
        '.RVuiTabs-panel': {
          height: `calc(100vh - 154px)`,
          overflow: 'auto',
          background: '#fff',
        },
      }}
      items={[
        {
          tab: '基础用法',
          children: <Base />,
        },

        {
          tab: '错误提示',
          children: <ErrorExample />,
        },
        {
          tab: '下拉刷新',
          children: (
            <PullRefresh>
              <Base />
            </PullRefresh>
          ),
        },
      ]}
    />
  );
};
