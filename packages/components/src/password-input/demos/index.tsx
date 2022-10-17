import { DemoBlock } from '@rmc-vant/demo';
import React, { useRef } from 'react';
import {
  NumberKeyboard,
  NumberKeyboardProps,
  PasswordInput,
  PasswordInputProps,
} from 'rmc-vant';
import scrollIntoView from 'scroll-into-view';

const password = '123456';

const ScrollDemo: React.FC<
  PasswordInputProps & {
    keyboardProps?: NumberKeyboardProps;
    getProps?: (value: string | undefined, visible: boolean) => PasswordInputProps;
  }
> = ({ keyboardProps, getProps, ...props }) => {
  const ref = useRef<HTMLLabelElement>(null);

  return (
    <NumberKeyboard defaultValue="123" maxLength={6} {...keyboardProps}>
      {(value, visible) => (
        <PasswordInput
          value={value}
          focused={visible}
          {...props}
          {...getProps?.(value, visible)}
          ref={ref}
          onClick={() => {
            if (ref.current) {
              const rect = ref.current.getBoundingClientRect();
              const targetOffset = window.innerHeight - (250 + rect.height);

              if (rect.top + rect.height > targetOffset) {
                scrollIntoView(ref.current, {
                  time: 0,
                  align: {
                    topOffset: targetOffset,
                    top: 0,
                  },
                });
              }
            }
          }}
        />
      )}
    </NumberKeyboard>
  );
};

export default () => {
  return (
    <>
      <DemoBlock title="基础用法">
        <ScrollDemo />
      </DemoBlock>
      <DemoBlock title="自定义长度">
        <ScrollDemo length={4} keyboardProps={{ maxLength: 4 }} />
      </DemoBlock>
      <DemoBlock title="格子间距">
        <ScrollDemo gutter={10} />
      </DemoBlock>
      <DemoBlock title="明文展示">
        <ScrollDemo mask={false} />
      </DemoBlock>
      <DemoBlock title="提示信息" style={{ marginBottom: '50vh' }}>
        <ScrollDemo
          getProps={(value) => ({
            info: '密码为6位数字',
            errorInfo:
              value && value.length === password.length && value !== password
                ? '密码错误'
                : undefined,
          })}
        />
      </DemoBlock>
    </>
  );
};
