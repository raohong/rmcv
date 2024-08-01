---
title: PullRefresh
subTitle: 下拉刷新
category: components
group: feedback
---

## 介绍

用于提供下拉刷新的交互操作。

## 引入

```ts
import { PullRefresh } from 'rmc-vant';
```

## 代码演示

### 基础用法

下拉刷新时会触发 refresh 事件，在事件的回调函数中可以进行同步或异步操作，操作完成后状态设置为 `PullRefreshState.Success`，表示加载完成。

```tsx
<PullRefresh>下拉试试</PullRefresh>;
```

### 成功提示

通过 `successText` 可以设置刷新成功后的顶部提示文案。

```tsx
<PullRefresh successText='刷新成功'>下拉试试</PullRefresh>;
```

### 自定义提示

通过插槽可以自定义下拉刷新过程中的提示内容。

demo|base

```tsx
'./demos/index.tsx';
```

## API

### PullRefresh Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| headerHeight | 顶部内容高度 | `string` \| `number` |  |
| pullDistance | 刷新距离 | `string` \| `number` | `50` |
| pullingText | 下拉时内容 | `React.ReactNode` |  |
| loadingText | 刷新时内容 | `React.ReactNode` |  |
| loosingText | 释放到刷新之间内容 | `React.ReactNode` |  |
| successText | 刷新后内容 | `React.ReactNode` |  |
| successDuration | 下拉成功内容 | `number` | `500` |
| renderNormal | 渲染非下拉状态时顶部内容 | `() => React.ReactNode` |  |
| renderPulling | 渲染下拉过程中顶部内容 | `(params: PullRefreshRenderParams) => React.ReactNode` |  |
| renderLoosing | 渲染释放过程中顶部内容 | `(params: PullRefreshRenderParams) => React.ReactNode` |  |
| renderLoading | 渲染加载过程中顶部内容 | `(params: PullRefreshRenderParams) => React.ReactNode` |  |
| renderSuccess | 渲染刷新成功提示内容 | `() => React.ReactNode` |  |
| disabled | 是否禁止 | `boolean` |  |
| contentClassName | 内容 class | `string` |  |
| classNames | 给各个 slot 自定义类名 | `Record<PullRefreshNSlot, string>` |  |

### PullRefresh Events

| 参数      | 说明       | 类型                 | 默认值 |
| --------- | ---------- | -------------------- | ------ |
| onRefresh | 刷新时触发 | `() => Promise<any>` |        |

### Types

#### PullRefreshRenderParams

#### PullRefreshNSlot

```ts
type PullRefreshNSlot =
  | 'root'
  | 'content'
  | 'header'
  | 'headerText'
  | 'headerLoading';
```

```ts
type PullRefreshRenderParams = {
  pullDistance: number;
  headerHeight: number;
  progress: Interpolation<number, number>;
  value: SpringValue<number>;
};
```

#### PullRefreshState

```ts
enum PullRefreshState {
  NORMAL = 'normal',
  PULLING = 'pulling',
  LOOSING = 'loosing',
  LOADING = 'loading',
  SUCCESS = 'success',
}
```
