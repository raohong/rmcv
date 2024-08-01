---
title: Swiper
subTitle: 轮播
category: components
group: show
theme: light
---

## 介绍

用于循环播放一组图片或内容。

## 引入

```tsx
import { Swiper, SwiperItem } from 'rmc-vant';
```

## 代码演示

### 基础用法

每个 `SwipeItem` 代表一张轮播卡片，可以通过 `autoplay` 属性设置自动轮播的间隔。

demo|base

```tsx
'./demos/base.tsx';
```

### 监听 change 事件

在每一页轮播结束后，会触发 `onChange` 事件。

```tsx
<Swiper
  onChange={(index) => {
    console.log('Swiper Index :', index);
  }}
>
  <SwiperItem>1</SwiperItem>
  <SwiperItem>2</SwiperItem>
  <SwiperItem>3</SwiperItem>
</Swiper>;
```

### 纵向滚动

设置 `vertical` 属性后滑块会纵向排列，此时需要指定滑块容器的高度。

demo|vertical

```tsx
<Swiper vertical height={200}>
  <SwiperItem>
    <Image
      height={200}
      fit='cover'
      src='https://github.com/raohong/picx-images-hosting/raw/master/cat1.webp'
    />
  </SwiperItem>
  <SwiperItem>
    <Image
      height={200}
      fit='cover'
      src='https://github.com/raohong/picx-images-hosting/raw/master/cat2.webp'
    />
  </SwiperItem>
  <SwiperItem height={200} fit='cover'>
    <Image src='https://github.com/raohong/picx-images-hosting/raw/master/cat3.webp' />
  </SwiperItem>
</Swiper>;
```

### 自定义滑块大小

滑块默认宽度为 100%，可以通过 `width` 属性设置单个滑块的宽度。纵向滚动模式下，可以通过 `height` 属性设置单个滑块的高度。

demo|size

```tsx
<Swiper width={300} height={200}>
  <SwiperItem>
    <Image
      height={200}
      fit='cover'
      src='https://github.com/raohong/picx-images-hosting/raw/master/cat1.webp'
    />
  </SwiperItem>
  <SwiperItem>
    <Image
      height={200}
      fit='cover'
      src='https://github.com/raohong/picx-images-hosting/raw/master/cat2.webp'
    />
  </SwiperItem>
  <SwiperItem height={200} fit='cover'>
    <Image src='https://github.com/raohong/picx-images-hosting/raw/master/cat3.webp' />
  </SwiperItem>
</Swiper>;
```

> 目前不支持在循环滚动模式下自定义滑块大小，此时 loop 设置为 false。

### 自定义指示器

通过 `indicator` 插槽可以自定义指示器的样式。

demo|indicator

```tsx
'./demos/indicator.tsx';
```

## API

### Swiper Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoplay | 是否开启自动播放 | `boolean` |  |
| interval | 自动播放间隔时间 | `number` | `300` |
| defaultActiveIndex | 初始 swipe | `number` |  |
| width | 滑块宽度, 可能会出现 90% 这种 | `string` \| `number` |  |
| height | 滑块高度 | `string` \| `number` |  |
| loop | 是否是循环模式 | `boolean` | `true` |
| vertical | 是否是垂直布局 | `boolean` | `false` |
| showIndicators | 是否显示 indicator | `boolean` | `true` |
| indicatorColor | 指示器颜色 | `string` |  |
| activeIndicatorColor | 当前活动指示器颜色 | `string` |  |
| touchable | 是否可以通过手势滑动 | `boolean` | `true` |
| renderIndicators | 自定义渲染 indicators | `(progress: Interpolation<number, any>, activeIndex: number, length: number, itemSize: number) => React,ReactNode` |  |
| classNames | 给各个 slot 自定义类名 | `Record<'root' \| 'item' \| 'indicators' \| 'indicator', string>` |  |

### Swiper Events

| 参数     | 说明             | 类型                            | 默认值 |
| -------- | ---------------- | ------------------------------- | ------ |
| onChange | activeIndex 改变 | `(activeIndex: number) => void` |        |
