---
title: Tabs
subTitle: 标签页
category: components
type: 导航组件
demo: true
---

### 介绍

选项卡组件，用于在不同的内容区域之间进行切换。

### 引入

```tsx
import { TabPane, Tabs } from 'rmc-vant';
```

## 代码演示

### 基础用法

默认情况下启用第一个标签，可以通过 defaultActiveKey 设置默认 activeKey

```tsx
<Tabs defaultActiveKey="2">
  <TabPane key="1" tab="内容1">
    内容1
  </TabPane>
  <TabPane key="2" tab="内容2">
    内容2
  </TabPane>
  <TabPane key="3" tab="内容3">
    内容3
  </TabPane>
  <TabPane key="4" tab="内容4">
    内容4
  </TabPane>
</Tabs>
```

### 标签栏滚动

标签数量超过 5 个时，标签栏可以在水平方向上滚动，切换时会自动将当前标签居中。

```tsx
<Tabs>
  {Array.from({ length: 8 }, (_, i) => (
    <TabPane key={String(i)} tab={`标签 ${i + 1}`}>
      <div
        style={{
          padding: 50,
          background: '#fff',
        }}
      >
        标签 ${i + 1}
      </div>
    </TabPane>
  ))}
</Tabs>
```

### 禁用标签

设置 `disabled` 属性即可禁用标签。

```tsx
<Tabs>
  <TabPane key="1" tab="内容1">
    内容1
  </TabPane>
  <TabPane key="2" tab="内容2">
    内容2
  </TabPane>
  <TabPane key="3" tab="内容3" disabled>
    内容3
  </TabPane>
</Tabs>
```

### 样式风格

`Tab` 支持两种样式风格：`line` 和 `card`，默认为 `line` 样式，可以通过 `type` 属性切换样式风格。

```tsx
<Tabs type="card">
  <TabPane key="1" tab="内容1">
    内容1
  </TabPane>
  <TabPane key="2" tab="内容2">
    内容2
  </TabPane>
  <TabPane key="3" tab="内容3" disabled>
    内容3
  </TabPane>
</Tabs>
```

## API

### TabsProps

{{"api": "Tabs"}}

### TabPaneProps

{{"api": "TabPane"}}
