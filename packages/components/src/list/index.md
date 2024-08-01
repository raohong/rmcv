---
title: List
subTitle: 列表
category: components
group: show
---

## 介绍

瀑布流滚动加载，用于展示长列表，当列表即将滚动到底部时，会触发事件并加载更多列表项。

## 引入

```tsx
import { List } from 'rmc-vant';
```

## 代码演示

### 基础用法

`List` 组件通过 `loadingStatus` 来控制加载状态，当列表滚动到底部的时候， 会触发 `onLoad` 事件。

这时候状态设置为 `ListLoadingStatus.Loading`，并且等待 `onLoad` 事件完成。如果 `autoSetStatusOnLoad` 设置为 `true`，那么 `onLoad` 事件回掉 返回 `true`，变为 `ListLoadingStatus.FINISHED`，否则加载成功后 `status` 变为 `ListLoadingStatus.None` ，加载失败变成 `ListLoadingStatus.Error` 完成加载。

```tsx
import { Cell, List } from 'rmc-vant';

export default () => {
  const [data, setData] = useState([]);

  return (
    <List
      onLoad={() =>
        new Promise((resolve) => {
          setTimeout(() => {
            setData(prev =>
              prev.concat(Array.from({ length: 20 }, (_, i) => i + data.length + 1)),
            );
            resolve();
          }, 2000);
        })}
    >
      {data.map(item => (
        <Cell key={item} title={item} />
      ))}
    </List>
  );
};
```

### 错误提示

若列表数据加载失败，将 `status` 设置成 `ListLoadingStatus.error` 即可显示错误提示，用户点击错误提示后会重新触发 `load` 事件。如果

```tsx
import { Cell, List, ListLoadingStatus } from 'rmc-vant';

export default () => {
  const [data, setData] = useState(Array.from({ length: 10 }, (_, i) => i + 1));
  const [status, setStatus] = useState(ListLoadingStatus.none);

  return (
    <List
      onLoad={() => {
        setTimeout(() => {
          setStatus(ListLoadingStatus.error);
        }, 1000);
      }}
    >
      {data.map(item => (
        <Cell key={item} title={item} />
      ))}
    </List>
  );
};
```

### 下拉刷新

List 组件可以与 PullRefresh 组件结合使用，实现下拉刷新的效果。

demo|refresh

```tsx
'./demos/index.tsx';
```

## API

### List Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| loadingStatus | 加载状态 | `ListLoadingStatus` | `none` |
| offset | 滚动条与底部或者顶部距离小于 offset 时触发 load 事 | `number` | `300` |
| loadingText | 加载时为文字 | `string` |  |
| finishedText | 加载完成后的状态 | `string` |  |
| errorText | 加载失败时的文字 | `string` |  |
| immediateCheck | 是否在初始化时立即执行滚动位置检查 | `boolean` | `true` |
| renderError | 自定义渲染 error | `() => React.ReactNode` |  |
| renderLoading | 自定义渲染 loading | `() => React.ReactNode` |  |
| renderFinished | 自定义渲染 finished | `() => React.ReactNode` |  |
| disableOnFinished | 加载完成后是否还能再加载 | `boolean` | `true` |
| autoSetStatusOnLoad | 是否自动设置状态根据 onLoad 触发状态 | `boolean` | `true` |
| classNames | 给各个 slot 自定义类名 | `Record<'root' \| 'text' \| 'loadingIcon', string>` |  |

### List Events

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| onLoadingStatusChange | 加载状态改变时的回调 | `(status: ListLoadingStatus) => void` |
| onLoad | 加载回调 | `() => void` \| `Promise<boolean>` |

### Types

#### ListLoadingStatus

`status` 的定义

```ts
enum ListLoadingStatus {
  NONE = 'none',
  LOADING = 'loading',
  ERROR = 'error',
  FINISHED = 'finished',
}
```

#### ListRef

```ts
type ListRef = {
  sync: () => void;
};
```
