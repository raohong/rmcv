import { DemoBlock } from '@rmc-vant/demo';
import React from 'react';
import { Col, ColProps, Row, RowProps } from 'rmc-vant';

const renderDemo = (list: ColProps[], rowProps?: RowProps & { key?: string }) => {
  const colors = ['#39a9ed', '#66c6f2'];

  return (
    <Row {...rowProps} style={{ marginBottom: 16 }}>
      {list.map((item, index) => (
        <Col {...item} key={index}>
          <div
            style={{
              textAlign: 'center',
              padding: 4,
              background: colors[index % 2],
              color: '#fff',
            }}
          >
            {[item.offset && `offset: ${item.offset}`, `span: ${item.span}`]
              .filter(Boolean)
              .join(' ')}
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default () => {
  const aligns: Exclude<RowProps['justify'], undefined>[] = [
    'center',
    'end',
    'space-around',
    'space-between',
  ];

  return (
    <>
      <DemoBlock title="基础用法">
        {renderDemo([
          {
            span: 8,
          },
          {
            span: 8,
          },
          {
            span: 8,
          },
        ])}
        {renderDemo([
          {
            span: 4,
          },
          {
            span: 10,
            offset: 4,
          },
        ])}
        {renderDemo([
          {
            span: 12,
            offset: 12,
          },
        ])}
      </DemoBlock>
      <DemoBlock title="设置列元素间距">
        {renderDemo(
          [
            {
              span: 8,
            },
            {
              span: 8,
            },
            {
              span: 8,
            },
          ],
          {
            gutter: '20px',
          },
        )}
      </DemoBlock>
      <DemoBlock title="对齐方式">
        {aligns.map((item) =>
          renderDemo(
            [
              {
                span: 6,
              },
              {
                span: 6,
              },
              {
                span: 6,
              },
            ],
            {
              justify: item,
              key: item,
            },
          ),
        )}
      </DemoBlock>
    </>
  );
};
