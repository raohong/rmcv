---
title: Collapse
subTitle: 折叠面板
category: components
group: show
---

## 介绍

将一组内容放置在多个折叠面板中，点击面板的标题可以展开或收缩其内容。

## 引入

```tsx
import { Collapse, CollapseItem } from 'rmc-vant';
```

## 代码演示

### 基础用法

通过 `activeKey` 控制展开的面板列表。

demo|activeKey

```tsx
const [activeKey, set] = useState<string[]>([]);

return (
  <Collapse activeKey={activeKey} onChange={set}>
    <CollapseItem title='标题1' key='1'>
      代码是写出来给人看的，附带能在机器上运行。
    </CollapseItem>
    <CollapseItem title='标题2' key='2'>
      技术无非就是那些开发它的人的共同灵魂。
    </CollapseItem>
    <CollapseItem title='标题3' key='3'>
      在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
    </CollapseItem>
  </Collapse>
);
```

### 手风琴

通过 `accordion` 可以设置为手风琴模式，最多展开一个面板。

demo|accordion

```tsx
<Collapse accordion>
  <CollapseItem title='标题1' key='1'>
    代码是写出来给人看的，附带能在机器上运行。
  </CollapseItem>
  <CollapseItem title='标题2' key='2'>
    技术无非就是那些开发它的人的共同灵魂。
  </CollapseItem>
  <CollapseItem title='标题3' key='3'>
    在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
  </CollapseItem>
</Collapse>;
```

### 禁用状态

通过 `disabled` 属性来禁用单个面板。

demo|disabled

```tsx
<Collapse>
  <CollapseItem title='标题1' key='1'>
    代码是写出来给人看的，附带能在机器上运行。
  </CollapseItem>
  <CollapseItem title='标题2' key='2' disabled>
    技术无非就是那些开发它的人的共同灵魂。
  </CollapseItem>
  <CollapseItem title='标题3' key='3' disabled>
    在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
  </CollapseItem>
</Collapse>;
```

## API

### Collapse Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeKey | 当前展开 | `string \| string[]` |  |
| defaultActiveKey | 默认展开的 key | `string \| string[]` |  |
| onChange | 切换面板时触发 | `(current: string[]) => void` |  |
| accordion | 手风琴模式 | `boolean` |  |
| expandIcon | 自定义展开图标 | `(state: { expanded: boolean; }) => ReactNode` |  |

### CollapseItem Props

| 参数       | 说明               | 类型              | 默认值 |
| ---------- | ------------------ | ----------------- | ------ |
| key        | 对应的 activeKey   | `string`          |        |
| showArrow  | 是否显示右侧的箭头 | `boolean`         |        |
| lazyRender | 开启延迟渲染       | `boolean`         |        |
| readonly   | 只读模式           | `boolean`         |        |
| disabled   | 禁止模式           | `boolean`         |        |
| title      | 左侧标题           | `React.ReactNode` |        |
| value      | 右侧内容           | `React.ReactNode` |        |
| label      | 标题下方的描述信息 | `React.ReactNode` |        |
| icon       | 左侧图标或图片链接 | `React.ReactNode` |        |
| border     | 是否显示内边框     | `boolean`         |        |
