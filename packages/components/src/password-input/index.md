---
title: PasswordInput
subTitle: 密码输入框
category: components
type: 表单组件
demo: true
---

### 介绍

带网格的输入框组件，可以用于输入密码、短信验证码等场景，通常与数字键盘组件配合使用。

### 引入

```tsx
import { PasswordInput } from 'rmc-vant';
```

## 代码演示

### 基础用法

搭配数字键盘组件来实现密码输入功能。

```tsx
<NumberKeyboard maxLength={6}>
  {(value, visible) => <PasswordInput value={value} focused={visible} />}
</NumberKeyboard>
```

### 自定义长度

通过 `length` 属性来设置密码长度。

```tsx
<NumberKeyboard maxLength={4}>
  {(value, visible) => <PasswordInput value={value} length={4} focused={visible} />}
</NumberKeyboard>
```

### 格子间距

通过 `gutter` 属性来设置格子之间的间距。

```tsx
<NumberKeyboard maxLength={6}>
  {(value, visible) => <PasswordInput value={value} gutter={10} focused={visible} />}
</NumberKeyboard>
```

### 明文展示

将 `mask` 设置为 `false` 可以明文展示输入的内容，适用于短信验证码等场景。

```tsx
<NumberKeyboard maxLength={6}>
  {(value, visible) => (
    <PasswordInput value={value} mask={false} focused={visible} />
  )}
</NumberKeyboard>
```

### 提示信息

通过 `info` 属性设置提示信息，通过 `errorInfo` 属性设置错误提示，例如当输入六位时提示密码错误。

```tsx
<NumberKeyboard maxLength={6}>
  {(value, visible) => (
    <PasswordInput
      value={value}
      focused={visible}
      info="密码为6位数字"
      errorInfo={
        value && value.length === password.length && value !== password
          ? '密码错误'
          : undefined
      }
    />
  )}
</NumberKeyboard>
```

## API

### Props

{{"api": true}}

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

{{"cssVar": true}}
