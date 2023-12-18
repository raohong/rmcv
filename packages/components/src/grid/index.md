---
title: Grid
subTitle: 宫格
category: components
type: 展示组件
demo: true
---

### 介绍

宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。

### 引入

```tsx
import { Grid, GridItem } from 'rmc-vant';
```

## 代码演示

### 基础用法

通过 `icon` 属性设置格子内的图标，`text` 属性设置文字内容。

```tsx
<Grid>
  <GridItem text="文字" icon={<PhotoOutlined />} />
  <GridItem text="文字" icon={<PhotoOutlined />} />
  <GridItem text="文字" icon={<PhotoOutlined />} />
  <GridItem text="文字" icon={<PhotoOutlined />} />
</Grid>
```

### 自定义列数

默认一行展示四个格子，可以通过 `column` 自定义列数。

```tsx
const renderItems = (num: number) =>
  Array.from({ length: num }, (_, i) => (
    <GridItem text="文字" key={i} icon={<PhotoOutlined />} />
  ));

return <Grid column={3}>{renderItems(6)}</Grid>;
```

### 自定义内容

自定义格子展示的内容。

```tsx
<Grid column={3} border={false}>
  <GridItem>
    <Image src="https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg" />
  </GridItem>
  <GridItem>
    <Image src="https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg" />
  </GridItem>
  <GridItem>
    <Image src="https://cdn.jsdelivr.net/npm/@vant/assets/apple-3.jpeg" />
  </GridItem>
</Grid>
```

### 正方形格子

设置 `square` 属性后，格子的高度会和宽度保持一致。

```tsx
const renderItems = (num: number) =>
  Array.from({ length: num }, (_, i) => (
    <GridItem text="文字" key={i} icon={<PhotoOutlined />} />
  ));

return <Grid square>{renderItems(8)}</Grid>;
```

### 格子间距

通过 `gutter` 属性设置格子之间的距离。

```tsx
const renderItems = (num: number) =>
  Array.from({ length: num }, (_, i) => (
    <GridItem text="文字" key={i} icon={<PhotoOutlined />} />
  ));

return <Grid gutter={10}>{renderItems(8)}</Grid>;
```

### 内容横排

将 `direction` 属性设置为 `horizontal`，可以让宫格的内容呈横向排列。

```tsx
<Grid direction="horizontal" column={3}>
  <GridItem text="文字" icon={<PhotoOutlined />} />
  <GridItem text="文字" icon={<PhotoOutlined />} />
  <GridItem text="文字" icon={<PhotoOutlined />} />
</Grid>
```

徽标提示

设置 `dot` 属性后，会在图标右上角展示一个小红点。设置 `badge` 属性后，会在图标右上角展示相应的徽标。

```tsx
<Grid column={2} clickable>
  <GridItem dot text="文字" icon={<HomeOutlined />} />
  <GridItem badge={100} text="文字" icon={<SearchOutlined />} />
</Grid>
```

## API

### Grid Props

{{"api": "Grid"}}

### GridItem Props

{{"api": "GridItem"}}
