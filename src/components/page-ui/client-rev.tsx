import Image from 'next/image';
import React from 'react';

const ClientRev = () => {
  return (
    <div className='relative mt-10 flex w-full max-w-4xl flex-col items-center justify-center gap-2 px-4 md:mt-32'>
      <img
        src='arrow.svg'
        alt='quote'
        className='absolute -right-32 -top-16 z-20 w-28 rotate-12'
      />
      <div className='relative flex h-40 w-full flex-col items-center justify-center gap-4 rounded-sm bg-primary p-4 ring-1 ring-primary ring-offset-2'>
        <div className='absolute -top-4 left-4 size-12 overflow-hidden rounded-full border-2 border-white'>
          <Image
            fill
            placeholder='blur'
            blurDataURL='/user.jpg'
            src='/user.jpg'
            alt='client'
            className='aspect-square w-full object-cover'
          />
        </div>
        <img
          src='quotation-right.svg'
          alt='quote'
          className='absolute right-3 top-3 h-5 w-5'
        />
        <p className='text-center text-2xl text-white'>
          كنت بحاجة إلى شحن رصيد لتطبيق الرهان ولم أجد أفضل من هذه الخدمة, شكراً
          لكم
        </p>
        <img
          src='quotation-left.svg'
          alt='quote'
          className='absolute bottom-3 left-3 h-5 w-5'
        />
      </div>
    </div>
  );
};

export default ClientRev;
