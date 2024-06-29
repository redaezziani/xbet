import Link from 'next/link';

export const InfiniteSlider = () => {
  const images = [
    '/bank/al-barik-bank.png',
    '/bank/cashplus.svg',
    '/bank/attijari.png',
    '/bank/bank-of-africa.png',
    '/bank/cih-bank.png',
    '/bank/orange.jpg',
  ];

  return (
    <div className='mt-24 flex max-w-6xl flex-col items-center justify-center gap-2'>
      <div className='relative flex w-full flex-wrap items-center justify-around gap-x-6 gap-y-1'>
        {images.map((logo, index) => (
          <div
            className='flex items-center justify-center grayscale'
            key={index}
          >
            <img
              className='aspect-auto h-10 object-contain'
              src={logo}
              alt='bank'
            />
          </div>
        ))}
      </div>
      <p className='mt-3 text-sm font-light text-gray-500'>
        جميع شركائنا معتمدين وآمنين. يمكنك الثقة بهم.{' '}
        <Link href='#'>المزيد</Link>
      </p>
    </div>
  );
};
