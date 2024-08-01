---
title: Pagination
subTitle: 分页
category: components
group: nav
---

## 介绍

数据量过多时，采用分页的形式将数据分隔，每次只加载一个页面。

## 引入

```tsx
import { Pagination } from 'rmc-vant';
```

## 代码演示

### 基础用法

通过 `current` 控制当前的页码，此时组件是受控模式。

demo|base

```tsx
import { useState } from 'react';
import { Pagination } from 'rmc-vant';

export default () => {
  const [current, set] = useState(1);
  return <Pagination current={current} total={100} pageSize={10} onChange={set} />;
};
```

### 简单模式

将 `mode` 设置为 `simple` 来切换到简单模式，此时分页器不会展示具体的页码按钮。

demo|simple

```tsx
<Pagination total={100} mode='simple' />;
```

### 显示省略号

设置 `forceEllipses` 后会展示省略号按钮，点击后可以快速跳转。

demo|forceEllipses

```tsx
<Pagination total={100} forceEllipses />;
```

### 自定义上一页、下一页按钮

通过 `prev`、`next` 来自定义上一页、下一页按钮的内容

demo|custom

```tsx
<Pagination total={100} previous={<ArrowLeft />} next={<Arrow />} />;
```

### 自定义页码

通过 `itemRender` 来自定义渲染页码，通常可用于渲染链接。

demo|itemRender

```tsx
<Pagination
  total={100}
  itemRender={(type, page, node) => {
    if (type === 'page') {
      return (
        <a
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            alignItems: 'center',
          }}
          href={`#${page}`}
        >
          {node}
        </a>
      );
    }

    return node;
  }}
/>;
```

## API

### Pagination Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| total | 总记录数 | `number` |  |
| pageSize | 每页记录数 | `number` | `10` |
| currentPage | 当前页数 | `number` |  |
| defaultCurrentPage | 默认当前页数 | `number` |  |
| previous | 上一页按钮 | `React.ReactNode` |  |
| next | 下一页按钮 | `React.ReactNode` |  |
| boundaryRange | 始结束页面两侧显示的页码数 | `number` | `1` |
| siblingRange | 当前页码两侧显示的页码数 | `number` | `1` |
| forceEllipses | 否显示省略号 | `boolean` |  |
| previousNextFlexible | 上一页、下一页是否是 flexible | `boolean` | `true` |
| itemRender | 自定义渲染 | `(type: 'next' \| 'previous' \| 'page',page:number,originalElement: React.ReactElement,) => React.ReactElement` |  |

### Pagination Events

| 参数     | 说明           | 类型                            |
| -------- | -------------- | ------------------------------- |
| onChange | 页数改变时触发 | `(currentPage: number) => void` |

### Types

#### PaginationNSlot

```ts
type PaginationNSlot =
  | 'root'
  | 'page'
  | 'ellipsis'
  | 'button'
  | 'description'
  | 'previewJump'
  | 'nextJump';
```
