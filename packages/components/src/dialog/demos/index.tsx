import React, { useState } from 'react';
import { DemoBlock } from '@rmc-vant/demo';
import { Dialog, Cell, DialogComponent, Image } from 'rmc-vant';

const Component = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Cell
        title="组件调用"
        onClick={() => {
          setVisible(true);
        }}
        clickable
      />
      <DialogComponent
        title="标题"
        message={<Image src="https://img.yzcdn.cn/vant/apple-3.jpg" />}
        visible={visible}
        onClose={() => setVisible(false)}
        showCancelButton
      />
    </>
  );
};

export default () => {
  return (
    <>
      <DemoBlock title="基础用法">
        <Cell
          title="提示弹窗"
          onClick={() => {
            Dialog({
              title: '标题',
              message: '代码是写出来给人看的，附带能在机器上运行。',
            });
          }}
          clickable
        />
        <Cell
          title="提示弹窗 (无标题)"
          onClick={() => {
            Dialog({
              message: '代码是写出来给人看的，附带能在机器上运行。',
            });
          }}
          clickable
        />
        <Cell
          title="确认弹窗"
          onClick={() => {
            Dialog.confirm({
              title: '标题',
              message:
                '如果解决方法是丑陋的，那就肯定还有更好的解决方法，只是还没有发现而已。',
            }).catch(() => {
              console.log('cancel');
            });
          }}
          clickable
        />
      </DemoBlock>
      <DemoBlock title="圆角按钮样式">
        <Cell
          title="提示弹窗"
          onClick={() => {
            Dialog({
              title: '标题',
              message: '代码是写出来给人看的，附带能在机器上运行。',
              theme: 'round-button',
            });
          }}
          clickable
        />
        <Cell
          title="提示弹窗 (无标题)"
          onClick={() => {
            Dialog({
              message: '代码是写出来给人看的，附带能在机器上运行。',
              theme: 'round-button',
            });
          }}
          clickable
        />
      </DemoBlock>
      <DemoBlock title="异步关闭">
        <Cell
          title="异步关闭"
          onClick={() => {
            Dialog.confirm({
              title: '标题',
              message: '代码是写出来给人看的，附带能在机器上运行。',
              beforeClose: (action) =>
                new Promise((r, j) => {
                  setTimeout(() => {
                    r(action === 'confirm');
                  }, 3000);
                }),
            }).catch(() => {
              console.log('cancel');
            });
          }}
          clickable
        />
      </DemoBlock>
      <DemoBlock title="组件调用">
        <Component />
      </DemoBlock>
    </>
  );
};
