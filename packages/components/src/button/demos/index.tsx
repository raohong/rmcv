import React from 'react';
import { Button } from 'rmc-vant';
import { Arrow } from '@rmc-vant/icons';

export default () => (
  <ul
    style={{
      display: 'grid',
      gridGap: 16,
    }}
  >
    <li>
      <Button>PRIMARY</Button>
    </li>
    <li>
      <Button type="primary">PRIMARY</Button>
    </li>
    <li>
      <Button type="link">PRIMARY</Button>
    </li>
    <li>
      <Button plain>PRIMARY</Button>
    </li>
    <li>
      <Button disabled>PRIMARY</Button>
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
      <Button plain type="info">
        PRIMARY
      </Button>
    </li>
    <li>
      <Button plain type="warning">
        PRIMARY
      </Button>
    </li>
  </ul>
);
