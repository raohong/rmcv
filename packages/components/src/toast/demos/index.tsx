import { DemoBlock } from '@rmc-vant/demo';
import { LikeOutlined } from '@rmc-vant/icons';
import React, { useRef } from 'react';
import { Cell, Toast, ToastInstance } from 'rmc-vant';

export default () => {
  const inst = useRef<ToastInstance | null>(null);

  const show = () => {
    inst.current = Toast({
      duration: 0,
      message: '倒计时 3 秒',
    });

    let current = 3;
    const id = setInterval(() => {
      current--;
      inst.current?.update({
        message: `倒计时 ${current} 秒`,
      });

      if (current === 0) {
        clearInterval(id);
        inst.current?.close();
      }
    }, 1000);
  };

  return (
    <>
      <DemoBlock title="基础用法" card>
        <Cell
          title="文字提示"
          onClick={() => {
            Toast('message');
          }}
          clickable
        />
        <Cell
          title="加载提示"
          onClick={() => {
            Toast.loading({
              message: '加载中...',
            });
          }}
          clickable
        />
        <Cell
          title="成功提示"
          onClick={() => {
            Toast.success({
              message: '成功',
            });
          }}
          clickable
        />
        <Cell
          title="失败提示"
          onClick={() => {
            Toast.fail({
              message: '加载失败',
            });
          }}
          clickable
        />
      </DemoBlock>
      <DemoBlock title="自定义图标">
        <Cell
          title="自定义图标"
          onClick={() => {
            Toast.fail({
              message: '自定义图标',
              icon: <LikeOutlined />,
            });
          }}
          clickable
        />
        <Cell
          title="自定义图片"
          onClick={() => {
            Toast.fail({
              message: '自定义图片',
              icon: <img src="https://img.yzcdn.cn/vant/logo.png" />,
            });
          }}
          clickable
        />
        <Cell
          title="自定义加载图标"
          onClick={() => {
            Toast.loading({
              message: '加载中...',
              loadingType: 'spinner',
            });
          }}
          clickable
        />
      </DemoBlock>
      <DemoBlock title="自定义位置">
        <Cell
          title="顶部展示"
          onClick={() => {
            Toast({
              message: '顶部展示',
              position: 'top',
            });
          }}
          clickable
        />
        <Cell
          title="底部展示"
          onClick={() => {
            Toast({
              message: '底部展示',
              position: 'bottom',
            });
          }}
          clickable
        />
      </DemoBlock>
      <DemoBlock title="自定义位置">
        <Cell title="自定义位置示" onClick={show} clickable />
      </DemoBlock>
    </>
  );
};
