---
title: Slider
subTitle: 滑块
category: components
type: 表单组件
demo: true
theme: light
---

### 介绍

滑动输入条，用于在给定的范围内选择一个值。

### 引入

```tsx
import { Slider } from 'rmc-vant';
```

## 代码演示

### 基础用法

```tsx
<Slider defaultValue={20} />
```

### 双滑块

添加 `range` 属性就可以开启双滑块模式，确保 `value` 的值是一个数组。

```tsx
<Slider defaultValue={[0, 20]} range />
```

### 指定选择范围

```tsx
<Slider defaultValue={50} min={-50} max={50} />
```

### 禁用

```tsx
<Slider defaultValue={50} disabled />
```

### 指定步长

```tsx
<Slider defaultValue={50} step={10} />
```

### 自定义样式

```tsx
<Slider defaultValue={50} barHeight={4} activeColor="#ee0a24" />
```

### 自定义按钮

```tsx
<Slider
  defaultValue={50}
  activeColor="#ee0a24"
  button={(val) => (
    <div
      style={{
        width: 26,
        color: '#fff',
        fontSize: 10,
        lineHeight: '18px',
        textAlign: 'center',
        backgroundColor: '#ee0a24',
        borderRadius: 100,
      }}
    >
      {val}
    </div>
  )}
/>
```

### 垂直方向

设置 `vertical` 属性后，滑块会垂直展示，且高度为 `100%` 父元素高度。

```tsx
<Slider defaultValue={[20, 50]} style={{ height: 150 }} range vertical />
```

### 反转轨道

设置 `reverse` 属性后，轨道会被反转。

```tsx
<Slider defaultValue={[0, 20]} range reverse />
```

## API

### Props

{{"api": true}}
