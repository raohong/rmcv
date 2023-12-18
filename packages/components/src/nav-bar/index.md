---
title: NavBar
subTitle: 导航栏
category: components
type: 导航组件
demo: true
---

### 介绍

为页面提供导航功能，常用于页面顶部。

### 引入

```tsx
import { NavBar } from 'rmc-vant';
```

## 代码演示

### 基础用法

通过 `title` 属性设置导航栏标题。

```tsx
<NavBar title="标题" />
```

### 返回上级

在导航栏实现返回上级功能。

```tsx
<NavBar title="返回上级" leftText="返回" leftArrow />
```

### 右侧按钮

在导航栏右侧添加可点击的按钮。

```tsx
<NavBar title="标题" leftText="返回" rightText="返回" leftArrow />
```

### 自定义

自定义导航栏两侧的内容

```tsx
<NavBar
  title="标题"
  leftText="返回"
  right={
    <SearchOutlined
      style={{ fontSize: 18, color: 'var(--rmcv-nav-bar-icon-color)' }}
    />
  }
  leftArrow
/>
```

## API

### Props

{{"api": true}}
