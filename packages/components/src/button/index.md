---
title: Button
subTitle: 按钮
category: components
type: 基础组件
demo: true
---

### 介绍

按钮用于触发一个操作，如提交表单。

### 引入

```tsx
import { Button } from 'rmc-vant';
```

## 代码演示

### 按钮类型

按钮支持 `default` 、 `primary` 、 `success` 、 `warning` 、 `danger` 五种类型，默认为 `default`。

```tsx
<>
  <Button>默认按钮</Button>
  <Button type="primary">主要按钮</Button>
  <Button type="success">成功按钮</Button>
  <Button type="warning">警告按钮</Button>
  <Button type="danger">危险按钮</Button>
</>
```

```tsx
<>
  <Button type="primary" plain hairline>
    细边框按钮
  </Button>
  <Button type="success" plain hairline>
    细边框按钮
  </Button>
</>
```

### 朴素按钮

通过 `plain` 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

```tsx
<Button type="primary" plain>
  朴素按钮
</Button>
```

### 细边框

设置 `hairline` 属性可以展示 0.5px 的细边框。

```tsx
<>
  <Button type="primary" plain hairline>
    细边框按钮
  </Button>
  <Button type="success" plain hairline>
    细边框按钮
  </Button>
</>
```

### 禁用状态

通过设置 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

```tsx
<>
  <Button type="primary" disabled>
    禁用状态
  </Button>
  <Button type="success" disabled>
    禁用状态
  </Button>
</>
```

### 加载状态

通过 `loading` 属性设置按钮为加载状态，加载状态下默认会隐藏按钮文字，可以通过 `loadingText` 设置加载状态下的文字。

```tsx
<>
  <Button type="primary" loading />
  <Button type="primary" loadingType="spinner" loading />
  <Button
    type="success"
    loadingType="spinner"
    loadingText="加载中..."
    loading
  />
</>
```

### 按钮形状

通过 `square` 设置方形按钮，通过 `round` 设置圆形按钮。

```tsx
<>
  <Button type="primary">方形按钮</Button>
  <Button type="success" shape="round">
    圆形按钮
  </Button>
</>
```

### 图标按钮

通过 `icon` 属性设置按钮图标

```tsx
<>
  <Button type="primary">方形按钮</Button>
  <Button type="success" shape="round">
    圆形按钮
  </Button>
</>
```

### 按钮尺寸

支持 `large` 、 `normal` 、 `small` 、 `mini` 四种尺寸，默认为 `normal`。

```tsx
<>
  <Button type="primary" size="large">
    大号按钮
  </Button>
  <Button type="primary">普通按钮</Button>
  <Button type="primary" size="small">
    小型按钮
  </Button>
  <Button type="primary" size="mini">
    迷你按钮
  </Button>
</>
```

### 块级元素

按钮在默认情况下为行内块级元素，通过 `block` 属性可以将按钮的元素类型设置为块级元素。

```tsx
<Button type="primary" block>
  按钮
</Button>
```

### 自定义颜色

通过 `color` 属性可以自定义按钮的颜色。

```tsx
<>
  <Button color="#7232dd">单色按钮</Button>
  <Button color="#7232dd" plain>
    单色按钮
  </Button>
  <Button color="linear-gradient(to right, #ff6034, #ee0a24)">
    渐变色按钮
  </Button>
</>
```

## API

### Props

{{"api": "Button"}}

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

{{"cssVar": true}}
