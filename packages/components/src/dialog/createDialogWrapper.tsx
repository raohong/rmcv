import { uuid } from '@rmc-vant/utils';
import React, { useImperativeHandle, useState } from 'react';
import { reactRender } from '../_utils';
import Dialog from './Dialog';
import type {
  DialogApiRef,
  DialogOptions,
  DialogWrapperStateData,
} from './interface';

const DialogWrapper = React.forwardRef<DialogApiRef>((_, ref) => {
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

    setData(prev =>
      prev.concat({
        ...options,
        open: true,
        key,
        resolve,
        reject,
      }),
    );

    return key;
  };

  const close = (key?: string) => {
    setData(prev =>
      prev.map(item => ({
        ...item,
        open: key && item.key === key ? false : item.open,
      })),
    );
  };

  const handleConfirm = (key: string) => {
    const target = data.find(item => item.key === key);

    if (target) {
      target.resolve();
      close(key);
    }
  };

  const handleCancel = (key: string) => {
    const target = data.find(item => item.key === key);

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
    setData(prev => prev.filter(item => item.key !== key));
  };

  useImperativeHandle(ref, () => {
    return {
      open,
      close,
    };
  });

  return (
    <>
      {data.map(item => (
        <Dialog
          {...item}
          key={item.key}
          onCancel={() => handleCancel(item.key)}
          afterClose={() => handleAfterClose(item.key)}
          onClose={() => handleClose(item.key)}
        />
      ))}
    </>
  );
});

const createDialogWrapper = async (portal: HTMLElement) => {
  const instance: React.MutableRefObject<DialogApiRef | null> = {
    current: null,
  };

  const destroy = await reactRender(<DialogWrapper ref={instance} />, portal);

  return {
    instance,
    destroy: () => {
      destroy();
      instance.current = null;
    },
  };
};

export default createDialogWrapper;
