import { DemoBlock } from '@rmc-vant/demo';
import { WarningOutlined } from '@rmc-vant/icons';
import React from 'react';
import { Button, Cell, ConfigProvider, Input } from 'rmc-vant';

export default () => {
  return (
    <ConfigProvider
      components={{
        Cell: {
          styleOverrides: {
            title: {
              flex: '0 0 80px',
            },
          },
        },
      }}
    >
      <DemoBlock title="基础用法" expand>
        <Cell.Group inset>
          <Cell title="文本" center>
            <Input placeholder="请输入文本" />
          </Cell>
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title="自定义类型" expand>
        <Cell.Group inset>
          <Cell title="文本">
            <Input placeholder="请输入文本" />
          </Cell>
          <Cell title="手机号">
            <Input placeholder="请输入手机号" type="tel" />
          </Cell>
          <Cell title="整数">
            <Input placeholder="请输入整数" type="digit" />
          </Cell>
          <Cell title="数字">
            <Input placeholder="请输入数字（支持小数）" type="number" />
          </Cell>
          <Cell title="密码">
            <Input placeholder="请输入密码" type="password" />
          </Cell>
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title="禁用输入框" expand>
        <Cell.Group inset>
          <Cell title="文本">
            <Input defaultValue="输入框只读" readonly />
          </Cell>
          <Cell title="文本">
            <Input defaultValue="输入框已禁用" disabled />
          </Cell>
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title="显示图标" expand>
        <Cell.Group inset>
          <Cell title="文本">
            <Input defaultValue="1312" suffix={<WarningOutlined />} />
          </Cell>
          <Cell title="文本">
            <Input defaultValue="312312" clearable />
          </Cell>
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title="插入按钮" expand>
        <Cell.Group inset>
          <Cell title="短信验证码" center>
            <Input
              addonAfter={
                <Button size="small" type="primary">
                  发送验证码
                </Button>
              }
              placeholder="请输入验证码"
              clearable
            />
          </Cell>
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title="格式化内容" expand>
        <Cell.Group inset>
          <Cell title="文本">
            <Input
              placeholder="在输入时执行"
              formatter={(val) => val.replace(/\D/g, '')}
            />
          </Cell>
          <Cell title="文本">
            <Input
              placeholder="在失焦时执行"
              formatter={(val) => val.replace(/\D/g, '')}
              formatTrigger="onBlur"
            />
          </Cell>
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title="高度自适应" expand>
        <Cell.Group inset>
          <Cell title="留言">
            <Input.Textarea
              placeholder="请留言"
              autoSize={{ minRows: 4 }}
              maxLength={100}
              showWorldLimit
            />
          </Cell>
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title="输入框对齐" expand>
        <Cell.Group inset>
          <Cell title="有对齐">
            <Input placeholder="请输入文本" inputAlign="right" clearable />
          </Cell>
          <Cell title="居中对齐">
            <Input placeholder="请输入文本" inputAlign="center" clearable />
          </Cell>
          <Cell title="左对齐">
            <Input placeholder="请输入文本" clearable />
          </Cell>
        </Cell.Group>
      </DemoBlock>
    </ConfigProvider>
  );
};
