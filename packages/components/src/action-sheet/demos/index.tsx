import { DemoBlock } from '@rmc-vant/demo';
import React, { useState } from 'react';
import { ActionSheet, ActionSheetProps, Cell } from 'rmc-vant';

const ActionSheetDemo: React.FC<ActionSheetProps & { title: string }> = ({
  title,
  ...props
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Cell title={title} clickable isLink onClick={() => setVisible(true)} />
      <ActionSheet
        title={title}
        {...props}
        visible={visible}
        onClose={() => setVisible(false)}
      />
    </>
  );
};

export default () => {
  return (
    <>
      <DemoBlock title="基础用法">
        <ActionSheetDemo
          title="基础用法"
          actions={[{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }]}
        />
        <ActionSheetDemo
          title="展示取消按钮"
          actions={[{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }]}
          cancelText="取消"
          closeOnClickAction
        />
        <ActionSheetDemo
          title="展示描述信息"
          actions={[
            { name: '选项一' },
            { name: '选项二' },
            { name: '选项三', subname: '描述' },
          ]}
          cancelText="取消"
          description="这是一段描述信息"
          closeOnClickAction
        />
      </DemoBlock>
      <DemoBlock title="选项状态">
        <ActionSheetDemo
          title="选项状态"
          actions={[
            { name: '着色选项', color: '#ee0a24' },
            { name: '禁用选项', disabled: true },
            { name: '加载选项', loading: true },
          ]}
          cancelText="取消"
          closeOnClickAction
        />
      </DemoBlock>
      <DemoBlock title="自定义面板">
        <ActionSheetDemo
          title="自定义面板"
          content={<div style={{ height: '30vh', padding: 16 }}>内容</div>}
        />
      </DemoBlock>
    </>
  );
};
