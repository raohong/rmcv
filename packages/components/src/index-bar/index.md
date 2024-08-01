---
title: IndexBar
subTitle: 索引栏
category: components
group: nav
---

## 介绍

用于列表的索引分类显示和快速定位。

## 引入

```tsx
import { IndexAnchor, IndexBar } from 'rmc-vant';
```

## 代码演示

### 基础用法

点击索引栏时，会自动跳转到对应的 `IndexAnchor` 锚点位置。

```tsx
<IndexBar>
  <IndexAnchor index='A' />
  <Cell title='文本' />
  <Cell title='文本' />
  <Cell title='文本' />
  <IndexAnchor index='B' />
  <Cell title='文本' />
  <Cell title='文本' />
  <Cell title='文本' />
</IndexBar>;
```

### 自定义索引列表

可以通过 `indexList` 属性自定义展示的索引字符列表。

demo|indexList

```tsx
import { Cell, IndexAnchor, IndexBar, Tabs } from 'rmc-vant';

export default () => {
  const customIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <Tabs
      items={[
        {
          tab: '基础用法',
          children: (
            <IndexBar>
              <IndexAnchor index='A' />
              <Cell title='文本' />
              <Cell title='文本' />
              <Cell title='文本' />
              <Cell title='文本' />
              <Cell title='文本' />
              <IndexAnchor index='B' />
              <Cell title='文本' />
              <Cell title='文本' />
              <Cell title='文本' />
              <Cell title='文本' />
              <Cell title='文本' />
            </IndexBar>
          ),
        },
        {
          tab: '自定义索引列表',
          children: (
            <IndexBar indexList={customIndex}>
              {customIndex.map(item => (
                <div key={item}>
                  <IndexAnchor index={item}>
                    标题
                    {item}
                  </IndexAnchor>
                  <Cell title='文本' />
                  <Cell title='文本' />
                  <Cell title='文本' />
                  <Cell title='文本' />
                  <Cell title='文本' />
                </div>
              ))}
            </IndexBar>
          ),
        },
      ]}
      lazyRender
    />
  );
};
```

## API

### IndexBar Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| indexList | 索引字符列表 | `(string \| number)[]` |  |
| zIndex | z-index 层级 | `number` | `1` |
| sticky | 是否开启锚点自动吸顶 | `boolean` | `true` |
| stickyOffsetTop | 锚点自动吸顶时与顶部的距离 | `number` |  |
| highlightColor | 索引字符高亮颜色 | `string` | `palette.primary` |
| currentIndex | 当前高亮索引字符 默认为第一个 | `string` \| `number` |  |
| classNames | 给各个 slot 自定义类名 | `Record<IndexBarNSlot, string>` |  |

### IndexBarAnchor Props

| 参数  | 说明     | 类型                   | 默认值 |
| ----- | -------- | ---------------------- | ------ |
| index | 索引字符 | `(string \| number)[]` |        |

### IndexBar Events

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onChange | 当前高亮的索引字符变化时触发 | `(index: string \| number) => void` |  |
| onSelect | 选择索引字符时触发 | `(index: string \| number) => void` |  |

### Types

#### IndexBarNSlot

```ts
type IndexBarNSlot = 'root' | 'anchor' | 'sidebar' | 'index';
```
