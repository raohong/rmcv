import React, { useRef } from 'react';
import { Button } from 'rmc-vant';
import { Arrow } from '@rmc-vant/icons';

export default () => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  return (
    <ul
      style={{
        display: 'grid',
        gridGap: 16,
      }}
    >
      <li>
        <Button hairline>PRIMARY</Button>
      </li>
      <li>
        <Button>PRIMARY</Button>
      </li>
      <li>
        <Button plain>PRIMARY</Button>
      </li>
      <li>
        <Button ref={ref} target="link" type="primary" disabled>
          PRIMARY
        </Button>
      </li>
      <li>
        <Button loading>PRIMARY</Button>
      </li>
      <li>
        <Button loading loadingType="circle" loadingText="加载中...">
          PRIMARY
        </Button>
      </li>
      <li>
        <Button icon={<Arrow />}>PRIMARY</Button>
      </li>
      <li>
        <Button plain type="danger">
          PRIMARY
        </Button>
      </li>
      <li>
        <Button plain type="primary">
          SUCCESS
        </Button>
      </li>
      <li>
        <Button plain type="warning">
          PRIMARY
        </Button>
      </li>
    </ul>
  );
};
