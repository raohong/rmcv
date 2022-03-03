import { DemoBlock } from '@rmc-vant/demo';
import React, { useState } from 'react';
import { ActionSheet, ActionSheetAction, ActionSheetProps, Cell } from 'rmc-vant';

const ActionSheetDemo: React.FC<ActionSheetProps & { title: string }> = ({
  title,
  ...props
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Cell title={title} clickable />
      <ActionSheet {...props} visible={visible} onClose={() => setVisible(false)} />
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
      </DemoBlock>
    </>
  );
};
