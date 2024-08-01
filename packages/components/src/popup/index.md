---
title: Popup
subTitle: 弹出层
category: components
group: base
---

## 介绍

弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。

## 引入

```tsx
import { Popup } from 'rmc-vant';
```

## 代码演示

### 基础用法

demo|base

```tsx
const [open, set] = useState(false);

return (
  <>
    <Cell onClick={() => set(true)} title='展示弹出层' clickable isLink />
    <Popup open={open} onClose={() => set(false)}>
      <div style={{ height: 200, width: 'calc(100vw - 40px)' }}>内容</div>
    </Popup>
  </>
);
```

### 弹出位置

通过 `position` 属性设置弹出位置，默认居中弹出，可以设置为 `top`、`bottom`、`left`、`right`。

demo|position

```tsx
'./demos/positions.tsx';
```

### 关闭图标

设置 `closeable` 属性后，会在弹出层的右上角显示关闭图标，并且可以通过 `closeIcon` 属性自定义图标，使用 `closeIconPosition` 属性可以自定义图标位置。

```tsx
<>
  <Popup open position='bottom' closeable>
    内容
  </Popup>
  <Popup open position='bottom' closeIcon={<CloseOutlined />} closeable>
    内容
  </Popup>
  <Popup open position='bottom' closeIconPosition='top-left' closeable>
    内容
  </Popup>
</>;
```

### 圆角弹窗

设置 round 属性后，弹窗会根据弹出位置添加不同的圆角样式。

```tsx
<Popup open position='bottom' round>
  内容
</Popup>;
```

### 指定挂载位置

弹出层默认挂载到组件标签所在位置，可以通过 `teleport` 属性指定挂载位置。

```tsx
<Popup open position='bottom' teleport='body'>
  内容
</Popup>;
```

## API

### Popup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| open | 是否显示弹出层 | `boolean` |  |
| lockScroll | 是否锁定背景滚动 | `boolean` | `true` |
| position | popup 位置 | `PopupPosition` | `center` |
| round | 是否显示圆角 | `boolean` | `true` |
| lazyRender | 是否在显示弹层时才渲染节点 | `boolean` |  |
| className | 自定义 class | `string` |  |
| closeable | 是否可关闭 | `boolean` |  |
| closeIcon | 关闭按钮 | `React.ReactNode` |  |
| closeIconPosition | 关闭按钮位置 | `PopupCloseIconPosition` | `top-right` |
| closeIconSx | 自定义 closeIcon 样式 | `SystemSxInterpolation` |  |
| overlay | 是否显示 overlay | `boolean` | `true` |
| overlayClosable | overlay 点击是否关闭 | `boolean` | `true` |
| zIndex | 样式层级 | `number` | `1` |
| teleport | 自定义渲染位置 | `PortalContainer` |  |
| safeArea | 是否启用 safe-area | `boolean` | `true` |
| transitionAppear | 是否在初始渲染时启用过渡动画 | `boolean` | `false` |
| duration | 动画时长，单位秒，设置为 0 可以禁用动画，仅当没有传入 motionName 时才生效 | `number` | `300` |
| afterOpenChange | 动画结束后触发 | `(open: boolean) => void` |  |
| closeOnPopstate | 是否在页面回退时自动关闭 | `boolean` | `true` |
| animationConfig | 自定义动画 | `AnimationConfig` |  |
| classNames | 给各个 slot 自定义类名 | `Record<'root' \| 'overlay' \| 'closeIcon', string>` |  |

### Popup Events

| 参数           | 说明               | 类型         | 默认值 |
| -------------- | ------------------ | ------------ | ------ |
| onClose        | 关闭弹出层时触发   | `() => void` |        |
| onOverlayClick | overlay 点击后出发 | `() => void` |        |
| afterClose     | 完全关闭后触发     | `() => void` |        |

### Types

#### PopupPosition

```ts
type PopupPosition = 'left' | 'right' | 'top' | 'bottom' | 'center' | 'none';
```

#### PopupCloseIconPosition

```ts
type PopupCloseIconPosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';
```

#### AnimationConfig

```ts
type AnimationConfig = {
  config?: SpringConfig | ((key: string) => SpringConfig);
  delay?: number | ((key: string) => number);
  from?: object;
  enter?: object;
  leave?: object;
};
```
