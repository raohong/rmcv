---
title: Skeleton
subTitle: 骨架屏幕
category: components
group: show
---

## 介绍

用于在内容加载过程中展示一组占位图形。

## 引入

```tsx
import { Skeleton } from 'rmc-vant';
```

## 代码演示

### 基础用法

通过 `title` 属性显示标题占位图，通过 `row` 属性配置占位段落行数。

demo|base

```tsx
<Skeleton row={3} title />;
```

### 显示头像

通过 `avatar` 属性显示头像占位图。

demo|avatar

```tsx
<Skeleton row={3} title avatar />;
```

### 展示子组件

将 `loading` 属性设置成 `false` 表示内容加载完成，此时会隐藏占位图，并显示 `Skeleton` 的子组件。

demo|loading

```tsx
const [loading, setLoading] = useState(true);

return (
  <>
    <Space style={{ marginBottom: 24 }}>
      <Button size='small' type='primary' onClick={() => setLoading(false)}>
        显示子组件
      </Button>
      <Button size='small' type='primary' onClick={() => setLoading(true)} plain>
        隐藏子组件
      </Button>
    </Space>
    <Skeleton row={3} loading={loading} title avatar>
      <div style={{ display: 'flex', gap: 8 }}>
        <Image width={32} height={32} round />
        <div>
          <h3 style={{ fontSize: 18, margin: 0 }}>关于滚林</h3>
          <p>
            桂林以其独特的喀斯特地貌著称，山水如画。漓江蜿蜒曲折，构成了闻名世界的自然景观，吸引了众多游客前来观赏。
          </p>
        </div>
      </div>
    </Skeleton>
  </>
);
```

## API

### Skeleton Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| row | 段落占位图行数 | `number` \| `string` | 0 |
| rowWidth | 段落占位图宽度，可传数组来设置每一行的宽度 | `SkeletonSize` \| `SkeletonSize[]` |
| title | 是否显示标题占位图 | `boolean` | `false` |
| avatar | 是否显示头像占位图 | `boolean` |  |
| loading | 是否显示骨架屏，传 false 时会展示子组件内容 | `boolean` | `true` |
| animate | 是否开启动画 | `boolean` | `true` |
| round | 是否将标题和段落显示为圆角风格 | `boolean` | `false` |
| titleWidth | 标题占位图宽度 number | `SkeletonSize` | `40%` |
| avatarSize | 头像占位图大小 number | `SkeletonSize` | `32` |
| avatarShape | 头像占位图形状 | `round` \| `square` | `round` |
| classNames | 给各个 slot 自定义类名 | `Record<SkeletonSlot, string>` |  |

### Types

#### SkeletonSize

```ts
type SkeletonSize = string | number;
```

#### SkeletonSlot

```ts
type SkeletonSlot = 'root' | 'loading' | 'title' | 'avatar' | 'image' | 'paragraph';
```
