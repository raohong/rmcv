import React from 'react';
import { Image, Loading, Row, Col, Space } from 'rmc-vant';
import { DemoBlock } from '@rmc-vant/demo';
import { ImageProps } from '../interface';

const ImageBlock: React.FC<{
  title?: string;
}> = ({ children, title }) => {
  return (
    <div style={{ marginBottom: 16 }}>
      {children}
      <div
        style={{
          marginTop: 4,
          textAlign: 'center',
          color: '#646566',
        }}
      >
        {title}
      </div>
    </div>
  );
};

export default () => {
  const fits: ImageProps['fit'][] = [
    'contain',
    'cover',
    'fill',
    'none',
    'scale-down',
  ];
  const horizontalPositions = ['left', 'right', 'center'];
  const verticalPositions = ['top', 'bottom', 'center'];

  return (
    <div
      style={{
        background: '#fff',
      }}
    >
      <DemoBlock title="基础用法">
        <Image src="https://img.yzcdn.cn/vant/cat.jpeg" width={100} height={100} />
      </DemoBlock>
      <DemoBlock title="填充模式">
        <Row gutter={16}>
          {fits.map((item) => (
            <Col key={item} span={8}>
              <ImageBlock title={item}>
                <Image
                  height="calc(100vw / 3 - 64px / 3)"
                  fit={item}
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
              </ImageBlock>
            </Col>
          ))}
        </Row>
      </DemoBlock>
      <DemoBlock title="图片位置">
        <Row gutter={16}>
          {horizontalPositions.map((item) => (
            <Col key={`h-${item}`} span={8}>
              <ImageBlock title={`Contain ${item}`}>
                <Image
                  fit="contain"
                  height="calc(100vw / 3 - 64px / 3)"
                  position={item}
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
              </ImageBlock>
            </Col>
          ))}
          {verticalPositions.map((item) => (
            <Col key={`v-${item}`} span={8}>
              <ImageBlock title={`Cover ${item}`}>
                <Image
                  fit="cover"
                  height="calc(100vw / 3 - 64px / 3)"
                  position={item}
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
              </ImageBlock>
            </Col>
          ))}
        </Row>
      </DemoBlock>
      <DemoBlock title="圆形图片">
        <Row gutter={16}>
          {fits.map((item) => (
            <Col key={item} span={8}>
              <ImageBlock title={item}>
                <Image
                  height="calc(100vw / 3 - 64px / 3)"
                  fit={item}
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
                  round
                />
              </ImageBlock>
            </Col>
          ))}
        </Row>
      </DemoBlock>
      <DemoBlock title="懒加载">
        <Image
          width="10rem"
          height="10rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
          lazyLoad
        />
      </DemoBlock>
      <DemoBlock title="加载中提示">
        <Space>
          <ImageBlock title="默认提示">
            <Image
              width="10rem"
              height="10rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
          </ImageBlock>
          <ImageBlock title="自定义提示">
            <Image
              width="10rem"
              height="10rem"
              loadingIcon={<Loading type="spinner" size={20} />}
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
          </ImageBlock>
        </Space>
      </DemoBlock>
      <DemoBlock title="加载失败提示">
        <Space>
          <ImageBlock title="默认提示">
            <Image
              width="10rem"
              height="10rem"
              src="https://img.yzcdn.cn/vant/ct.jpeg"
            />
          </ImageBlock>
          <ImageBlock title="自定义提示">
            <Image
              width="10rem"
              height="10rem"
              errorIcon="加载失败"
              src="https://img.yzcdn.cn/vant/ct.jpeg"
            />
          </ImageBlock>
        </Space>
      </DemoBlock>
    </div>
  );
};
