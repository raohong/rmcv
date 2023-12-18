---
title: ShareSheet
subTitle: 分享面板
category: components
type: 反馈组件
demo: true
---

### 介绍

底部弹起的分享面板，用于展示各分享渠道对应的操作按钮，不含具体的分享逻辑。

### 引入

```tsx
import { ShareSheet } from 'rmc-vant';
```

## 代码演示

### 基础用法

分享面板通过 `options` 属性来定义分享选项，数组的每一项是一个对象，对象格式见文档下方表格。

```tsx
const [visible, set] = useState(false);

return (
  <>
    <Cell title="显示分享列表" isLink onClick={() => set(true)} />
    <ShareSheet
      title="分享给好友"
      visible={visible}
      onClose={() => set(false)}
      options={[
        { name: '微信', icon: 'wechat' },
        { name: '朋友圈', icon: 'wechat-moments' },
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
        { name: '小程序码', icon: 'weapp-qrcode' },
      ]}
    />
  </>
);
```

### 展示多行选项

当分享选项的数量较多时，可以将 `options` 定义为数组嵌套的格式，每个子数组会作为一行选项展示。

```tsx
const [visible, set] = useState(false);

return (
  <>
    <Cell title="显示分享列表" isLink onClick={() => set(true)} />
    <ShareSheet
      title="分享给好友"
      visible={visible}
      onClose={() => set(false)}
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
  </>
);
```

### 自定义图标

除了使用内置的几种图标外，可以直接在 `icon` 中传入图片 URL 来使用自定义的图标

```tsx
const [visible, set] = useState(false);

return (
  <>
    <Cell title="显示分享列表" isLink onClick={() => set(true)} />
    <ShareSheet
      title="分享给好友"
      visible={visible}
      onClose={() => set(false)}
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
  </>
);
```

### 展示描述信息

通过 `description` 属性可以设置标题下方的描述文字, 在 `options` 内设置 `description` 属性可以添加分享选项描述。

```tsx
const [visible, set] = useState(false);

return (
  <>
    <Cell title="显示分享列表" isLink onClick={() => set(true)} />
    <ShareSheet
      title="分享给好友"
      visible={visible}
      onClose={() => set(false)}
      options={[
        { name: '微信', icon: 'wechat' },
        { name: '朋友圈', icon: 'wechat-moments' },
        { name: '复制链接', icon: 'link', description: '描述信息' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
        { name: '小程序码', icon: 'weapp-qrcode' },
      ]}
    />
  </>
);
```

## API

### Props

{{"api": true}}
