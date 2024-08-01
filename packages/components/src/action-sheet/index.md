---
title: ActionSheet
subTitle: 动作面板
category: components
group: feedback
---

## 介绍

底部弹起的模态面板，包含与当前情境相关的多个选项。

## 引入

```tsx
import { ActionSheet } from 'rmc-vant';
```

## 代码演示

### 基础用法

动作面板通过 `actions` 属性来定义选项，`actions` 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象格式见文档下方表格。

demo|base

```tsx
const [open, setOpen] = useState(false);

return (
  <>
    <Cell title='基础用法' clickable isLink onClick={() => setOpen(true)} />
    <ActionSheet
      title='基础用法'
      actions={[{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }]}
      open={open}
      onClose={() => setOpen(false)}
      closeOnClickAction
    />
  </>
);
```

### 展示取消按钮

设置 `cancelText` 属性后，会在底部展示取消按钮，点击后关闭当前面板并触发 `onCancel` 事件。

demo|cancelText

```tsx
const [open, setOpen] = useState(false);

return (
  <>
    <Cell title='展示取消按钮' clickable isLink onClick={() => setOpen(true)} />
    <ActionSheet
      title='展示取消按钮'
      actions={[{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }]}
      open={open}
      onClose={() => setOpen(false)}
      onCancel={() => {
        console.log('cancel');
      }}
      closeOnClickAction
    />
  </>
);
```

### 展示描述信息

通过 `description` 可以在菜单顶部显示描述信息，通过选项的 `subname` 属性可以在选项文字的右侧展示描述信息。

demo|description

```tsx
const [open, setOpen] = useState(false);

return (
  <>
    <Cell title='这是一段描述信息' clickable isLink onClick={() => setOpen(true)} />
    <ActionSheet
      title='这是一段描述信息'
      actions={[
        { name: '选项一' },
        { name: '选项二' },
        { name: '选项三', subname: '描述信息' },
      ]}
      open={open}
      onClose={() => setOpen(false)}
      closeOnClickAction
    />
  </>
);
```

### 选项状态

可以通过 `loading` 和 `disabled` 将选项设置为加载状态或禁用状态，或者通过 `color` 设置选项的颜色

demo|actions

```tsx
const [open, setOpen] = useState(false);

return (
  <>
    <Cell title='选项状态' clickable isLink onClick={() => setOpen(true)} />
    <ActionSheet
      title='选项状态'
      actions={[
        { name: '着色选项', color: '#ee0a24' },
        { name: '禁用选项', disabled: true },
        { name: '加载选项', loading: true },
      ]}
      open={open}
      onClose={() => setOpen(false)}
      closeOnClickAction
    />
  </>
);
```

### 自定义面板

通过 `children` 可以自定义面板的展示内容，同时可以使用 `title` 属性展示标题栏

demo|customize

```tsx
<ActionSheet title='定义面板'>
  <Button type='success'>定义面板</Button>
</ActionSheet>;
```

## Slots

- **root** 根部容器
- **title** 标题
- **description** 描述
- **content** 主要内容
- **cancelButton** 取消按钮
- **item** 操作项
- **itemSubname** 操作项名称
- **loadingIcon** 操作项加载 Icon
- **closeIcon** 关闭按钮

## API

### AutoComplete Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| open | 是否显示动作面板 | `boolean` |  |
| defaultOpen | 是否默认显示动作面板 | `boolean` |  |
| actions | 面板选项列表 | `ActionSheetAction[]` |  |
| title | 动作面板标题 | `React.ReactNode` |  |
| description | 动作面板描述 | `React.ReactNode` |  |
| cancelText | 关闭按钮文字 | `React.ReactNode` |  |
| closable | 是否可关闭的 | `boolean` |  |
| closeIcon | 关闭图标 | `React.ReactNode` |  |
| round | 是否显示圆角 | `boolean` |  |
| className | 自定义 class | `string` |  |
| overlay | 是否显示 overlay | `boolean` | `true` |
| overlayClosable | overlay 点击是否关闭 | `boolean` |  |
| lazyRender | 是否在显示弹层时才渲染节点 | `boolean` | `true` |
| lockScroll | 是否锁定滚动 | `boolean` | `true` |
| closeOnPopState | 是否在页面回退时自动关闭 | `boolean` | `true` |
| safeArea | 是否开启底部安全区适配 | `boolean` | `true` |
| closeOnClickAction | 点击选项后是否关闭 | `boolean` |  |
| content | ActionSheet 内容 | `React.ReactNode` |  |
| children | 自定义内容 | `React.ReactNode` |  |
| classNames | 给各个 slot 自定义 className | `<Record<ActionSheetNSlot, string>>` |  |

### ActionSheet Events

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onClose | 关闭回调 | `() => void` |  |
| onSelect | 点击选项时触发，禁用或加载状态下不会触发 | `(action: ActionSheetAction, index: number) => void` |  |
| onOpenChange | open 状态变化的时候的回调 | `(open: boolean) => void` |  |
| onCancel | 点击取消按钮，此时还要触发 onClose | `() => void` |  |
| onOverlayClick | 点击 overlay 回调 | `() => void` |  |
| onBeforeClose | 关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise | `(action: ActionSheetAction) => boolean \| void \| Promise<boolean>` |  |
| afterClose | 关闭动画结束后触发的回调函数 | `() => void` |  |

### Types

#### ActionSheetAction

```ts
type ActionSheetAction = {
  name: React.ReactNode;
  subname?: React.ReactNode;
  color?: string;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  callback?: (action: ActionSheetAction) => void;
  closeOnPopstate?: boolean;
};
```

#### ActionSheetNSlot

```ts
type ActionSheetNSlot =
  | 'root'
  | 'title'
  | 'description'
  | 'content'
  | 'cancelButton'
  | 'item'
  | 'itemSubname'
  | 'loadingIcon'
  | 'closeIcon';
```
