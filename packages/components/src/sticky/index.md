---
title: Sticky
subTitle: 粘性布局
category: components
group: show
---

## 介绍

将页面元素固定在在可视范围。

## 引入

```tsx
import { Sticky } from 'rmc-vant';
```

## 代码演示

### 基础用法

将内容包裹在 `Sticky` 组件内即可。

demo|base

```tsx
<Sticky>
  <Button type='primary'>基础用法</Button>
</Sticky>;
```

### 吸顶距离

通过 `offsetTop` 属性可以设置组件在吸顶时与顶部的距离。

demo|offsetTop

```tsx
<Sticky offsetTop={50}>
  <Button type='warning'>吸顶距离</Button>
</Sticky>;
```

### 指定容器

通过 `container` 属性可以指定组件的容器，页面滚动时，组件会始终保持在容器范围内，当组件即将超出容器底部时，会固定在容器的底部。

demo|container

```tsx
<div
  id='container'
  style={{ height: 300, background: '#fff', padding: '10px 40px', margin: '40px 0' }}
>
  <Sticky target='#container'>
    <Button type='danger'>指定容器</Button>
  </Sticky>
</div>;
```

### 吸底距离

将 `position` 设置为 bottom 可以让组件吸附在底部。通过 `offsetBottom` 属性可以设置组件在吸底时与底部的距离。

demo|position

```tsx
<>
  <div style={{ height: '90vh' }} />
  <Sticky position='bottom' offsetBottom={10}>
    <Button type='success'>吸底距离</Button>
  </Sticky>
</>;
```

## API

### Sticky Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| position | 吸附位置，可选值为 bottom | `top` \| `bottom` | `top` |
| offsetTop | 吸顶时与顶部的距离 | `number` |  |
| offsetBottom | 吸底时与底部的距离 传入 offsetBottom | `number` |  |
| target | 容器对应的 HTML 节点 | `string \| ((node: HTMLElement \| null) => Element \| undefined \| null)` |  |
| disabled | 是否启用滚动监听，禁用后可以自定义 | `boolean` |  |
| zIndex | 吸顶时的 z-index | `number` |  |
| contentComponent |  | `keyof JSX.IntrinsicElements` |  |
| classNames | 给各个 slot 自定义类名 | `Record<'root' \| 'content', string>` |  |

### Sticky Events

| 参数     | 说明                 | 类型                         | 默认值 |
| -------- | -------------------- | ---------------------------- | ------ |
| onChange | 当吸顶状态改变时触发 | `(isFixed: boolean) => void` |        |
