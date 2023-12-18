---
title: Cell
subTitle: 单元格
category: components
type: 基础组件
demo: true
---

### 介绍

单元格为列表中的单个展示项。

### 引入

```tsx
import { Cell, CellGroup } from 'rmc-vant';
```

## 代码演示

### 基础用法

`Cell` 可以单独使用，也可以与 `CellGroup` 搭配使用，`CellGroup` 可以为 `Cell` 提供上下外边框。

```tsx
<CellGroup>
  <Cell title="单元格" value="内容" />
  <Cell title="单元格" value="内容" label="描述信息" />
</CellGroup>
```

### 卡片风格

通过 `CellGroup` 的 `inset` 属性，可以将单元格转换为圆角卡片风格（这时候 `CellGroup` 的 border 属性无效）。

```tsx
<CellGroup inset>
  <Cell title="单元格" value="内容" />
  <Cell title="单元格" value="内容" label="描述信息" />
</CellGroup>
```

### 展示图标

通过 `icon` 属性在标题左侧展示图标。

```tsx
<CellGroup>
  <Cell icon={<LocationOutlined />} title="单元格" value="内容" />
</CellGroup>
```

### 只设置 value

只设置 `value` 时，内容会靠左对齐。

```tsx
<CellGroup>
  <Cell value="内容" />
</CellGroup>
```

### 展示箭头

设置 `isLink` 属性后会在单元格右侧显示箭头，并且可以通过 `arrowDirection` 属性控制箭头方向。

```tsx
<CellGroup>
  <Cell title="单元格" isLink />
  <Cell title="单元格" value="内容" isLink />
  <Cell title="单元格" value="内容" arrowDirection="down" isLink />
</CellGroup>
```

### 分组标题

通过 `CellGroup` 的 `title` 属性可以指定分组标题。

```tsx
<>
  <CellGroup title="分组1">
    <Cell icon={<LocationOutlined />} title="单元格" value="内容" />
  </CellGroup>
  <CellGroup title="分组2">
    <Cell title="单元格" value="内容" />
    <Cell title="单元格" value="内容" label="描述信息" />
  </CellGroup>
</>
```

### 垂直居中

通过 `center` 属性可以让 `Cell` 的左右内容都垂直居中。

```tsx
<CellGroup>
  <Cell title="单元格" value="内容" label="描述信息" center />
</CellGroup>
```

## API

### Cell Props

{{"api": "Cell"}}

### CellGroup Props

{{"api": "CellGroup"}}
