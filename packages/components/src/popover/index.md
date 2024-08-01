---
title: Popover
subTitle: 气泡弹出层
category: components
group: show
---

## 介绍

弹出式的气泡菜单。

## 引入

```tsx
import { Popover } from 'rmc-vant';
```

## 代码演示

### 基础用法

demo|base

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
  placement='bottom'
>
  <Button type='primary'>浅色风格</Button>
</Popover>;
```

### 深色风格

Popover 支持浅色和深色两种风格，默认为浅色风格，将 `theme` 属性设置为 `dark` 可切换为深色风格。

demo|theme

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
  placement='bottom'
  theme='dark'
>
  <Button type='primary'>深色风格</Button>
</Popover>;
```

### 展示图标

在 actions 数组中，可以通过 `icon` 字段来定义选项的图标。

demo|icons

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
  placement='bottom-start'
>
  <Button type='primary'>展示图标</Button>
</Popover>;
```

### 禁用选项

在 `actions` 数组中，可以通过 `disabled` 字段来禁用某个选项。

demo|disabled

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
  placement='bottom-start'
>
  <Button type='primary'>禁用图标</Button>
</Popover>;
```

### 自定义内容

通过 `renderContent` 方法，可以在 Popover 内部放置任意内容。

demo|renderContent

```tsx
<Popover
  placement='right'
  renderContent={() => (
    <Grid
      style={{ width: 200 }}
      items={Array.from({ length: 6 }, (_, i) => ({
        key: i,
        icon: <PhotoOutlined />,
        label: '选项',
      }))}
      clickable
      square
      direction='vertical'
    >
    </Grid>
  )}
>
  <Button type='primary'>自定义内容</Button>
</Popover>;
```

## API

### Popover Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| open | 是否展示气泡弹出层 | `boolean` |  |
| actions | 选项列表 | `PopoverAction[]` |  |
| placement | 弹出位置 | `Placement` |  |
| theme | 主题风格，可选值为 dark light | `PopoverTheme` |  |
| offset | 弹出层位置的偏移量 | `(placement: Placement) => Partial\<{ mainAxis: number; crossAxis: number; }\>` |  |
| showArrow | 是否展示小箭头 | `boolean` | `true` |
| overlay | 是否显示遮罩层 | `boolean` | `false` |
| closeOnClickAction | 是否在点击选项后关闭 | `boolean` | `true` |
| closeOnClickOutside | 是否在点击弹窗外关闭菜单 | `boolean` | `true` |
| closeOnClickOverlay | 是否在点击遮罩层后关闭菜单 | `boolean` |  |
| getContainer | 获取 Portal | `() => HTMLElement` |  |
| renderContent | 自定义渲染内容 | `() => React.ReactNode` |  |
| lazyRender | 是否开启延迟渲染 | `boolean` |  |
| duration | 动画持续时间 | `number` |  |
| children | children | `React.ReactNode` |  |
| arrowSize | 箭头大小 | `number` | `6` |
| classNames | 给各个 slot 自定义类名 | `Record<PopoverNSlot, string>` |  |

### Popover Events

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onOpenChange | open 变化时回调 | `(open: boolean) => void` |  |
| afterOpenChange | 动画结束后回调 | `(open: boolean) => void` |  |
| onSelect | 点击选项时回调 | `(action: PopoverAction, index: number) => void` |  |
| onOverlayClick | 点击 overlay | `() => void` |  |

### Types

#### PopoverNSlot

```ts
type PopoverNSlot = 'root' | 'menus' | 'menu' | 'menuIcon' | 'menuText' | 'arrow';
```

#### PopoverAction

```ts
type PopoverAction = {
  /**
   * @description 文字
   */
  text: React.ReactNode;
  /**
   * @description 图标
   */
  icon?: React.ReactNode;
  /**
   * @description 选项文字颜色
   */
  color?: string;
  /**
   * @description 是否为禁用状态
   */
  disabled?: boolean;
  /**
   * @description 自定义 class
   */
  className?: string;
};
```
