---
title: NumberKeyboard
subTitle: 数字键盘
category: components
type: 表单组件
demo: true
---

### 介绍

虚拟数字键盘，可以配合密码输入框组件或自定义的输入框组件使用。

### 引入

```tsx
import { NumberKeyboard } from 'rmc-vant';
```

## 代码演示

### 默认样式

数字键盘提供了 `input`、`delete`、`blur` 事件，分别对应输入内容、删除内容和失去焦点的动作。

```tsx
<NumberKeyboard
  onInput={(val) => Toast(`输入 ${val}`)}
  onDelete={() => Toast('删除')}
  closeButtonText="完成"
>
  <Cell title="弹出默认键盘" isLink clickable />
</NumberKeyboard>
```

### 带右侧栏的键盘

将 `theme` 属性设置为 `custom` 来展示键盘的右侧栏，常用于输入金额的场景。

```tsx
<NumberKeyboard theme="custom" extraKey="." closeButtonText="完成" />
```

### 身份证号键盘

通过 `extraKey` 属性可以设置左下角按键内容，比如需要输入身份证号时，可以将 `extraKey` 设置为 `X`。

```tsx
<NumberKeyboard extraKey="X" closeButtonText="完成" />
```

### 键盘标题

通过 `title` 属性可以设置键盘标题。

```tsx
<NumberKeyboard title="键盘标题" extraKey="." closeButtonText="完成" />
```

### 配置多个按钮

当 `theme` 为 `custom` 时，支持以数组的形式配置两个 `extraKey`。

```tsx
<NumberKeyboard theme="custom" extraKey={['00', '.']} closeButtonText="完成" />
```

### 随机数字键盘

通过 `randomKeyOrder` 属性可以随机序数字键盘，常用于安全等级较高的场景。

```tsx
<NumberKeyboard randomKeyOrder closeButtonText="完成" />
```

### 手动控制输入值

可以通过 value 手动控制当前输入值，并通过 `maxlength` 属性来限制输入长度。

```tsx
const [visible, setVisible] = useState(false);
const [value, setValue] = useState<string>();
const ref = useRef<HTMLDivElement>(null);

return (
  <>
    <Cell onClick={() => setVisible(true)} title="手动控制输入值" isLink clickable />
    <NumberKeyboard
      forwardedNodeRef={ref}
      value={value}
      onChange={setValue}
      maxlength={6}
      visible={visible}
      onVisibleChange={setVisible}
    />
  </>
);
```

## API

### Picker Props

{{"api": true}}

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

{{"cssVar": true}}
