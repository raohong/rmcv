import { useUnmountedRef } from '@rmc-vant/hooks';
import React, { useEffect, useRef, useState } from 'react';
import { Cell, List, PullRefresh } from 'rmc-vant';

const getData = (seed: React.MutableRefObject<number>): Promise<number[]> => {
  return new Promise((resolve, reject) => {
    if (seed.current > 60 && seed.current < 120) {
      seed.current += 5;
      reject(Error('Not Found'));

      return;
    }

    setTimeout(() => {
      const data = Array.from({ length: 25 }, (_, i) => seed.current + i);
      seed.current += 25;

      resolve(data);
    }, Math.random() * 400 + 1000);
  });
};

export default () => {
  const [list, setList] = useState<number[]>([]);
  const unmountedRef = useUnmountedRef();
  const seed = useRef(0);

  useEffect(() => {
    getData(seed).then((p) => {
      if (!unmountedRef.current) {
        setList(p);
      }
    });
  }, []);

  const onLoad = async () => {
    const data = await getData(seed);

    if (!unmountedRef.current) {
      setList((p) => p.concat(data));
    }

    return data.length === 0;
  };

  return (
    <PullRefresh
      sx={{
        height: 'calc(100vh - 56px)',
      }}
    >
      <List onLoad={onLoad} autoSetStatusOnLoad>
        {list.map((item) => (
          <Cell border isLink key={item} title={item} />
        ))}
      </List>
    </PullRefresh>
  );
};
