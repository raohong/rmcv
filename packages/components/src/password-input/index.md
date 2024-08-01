---
title: PasswordInput
subTitle: 密码输入框
category: components
group: form
---

## 介绍

带网格的输入框组件，可以用于输入密码、短信验证码等场景，通常与数字键盘组件配合使用。

## 引入

```tsx
import { PasswordInput } from 'rmc-vant';
```

## 代码演示

### 基础用法

搭配数字键盘组件来实现密码输入功能。

demo|base

```tsx
<NumberKeyboard maxLength={6} defaultValue='123'>
  {(value, visible) => <PasswordInput value={value} focused={visible} />}
</NumberKeyboard>;
```

### 自定义长度

通过 `length` 属性来设置密码长度。

demo|length

```tsx
<NumberKeyboard maxLength={4} defaultValue='12'>
  {(value, visible) => <PasswordInput value={value} length={4} focused={visible} />}
</NumberKeyboard>;
```

### 格子间距

通过 `gutter` 属性来设置格子之间的间距。

demo|gutter

```tsx
<NumberKeyboard maxLength={6}>
  {(value, visible) => <PasswordInput value={value} gutter={10} focused={visible} />}
</NumberKeyboard>;
```

### 明文展示

将 `mask` 设置为 `false` 可以明文展示输入的内容，适用于短信验证码等场景。

demo|mask

```tsx
<NumberKeyboard maxLength={6}>
  {(value, visible) => (
    <PasswordInput value={value} mask={false} focused={visible} />
  )}
</NumberKeyboard>;
```

### 提示信息

通过 `info` 属性设置提示信息，通过 `errorInfo` 属性设置错误提示，例如当输入六位时提示密码错误。

demo|info

```tsx
<NumberKeyboard maxLength={6}>
  {(value, visible) => (
    <PasswordInput
      value={value}
      focused={visible}
      info='密码为6位数字'
      errorInfo={
        value && value.length === password.length && value !== password
          ? '密码错误'
          : undefined
      }
    />
  )}
</NumberKeyboard>;
```

## API

### PasswordInput Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 密码值 | `string` |  |
| info | 输入框下方文字提示 | `React.ReactNode` |  |
| errorInfo | 输入框下方错误提示 | `React.ReactNode` |  |
| length | 密码最大长度 | `number` |  |
| gutter | 输入框格子之间的间距 | `string` \| `number` |  |
| mask | 是否隐藏密码内容 | `boolean` |  |
| focused | 是否已聚焦，聚焦时会显示光标 | `boolean` |  |
| classNames | 给各个 slot 自定义类名 | `Record<PasswordInputNSlot, string>` |  |

### PasswordInput Events

| 参数    | 说明       | 类型         | 默认值 |
| ------- | ---------- | ------------ | ------ |
| onFocus | 聚焦时触发 | `() => void` |        |

### Types

#### PasswordInputNSlot

```ts
type PasswordInputNSlot =
  | 'root'
  | 'info'
  | 'cursor'
  | 'mask'
  | 'item'
  | 'inner'
  | 'input';
```
