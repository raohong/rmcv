import React from 'react';

export const MaterialSpinner: React.FC<{ className: string }> = ({
  className,
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle fill="none" strokeWidth="3" cx="25" cy="25" r="22" />
    </svg>
  );
};
