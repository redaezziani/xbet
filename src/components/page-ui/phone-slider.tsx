import Image from 'next/image';
import Link from 'next/link';

export const PhoneInfiniteSlider = () => {
    const imagesSlideOne = [
        '/bank/bank-of-africa.png',
        '/bank/al-barik-bank.png',
        '/bank/cashplus.svg',
        '/bank/attijari.png',
    ];

    const imagesSlideTwo = [
        '/bank/cih-bank.png',
        '/bank/orange.jpg',
        '/bank/lbankalik.png',
    ];


    return (
        <div className='mt-24 md:hidden w-full flex max-w-6xl flex-col items-center justify-center gap-0'>
            <div
                id='#slide-wrapper'
                className='relative  flex  w-full h-20 overflow-hidden   flex-wrap items-center justify-around gap-x-6 gap-y-1'>
                {imagesSlideOne.map((logo, index) => (
                    <Image
                        alt='logo'
                        placeholder='blur'
                        blurDataURL={logo}
                        height={80}
                        width={80}

                        key={index} src={logo} className={` aspect-auto h-6 md:h-10  item-phone-slide-1 item-phone-s1-${index + 1} absolute `} />
                ))}
            </div>

            <div
                id='#slide-wrapper'
                className='relative  flex  w-full h-20 overflow-hidden   flex-wrap items-center justify-around gap-x-6 gap-y-1'>
                {imagesSlideTwo.map((logo, index) => (
                    <Image
                        alt='logo'
                        placeholder='blur'
                        blurDataURL={logo}
                        height={100}
                        width={50}
                        key={index} src={logo} className={` aspect-auto h-6 md:h-10  item-phone-slide-2 item-phone-s2-${index + 1} absolute `} />
                ))}
            </div>
            <p className='mt-3 text-sm font-light text-gray-500'>
                جميع شركائنا معتمدين وآمنين. يمكنك الثقة بهم.{' '}
                <Link href='#'>المزيد</Link>
            </p>
        </div>
    );
};
