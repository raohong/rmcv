---
title: Overlay
subTitle: 遮罩层
category: components
group: feedback
---

## 介绍

创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。

## 引入

```tsx
import { Overlay } from 'rmc-vant';
```

## 代码演示

### 基础用法

demo|base

```tsx
const [open, set] = useState(false);

return (
  <>
    <Button onClick={() => set(true)} type='primary'>
      显示遮罩层
    </Button>
    <Overlay open={open} onClick={() => set(false)} />
  </>
);
```

### 自定义内容

自定义遮罩层任意内容

demo|customizeContent

```tsx
const [open, set] = useState(false);

return (
  <>
    <Button onClick={() => set(true)} type='success'>
      自定义内容
    </Button>
    <Overlay open={open} onClick={() => set(false)}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <div
          style={{ width: 200, height: 100, background: '#fff', borderRadius: 16 }}
        >
        </div>
      </div>
    </Overlay>
  </>
);
```

## API

### Overlay Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| open | 是否展示遮罩层 | `boolean` |  |
| lazyRender | 是否在显示时才渲染节点 | `boolean` |  |
| lockScroll | 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动 | `boolean` | `true` |
| zIndex | z-index 层级 | `number` |  |
| duration | 动画时长，单位秒，设置为 0 可以禁用动画 | `number` |  |
| teleport | 自定义渲染位置 | `PortalContainer` |  |
| transitionAppear | 是否在初始渲染时启用过渡动画 | `boolean` |  |
