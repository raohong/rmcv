---
title: Tabs
subTitle: 标签页
category: components
group: nav
---

## 介绍

选项卡组件，用于在不同的内容区域之间进行切换。

## 引入

```tsx
import { TabPane, Tabs } from 'rmc-vant';
```

## 代码演示

### 基础用法

默认情况下启用第一个标签，可以通过 defaultActiveKey 设置默认 activeKey

demo|base

```tsx
<Tabs
  defaultActiveKey='内容2'
  sx={{
    'margin': '0 -16px',
    '.box': {
      height: 70,
      padding: 24,
      background: '#fff',
    },
  }}
  items={[
    {
      tab: 'Open AI',
      children: <div className='box'>Open AI</div>,
    },
    {
      tab: 'DeepSeek',
      children: <div className='box'>DeepSeek</div>,
    },
    {
      tab: 'Google',
      children: <div className='box'>Google</div>,
    },
  ]}
/>;
```

### 标签栏滚动

标签数量超过 5 个时，标签栏可以在水平方向上滚动，切换时会自动将当前标签居中。

demo|scrollable

```tsx
<Tabs
  sx={{
    'margin': '0 -16px',
    '.box': {
      height: 70,
      padding: 24,
      background: '#fff',
    },
  }}
  items={Array.from({ length: 8 }, (_, i) => ({
    tab: `内容 ${i + 1}`,
    key: i,
    children: (
      <div className='box'>
        内容
        {i + 1}
      </div>
    ),
  }))}
/>;
```

### 禁用标签

设置 `disabled` 属性即可禁用标签。

demo|disabled

```tsx
<Tabs
  sx={{
    'margin': '0 -16px',
    '.box': {
      height: 100,
      padding: 24,
      background: '#fff',
    },
  }}
  items={Array.from({ length: 3 }, (_, i) => ({
    tab: `内容 ${i + 1}`,
    key: String(i),
    disabled: i === 1,
    children: (
      <div className='box'>
        内容
        {i + 1}
      </div>
    ),
  }))}
/>;
```

### 样式风格

`Tab` 支持两种样式风格：`line` 和 `card`，默认为 `line` 样式，可以通过 `type` 属性切换样式风格。

demo|type

```tsx
<Tabs
  type='card'
  sx={{
    'margin': '0 -16px',
    '.box': {
      padding: '24px 16px',
    },
  }}
  type='card'
  items={Array.from({ length: 3 }, (_, i) => ({
    tab: `选项 ${i + 1}`,
    key: String(i),
    disabled: i === 0,
    children: (
      <div className='box'>
        内容
        {i + 1}
      </div>
    ),
  }))}
/>;
```

### 点击事件

点击标签页时，会触发 `onChange` 事件。

demo|onChange

```tsx
import { Tabs, showToast } from 'rmc-vant';

export default () => (
  <Tabs
    sx={{
      'margin': '0 -16px',
      '.box': {
        padding: '24px 16px',
      },
    }}
    onChange={key => showToast(key)}
    items={Array.from({ length: 3 }, (_, i) => ({
      tab: `内容 ${i + 1}`,
      children: (
        <div className='box'>
          内容
          {i + 1}
        </div>
      ),
    }))}
  />
);
```

### 粘性布局

通过 `sticky` 属性可以开启粘性布局，粘性布局下，标签页滚动到顶部时会自动吸顶。

demo|sticky

```tsx
<Tabs
  sx={{
    'margin': '0 -16px',
    '.box': {
      padding: '24px 16px',
    },
  }}
  items={Array.from({ length: 3 }, (_, i) => ({
    tab: `内容 ${i + 1}`,
    children: (
      <div className='box'>
        内容
        {i + 1}
      </div>
    ),
  }))}
  sticky
/>;
```

> Tips: 如果页面顶部有其他内容，可以通过 offset-top 属性设置吸顶时与顶部的距离。

### 收缩布局

通过 `shrink` 属性可以开启收缩布局，开启后，所有的标签会向左侧收缩对齐。

demo|shrink

```tsx
import { Tabs } from 'rmc-vant';
export default () => {
  const props = {
    sx: {
      'margin': '0 -16px',
      '.box': {
        padding: '24px 16px',
      },
    },
    items: Array.from({ length: 3 }, (_, i) => ({
      tab: `选项 ${i + 1}`,
      children: (
        <div className='box'>
          选项
          {i + 1}
        </div>
      ),
    })),
    shrink: true,
  };

  return (
    <>
      <Tabs {...props} />
      <Tabs {...props} type='card' />
    </>
  );
};
```

### 切换动画

通过 `animated` 属性可以开启切换标签内容时的转场动画。

demo|animated

```tsx
<Tabs
  sx={{
    'margin': '0 -16px',
    '.box': {
      padding: '24px 16px',
      background: '#fff',
    },
  }}
  items={Array.from({ length: 3 }, (_, i) => ({
    tab: `内容 ${i + 1}`,
    children: (
      <div className='box'>
        内容
        {i + 1}
      </div>
    ),
  }))}
  animated
/>;
```

### 滑动切换

通过 `swipeable` 属性可以开启滑动切换标签页。

demo|swipeable

```tsx
<Tabs
  sx={{
    'margin': '0 -16px',
    '.box': {
      padding: '24px 16px',
      background: '#fff',
    },
  }}
  items={Array.from({ length: 3 }, (_, i) => ({
    tab: `内容 ${i + 1}`,
    children: (
      <div className='box'>
        内容
        {i + 1}
      </div>
    ),
  }))}
  swipeable
/>;
```

### 滚动导航

通过 `scrollspy` 属性可以开启滚动导航模式，该模式下，内容将会平铺展示。

demo|scrollspy

```tsx
<Tabs
  sx={{
    'margin': '0 -16px',
    '.box': {
      padding: '24px 16px',
      background: '#fff',
      height: 400,
    },
  }}
  items={Array.from({ length: 8 }, (_, i) => ({
    tab: `标签 ${i + 1}`,
    children: (
      <div className='box'>
        标签
        {i + 1}
      </div>
    ),
  }))}
  scrollspy
/>;
```

## API

### Tabs Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeKey | 当前激活 tab 面板的 key | `string` |  |
| defaultActiveKey | 默认当前激活 tab 面板的 key | `string` |  |
| type | 样式风格类型，可选值为 card | `card` \| `line` |  |
| color | 标签主题色 | `string` |  |
| backgroundColor | 标签栏背景色 | `string` |  |
| lineWidth | 底部条宽度 | `number` | `40` |
| lineHeight | 底部条高度 | `number` | `3` |
| animated | 是否开启切换标签内容时的转场动画，只在非滚动导航模式下有效 | `boolean` |  |
| border | 是否显示标签栏外边框，仅在 type="line" 时有效 | `boolean` |  |
| ellipsis | 是否省略过长的标题文字 | `boolean` |  |
| sticky | 是否使用粘性布局 | `boolean` |  |
| offsetTop | 吸顶时与顶部的距离 | `number` |  |
| shrink | 是否开启左侧收缩布局 | `boolean` |  |
| swipeable | 是否开启手势左右滑动切换 开启后始终开启切换标签内容时的转场动画 | `boolean` |  |
| swipeThreshold | 滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动 | `number` |  |
| lazyRender | 是否开启延迟渲染（首次切换到标签时才触发内容渲染）, 只在非滚动导航模式下有效 | `boolean` |  |
| scrollspy | 是否开启滚动导航 | `boolean` |  |
| titleActiveColor | 标题选中态颜色 | `string` |  |
| titleInactiveColor | 标题默认态颜色 | `string` |  |
| duration | 动画时间，单位秒，设置为 0 可以禁用动画 | `number` |  |

### Tabs Events

| 参数     | 说明                     | 类型                    |
| -------- | ------------------------ | ----------------------- |
| onChange | 当前激活的标签改变时触发 | `(key: string) => void` |

### Types
