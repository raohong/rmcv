---
title: Circle
subTitle: 圆形进度条
category: components
group: show
theme: light
---

## 介绍

圆环形的进度条组件，支持进度渐变动画。

## 引入

```tsx
import { Circle } from 'rmc-vant';
```

## 代码演示

### 基础用法

通过 `progress` 属性来控制进度。

demo|base

```tsx
import { Button, Circle, Space } from 'rmc-vant';
import { useState } from 'react';

export default () => {
  const [progress, set] = useState(80);

  return (
    <Space size={24}>
      <Circle progress={progress} />
      <Button
        type='primary'
        size='small'
        onClick={() => set(Math.min(progress + 20, 100))}
      >
        增加
      </Button>
      <Button
        type='success'
        size='small'
        onClick={() => set(Math.max(progress - 20, 0))}
      >
        减少
      </Button>
    </Space>
  );
};
```

### 宽度定制

通过 `strokeWidth` 属性来控制进度条宽度。

demo|strokeWidth

```tsx
import { Circle } from 'rmc-vant';
export default () => <Circle progress={80} strokeWidth={6} text='宽度定制' />;
```

### 颜色定制

通过 `color` 属性来控制进度条颜色，`layerColor` 属性来控制轨道颜色。

demo|color

```tsx
import { Circle } from 'rmc-vant';
export default () => (
  <Circle
    color='rgb(238, 10, 36)'
    progress={80}
    layerColor='#ebedf0'
    text='颜色定制'
  />
);
```

### 渐变色

`color` 属性支持传入对象格式来定义渐变色。

demo|linearGradient

```tsx
import { Circle } from 'rmc-vant';
export default () => (
  <Circle
    progress={80}
    gradientColor={{
      '0%': '#3fecff',
      '100%': '#6149f6',
    }}
    text='渐变色'
  />
);
```

### 逆时针方向

将 `clockwise` 设置为 `false`，进度会从逆时针方向开始。

demo|clockWise

```tsx
import { Circle } from 'rmc-vant';
export default () => (
  <Circle progress={80} color='#06b6d4' text='逆时针' clockise={false} />
);
```

### 大小定制

通过 `size` 属性设置圆环直径。

demo|size

```tsx
import { Circle } from 'rmc-vant';
export default () => (
  <Circle progress={80} color='#ec4899' text='大小定制' size={80} />
);
```

### 起始位置

进度条默认从顶部开始，可以通过 start-position 属性设置起始位置。

demo|startPosition

```tsx
import { Circle, Space } from 'rmc-vant';

export default () => (
  <Space>
    <Circle progress={80} startPosition='left' text='左侧' />
    <Circle
      progress={80}
      color='rgb(7, 193, 96)'
      startPosition='right'
      text='右侧'
    />
    <Circle progress={80} startPosition='bottom' text='底部' />
  </Space>
);
```

## API

### Circle Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| progress | 当前进度 | `number` |  |
| size | 圆环直径 | `string \| number` | `100` |
| color | 进度条颜色 | `string` |  |
| gradientColor | 进度条渐变颜色 优先级大于 color | `Record<string, string>` |  |
| layerColor | 轨道颜色 | `string` |  |
| text | 文字，优先级大于 children | `string` |  |
| fill | 填充颜色 | `string` |  |
| strokeWidth | 进度条宽度 | `number` | `4` |
| strokeLinecap | 进度条端点形状 | `round` \| `button` \| `square` |  |
| clockwise | 进度条方向是否是顺时针 | `boolean` | `true` |
| startPosition | 进度起始位置 | `left` \| `right` \| `top` \| `bottom` | `top` |
| classNames | 给各个 slot 自定义类名 | `Record<CircleNSlot, string>` |  |

### Types

#### CircleNSlot

```ts
type CircleNSlot = 'root' | 'text';
```
