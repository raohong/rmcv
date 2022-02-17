import React, { useImperativeHandle, useState } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { chain, uuid } from '@rmc-vant/utils';
import { ConfigProvider, getGlobalConfig } from '../config-provider/context';
import ToastComponent from './ToastComponent';
import type { ToastData, ToastBusRef, ToastOptions } from './interface';

const ToastBus = React.forwardRef<ToastBusRef>((_, ref) => {
  const [data, setData] = useState<ToastData[]>([]);

  const create = (isMultiple: boolean, options: ToastOptions) => {
    const key = uuid();

    if (isMultiple || data.length === 0) {
      setData(
        data.concat({
          key,
          ...options,
          visible: true,
        }),
      );
      return key;
    }

    setData([
      {
        ...data[0],
        ...options,
        visible: true,
      },
    ]);

    return data[0].key;
  };

  const update = (key: string, options: ToastOptions) => {
    const index = data.findIndex((item) => item.key === key);

    if (index > -1) {
      data[index] = {
        ...data[index],
        ...options,
      };

      setData(data.slice());
    }
  };

  const close = (key?: string) => {
    setData(
      data.map((item) => ({
        ...item,
        visible: !key || item.key === key ? false : item.visible,
      })),
    );
  };

  const onAnimationEnd = (key: string) => {
    const index = data.findIndex((item) => item.key === key);

    if (index > -1) {
      data.splice(index, 1);

      setData(data.slice());
    }
  };

  useImperativeHandle(ref, () => ({
    update,
    create,
    close,
  }));

  const value = getGlobalConfig();

  return (
    <ConfigProvider value={value}>
      <div>
        {data.map((item) => (
          <ToastComponent
            {...item}
            key={item.key}
            onClose={chain(() => {
              close(item.key);
            }, item.onClose)}
            afterVisibleChange={chain((visible: boolean) => {
              if (!visible) {
                onAnimationEnd(item.key);
              }
            }, item.afterVisibleChange)}
          />
        ))}
      </div>
    </ConfigProvider>
  );
});

const createToastInstance = (portal: HTMLElement) => {
  const instance: { current: ToastBusRef | null } = {
    current: null,
  };

  render(<ToastBus ref={instance} />, portal);

  return {
    instance,
    destory() {
      unmountComponentAtNode(portal);
      instance.current = null;
    },
  };
};

export default createToastInstance;
