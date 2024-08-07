import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

const Prose = ({
  className,
  ...props
}: PropsWithChildren<{
  className?: string;
}>) => {
  return (
    <div
      className={clsx(
        'prose prose-xs max-w-[unset]',
        'prose-pre:relative',
        'prose-slate prose-h1:font-normal',
        'prose-h1:text-2xl md:prose-h1:text-3xl prose-h1:font-normal',
        'prose-h2:text-xl md:prose-h2:text-2xl prose-h2:font-normal',
        'prose-h3:text-lg md:prose-h3:text-xl prose-h3:font-normal',
        'prose-h4:text-base md:prose-h4:text-lg prose-h4:font-normal',
        'prose-h5:text-sm md:prose-h5:text-base prose-h5:font-normal',
        'prose-code:after:hidden prose-code:before:hidden',
        'prose-code:px-2 prose-code:py-1 prose-code:bg-gray-200/80 prose-code:rounded-md prose-code:font-normal prose-code:text-sm',
        'prose-table:min-w-full prose-tr:border-0 prose-thead:border-0',
        'prose-th:border-0 prose-td:border-0 prose-th:text-sm prose-td:text-sm',
        'prose-thead:whitespace-nowrap prose-th:text-left',
        'prose-th:px-4 prose-th:py-2 prose-td:px-4 prose-td:py-2',
        'prose-th:bg-gray-100',
        'prose-th:first:rounded-tl-md prose-th:first:rounded-bl-md',
        'prose-th:last:rounded-tr-md prose-th:last:rounded-br-md',
        className,
      )}
      {...props}
    >
    </div>
  );
};

export default Prose;
