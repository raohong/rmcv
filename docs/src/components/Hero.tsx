import clsx from 'clsx';

export default () => {
  return (
    <div
      className={clsx(
        'not-prose flex flex-col items-center rounded-lg bg-white px-6 pt-4',
      )}
    >
      <div className={clsx('flex items-center justify-center gap-4', 'flex-col')}>
        <img src='/favicon.ico' className='size-20' />
        <h1 className='text-2xl font-bold'>RMC Vant</h1>
      </div>
      <p className='mt-2 text-slate-500'>可定制的移动端 React 组件库</p>
    </div>
  );
};
