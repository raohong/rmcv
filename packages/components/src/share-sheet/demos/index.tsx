import React, { useState } from 'react';
import { ShareSheet, ShareSheetOptions, ShareSheetIconName } from 'rmc-vant';

export default () => {
  const [visible, setVisible] = useState(true);

  const options: ShareSheetOptions = [
    [
      { name: '分享链接', icon: 'limk' },
      { name: '海报', icon: 'poster' },
      { name: '二维码', icon: 'poster' },
    ],
    [
      { name: 'QQ', icon: 'qq' },
      { name: '小程序', icon: 'weapp-qrcode' },
      { name: '微信', icon: 'wechat' },
      { name: '朋友圈', icon: 'wechat-moments' },
      { name: '微博', icon: 'weibo' },
      { name: '分享链接', icon: 'link' },
      { name: '海报', icon: 'poster' },
      { name: '二维码', icon: 'qrcode' },
      { name: 'QQ', icon: 'qq' },
      { name: '小程序', icon: 'weapp-qrcode' },
      { name: '小程序', icon: 'weapp-qrcode' },
      { name: '微信', icon: 'wechat' },
      { name: '朋友圈', icon: 'wechat-moments' },
      { name: '微博', icon: 'weibo' },
      { name: '分享链接', icon: 'link' },
      { name: '海报', icon: 'poster' },
      { name: '二维码', icon: 'qrcode' },
      { name: 'QQ', icon: 'qq' },
      { name: '小程序', icon: 'weapp-qrcode' },
    ],
  ];

  return (
    <ShareSheet
      title="立即分享给好友"
      options={options}
      visible={visible}
      onClose={() => {
        setVisible(false);
      }}
    />
  );
};
