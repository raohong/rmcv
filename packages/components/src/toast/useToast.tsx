import { composeProps, isNil, isString, uuid } from '@rmc-vant/utils';
import { useCallback, useMemo, useState } from 'react';
import ToastComponent from './Toast';
import type { ToastApiRef, ToastData, ToastOptions, ToastType } from './interface';

const showToastWrapper = (
  type: Exclude<ToastType, 'normal'>,
  handler: (message: string | ToastOptions) => void,
) => {
  return (message: string | Omit<ToastOptions, 'type'>) => {
    if (isString(message)) {
      return handler({
        type,
        message,
      });
    }

    return handler({
      ...message,
      type,
    });
  };
};

export const useToast = (multiple = false) => {
  const [data, setData] = useState<ToastData[]>([]);

  const update = useCallback(
    (key: string, options: ToastOptions) => {
      const index = data.findIndex(item => item.key === key);

      if (index > -1) {
        data[index] = {
          ...data[index],
          ...options,
        };

        setData(data.slice());
      }
    },
    [setData, data],
  );

  const create = useCallback(
    (options: ToastOptions) => {
      const key = options.key ?? uuid();

      if (!multiple) {
        setData([{ ...options, key, open: true }]);

        return;
      }

      if (data.find(item => item.key === key)) {
        update(key, options);
        return key;
      }

      setData(
        data.concat([
          {
            ...options,
            open: true,
            key,
          },
        ]),
      );
    },
    [setData, data, update, multiple],
  );

  const close = useCallback(
    (key?: string) => {
      setData(prev =>
        prev.map(item => ({
          ...item,
          open: !key || item.key === key ? false : item.open,
        })),
      );
    },
    [setData],
  );

  const showToast = useCallback(
    (message: string | ToastOptions) => {
      const type = isString(message) ? 'normal' : message.type || 'normal';
      const options: ToastOptions = isString(message) ? { message, type } : message;

      if (!isString(message) && 'loadingType' in message && isNil(message.type)) {
        options.type = 'loading';
      }

      create(options);
    },
    [create],
  );

  const showFailToast = useMemo(
    () => showToastWrapper('fail', showToast),
    [showToast],
  );
  const showLoadingToast = useMemo(
    () => showToastWrapper('loading', showToast),
    [showToast],
  );
  const showSuccessToast = useMemo(
    () => showToastWrapper('success', showToast),
    [showToast],
  );

  const onAnimationEnd = (key: string) => {
    const index = data.findIndex(item => item.key === key);

    if (index > -1) {
      data.splice(index, 1);

      setData(data.slice());
    }
  };

  const api: ToastApiRef = useMemo(
    () => ({ showFailToast, showLoadingToast, showSuccessToast, showToast, close }),
    [showFailToast, showLoadingToast, showSuccessToast, showToast, close],
  );

  const contextHolder = (
    <>
      {data.map(item => (
        <ToastComponent
          key={item.key}
          {...composeProps(item, {
            onClose() {
              close(item.key);
            },
            afterClose() {
              onAnimationEnd(item.key);
            },
          })}
        />
      ))}
    </>
  );

  return [api, contextHolder] as const;
};
