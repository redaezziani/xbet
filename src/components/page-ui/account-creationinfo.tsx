import { Button } from '../ui/button';

const AccountCreationInfo = () => {
  return (
    <section className='mt-24 flex h-60 w-full flex-wrap items-center justify-center gap-2 bg-amber-300 p-4'>
      <div className='flex w-full max-w-7xl flex-wrap items-center justify-between gap-y-3 md:px-16'>
        <div className='flex flex-col items-start justify-start gap-3'>
          <img
            src='quotation-right.svg'
            alt='quote'
            className='h-5 w-5 opacity-60'
          />
          <h3 className='relative text-2xl font-medium text-slate-800'>
            <span className='absolute bottom-1 left-0 -z-[-1] h-3 w-12 bg-white' />
            افتح حسابًا جديدًا
            <span className='relative z-10 mr-3 items-end justify-end font-bold'>
              الآن!
            </span>
          </h3>
          <h3 className='flex gap-2 text-slate-600'>
            ابدأ رحلتك مع تطبيقات الرهانات الرائعة واستمتع بالعروض والمكافآت
            الحصرية.
            <img
              src='quotation-left.svg'
              alt='quote'
              className='h-5 w-5 opacity-60'
            />
          </h3>
        </div>

        <div className='flex flex-col items-start justify-start gap-3'>
          <h3 className='text-lg font-semibold text-slate-800'></h3>
          <Button className='group flex items-center justify-center gap-2 text-white'>
            ابدأ الآن
            <svg
              className='transition-all duration-300 ease-in-out group-hover:ml-2'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width={18}
              height={18}
              fill={'none'}
            >
              <path
                d='M4 12L20 12'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M8.99996 17C8.99996 17 4.00001 13.3176 4 12C3.99999 10.6824 9 7 9 7'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AccountCreationInfo;
