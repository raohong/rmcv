import React, { useState } from 'react';
import { ShareSheet, ShareSheetOptions, ShareSheetIconName } from 'rmc-vant';

export default () => {
  const [visible, setVisible] = useState(true);

  const options: ShareSheetOptions = [
    [
      { name: '分享链接', icon: ShareSheetIconName.LINK },
      { name: '海报', icon: ShareSheetIconName.POSTER },
      { name: '二维码', icon: ShareSheetIconName.QRCODE },
    ],
    [
      { name: 'QQ', icon: ShareSheetIconName.QQ },
      { name: '小程序', icon: ShareSheetIconName.WEAPP_QRCODE },
      { name: '微信', icon: ShareSheetIconName.WECHAT },
      { name: '朋友圈', icon: ShareSheetIconName.WECHAT_MOMENTS },
      { name: '微博', icon: ShareSheetIconName.WEIBO },
      { name: '分享链接', icon: ShareSheetIconName.LINK },
      { name: '海报', icon: ShareSheetIconName.POSTER },
      { name: '二维码', icon: ShareSheetIconName.QRCODE },
      { name: 'QQ', icon: ShareSheetIconName.QQ },
      { name: '小程序', icon: ShareSheetIconName.WEAPP_QRCODE },
      { name: '微信', icon: ShareSheetIconName.WECHAT },
      { name: '朋友圈', icon: ShareSheetIconName.WECHAT_MOMENTS },
      { name: '微博', icon: ShareSheetIconName.WEIBO },
      { name: '分享链接', icon: ShareSheetIconName.LINK },
      { name: '海报', icon: ShareSheetIconName.POSTER },
      { name: '二维码', icon: ShareSheetIconName.QRCODE },
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
