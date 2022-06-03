---
title: Switch
subTitle: 开关
category: components
type: 表单组件
demo: true
---

### 介绍

用于在打开和关闭状态之间进行切换。

### 引入

```tsx
import { Switch } from 'rmc-vant';
```

## 代码演示

### 基础用法

`checked` 表示开关的选中状态，true 表示开，false 表示关。`defaultChecked` 表示默认选中。

```tsx
<Switch defaultChecked />
```

### 禁用状态

通过 `disabled` 属性来禁用开关，禁用状态下开关不可点击。

```tsx
<Switch disabled />
```

### 加载状态

通过 `loading` 属性设置开关为加载状态，加载状态下开关不可点击。

```tsx
<Switch loading />
```

### 自定义大小

通过 `size` 属性自定义开关的大小。

```tsx
<Switch size={24} />
```

### 自定义颜色

`activeColor` 属性表示打开时的背景色，`inactiveColor` 表示关闭时的背景色。

```tsx
<Switch activeColor="#ee0a24" inactiveColor="#dcdee0" defaultChecked />
```

### 自定义按钮

通过 `node` 自定义按钮的内容。

```tsx
<Switch
  node={(checked) =>
    checked ? (
      <Success color="var(--rmcv-primary-color)" size={18} />
    ) : (
      <Cross color="var(--rmcv-gray-5)" size={18} />
    )
  }
/>
```

### 异步控制

`onClick` 回调函数中自定义状态。

```tsx
const [loading, setLoading] = useState(false);
const [checked, setChecked] = useState(true);

return (
  <Switch
    loading={loading}
    checked={checked}
    onClick={async (current) => {
      setLoading(true);

      await Dialog({
        title: '提醒',
        message: '是否切换开关？',
      });

      setTimeout(() => {
        setLoading(false);
        setChecked(current);
      }, 1000);
    }}
  />
);
```

### 配合单元格使用

```tsx
<Cell title="标题" value={<Switch size={24} defaultChecked />} />
```

## API

### Props

{{"api": true}}

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

{{"cssVar": true}}
