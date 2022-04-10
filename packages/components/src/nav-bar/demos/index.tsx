import { DemoBlock } from '@rmc-vant/demo';
import { SearchOutlined } from '@rmc-vant/icons';
import React from 'react';
import { NavBar } from 'rmc-vant';

export default () => {
  return (
    <>
      <DemoBlock title="基础用法" expand>
        <NavBar title="标题" />
      </DemoBlock>
      <DemoBlock title="基础用法" expand>
        <NavBar title="返回上级" leftText="返回" leftArrow />
      </DemoBlock>
      <DemoBlock title="右侧按钮" expand>
        <NavBar title="标题" leftText="返回" rightText="返回" leftArrow />
      </DemoBlock>
      <DemoBlock title="自定义内容" expand>
        <NavBar
          title="标题"
          leftText="返回"
          right={
            <SearchOutlined
              style={{ fontSize: 18, color: 'var(--rmcv-nav-bar-icon-color)' }}
            />
          }
          leftArrow
        />
      </DemoBlock>
    </>
  );
};
