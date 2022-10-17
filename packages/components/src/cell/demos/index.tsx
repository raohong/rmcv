import { DemoBlock } from '@rmc-vant/demo';
import { LocationOutlined, SearchOutlined, ShopOutlined } from '@rmc-vant/icons';
import React from 'react';
import { Cell, CellGroup, Space, Tag } from 'rmc-vant';

export default () => {
  return (
    <>
      <DemoBlock title="基础用法" expand>
        <CellGroup>
          <Cell title="单元格" value="内容" />
          <Cell title="单元格" value="内容" label="描述信息" />
        </CellGroup>
      </DemoBlock>
      <DemoBlock title="卡片风格" expand>
        <CellGroup inset>
          <Cell title="单元格" value="内容" />
          <Cell title="单元格" value="内容" label="描述信息" />
        </CellGroup>
      </DemoBlock>
      <DemoBlock title="单元格大小" expand>
        <CellGroup size="large">
          <Cell title="单元格" value="内容" />
          <Cell title="单元格" value="内容" label="描述信息" />
        </CellGroup>
      </DemoBlock>
      <DemoBlock title="设置图标" expand>
        <CellGroup>
          <Cell icon={<LocationOutlined />} title="单元格" value="内容" />
        </CellGroup>
      </DemoBlock>
      <DemoBlock title="只设置内容" expand>
        <CellGroup>
          <Cell value="内容" />
        </CellGroup>
      </DemoBlock>
      <DemoBlock title="展示箭头" expand>
        <CellGroup>
          <Cell title="单元格" isLink />
          <Cell title="单元格" value="内容" isLink />
          <Cell title="单元格" value="内容" arrowDirection="down" isLink />
        </CellGroup>
      </DemoBlock>
      <DemoBlock title="设置分组" expand>
        <CellGroup title="分组1">
          <Cell icon={<LocationOutlined />} title="单元格" value="内容" />
        </CellGroup>
        <CellGroup title="分组2">
          <Cell title="单元格" value="内容" />
          <Cell title="单元格" value="内容" label="描述信息" />
        </CellGroup>
      </DemoBlock>
      <DemoBlock title="自定义图标" expand>
        <CellGroup>
          <Cell
            title={
              <Space>
                单元格 <Tag type="danger">标签</Tag>
              </Space>
            }
            value="内容"
            isLink
          />
          <Cell
            icon={<ShopOutlined />}
            title="单元格"
            rightIcon={<SearchOutlined size={16} />}
          />
        </CellGroup>
      </DemoBlock>
      <DemoBlock title="垂直居中" expand>
        <CellGroup>
          <Cell title="单元格" value="内容" label="描述信息" center />
        </CellGroup>
      </DemoBlock>
    </>
  );
};
