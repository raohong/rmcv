---
title: Progress
subTitle: 进度条
category: components
type: 展示组件
demo: true
theme: light
---

### 介绍

用于展示操作的当前进度。

### 引入

```tsx
import { Progress } from 'rmc-vant';
```

## 代码演示

### 基础用法

进度条默认为蓝色，使用 `percentage` 属性来设置当前进度。

```tsx
<Progress percentage={50} />
```

### 线条粗细

通过 `strokeWidth` 可以设置进度条的粗细。

```tsx
<Progress percentage={50} strokeWidth={8} />
```

### 置灰

设置 `inactive` 属性后进度条将置灰。

```tsx
<Progress percentage={50} inactive />
```

### 样式定制

可以使用 `pivotText` 属性自定义文字，`color` 属性自定义进度条颜色。

```tsx
<>
  <Progress percentage={25} pivotText="橙色" color="#f2826a" />
  <Progress percentage={50} pivotText="红色" color="#ee0a24" />
  <Progress
    percentage={75}
    pivotText="紫色"
    pivotColor="#7232dd"
    color="linear-gradient(to right, #be99ff, #7232dd)"
  />
</>
```

## API

### Props

{{"api": true}}

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

{{"cssVar": true}}
