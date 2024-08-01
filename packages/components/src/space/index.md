---
title: Space
subTitle: 间距
category: components
group: base
---

## 介绍

设置元素之间的间距。

## 引入

```tsx
import { Space } from 'rmc-vant';
```

## 代码演示

### 基础用法

`Space` 组件会在各个子组件之间设置一定的间距，默认间距为 8px。

demo|base

```tsx
<Space>
  <Button>按钮</Button>
  <Button>按钮</Button>
  <Button>按钮</Button>
  <Button>按钮</Button>
</Space>;
```

### 垂直排列

将 `direction` 属性设置为 `vertical`，可以设置垂直方向排列的间距。

demo|direction

```tsx
<Space direction='vertical' fill>
  <Button>按钮</Button>
  <Button>按钮</Button>
  <Button>按钮</Button>
  <Button>按钮</Button>
</Space>;
```

## API

### Space Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 间距大小 | `small` \| `middle` \| `large` \| `string` \| `number` | `small` |
| align | 对齐方式 | `start` \| `end` \| `center` \| `baseline` | `center` |
| direction | 间距方向 | `vertical` \| `horizontal` | `horizontal` |
| split | 当作分割的内容 | `React.ReactNode` | - |
| wrap | 是否换行，仅在 horizontal 时有效 | `boolean` | `true` |
| fill | 是否是快级 | `boolean` | - |
| classNames | 给各个 slot 自定义类名 | `Record<'root' \| 'item' \| 'split', string>` | - |
