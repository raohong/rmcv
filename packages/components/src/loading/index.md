---
title: Loading
subTitle: 加载
category: components
type: 反馈组件
demo: true
---

### 介绍

加载图标，用于表示加载中的过渡状态。

### 引入

```tsx
import { Loading } from 'rmc-vant';
```

## 代码演示

### 加载类型

通过 `type` 属性可以设置加载图标的类型，默认为 `circular`，可选值为 `spinner`。

```tsx
<>
  <Loading />
  <Loading type="spinner" />
</>
```

### 自定义颜色

通过 `color` 属性设置加载图标的颜色。

```tsx
<>
  <Loading color="#1989fa" />
  <Loading type="spinner" color="#1989fa" />
</>
```

### 自定义大小

通过 `size` 属性设置加载图标的大小，默认单位为 px。

```tsx
<>
  <Loading size={24} />
  <Loading type="spinner" size={24} />
</>
```

### 加载文案

可以使用默认插槽在图标的右侧插入加载文案。

```tsx
<>
  <Loading />
  <Loading type="spinner" size={24}>
    加载中...
  </Loading>
</>
```

### 垂直排列

设置 `vertical` 属性后，图标和文案会垂直排列。

```tsx
<Loading type="spinner" size={24} vertical>
  加载中...
</Loading>
```

### 自定义文案颜色

通过 `color` 或者 `textColor` 属性设置加载文案的颜色。

```tsx
<>
  <Loading color="#0094ff" vertical>
    加载中...
  </Loading>
  <Loading type="spinner" textColor="#0094ff" vertical>
    加载中...
  </Loading>
</>
```

## API

### Props

{{"api": true}}

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

{{"cssVar": true}}
