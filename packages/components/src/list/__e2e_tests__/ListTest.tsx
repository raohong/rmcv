import { useUnmountedRef } from '@rmc-vant/hooks';
import React, { useRef, useState } from 'react';
import List, { ListLoadingStatus } from '..';
import type { ListProps } from '../interface';

const getData = (
  seed: React.MutableRefObject<number>,
  length = 12,
  shouldThrowError?: () => boolean,
): Promise<number[]> => {
  return new Promise((resolve, reject) => {
    if (shouldThrowError && shouldThrowError()) {
      reject(Error('Not Found'));

      return;
    }

    setTimeout(() => {
      const data = Array.from({ length }, (_, i) => seed.current + i);

      seed.current += length;

      resolve(data);
    }, Math.random() * 50 + 100);
  });
};

const ListTest: React.FC<
  {
    controlled?: boolean;
    length: number;
    shouldThrowError?: () => boolean;
  } & Omit<ListProps, 'onLoad' | 'autoSetStatusOnLoad'>
> = ({ controlled, length, shouldThrowError, ...rest }) => {
  const [list, setList] = useState<number[]>([]);
  const unmountedRef = useUnmountedRef();
  const seed = useRef(0);
  const [status, setStatus] = useState(ListLoadingStatus.NONE);

  const onLoad = async () => {
    const data = await getData(seed, length, shouldThrowError);

    if (!unmountedRef.current) {
      setList((p) => p.concat(data));
    }

    return data.length === 0;
  };

  return (
    <List
      {...(controlled
        ? {
            loadingStatus: status,
            onLoadingStatusChange: setStatus,
          }
        : {})}
      onLoad={onLoad}
      autoSetStatusOnLoad
      {...rest}
    >
      {list.map((item) => (
        <div data-list-item style={{ height: 40 }} key={item}>
          {item}
        </div>
      ))}
    </List>
  );
};

export default ListTest;
