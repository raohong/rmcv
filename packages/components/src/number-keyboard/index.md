---
title: NumberKeyboard
subTitle: 数字键盘
category: components
group: form
---

## 介绍

虚拟数字键盘，可以配合密码输入框组件或自定义的输入框组件使用。

## 引入

```tsx
import { NumberKeyboard } from 'rmc-vant';
```

## 代码演示

### 默认样式

数字键盘提供了 `input`、`delete`、`blur` 事件，分别对应输入内容、删除内容和失去焦点的动作。

demo|base

```tsx
<NumberKeyboard
  onInput={val => Toast(`输入 ${val}`)}
  onDelete={() => Toast('删除')}
  closeButtonText='完成'
>
  <Cell title='弹出默认键盘' isLink clickable />
</NumberKeyboard>;
```

### 带右侧栏的键盘

将 `theme` 属性设置为 `custom` 来展示键盘的右侧栏，常用于输入金额的场景。

demo|theme

```tsx
<NumberKeyboard theme='custom' extraKey='.' closeButtonText='完成'>
  <Cell title='另外一个样式' isLink clickable />
</NumberKeyboard>;
```

### 身份证号键盘

通过 `extraKey` 属性可以设置左下角按键内容，比如需要输入身份证号时，可以将 `extraKey` 设置为 `X`。

demo|extraKey

```tsx
<NumberKeyboard extraKey='X' closeButtonText='完成'>
  <Cell title='ID Card' isLink clickable />
</NumberKeyboard>;
```

### 键盘标题

通过 `title` 属性可以设置键盘标题。

demo|title

```tsx
<NumberKeyboard title='键盘标题' extraKey='.' closeButtonText='完成'>
  <Cell title='一个标题' isLink clickable />
</NumberKeyboard>;
```

### 配置多个按钮

当 `theme` 为 `custom` 时，支持以数组的形式配置两个 `extraKey`。

demo|customExtraKey

```tsx
<NumberKeyboard theme='custom' extraKey={['00', '.']} closeButtonText='完成'>
  <Cell title='打开' isLink clickable />
</NumberKeyboard>;
```

### 随机数字键盘

通过 `randomKeyOrder` 属性可以随机序数字键盘，常用于安全等级较高的场景。

demo|randomKeyOrder

```tsx
<NumberKeyboard randomKeyOrder closeButtonText='完成'>
  <Cell title='打开' isLink clickable />
</NumberKeyboard>;
```

### 手动控制输入值

可以通过 value 手动控制当前输入值，并通过 `maxLength` 属性来限制输入长度。

demo|manualControl

```tsx
const [open, setOpen] = useState(false);
const [value, setValue] = useState<string>();
const ref = useRef<HTMLDivElement>(null);

return (
  <>
    <Cell onClick={() => setOpen(true)} title='手动控制输入值' isLink clickable />
    <NumberKeyboard
      forwardedNodeRef={ref}
      value={value}
      onChange={setValue}
      maxLength={6}
      open={open}
      onVisibleChange={setOpen}
    />
  </>
);
```

## API

### NumberKeyboard Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 输入值 | `string` |  |
| defaultValue | 默认输入值 | `string` |  |
| open | 是否显示键盘 | `boolean` |  |
| defaultOpen | 默认是否显示键盘 | `boolean` |  |
| title | 键盘标题 | `React.ReactNode` |  |
| maxLength | 输入值最大长度 | `number` | `Infinity` |
| transition | 是否开启过场动画 | `boolean` | `true` |
| zIndex | 键盘 z-index 层级 | `number` | `100` |
| closeButtonText | 删除按钮文字，空则展示删除图标 | `string` |  |
| deleteButtonText | 删除按钮文字，空则展示删除图标 | `string` |  |
| closeButtonLoading | 是否将关闭按钮设置为加载中状态，仅在 `theme="custom"` 时有效 | `boolean` |  |
| blurOnClose | 是否在点击关闭按钮时触发 blur 事件 | `boolean` | `true` |
| hideOnClickOutside | 是否在点击外部时收起键盘 | `boolean` | `true` |
| teleport | 指定挂载的节点 | `PortalContainer` |  |
| safeAreaInsetBottom | 是否开启底部安全区适配 | `boolean` | `true` |
| randomKeyOrder | 是否将通过随机顺序展示按键 | `boolean` |  |
| className | 自定义 className | `string` |  |
| theme | 样式风格，可选值为 custom | `default` \| `custom` | `default` |
| extraKey | 底部额外按键的内容 | `string \| [string, string]` |  |
| children | open 的触发器 | `React.ReactElement` \| `(value: string \| undefined, open: boolean) => React.ReactElement` |  |
| forwardedNodeRef | 手动控制 open, 需要传入 trigger node ref | `React.MutableRefObject<HTMLElement>` |  |
| classNames | 给各个 slot 自定义类名 | `Record<NumberKeyboardNSlot, string>` |  |

### NumberKeyboard Events

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onChange | 输入的值改变时触发 | `(value: string) => void` |  |
| afterOpenChange | open 动画结束后触发 | `(open: boolean) => void` |  |
| onInput | 点击按键时触发 | `(key: string) => void` |  |
| onOpenChange | 点击关闭按钮时或者非键盘区域（开启 `blurOnClose`）触发 | `(open: boolean) => void` |  |
| onDelete | 点击删除键时触发 | `() => void` |  |
| onBlur | 点击关闭按钮或非键盘区域时触发 | `() => void` |  |

### Types

#### NumberKeyboardNSlot

```ts
type NumberKeyboardNSlot =
  | 'root'
  | 'header'
  | 'title'
  | 'key'
  | 'closeButton'
  | 'deleteButton'
  | 'confirmButton'
  | 'collapseButton'
  | 'loadingIcon'
  | 'collapseIcon'
  | 'deleteIcon'
  | 'sidebar';
```
