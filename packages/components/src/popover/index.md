---
title: Popover
subTitle: 气泡弹出层
category: components
type: 展示组件
demo: true
---

### 介绍

弹出式的气泡菜单。

### 引入

```tsx
import { Popover } from 'rmc-vant';
```

## 代码演示

### 基础用法

```tsx
<Popover
  actions={[
    {
      text: '选项一',
    },
    {
      text: '选项二',
    },
    {
      text: '选项一',
    },
  ]}
  placement="bottom"
>
  <Button type="primary">浅色风格</Button>
</Popover>
```

### 深色风格

Popover 支持浅色和深色两种风格，默认为浅色风格，将 `theme` 属性设置为 `dark` 可切换为深色风格。

```tsx
<Popover
  actions={[
    {
      text: '选项一',
    },
    {
      text: '选项二',
    },
    {
      text: '选项一',
    },
  ]}
  placement="bottom"
  theme="dark"
>
  <Button type="primary">深色风格</Button>
</Popover>
```

### 展示图标

在 actions 数组中，可以通过 `icon` 字段来定义选项的图标。

```tsx
<Popover
  actions={[
    {
      icon: <AddOutlined />,
      text: '选项一',
    },
    {
      icon: <MusicOutlined />,
      text: '选项二',
    },
    {
      icon: <MoreOutlined />,
      text: '选项三',
    },
  ]}
  placement="bottom-start"
>
  <Button type="primary">展示图标</Button>
</Popover>
```

### 禁用选项

在 `actions` 数组中，可以通过 `disabled` 字段来禁用某个选项。

```tsx
<Popover
  actions={[
    {
      disabled: true,
      text: '选项一',
    },
    {
      disabled: true,
      text: '选项二',
    },
    {
      text: '选项三',
    },
  ]}
  placement="bottom-start"
>
  <Button type="primary">禁用图标</Button>
</Popover>
```

### 自定义内容

通过 `renderContent` 方法，可以在 Popover 内部放置任意内容。

```tsx
<Popover
  placement="right"
  renderContent={() => (
    <Grid style={{ width: 200 }} clickable square direction="vertical">
      {Array.from({ length: 6 }, (_, i) => (
        <GridItem key={i} icon={<PhotoOutlined />} text="选项" />
      ))}
    </Grid>
  )}
>
  <Button type="primary">自定义内容</Button>
</Popover>
```

## API

### Props

{{"api": true}}

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

{{"cssVar": true}}
