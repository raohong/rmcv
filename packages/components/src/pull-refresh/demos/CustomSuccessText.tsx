import { useState } from 'react';
import PullRefresh from '../PullRefresh';

export default () => {
  const [count, setCount] = useState(0);

  return (
    <PullRefresh onRefresh={async () => setCount(count + 1)}>
      <div
        style={{ height: `calc(100vh - 110px)`, padding: 24 }}
      >
        {`刷新次数： ${count + 1}`}
      </div>
    </PullRefresh>
  );
};
