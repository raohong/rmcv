import React, { useState } from 'react';
import { Noticebar, Button } from 'rmc-vant';

export default () => {
  const [num, setNum] = useState(1);
  const [scrollable, setScrollable] = useState(false);

  return (
    <div>
      <Noticebar mode="closeable" scrollable={scrollable} type="success">
        {'这是正文这是正文这是正文这'.repeat(num)}
      </Noticebar>

      <Button onClick={() => setNum(num + 1)}>ADD</Button>
      <Button onClick={() => setScrollable(!scrollable)}>SCROLABLE</Button>
      <Noticebar mode="closeable">这是正文这是正文这是正文这</Noticebar>
      <Noticebar mode="closeable" type="info">
        这是正文这是正文这是正文这
      </Noticebar>
      <Noticebar mode="closeable" type="warning">
        这是正文这是正文这是正文这
      </Noticebar>
      <Noticebar mode="closeable" type="error">
        这是正文这是正文这是正文这
      </Noticebar>
    </div>
  );
};
