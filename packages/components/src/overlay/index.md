---
title: Overlay
subTitle: 遮罩层
category: components
type: 反馈组件
demo: true
---

### 介绍

创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。

### 引入

```tsx
import { Overlay } from 'rmc-vant';
```

## 代码演示

### 基础用法

```tsx
const [visible, set] = useState(false);

<>
  <Button onClick={() => set(true)} type="primary">
    显示遮罩层
  </Button>
  <Overlay visible={visible} onClick={() => set(false)} />
</>;
```

### 自定义内容

自定义遮罩层任意内容

```tsx
const [visible, set] = useState(false);

<>
  <Button onClick={() => set(true)} type="primary">
    自定义内容
  </Button>
  <Overlay visible={visible} onClick={() => set(false)}>
    自定义内容
  </Overlay>
</>;
```

## API

### Props

{{"api": true}}
