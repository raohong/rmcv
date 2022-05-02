import React from 'react';
import './index.less';

const DemoBlock: React.FC<{
  title?: React.ReactNode;
  expand?: boolean;
  card?: boolean;
  style?: React.CSSProperties;
}> = ({ title, children, expand, card, style }) => {
  return (
    <section
      className={`demo-block ${expand ? 'demo-block-expand' : ''} ${
        card ? 'demo-block-card' : ''
      }`.trim()}
      style={style}
    >
      {title && <h2 className="demo-block-title">{title}</h2>}
      <div className="demo-block-content">{children}</div>
    </section>
  );
};

export default DemoBlock;
