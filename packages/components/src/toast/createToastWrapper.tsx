import React, { useImperativeHandle, useState } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { chain, uuid } from '@rmc-vant/utils';
import { ConfigProvider, getGlobalConfig } from '../config-provider/context';
import ToastComponent from './Toast';
import type { ToastData, ToastWrapperRef, ToastOptions } from './interface';

const ToastWrapper = React.forwardRef<ToastWrapperRef>((_, ref) => {
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
        ...options,
        visible: true,
        key: data[0].key,
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
            afterClose={chain(() => {
              onAnimationEnd(item.key);
            }, item.afterClose)}
          />
        ))}
      </div>
    </ConfigProvider>
  );
});

const createToastWrapper = (portal: HTMLElement) => {
  const instance: { current: ToastWrapperRef | null } = {
    current: null,
  };

  render(<ToastWrapper ref={instance} />, portal);

  return {
    instance,
    destory() {
      unmountComponentAtNode(portal);
      instance.current = null;
    },
  };
};

export default createToastWrapper;
