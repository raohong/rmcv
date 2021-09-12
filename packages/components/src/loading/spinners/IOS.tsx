import React from 'react';

const indexs = Array.from({ length: 12 }, (_, i) => i);

export const IOSSpinner: React.FC<{ className: string }> = ({ className }) => {
  return (
    <div className={className}>
      {indexs.map((item) => (
        <i key={item} />
      ))}
    </div>
  );
};
