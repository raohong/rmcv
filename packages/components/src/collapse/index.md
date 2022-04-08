---
title: Collapse
subTitle: 折叠面板
category: components
type: 展示组件
demo: true
---

### 介绍

将一组内容放置在多个折叠面板中，点击面板的标题可以展开或收缩其内容。

### 引入

```tsx
import { Collapse, CollapseItem } from 'rmc-vant';
```

## 代码演示

### 基础用法

通过 `activeKey` 控制展开的面板列表。

```tsx
const [activeKey, set] = useState<string[]>([]);

return (
  <Collapse activeKey={activeKey} onChange={set}>
    <CollapseItem title="标题1" key="1">
      代码是写出来给人看的，附带能在机器上运行。
    </CollapseItem>
    <CollapseItem title="标题2" key="2">
      技术无非就是那些开发它的人的共同灵魂。
    </CollapseItem>
    <CollapseItem title="标题3" key="3">
      在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
    </CollapseItem>
  </Collapse>
);
```

### 手风琴

通过 `accordion` 可以设置为手风琴模式，最多展开一个面板。

```tsx
<Collapse accordion>
  <CollapseItem title="标题1" key="1">
    代码是写出来给人看的，附带能在机器上运行。
  </CollapseItem>
  <CollapseItem title="标题2" key="2">
    技术无非就是那些开发它的人的共同灵魂。
  </CollapseItem>
  <CollapseItem title="标题3" key="3">
    在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
  </CollapseItem>
</Collapse>
```

### 禁用状态

通过 `disabled` 属性来禁用单个面板。

```tsx
<Collapse>
  <CollapseItem title="标题1" key="1">
    代码是写出来给人看的，附带能在机器上运行。
  </CollapseItem>
  <CollapseItem title="标题2" key="2" disabled>
    技术无非就是那些开发它的人的共同灵魂。
  </CollapseItem>
  <CollapseItem title="标题3" key="3" disabled>
    在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
  </CollapseItem>
</Collapse>
```

## API

### Collpase Props

{{"api": "Collapse"}}

### CollpaseItem Props

{{"api": "CollapseItem"}}

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

{{"cssVar": true}}
