import React, { useState } from 'react';
import { DemoBlock } from '@rmc-vant/demo';
import { Success, Cross } from '@rmc-vant/icons';
import { Switch, Cell, Dialog } from 'rmc-vant';

const DynamicDemo = () => {
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(true);

  return (
    <Switch
      loading={loading}
      checked={checked}
      onClick={async (current) => {
        setLoading(true);

        await Dialog({
          title: '提醒',
          message: '是否切换开关？',
        });

        setTimeout(() => {
          setLoading(false);
          setChecked(current);
        }, 1000);
      }}
    />
  );
};

export default () => {
  return (
    <>
      <DemoBlock title="基础用法">
        <Switch />
      </DemoBlock>
      <DemoBlock title="禁用状态">
        <Switch disabled defaultChecked />
      </DemoBlock>
      <DemoBlock title="加载状态">
        <Switch loading defaultChecked />
      </DemoBlock>
      <DemoBlock title="自定义大小">
        <Switch size={24} defaultChecked />
      </DemoBlock>
      <DemoBlock title="自定义颜色">
        <Switch activeColor="#ee0a24" inactiveColor="#dcdee0" defaultChecked />
      </DemoBlock>
      <DemoBlock title="自定义按钮">
        <Switch
          node={(checked) =>
            checked ? (
              <Success color="var(--rmcv-primary-color)" size={18} />
            ) : (
              <Cross color="var(--rmcv-gray-5)" size={18} />
            )
          }
        />
      </DemoBlock>
      <DemoBlock title="异步控制">
        <DynamicDemo />
      </DemoBlock>
      <DemoBlock title="配合单元格使用">
        <Cell title="标题" value={<Switch size={24} defaultChecked />} />
      </DemoBlock>
    </>
  );
};
