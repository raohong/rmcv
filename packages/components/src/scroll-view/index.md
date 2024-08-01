---
title: ScrollView
subTitle: 滚动容器
category: components
group: base
docs: false
---

## 介绍

滚动容器。

## 引入

```tsx
import { ScrollView } from 'rmc-vant';
```

## 代码演示

## API

### ScrollView Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| scrollEnabled | 是否开启滚动 | `boolean` |  |
| horizontal | `是否水容器易` | `boolean` | `false` |
| snapToInterval |  | `number` |  |
| y | 垂直滚动 y 的动画值 | `SpringValue<number>` |  |
| x | 水平滚动 x 的动画值 | `SpringValue<number>` |  |
| height | 容器高度 | `string` \| `number` |  |
| width | 容器宽度 | `string` \| `number` |  |
| bounces | 滚动结束后是否开启 bouncy 动画效果 | `boolean` |  |
| power |  | `number` | `0.8` |
| modifyTarget | 滚动结束后，可以修改最终滚动目标值 | `(distance: number, velocity: number) => number` |  |
| decay | 滚动结束后是否开启 decay 动画效果 | `boolean` |  |
| timeConst |  | `number` | `400` |
| domRef | dom ref | `React.MutableRefObject<HTMLDivElement>` |  |
| classNames | 给各个 slot 自定义类名 | `Record<'root' \| 'content', string>` |  |

### ScrollView Events

| 参数            | 说明           | 类型                       | 默认值 |
| --------------- | -------------- | -------------------------- | ------ |
| onScrollEndDrag | 拖拽结束时出发 | `(target: number) => void` |        |

### Types

#### ScrollViewRef

```ts
type ScrollViewRef = {
  refresh: () => void;
  scrollTo: (target: number) => void;
};
```
