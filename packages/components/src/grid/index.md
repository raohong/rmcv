---
title: Grid
subTitle: 宫格
category: components
group: nav
---

## 介绍

宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。

## 引入

```tsx
import { Grid } from 'rmc-vant';
```

## 代码演示

### 基础用法

通过 `icon` 属性设置格子内的图标，`text` 属性设置文字内容。

demo|icon

```tsx
<Grid
  items={[
    { label: '文字', icon: <PhotoOutlined /> },
    { label: '文字', icon: <PhotoOutlined /> },
    { label: '文字', icon: <PhotoOutlined /> },
  ]}
/>;
```

### 自定义列数

默认一行展示四个格子，可以通过 `column` 自定义列数。

demo|column

```tsx
<Grid
  column={3}
  items={[
    { label: '文字', icon: <PhotoOutlined /> },
    { label: '文字', icon: <PhotoOutlined /> },
    { label: '文字', icon: <PhotoOutlined /> },
    { label: '文字', icon: <PhotoOutlined /> },
    { label: '文字', icon: <PhotoOutlined /> },
    { label: '文字', icon: <PhotoOutlined /> },
  ]}
/>;
```

### 自定义内容

自定义格子展示的内容。

demo|customize

```tsx
<Grid
  column={3}
  items={[
    {
      children: (
        <Image src='https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg' />
      ),
    },
    {
      children: (
        <Image src='https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg' />
      ),
    },
    {
      children: (
        <Image src='https://cdn.jsdelivr.net/npm/@vant/assets/apple-3.jpeg' />
      ),
    },
  ]}
  border={false}
/>;
```

### 正方形格子

设置 `square` 属性后，格子的高度会和宽度保持一致。

demo|square

```tsx
const renderItems = (num: number) =>
  Array.from({ length: num }, (_, i) => ({
    label: '文字',
    icon: <PhotoOutlined />,
  }));

return <Grid items={renderItems(8)} square />;
```

### 格子间距

通过 `gutter` 属性设置格子之间的距离。

demo|gutter

```tsx
const renderItems = (num: number) =>
  Array.from({ length: num }, (_, i) => ({
    label: '文字',
    icon: <PhotoOutlined />,
  }));

return <Grid items={renderItems(8)} gutter={10} />;
```

### 内容横排

将 `direction` 属性设置为 `horizontal`，可以让宫格的内容呈横向排列。

demo|direction

```tsx
<Grid
  direction='horizontal'
  column={3}
  items={[
    { label: '文字', icon: <PhotoOutlined /> },
    { label: '文字', icon: <PhotoOutlined /> },
    { label: '文字', icon: <PhotoOutlined /> },
  ]}
/>;
```

### 徽标提示

设置 `dot` 属性后，会在图标右上角展示一个小红点。设置 `badge` 属性后，会在图标右上角展示相应的徽标。

demo|dot

```tsx
<Grid
  column={2}
  items={[
    { dot: true, label: '文字', icon: <HomeOutlined /> },
    { badge: 100, label: '文字', icon: <SearchOutlined /> },
  ]}
  clickable
/>;
```

## API

### Grid Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| column | 几列 | `number` | - |
| iconSize | 图标大小 | `string \| number` | - |
| gutter | 格子之间的间距 | `string \| number` | - |
| border | 是否显示边框 | `boolean` | - |
| center | 是否将格子内容居中显示 | `boolean` | - |
| square | 是否将格子固定为正方形 | `boolean` | - |
| clickable | 是否开启格子点击反馈 | `boolean` | - |
| direction | 格子内容排列的方向 | `"horizontal" \| "vertical"` | - |
| classNames | 给各个 slot 自定义类名 | `Record<"root" \| "item" \| "itemContent", string>` | - |
| items | Grid 的内容 | `GridItemProps[]` | - |
| component | 自定义 component | `keyof JSX.IntrinsicElements` | - |

### GridItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 文字内容 | `React.ReactNode` | - |
| icon | 图标 | `React.ReactNode` | - |
| iconSize | 图标大小 | `string \| number` | - |
| dot | 是否显示徽标小红点 | `boolean` | - |
| badge | 右上角徽标的内容 | `string \| number` | - |
| max | 徽标内容为数字时，最大值 | `number` | - |
| showZero | 当 content 是 0 时，是否显示 | `boolean` | - |
| component | 渲染组件 | `keyof JSX.IntrinsicElements` | - |
| contentClassName | content 自定义 类名 | `string` | - |
| clickable | 是否开启格子点击反馈 | `boolean` | - |

### Types

#### GridItemProps

```ts
type GridItemProps = {
  label?: React.ReactNode;
  icon?: React.ReactNode;
  iconSize?: number | string;
  dot?: boolean;
  badge?: number | string;
  max?: number;
  showZero?: boolean;
  component?: IntrinsicElementsKeys;
  contentClassName?: string;
  clickable?: boolean;
  children?: ReactNode;
};
```

#### GridNSlot

```ts
type GridNSlot = 'root' | 'item' | 'itemContent' | 'itemText' | 'itemIcon';
```
