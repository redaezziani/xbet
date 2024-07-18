import { Button } from '../ui/button';

const AccountCreationInfo = () => {
return (
    <section className='mt-24 flex relative h-72 md:h-60 w-full flex-wrap items-center justify-center gap-2 bg-amber-300 p-4'>
            <svg
            className='absolute top-5 right-5 h-24 w-24 text-amber-500/40'
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}  fill={"none"}>
    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M11.7077 9.34893C11.882 9.21702 12.118 9.21702 12.2923 9.34893L14.545 11.054C14.7193 11.1859 14.7922 11.4197 14.7256 11.6332L13.8652 14.3921C13.7986 14.6055 13.6077 14.75 13.3923 14.75H10.6077C10.3923 14.75 10.2014 14.6055 10.1348 14.3921L9.27437 11.6332C9.20781 11.4197 9.28073 11.1859 9.45499 11.054L11.7077 9.34893Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 9V5M15 11L19 9.5M14 15L16 18M10 14.5L8 17M9 11.5L5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 2.5L12.0165 4.62241L15 2.5M2 12.7998L5.19655 10.4388L3.55548 6.72045M19.4703 18.8531L15.6158 18.1555L14.2655 22M20.0298 6.19586L18.8035 9.38978L22 11.7507M8.00992 21.4059L8.05142 17.1665L4.00331 17.21" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
</svg>
        <div className='flex w-full relative max-w-7xl flex-wrap items-center justify-between gap-y-3 md:px-16'>
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
                <h3 className='text-lg font-semibold text-slate-900'>
                    أفضل تجربة للمراهنة الرياضية
                </h3>
                <p
                className=' font-roboto font-light text-gray-400'>
                    1xbet و linebet 
                </p>
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
