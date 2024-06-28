import React from 'react';

import NumberTicker from './number-ticker';

export const ServiceCounters = () => {
  return (
    <div className='mt-10 flex w-full max-w-6xl flex-wrap items-center justify-around gap-x-10 gap-y-2'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <h2 className='text-lg font-medium text-slate-400'>عملاء سعداء</h2>
        <div className='flex h-10 items-center justify-center gap-1 text-2xl font-black text-primary'>
          <NumberTicker
            value={1000}
            className='text-2xl font-black text-primary'
          />
          +
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-2'>
        <h2 className='text-lg font-medium text-slate-400'>مشاريع ناجحة</h2>
        <div className='flex h-10 items-center justify-center gap-1 text-2xl font-black text-primary'>
          <NumberTicker
            value={1000}
            className='text-2xl font-black text-primary'
          />
          +
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-2'>
        <h2 className='text-lg font-medium text-slate-400'>ساعات عمل</h2>
        <div className='flex h-10 items-center justify-center gap-1 text-2xl font-black text-primary'>
          <NumberTicker
            value={1000}
            className='text-2xl font-black text-primary'
          />
          +
        </div>
      </div>
    </div>
  );
};
