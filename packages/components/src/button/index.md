---
title: Button
subTitle: 按钮
category: components
group: base
---

## 介绍

按钮用于触发一个操作，如提交表单。

## 引入

```tsx
import { Button } from 'rmc-vant';
```

## 代码演示

### 按钮类型

按钮支持 `default` 、 `primary` 、 `success` 、 `warning` 、 `danger` 五种类型，默认为 `default`。

demo|type

```tsx
<Space>
  <Button>默认按钮</Button>
  <Button type='primary'>主要按钮</Button>
  <Button type='success'>成功按钮</Button>
  <Button type='warning'>警告按钮</Button>
  <Button type='danger'>危险按钮</Button>
</Space>;
```

### 朴素按钮

通过 `plain` 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

demo|plain

```tsx
<Button type='primary' plain>
  朴素按钮
</Button>;
```

### 细边框

设置 `hairline` 属性可以展示 0.5px 的细边框。

demo|hairline

```tsx
<Space>
  <Button type='primary' plain hairline>
    细边框按钮
  </Button>
  <Button type='success' plain hairline>
    细边框按钮
  </Button>
</Space>;
```

### 禁用状态

通过设置 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

demo|disabled

```tsx
<Space>
  <Button type='primary' disabled>
    禁用状态
  </Button>
  <Button type='success' disabled>
    禁用状态
  </Button>
</Space>;
```

### 加载状态

通过 `loading` 属性设置按钮为加载状态，加载状态下默认会隐藏按钮文字，可以通过 `loadingText` 设置加载状态下的文字。

demo|loading

```tsx
<Space>
  <Button type='primary' loading />
  <Button type='primary' loadingType='spinner' loading />
  <Button type='success' loadingType='spinner' loadingText='加载中...' loading />
</Space>;
```

### 按钮形状

通过 `square` 设置方形按钮，通过 `round` 设置圆形按钮。

demo|square

```tsx
<Space>
  <Button type='primary'>方形按钮</Button>
  <Button type='success' shape='round'>
    圆形按钮
  </Button>
</Space>;
```

### 图标按钮

通过 `icon` 属性设置按钮图标

demo|icon

```tsx
<Space>
  <Button type='primary'>方形按钮</Button>
  <Button type='success' shape='round'>
    圆形按钮
  </Button>
</Space>;
```

### 按钮尺寸

支持 `large` 、 `normal` 、 `small` 、 `mini` 四种尺寸，默认为 `normal`。

demo|size

```tsx
<Space>
  <Button type='primary' size='large'>
    大号按钮
  </Button>
  <Button type='primary'>普通按钮</Button>
  <Button type='primary' size='small'>
    小型按钮
  </Button>
  <Button type='primary' size='mini'>
    迷你按钮
  </Button>
</Space>;
```

### 块级元素

按钮在默认情况下为行内块级元素，通过 `block` 属性可以将按钮的元素类型设置为块级元素。

demo|block

```tsx
<Button type='primary' block>
  按钮
</Button>;
```

### 自定义颜色

通过 `color` 属性可以自定义按钮的颜色。

demo|color

```tsx
<Space>
  <Button color='#7232dd'>单色按钮</Button>
  <Button color='#7232dd' plain>
    单色按钮
  </Button>
  <Button color='linear-gradient(to right, #ff6034, #ee0a24)'>渐变色按钮</Button>
</Space>;
```

## Slots

- **root** Button 的容器
- **loading** 显示加载时的元素，包含了 **loadingIcon**
- **loadingIcon** loading 图标

## API

### Button Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮类型 | `default` \| `primary` \| `success` \| `warning` \| `danger` \| `default` | `default` |
| size | 按钮尺寸 | `large` \| `normal` \| `small` \| `mini` | `normal` |
| color | 自定义颜色 | `string` |  |
| block | 是否是块级元素 | `boolean` |  |
| variant | 按钮的类型 | `outlined` \| `contained` | `contained` |
| shape | 按钮形状 | `round` \| `square` \| `default` | `default` |
| disabled | 按钮 disabled | `boolean` |  |
| icon | 按钮 icon | `React.ReactNode` |  |
| loading | 是否 loading | `boolean` |  |
| hairline | border 是否是高清 | `boolean` |  |
| border | 是否显示 border | `boolean` |  |
| loadingType | loading 图标类型 | `LoadingType` |  |
| loadingSize | loading 图标大小 | `number` |  |
| classNames |  | `Record<'root' \| 'loading' \| 'loadingIcon', string>` |  |
| htmlType | 按钮的原始 type | `NativeButtonHTMLType` |  |

### Types

#### ButtonNSlot

```ts
type ButtonNSlot = 'root' | 'icon' | 'loadingIcon';
```
