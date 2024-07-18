import Link from 'next/link';

export const InfiniteSlider = () => {
  const images = [
    '/bank/bank-of-africa.png',
    '/bank/al-barik-bank.png',
    '/bank/cashplus.svg',
    '/bank/attijari.png',
    '/bank/cih-bank.png',
    '/bank/orange.jpg',
  ];


  return (
    <div className='mt-24 w-full flex max-w-6xl flex-col items-center justify-center gap-2'>
      <div
      id='#slide-wrapper'
      className='relative  flex  w-full h-20 overflow-hidden   flex-wrap items-center justify-around gap-x-6 gap-y-1'>
        {images.map((logo, index) => (

                <img src={logo} className={` aspect-auto h-6 md:h-10  item item-${index+1} absolute `}/>

        ))}
      </div>
      <p className='mt-3 text-sm font-light text-gray-500'>
        جميع شركائنا معتمدين وآمنين. يمكنك الثقة بهم.{' '}
        <Link href='#'>المزيد</Link>
      </p>
    </div>
  );
};
