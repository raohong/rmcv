import { DemoBlock } from '@rmc-vant/demo';
import { Arrow, ArrowLeft } from '@rmc-vant/icons';
import React from 'react';
import { Pagination } from 'rmc-vant';

export default () => {
  return (
    <>
      <DemoBlock title="基础用法">
        <Pagination total={120} />
      </DemoBlock>
      <DemoBlock title="简单用法">
        <Pagination mode="simple" total={120} />
      </DemoBlock>
      <DemoBlock title="分页显示范围">
        <Pagination boundaryRange={0} total={120} />
      </DemoBlock>
      <DemoBlock title="自定义按钮">
        <Pagination previous={<ArrowLeft />} next={<Arrow />} total={120} />
      </DemoBlock>
      <DemoBlock title="不显示省略号">
        <Pagination boundaryRange={0} siblingRange={2} total={120} />
      </DemoBlock>
    </>
  );
};
