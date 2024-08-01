---
title: Loading
subTitle: 加载
category: components
group: feedback
theme: light
---

## 介绍

加载图标，用于表示加载中的过渡状态。

## 引入

```tsx
import { Loading } from 'rmc-vant';
```

## 代码演示

### 加载类型

通过 `type` 属性可以设置加载图标的类型，默认为 `circular`，可选值为 `spinner`。

demo|type

```tsx
<Space>
  <Loading />
  <Loading type='spinner' />
</Space>;
```

### 自定义颜色

通过 `color` 属性设置加载图标的颜色。

demo|color

```tsx
<Space>
  <Loading color='#1989fa' />
  <Loading type='spinner' color='#1989fa' />
</Space>;
```

### 自定义大小

通过 `size` 属性设置加载图标的大小，默认单位为 px。

demo|size

```tsx
<Space>
  <Loading size={24} />
  <Loading type='spinner' size={24} />
</Space>;
```

### 加载文案

可以使用默认插槽在图标的右侧插入加载文案。

demo|text

```tsx
<Space>
  <Loading />
  <Loading type='spinner' size={24}>
    加载中...
  </Loading>
</Space>;
```

### 垂直排列

设置 `vertical` 属性后，图标和文案会垂直排列。

demo|vertical

```tsx
<Loading type='spinner' size={24} vertical>
  加载中...
</Loading>;
```

### 自定义文案颜色

通过 `color` 或者 `textColor` 属性设置加载文案的颜色。

demo|color

```tsx
<Space>
  <Loading color='#0094ff' vertical>
    加载中...
  </Loading>
  <Loading type='spinner' textColor='#0094ff' vertical>
    加载中...
  </Loading>
</Space>;
```

## API

### Loading Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | Loading 类型 | `spinner` \| `circular` | `circular` |
| className | description 自定义 className | `string` |  |
| size | 尺寸 | `number` | `30` |
| color | 图标颜色 | `string` | `#c9c9c9` |
| textSize | text 大小 | `string` \| `number` | `14` |
| textColor | text 颜色 | `string` | `#c9c9c9` |
| vertical | 图标和文字的布局是否是垂直布局 | `boolean` |  |
| children | loading 图标 children | `React.ReactNode` |  |
| classNames | 给各个 slot 自定义类名 | `Record<'root' \| 'text', string>` |  |
