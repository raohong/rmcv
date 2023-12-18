---
title: Swiper
subTitle: 轮播
category: components
type: 展示组件
demo: true
---

### 介绍

用于循环播放一组图片或内容。

### 引入

```tsx
import { Swiper, SwiperItem } from 'rmc-vant';
```

## 代码演示

### 基础用法

每个 `SwipeItem` 代表一张轮播卡片，可以通过 `autoplay` 属性设置自动轮播的间隔。

```tsx
<Swiper>
  <SwiperItem>1</SwiperItem>
  <SwiperItem>2</SwiperItem>
  <SwiperItem>3</SwiperItem>
</Swiper>
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
</Swiper>
```

### 纵向滚动

设置 `vertical` 属性后滑块会纵向排列，此时需要指定滑块容器的高度。

```tsx
<Swiper vertical height={150}>
  <SwiperItem>1</SwiperItem>
  <SwiperItem>2</SwiperItem>
  <SwiperItem>3</SwiperItem>
</Swiper>
```

### 自定义滑块大小

滑块默认宽度为 100%，可以通过 `width` 属性设置单个滑块的宽度。纵向滚动模式下，可以通过 `height` 属性设置单个滑块的高度。

```tsx
<Swiper width={300}>
  <SwiperItem>1</SwiperItem>
  <SwiperItem>2</SwiperItem>
  <SwiperItem>3</SwiperItem>
</Swiper>
```

> 目前不支持在循环滚动模式下自定义滑块大小，此时 loop 设置为 false。

### 自定义指示器

通过 `indicator` 插槽可以自定义指示器的样式。

```tsx
<Swiper
  loop={false}
  renderIndicators={(progress) => (
    <div
      style={{
        position: 'absolute',
        bottom: 30,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 5,
      }}
    >
      <animated.div
        style={{
          height: 3,
          borderRadius: 5,
          width: progress.to((val) => `${((val + 1) / 3) * 100}%`),
          backgroundColor: '#fff',
        }}
      />
    </div>
  )}
>
  <SwiperItem>1</SwiperItem>
  <SwiperItem>2</SwiperItem>
  <SwiperItem>3</SwiperItem>
</Swiper>
```

## API

### Swiper Props

{{"api": "Swiper"}}

### SwiperItem Props

{{"api": "SwiperItem"}}
