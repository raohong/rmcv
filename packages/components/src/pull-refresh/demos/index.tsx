import { animated } from '@react-spring/web';
import React, { useState } from 'react';
import { Image, PullRefresh, TabPane, Tabs } from 'rmc-vant';

export default () => {
  const [successTimes, setSuccessTimes] = useState(0);
  const content = (
    <div
      style={{
        background: '#fff',
        padding: 20,
      }}
    >
      刷新次数： {successTimes}
    </div>
  );

  const sx = {
    width: 140,
    height: 72,
    sx: {
      borderRadius: 4,
    },
  };

  const onRefresh = () => {
    setSuccessTimes((p) => p + 1);

    return new Promise<void>((r) => {
      setTimeout(() => {
        r();
      }, 3000);
    });
  };

  return (
    <div>
      <Tabs style={{ height: 400 }}>
        <TabPane key="base" tab="基础用法">
          <PullRefresh onRefresh={onRefresh}>{content}</PullRefresh>
        </TabPane>
        <TabPane key="refresh" tab="成功提示">
          <PullRefresh onRefresh={onRefresh} successText="刷新成功">
            {content}
          </PullRefresh>
        </TabPane>
        <TabPane key="custom" tab="自定义次数">
          <PullRefresh
            onRefresh={onRefresh}
            renderLoading={() => (
              <Image
                {...sx}
                src="https://fastly.jsdelivr.net/npm/@vant/assets/doge-fire.jpeg"
              />
            )}
            renderLoosing={() => (
              <Image
                {...sx}
                src="https://fastly.jsdelivr.net/npm/@vant/assets/doge.png"
              />
            )}
            renderPulling={({ progress }) => (
              <animated.div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingTop: 8,
                  justifyContent: 'center',
                }}
              >
                <animated.div
                  style={{
                    scale: progress,
                  }}
                >
                  <Image
                    {...sx}
                    src="https://fastly.jsdelivr.net/npm/@vant/assets/doge.png"
                  />
                </animated.div>
              </animated.div>
            )}
          >
            {content}
          </PullRefresh>
        </TabPane>
      </Tabs>
      <div style={{ height: 200, overflow: 'auto' }}>
        <div style={{ height: 500 }}>12312</div>
      </div>
    </div>
  );
};
