import { DemoBlock } from '@rmc-vant/demo';
import { LikeOutlined } from '@rmc-vant/icons';
import React from 'react';
import {
  Cell,
  showFailToast,
  showLoadingToast,
  showSuccessToast,
  showToast,
  useToast,
} from 'rmc-vant';

const UseToastDemo = () => {
  const [ref, holder] = useToast();

  return (
    <>
      <Cell
        title="文字显示"
        onClick={() => {
          ref.showToast('文字显示');
        }}
        clickable
      />
      {holder}
    </>
  );
};

export default () => {
  return (
    <>
      <DemoBlock title="基础用法" card>
        <Cell
          title="文字提示"
          onClick={() => {
            showToast('message');
          }}
          clickable
        />
        <Cell
          title="加载提示"
          onClick={() => {
            showLoadingToast({
              message: '加载中...',
            });
          }}
          clickable
        />
        <Cell
          title="成功提示"
          onClick={() => {
            showSuccessToast({
              message: '成功',
            });
          }}
          clickable
        />
        <Cell
          title="失败提示"
          onClick={() => {
            showFailToast({
              message: '加载失败',
            });
          }}
          clickable
        />
      </DemoBlock>
      <DemoBlock title="自定义图标">
        <Cell
          title="自定义图标"
          onClick={() => {
            showFailToast({
              message: '自定义图标',
              icon: <LikeOutlined />,
            });
          }}
          clickable
        />
        <Cell
          title="自定义图片"
          onClick={() => {
            showFailToast({
              message: '自定义图片',
              icon: (
                <img
                  alt=""
                  style={{ width: '1em', height: '1em' }}
                  src="https://img.yzcdn.cn/vant/logo.png"
                />
              ),
            });
          }}
          clickable
        />
        <Cell
          title="自定义加载图标"
          onClick={() => {
            showLoadingToast({
              message: '加载中...',
              loadingType: 'spinner',
            });
          }}
          clickable
        />
      </DemoBlock>
      <DemoBlock title="自定义位置">
        <Cell
          title="顶部展示"
          onClick={() => {
            showToast({
              message: '顶部展示',
              position: 'top',
            });
          }}
          clickable
        />
        <Cell
          title="底部展示"
          onClick={() => {
            showToast({
              message: '底部展示',
              position: 'bottom',
            });
          }}
          clickable
        />
      </DemoBlock>
      <DemoBlock title="useToast">
        <UseToastDemo />
      </DemoBlock>
    </>
  );
};
