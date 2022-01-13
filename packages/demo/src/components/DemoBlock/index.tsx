import React from 'react';
import './index.less';

const DemoBlock: React.FC<{ title?: React.ReactNode }> = ({ title, children }) => {
  return (
    <section className="demo-block">
      {title && <h2 className="demo-block-title">{title}</h2>}
      {children}
    </section>
  );
};

export default DemoBlock;
