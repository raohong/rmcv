import React, { useState } from 'react';
import { ActionSheet, ActionSheetAction } from 'rmc-vant';

export default () => {
  const [visible, setVisible] = useState(true);

  const actions: ActionSheetAction[] = [
    { name: '选项一' },
    { name: '选项二', disabled: true },
    { name: '选项三', loading: true },
  ];

  return (
    <ActionSheet
      title="title"
      description="desc"
      visible={visible}
      onClose={() => {
        setVisible(false);
      }}
      actions={actions}
      cancelText="取消"
    />
  );
};
