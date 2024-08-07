---
title: ShareSheet
subTitle: 分享面板
category: components
group: feedback
---

## 介绍

底部弹起的分享面板，用于展示各分享渠道对应的操作按钮，不含具体的分享逻辑。

## 引入

```tsx
import { ShareSheet } from 'rmc-vant';
```

## 代码演示

### 基础用法

分享面板通过 `options` 属性来定义分享选项，数组的每一项是一个对象，对象格式见文档下方表格。

demo|base

```tsx
const [open, set] = useState(false);

return (
  <>
    <Cell title='显示分享列表' isLink onClick={() => set(true)} />
    <ShareSheet
      title='分享给好友'
      open={open}
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

demo|options

```tsx
const [open, set] = useState(false);

return (
  <>
    <Cell title='显示分享列表' isLink onClick={() => set(true)} />
    <ShareSheet
      title='分享给好友'
      open={open}
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

demo|icon

```tsx
const [open, set] = useState(false);

return (
  <>
    <Cell title='显示分享列表' isLink onClick={() => set(true)} />
    <ShareSheet
      title='分享给好友'
      open={open}
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

demo|description

```tsx
const [open, set] = useState(false);

return (
  <>
    <Cell title='显示分享列表' isLink onClick={() => set(true)} />
    <ShareSheet
      title='分享给好友'
      open={open}
      onClose={() => set(false)}
      options={[
        { name: '微信', icon: 'wechat' },
        { name: '朋友圈', icon: 'wechat-moments' },
        {
          name: '复制链接',
          icon: 'link',
          description: '描述信息',
        },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
        { name: '小程序码', icon: 'weapp-qrcode' },
      ]}
    />
  </>
);
```

## API

### ShareSheet Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| open | 是否显示分享面板 | `boolean` |  |
| options | 面板选项列表 | `ShareSheetOptions` |  |
| title | 分享面板标题 | `React.ReactNode` |  |
| description | 分享面板描述 | `React.ReactNode` |  |
| cancelText | 关闭按钮文字 | `React.ReactNode` |  |
| round | 是否显示圆角 | `boolean` | `true` |
| overlay | 是否显示 overlay | `boolean` | `true` |
| overlayClosable | overlay 点击是否关闭 | `boolean` | `true` |
| lazyRender | 是否在显示弹层时才渲染节点 | `boolean` | `true` |
| lockScroll | 是否在显示弹层时禁止外层容器滚动 | `boolean` | `true` |
| safeArea | 是否开启底部安全区适配 | `boolean` | `true` |
| closeOnPopstate | 是否在页面回退时自动关闭 | `boolean` | `true` |
| classNames | 给各个 slot 自定义类名 | `Record<ShareSheetNSlot, string>` |  |

### ShareSheet Events

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onSelect | 点击选项时触发，禁用或加载状态下不会触发 | `(option: ShareSheetOption, index: number) => void` |  |
| onClose | 关闭回调 | `() => void` |  |
| onCancel | 点击取消按钮，此时还要触发 onClose | `() => void` |  |
| onOverlayClick | 点击 overlay 回调 | `() => void` |  |
| onBeforeClose | 关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise | `(option: ShareSheetOption) => boolean \| void \| Promise<boolean>` |  |
| afterClose | 关闭动画结束后触发的回调函数 | `() => void` |  |

### Types

#### ShareSheetNSlot

```ts
type ShareSheetNSlot =
  | 'root'
  | 'header'
  | 'title'
  | 'description'
  | 'options'
  | 'option'
  | 'optionName'
  | 'optionIcon'
  | 'optionDescription'
  | 'cancelButton';
```

#### ShareSheetOptions

```ts
type ShareSheetOption = {
  /**
   * @description 分享渠道名称
   */
  name: string;
  /**
   * @description 图标，可选值为 wechat weibo qq link qrcode poster weapp-qrcode wechat-moments，支持传入图片 URL
   */
  icon: LiteralUnion<ShareSheetIconName, React.ReactNode>;
  /**
   * @description 自定义分享名称
   */
  className?: string;
  /**
   * @description 分享选项描述
   */
  description?: string;
};
```

#### ShareSheetIconName

```ts
type ShareSheetIconName =
  | 'wechat'
  | 'weibo'
  | 'qq'
  | 'link'
  | 'qrcode'
  | 'poster'
  | 'weapp-qrcode'
  | 'wechat-moments';
```
