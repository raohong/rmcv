---
title: NoticeBar
subTitle: 通知栏
category: components
group: show
---

## 介绍

用于循环播放展示一组消息通知。

## 引入

```tsx
import { NoticeBar } from 'rmc-vant';
```

## 代码演示

### 基础用法

通过 `text` 属性设置通知栏的内容，通过 `leftIcon` 属性设置通知栏左侧的图标。

demo|text

```tsx
<NoticeBar
  leftIcon={<VolumeOutlined />}
  text='无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。'
/>;
```

### 滚动播放

通知栏的内容长度溢出时会自动开启滚动播放，通过 `scrollable` 属性可以控制该行为。

demo|scrollable

```tsx
<>
  <NoticeBar text='米袋虽空——樱花开哉！' scrollable />
  <NoticeBar
    style={{ marginTop: 8 }}
    text='不会回头的东西有四件：说出口的话、离弦的箭、逝去的生活和失去的机会。'
    scrollable={false}
  />
</>;
```

### 多行展示

文字较长时，可以通过设置 `wrapable` 属性来开启多行展示。

demo|wrapable

```tsx
<NoticeBar
  text='不会回头的东西有四件：说出口的话、离弦的箭、逝去的生活和失去的机会。'
  wrapable
/>;
```

### 通知栏模式

通知栏支持 `closeable` 和 `link` 两种模式。

demo|closeable

```tsx
<>
  <NoticeBar mode='closeable'>米袋虽空——樱花开哉！</NoticeBar>
  <NoticeBar style={{ marginTop: 8 }} mode='link'>
    米袋虽空——樱花开哉！
  </NoticeBar>
</>;
```

### 自定义样式

通过 `color` 属性设置文本颜色，通过 `background` 属性设置背景色。

demo|color

```tsx
<NoticeBar leftIcon={<InfoOutlined />} color='#1989fa' background='#ecf9ff'>
  米袋虽空——樱花开哉！
</NoticeBar>;
```

### 垂直滚动

搭配 NoticeBar 和 Swipe 组件，可以实现垂直滚动的效果。

demo|vertical

```tsx
<NoticeBar leftIcon={<InfoOutlined />} scrollable={false}>
  <Swiper showIndicators={false} height={40} autoplay vertical>
    <SwiperItem style={{ display: 'flex', alignItems: 'center' }}>
      明月直入，无心可猜。
    </SwiperItem>
    <SwiperItem style={{ display: 'flex', alignItems: 'center' }}>
      仙人抚我顶，结发受长生。
    </SwiperItem>
    <SwiperItem style={{ display: 'flex', alignItems: 'center' }}>
      今人不见古时月，今月曾经照古人。
    </SwiperItem>
  </Swiper>
</NoticeBar>;
```

## API

### NoticeNBar Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| mode | 通知栏模式，`link`` 右侧有箭头；`closeable` 表示可关闭，右侧有关闭图标 | `link` \| `closeable` |  |
| text | 通知栏内容 | `React.ReactNode` |  |
| color | 字体颜色 | `string` |  |
| iconColor | 图标颜色 | `string` |  |
| background | 背景色 | `string` |  |
| leftIcon | 左侧图标 | `React.ReactNode` |  |
| speed | 滚动速度 | `number` | `60` |
| scrollable | 是否开启滚动 | `boolean` |  |
| wrappable | 非滚动模式下，是否换行 | `boolean` | `false` |
| classNames | 给各个 slot 自定义类名 | `Record<NoticeBarNSlot, string>` |  |

### NoticeBar Events

| 参数     | 说明                         | 类型         | 默认值 |
| -------- | ---------------------------- | ------------ | ------ |
| onClose  | 触发关闭时                   | `() => void` |        |
| onRepeat | 每当滚动栏重新开始滚动时触发 | `() => void` |        |

### Types

#### NoticeBarNSlot

```ts
type NoticeBarNSlot = 'root' | 'leftIcon' | 'rightIcon' | 'content' | 'closeIcon';
```
