---
title: Form
subTitle: 表单
category: components
group: form
---

## 介绍

用于数据录入、校验，支持输入框、单选框、复选框、文件上传等类型，需要与 FormItem 输入框 组件搭配使用。

## 引入

```tsx
import { Form, FormItem } from 'rmc-vant';
```

## 代码演示

### 基础用法

基本的表单数据域控制展示。

demo|base

```tsx
<Form>
  <FormItem
    name='username'
    label='用户名'
    validateTrigger={['onChange', 'onBlur']}
    rules={[{ required: true, message: '请输入用户名' }]}
  >
    <Input placeholder='请输入用户名' clearable />
  </FormItem>
  <FormItem
    name='password'
    label='密码'
    validateTrigger={['onChange', 'onBlur']}
    rules={[{ required: true, message: '请输入密码' }]}
  >
    <Input type='password' placeholder='请输入密码' clearable />
  </FormItem>
</Form>;
```

### 规则校验

可以通过 `Rule` 设置异步规则校验。

demo|rule

```tsx
import {
  Button,
  Form,
  FormItem,
  Input,
  clearToast,
  showLoadingToast,
} from 'rmc-vant';

export default () => {
  return (
    <Form name='validate'>
      <FormItem
        name='name1'
        label='文本'
        validateTrigger={['onChange', 'onBlur']}
        rules={[{ pattern: /^\d+$/, message: '请输入正确的内容' }]}
      >
        <Input placeholder='正则校验' />
      </FormItem>

      <FormItem
        name='name2'
        label='文本'
        validateTrigger={['onChange', 'onBlur']}
        rules={[
          {
            validator(_, val) {
              return new Promise((resolve, reject) => {
                showLoadingToast('验证中...');

                setTimeout(() => {
                  clearToast();
                  if (val !== '1234') {
                    reject(new Error('验证码错误'));
                  }
                  else {
                    resolve(val === '1234');
                  }
                }, 1000);
              });
            },
            message: '请输入正确的内容',
          },
        ]}
      >
        <Input placeholder='异步校验' />
      </FormItem>
      <Button type='primary' htmlType='submit' block>
        提交
      </Button>
    </Form>
  );
};
```

### 动态表单

通过传递 `FormItem` 函数类型的 `children`，可以自定义渲染逻辑。

demo|dynamicFormItem

```tsx
<Form>
  <FormItem name='radio' label='单选框'>
    <RadioGroup direction='horizontal'>
      <Radio value='1'>显示</Radio>
      <Radio value='2'>隐藏</Radio>
    </RadioGroup>
  </FormItem>
  <FormItem shouldUpdate>
    {({ getFieldValue }) => {
      const value = getFieldValue('radio');

      if (value === '1') {
        return (
          <FormItem name='slider' label='滑块' initialValue={50}>
            <Slider style={{ flex: 1 }} />
          </FormItem>
        );
      }

      return null;
    }}
  </FormItem>
</Form>;
```

### 监听 Form 值

通过 `useWatchForm` hooks 可以监听 `form` 指定字段值。

demo|useWatchForm

```tsx
import { Form, FormItem, Input, useForm, useWatchForm } from 'rmc-vant';

export default () => {
  const [form] = useForm();
  const value = useWatchForm(['value'], form);

  return (
    <Form form={form}>
      <FormItem name='value' label='Name'>
        <Input placeholder='动态监听' />
      </FormItem>
      <FormItem label='输入值'>
        <span>{value}</span>
      </FormItem>
    </Form>
  );
};
```

### 表单列表

通过 `FormList` 可以渲染表单列表。

demo|formList

```tsx
'./demos/list.tsx';
```

### 表单项目

demo|example

```tsx
'./demos/all.tsx';
```

## API

### Form Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 统一设置 FormItem label 标签的文本 | `React.ReactNode` |  |
| labelAlign | 统一设置 FormItem label 对齐方式 | `'left' \| 'right' \| 'center'` |  |
| labelWidth | 统一设置 FormItem label 宽度 | `string` \| `number` |  |
| requiredMark | 是否显示必填样式 | `boolean` |  |
| disabled | 是否禁用 | `boolean` |  |

### FormItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | label 标签的文本 | `React.ReactNode` |  |
| labelAlign | label 对齐方式 | `'left' \| 'right' \| 'center'` |  |
| labelWidth | label 宽度 | `string` \| `number` |  |
| requiredMark | 是否显示必填样式 | `boolean` |  |
| required | 是否必填 | `boolean` |  |
| help | 提示信息，如不设置，则会根据校验规则自动生成 | `React.ReactNode` |  |
| disabled | 是否禁用 | `boolean` |  |
| extra | 额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。 | `React.ReactNode` |  |
| htmlFor | 设置子元素 label htmlFor 属性 | `string` |  |
| noStyle | 为 true 时不带样式，作为纯字段控件使用 | `boolean` |  |

`FormItem` 其它属性详见 [rc-field-form Field Props](https://www.npmjs.com/package/rc-field-form#Field)
