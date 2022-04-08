---
title: Circle
subTitle: 圆形进度条
category: components
type: 展示组件
demo: true
---

### 介绍

圆环形的进度条组件，支持进度渐变动画。

### 引入

```tsx
import { Circle } from 'rmc-vant';
```

## 代码演示

### 基础用法

通过 `progress` 属性来控制进度。

```tsx
<Circle progress={80} />
```

### 宽度定制

通过 `strokeWidth` 属性来控制进度条宽度。

```tsx
<Circle progress={80} strokeWidth={6} text="宽度定制" />
```

### 颜色定制

通过 `color` 属性来控制进度条颜色，`layerColor` 属性来控制轨道颜色。

```tsx
<Circle progress={80} layerColor="#ebedf0" text="颜色定制" />
```

### 渐变色

`color` 属性支持传入对象格式来定义渐变色。

```tsx
<Circle
  progress={80}
  gradientColor={{
    '0%': '#3fecff',
    '100%': '#6149f6',
  }}
  text="渐变色"
/>
```

### 逆时针方向

将 `clockwise` 设置为 `false`，进度会从逆时针方向开始。

```tsx
<Circle progress={80} text="逆时针" clockise={false} />
```

### 大小定制

通过 `size` 属性设置圆环直径。

```tsx
<Circle progress={80} text="大小定制" size={120} />
```

### 起始位置

进度条默认从顶部开始，可以通过 start-position 属性设置起始位置。

```tsx
<>
  <Circle progress={80} startPosition="left" text="左侧" />
  <Circle progress={80} startPosition="right" text="右侧" />
  <Circle progress={80} startPosition="bottom" text="底部" />
</>
```

## API

### Props

{{"api": true}}

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

{{"cssVar": true}}
