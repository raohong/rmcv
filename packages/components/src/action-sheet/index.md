---
title: ActionSheet
subTitle: 动作面板
category: components
type: 反馈组件
demo: true
---

### 介绍

底部弹起的模态面板，包含与当前情境相关的多个选项。

### 引入

```tsx
import { ActionSheet } from 'rmc-vant';
```

## 代码演示

### 基础用法

动作面板通过 `actions` 属性来定义选项，`actions` 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象格式见文档下方表格。

```tsx
const [visible, setVisible] = useState(false);

return (
  <>
    <Cell title="基础用法" clickable isLink onClick={() => setVisible(true)} />
    <ActionSheet
      title="基础用法"
      actions={[{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }]}
      visible={visible}
      onClose={() => setVisible(false)}
      closeOnClickAction
    />
  </>
);
```

### 展示取消按钮

设置 `cancelText` 属性后，会在底部展示取消按钮，点击后关闭当前面板并触发 `onCancel` 事件。

```tsx
const [visible, setVisible] = useState(false);

return (
  <>
    <Cell title="展示取消按钮" clickable isLink onClick={() => setVisible(true)} />
    <ActionSheet
      title="展示取消按钮"
      actions={[{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }]}
      visible={visible}
      onClose={() => setVisible(false)}
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

```tsx
const [visible, setVisible] = useState(false);

return (
  <>
    <Cell
      title="这是一段描述信息"
      clickable
      isLink
      onClick={() => setVisible(true)}
    />
    <ActionSheet
      title="这是一段描述信息"
      actions={[
        { name: '选项一' },
        { name: '选项二' },
        { name: '选项三', subname: '描述信息' },
      ]}
      visible={visible}
      onClose={() => setVisible(false)}
      closeOnClickAction
    />
  </>
);
```

### 选项状态

可以通过 `loading` 和 `disabled` 将选项设置为加载状态或禁用状态，或者通过 `color` 设置选项的颜色

```tsx
const [visible, setVisible] = useState(false);

return (
  <>
    <Cell title="选项状态" clickable isLink onClick={() => setVisible(true)} />
    <ActionSheet
      title="选项状态"
      actions={[
        { name: '着色选项', color: '#ee0a24' },
        { name: '禁用选项', disabled: true },
        { name: '加载选项', loading: true },
      ]}
      visible={visible}
      onClose={() => setVisible(false)}
      closeOnClickAction
    />
  </>
);
```

### 自定义面板

通过 `children` 可以自定义面板的展示内容，同时可以使用 `title` 属性展示标题栏

```tsx
<ActionSheet title="定义面板">
  <div>定义面板</div>
</ActionSheet>
```

## API

### Props

{{"api": true}}

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

{{"cssVar": true}}
