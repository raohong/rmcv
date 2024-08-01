import clsx from 'clsx';
import React from 'react';

const Button = React.forwardRef(
  (
    { className, ...props }: React.HTMLAttributes<HTMLButtonElement>,
    ref: React.ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'flex size-7 items-center justify-center rounded-sm text-base text-slate-300 transition-transform',
          '[&>*:hover]:scale-110 hover:opacity-85',
          className,
        )}
        {...props}
      />
    );
  },
);

export default Button;
