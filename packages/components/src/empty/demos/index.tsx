import React from 'react';
import { Empty, EmptyImageType } from 'rmc-vant';

export default () => {
  const types: EmptyImageType[] = ['default', 'error', 'network', 'search'];

  return (
    <div>
      {types.map((type) => (
        <div key={type}>
          <Empty type={type} description={type} />
        </div>
      ))}
    </div>
  );
};
