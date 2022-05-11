import { DemoBlock } from '@rmc-vant/demo';
import React, { useState } from 'react';
import { ShareSheet, ShareSheetProps, Cell } from 'rmc-vant';

const Demo: React.FC<{ cellTitle: string } & ShareSheetProps> = ({
  cellTitle,
  ...props
}) => {
  const [visible, set] = useState(false);

  return (
    <>
      <Cell title={cellTitle} isLink onClick={() => set(true)} />
      <ShareSheet visible={visible} onClose={() => set(false)} {...props} />
    </>
  );
};

export default () => {
  return (
    <>
      <DemoBlock title="基础用法">
        <Demo
          cellTitle="显示分享面板"
          title="立即分享给好友"
          options={[
            { name: '微信', icon: 'wechat' },
            { name: '朋友圈', icon: 'wechat-moments' },
            { name: '复制链接', icon: 'link' },
            { name: '分享海报', icon: 'poster' },
            { name: '二维码', icon: 'qrcode' },
            { name: '小程序码', icon: 'weapp-qrcode' },
          ]}
        />
      </DemoBlock>
      <DemoBlock title="展示多选项">
        <Demo
          cellTitle="显示分享面板"
          title="立即分享给好友"
          options={[
            [
              { name: '微信', icon: 'wechat' },
              { name: '朋友圈', icon: 'wechat-moments' },
              { name: '微博', icon: 'weibo' },
              { name: 'QQ', icon: 'qq' },
            ],
            [
              { name: '复制链接', icon: 'link' },
              { name: '分享海报', icon: 'poster' },
              { name: '二维码', icon: 'qrcode' },
              { name: '小程序码', icon: 'weapp-qrcode' },
            ],
          ]}
        />
      </DemoBlock>
      <DemoBlock title="自定义图标">
        <Demo
          cellTitle="显示分享面板"
          options={[
            {
              name: '名称',
              icon: 'https://cdn.jsdelivr.net/npm/@vant/assets/custom-icon-fire.png',
            },
            {
              name: '名称',
              icon: 'https://cdn.jsdelivr.net/npm/@vant/assets/custom-icon-light.png',
            },
            {
              name: '名称',
              icon: 'https://cdn.jsdelivr.net/npm/@vant/assets/custom-icon-water.png',
            },
          ]}
        />
      </DemoBlock>
      <DemoBlock title="展示描述信息">
        <Demo
          cellTitle="显示分享面板"
          title="立即分享给好友"
          options={[
            { name: '微信', icon: 'wechat' },
            { name: '朋友圈', icon: 'wechat-moments' },
            { name: '复制链接', icon: 'link', description: '描述信息' },
            { name: '分享海报', icon: 'poster' },
            { name: '二维码', icon: 'qrcode' },
            { name: '小程序码', icon: 'weapp-qrcode' },
          ]}
        />
      </DemoBlock>
    </>
  );
};
