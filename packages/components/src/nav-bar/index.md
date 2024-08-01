---
title: NavBar
subTitle: 导航栏
category: components
group: nav
---

## 介绍

为页面提供导航功能，常用于页面顶部。

## 引入

```tsx
import { NavBar } from 'rmc-vant';
```

## 代码演示

### 基础用法

通过 `title` 属性设置导航栏标题。

demo|title

```tsx
<NavBar title='标题' />;
```

### 返回上级

在导航栏实现返回上级功能。

demo|leftText

```tsx
<NavBar title='返回上级' leftText='返回' leftArrow />;
```

### 右侧按钮

在导航栏右侧添加可点击的按钮。

demo|rightText

```tsx
<NavBar title='标题' leftText='返回' rightText='返回' leftArrow />;
```

### 自定义

自定义导航栏两侧的内容

demo|customize

```tsx
<NavBar
  title='标题'
  leftText='返回'
  right={(
    <SearchOutlined
      style={{
        fontSize: 18,
        color: 'var(--rmcv-nav-bar-icon-color)',
      }}
    />
  )}
  leftArrow
/>;
```

## API

### NavBar Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `React.ReactNode` |  |
| leftText | 左侧文案 | `React.ReactNode` |  |
| rightText | 右侧文案 | `React.ReactNode` |  |
| leftArrow | 是否显示左侧箭头 | `boolean` |  |
| left | 自定义左侧区域内容 | `React.ReactNode` |  |
| right | 自定义右侧区域内容 | `React.ReactNode` |  |
| border | 是否显示下边框 | `boolean` | `true` |
| fixed | 是否固定在顶部 | `boolean` | `false` |
| placeholder | 固定在顶部时，是否在标签位置生成一个等高的占位元素 | `boolean` |  |
| zIndex | 导航栏 z-index | `number` | `1` |
| safeAreaInsetTop | 是否开启顶部安全区适配 | `boolean` | `true` |
| classNames | 给各个 slot 自定义类名 | `Record<NavBarNSlot, string>` |  |

### NavBar Events

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onClickLeft | 点击左侧按钮时触发 | `(evt: React.MouseEvent<Element, MouseEvent>) => void` |  |
| onClickRight | 点击右侧按钮时触发 | `(evt:React.MouseEvent<Element, MouseEvent>) => void` |  |

### Types

#### NavBarNSlot

```ts
type NavBarNSlot = 'root' | 'left' | 'right' | 'title' | 'text' | 'arrowIcon';
```
