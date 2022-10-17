import React, { useRef, useState } from 'react';
import {
  Cell,
  CellGroup,
  NumberKeyboard,
  NumberKeyboardProps,
  Toast,
} from 'rmc-vant';

const Demo: React.FC<{ cellTitle: string } & NumberKeyboardProps> = ({
  cellTitle,
  ...props
}) => {
  return (
    <NumberKeyboard
      onInput={(val) => Toast(`输入 ${val}`)}
      onDelete={() => Toast('删除')}
      {...props}
    >
      <Cell title={cellTitle} isLink clickable />
    </NumberKeyboard>
  );
};

const SyncValueDemo: React.FC<{
  cellTitle: string;
}> = ({ cellTitle }) => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState<string>();
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <Cell
        ref={ref}
        onClick={() => setVisible(true)}
        title={cellTitle}
        value={value}
      />
      <NumberKeyboard
        forwardedNodeRef={ref}
        value={value}
        onChange={setValue}
        maxLength={6}
        visible={visible}
        onVisibleChange={setVisible}
      />
    </>
  );
};

export default () => {
  return (
    <CellGroup style={{ marginTop: 12 }} inset>
      <Demo cellTitle="弹出默认键盘" />
      <Demo cellTitle="弹出带右侧栏的键盘" theme="custom" closeButtonText="完成" />
      <Demo cellTitle="弹出身份证号键盘" extraKey="X" closeButtonText="完成" />
      <Demo
        cellTitle="弹出带标题的键盘"
        extraKey="."
        title="键盘标题"
        closeButtonText="完成"
      />
      <Demo
        cellTitle="弹出配置多个按键的键盘"
        theme="custom"
        extraKey={['00', '.']}
        closeButtonText="完成"
      />
      <Demo cellTitle="弹出随机数字的键盘" randomKeyOrder />
      <SyncValueDemo cellTitle="手动控制输入值" />
    </CellGroup>
  );
};
