import { useState } from 'react';
import type { ImageProps } from 'rmc-vant';
import { Image, PullRefresh } from 'rmc-vant';

export default () => {
  const [count, setCount] = useState(0);

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
      headerHeight={80}
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
      onRefresh={async () => setCount(count + 1)}
    >
      <div
        style={{ height: `calc(100vh - 110px)`, padding: 24 }}
      >
        {`刷新次数： ${count + 1}`}
      </div>
    </PullRefresh>
  );
};
