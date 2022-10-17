import { DemoBlock } from '@rmc-vant/demo';
import { DeleteOutlined } from '@rmc-vant/icons';
import React, { useState } from 'react';
import {
  Button,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Form,
  FormItem,
  Input,
  Radio,
  RadioGroup,
  Rate,
  Slider,
  Switch,
  Toast,
} from 'rmc-vant';
import ConfirmPicker from './ConfirmPicker';
import './index.less';

const Submitter = () => (
  <div style={{ margin: 16 }}>
    <Button shape="round" type="primary" htmlType="submit" block>
      提交
    </Button>
  </div>
);
const areaData = [
  {
    value: '浙江',
    children: [
      {
        value: '杭州',
        children: [{ value: '西湖区' }, { value: '余杭区' }],
      },
      {
        value: '温州',
        children: [{ value: '鹿城区' }, { value: '瓯海区' }],
      },
    ],
  },
  {
    value: '福建',
    children: [
      {
        value: '福州',
        children: [{ value: '鼓楼区' }, { value: '台江区' }],
      },
      {
        value: '厦门',
        children: [{ value: '思明区' }, { value: '海沧区' }],
      },
    ],
  },
];
const cityData = [['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华']];

const RequiredMarkDemo = () => {
  const [optional, setOptional] = useState(false);

  return (
    <DemoBlock title="必填样式" expand>
      <CellGroup inset>
        <Cell
          title="必填"
          value={
            <Switch
              size={16}
              checked={!optional}
              onChange={(val) => setOptional(!val)}
            />
          }
          center
        />
        <Form requiredMark={!optional}>
          <FormItem
            name="username"
            label="用户名"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input placeholder="请输入用户名" />
          </FormItem>
          <FormItem
            name="password"
            label="密码"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input type="password" placeholder="请输入密码" />
          </FormItem>
        </Form>
      </CellGroup>
    </DemoBlock>
  );
};

const WatchDemo = () => {
  const [form] = Form.useForm();
  const value = Form.useWatch(['value'], form);

  return (
    <DemoBlock title="动态监听" expand>
      <Form form={form}>
        <CellGroup inset>
          <FormItem name="value" label="Name">
            <Input placeholder="动态监听" />
          </FormItem>
          <FormItem label="输入值">
            <span>{value}</span>
          </FormItem>
        </CellGroup>
      </Form>
    </DemoBlock>
  );
};

export default () => {
  return (
    <>
      <DemoBlock title="基础用法" expand>
        <Form>
          <CellGroup inset>
            <FormItem
              name="username"
              label="用户名"
              validateTrigger={['onChange', 'onBlur']}
              rules={[{ required: true, message: '请输入用户名' }]}
            >
              <Input placeholder="请输入用户名" clearable />
            </FormItem>
            <FormItem
              name="password"
              label="密码"
              validateTrigger={['onChange', 'onBlur']}
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input type="password" placeholder="请输入密码" clearable />
            </FormItem>
          </CellGroup>
          <Submitter />
        </Form>
      </DemoBlock>

      <RequiredMarkDemo />
      <WatchDemo />
      <DemoBlock title="规则校验" expand>
        <Form name="validate">
          <CellGroup inset>
            <FormItem
              name="name1"
              label="文本"
              validateTrigger={['onChange', 'onBlur']}
              rules={[{ pattern: /^\d+$/, message: '请输入正确的内容' }]}
            >
              <Input placeholder="正则校验" />
            </FormItem>

            <FormItem
              name="name2"
              label="文本"
              validateTrigger={['onChange', 'onBlur']}
              rules={[
                {
                  validator(_, val) {
                    return new Promise((resolve, reject) => {
                      Toast.loading('验证中...');

                      setTimeout(() => {
                        Toast.clear();
                        if (val !== '1234') {
                          reject();
                        } else {
                          resolve(val === '1234');
                        }
                      }, 1000);
                    });
                  },
                  message: '请输入正确的内容',
                },
              ]}
            >
              <Input placeholder="异步校验" />
            </FormItem>
          </CellGroup>
          <Submitter />
        </Form>
      </DemoBlock>

      <DemoBlock title="动态表单" expand>
        <Form>
          <CellGroup inset>
            <FormItem name="radio" label="单选框">
              <RadioGroup direction="horizontal">
                <Radio value="1">显示</Radio>
                <Radio value="2">隐藏</Radio>
              </RadioGroup>
            </FormItem>
            <FormItem shouldUpdate>
              {({ getFieldValue }) => {
                const value = getFieldValue('radio');

                if (value === '1') {
                  return (
                    <FormItem name="slider" label="滑块" initialValue={50}>
                      <Slider style={{ flex: 1 }} />
                    </FormItem>
                  );
                }

                return null;
              }}
            </FormItem>
          </CellGroup>
        </Form>
      </DemoBlock>
      <DemoBlock title="表单列表" expand>
        <Form>
          <Form.List name="list" initialValue={[{}]}>
            {(fields, { remove, add }, { errors }) => {
              return (
                <>
                  {fields.map(({ key, name }, index) => (
                    <CellGroup
                      style={{ marginBottom: 24 }}
                      title={
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}
                        >
                          <span>用户</span>
                          <Button
                            icon={<DeleteOutlined />}
                            shape="round"
                            size="small"
                            onClick={() => remove(index)}
                          ></Button>
                        </div>
                      }
                      key={key}
                      inset
                    >
                      <FormItem
                        name={[name, 'username']}
                        label="姓名"
                        rules={[{ required: true, message: '请输入姓名' }]}
                      >
                        <Input placeholder="请输入用户名" clearable />
                      </FormItem>
                      <FormItem
                        name={[name, 'username']}
                        label="性别"
                        rules={[{ required: true, message: '请选择性别' }]}
                      >
                        <RadioGroup direction="horizontal">
                          <Radio value="male">男</Radio>
                          <Radio value="female">女</Radio>
                        </RadioGroup>
                      </FormItem>
                    </CellGroup>
                  ))}
                  <div style={{ margin: 16, marginBottom: 48 }}>
                    <Button onClick={() => add()} shape="round" block>
                      新增用户
                    </Button>
                  </div>
                </>
              );
            }}
          </Form.List>
          <Submitter />
        </Form>
      </DemoBlock>
      <DemoBlock title="表单项目类型" expand>
        <Form name="items" className="rmcv-forms">
          <CellGroup inset>
            <FormItem name="switch" label="开关">
              <Switch size={20} />
            </FormItem>
            <FormItem name="checkbox" label="复选框">
              <Checkbox shape="square" />
            </FormItem>
            <FormItem name="checkboxGroup" label="复选框组" initialValue="1">
              <CheckboxGroup shape="square" direction="horizontal">
                <Checkbox value="1">复选框1</Checkbox>
                <Checkbox value="2">复选框2</Checkbox>
              </CheckboxGroup>
            </FormItem>
            <FormItem name="radio" label="单选框" initialValue="1">
              <RadioGroup direction="horizontal">
                <Radio value="1">单选框1</Radio>
                <Radio value="2">单选框2</Radio>
              </RadioGroup>
            </FormItem>
            <FormItem name="rate" label="评分">
              <Rate />
            </FormItem>
            <FormItem name="slider" label="滑块" initialValue={50}>
              <Slider style={{ flex: 1 }} />
            </FormItem>
            <FormItem name="city" label="选择城市" trigger="onConfirm">
              <ConfirmPicker<string>
                columns={cityData}
                confirmDefaultValue={[cityData[0][0]]}
                placeholder="选择城市"
                getText={(val) => val[0]}
              />
            </FormItem>
            <FormItem name="area" label="地区选择" trigger="onConfirm">
              <ConfirmPicker
                columns={areaData}
                confirmDefaultValue={[
                  areaData[0].value,
                  areaData[0].children[0].value,
                  areaData[0].children[0].children[0].value,
                ]}
                getText={(val) => val.join('/')}
                placeholder="选择地区"
              />
            </FormItem>
          </CellGroup>
        </Form>
      </DemoBlock>
    </>
  );
};
