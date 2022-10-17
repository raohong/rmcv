import { uuid } from '@rmc-vant/utils';
import React, { useImperativeHandle, useState } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { ConfigProvider, getGlobalConfig } from '../config-provider/context';
import Dialog from './Dialog';
import type {
  DialogOptions,
  DialogWrapperRef,
  DialogWrapperStateData,
} from './interface';

const DialogWrapper = React.forwardRef<DialogWrapperRef>((_, ref) => {
  const [data, setData] = useState<DialogWrapperStateData[]>([]);

  const open = (
    options: DialogOptions,
    {
      resolve,
      reject,
    }: {
      resolve: () => void;
      reject?: () => void;
    },
  ) => {
    const key = uuid();

    setData((prev) =>
      prev.concat({
        ...options,
        visible: true,
        key,
        resolve,
        reject,
      }),
    );

    return key;
  };

  const close = (key?: string) => {
    setData((prev) =>
      prev.map((item) => ({
        ...item,
        visible: key && item.key === key ? false : item.visible,
      })),
    );
  };

  const handleConfirm = (key: string) => {
    const target = data.find((item) => item.key === key);

    if (target) {
      target.resolve();
      close(key);
    }
  };

  const handleCancel = (key: string) => {
    const target = data.find((item) => item.key === key);

    if (target) {
      (target.reject || target.resolve)();
      close(key);
    }
  };

  //  alert 类型没有不能通过点击 overlay 来关闭
  const handleClose = (key: string) => {
    handleConfirm(key);
  };

  const handleAfterClose = (key: string) => {
    setData((prev) => prev.filter((item) => item.key !== key));
  };

  useImperativeHandle(ref, () => ({
    open,
    close,
  }));

  return (
    <ConfigProvider value={getGlobalConfig()}>
      {data.map((item) => (
        <Dialog
          {...item}
          key={item.key}
          onCancel={() => handleCancel(item.key)}
          afterClose={() => handleAfterClose(item.key)}
          onClose={() => handleClose(item.key)}
        />
      ))}
    </ConfigProvider>
  );
});

const createDialogWrapper = (portal: HTMLElement) => {
  const instance: React.MutableRefObject<DialogWrapperRef | null> = {
    current: null,
  };

  render(<DialogWrapper ref={instance} />, portal);

  return {
    instance,
    destroy: () => {
      unmountComponentAtNode(portal);
      instance.current = null;
    },
  };
};

export default createDialogWrapper;
