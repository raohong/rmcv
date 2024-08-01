import { useState } from 'react';
import type { ImageProps } from 'rmc-vant';
import { Image, PullRefresh, Tabs } from 'rmc-vant';

const Base = () => (
  <PullRefresh>
    <div style={{ height: `calc(100vh - 100px)`, padding: 24 }}>下拉试试</div>
  </PullRefresh>
);

const CustomSuccessText = () => {
  const [count, setCount] = useState(0);

  return (
    <PullRefresh
      successText={`刷新次数： ${count + 1}`}
      onRefresh={async () => setCount(count + 1)}
    >
      <div style={{ height: `calc(100vh - 100px)`, padding: 24 }}>下拉试试</div>
    </PullRefresh>
  );
};

const CustomRefresh = () => {
  const [count] = useState(0);

  const props: ImageProps = {
    width: 140,
    height: 72,
    sx: {
      borderRadius: 4,
      marginTop: 8,
    },
  };

  return (
    <PullRefresh
      renderLoosing={({ pullDistance }) => (
        <Image
          {...props}
          style={{
            transform: `scale(${pullDistance / 80})`,
          }}
          src='https://fastly.jsdelivr.net/npm/@vant/assets/doge.png'
        />
      )}
      renderPulling={() => (
        <Image
          {...props}
          src='https://fastly.jsdelivr.net/npm/@vant/assets/doge-fire.jpeg'
        />
      )}
      renderLoading={() => (
        <Image
          {...props}
          src='https://fastly.jsdelivr.net/npm/@vant/assets/doge-fire.jpeg'
        />
      )}
    >
      <div
        style={{ height: `calc(100vh - 100px)`, padding: 24 }}
      >
        {`刷新次数： ${count + 1}`}
      </div>
    </PullRefresh>
  );
};

export default () => {
  return (
    <Tabs
      sx={{
        background: '#fff',
        margin: '0 -16px',
      }}
      items={[
        {
          tab: '基础用法',
          children: <Base />,
        },
        {
          tab: '成功提示',
          children: <CustomSuccessText />,
        },
        {
          tab: '自定义提示',
          children: <CustomRefresh />,
        },
      ]}
    />
  );
};
