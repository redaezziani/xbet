import Footer from '@/components/page-ui/footer';
import Header from '@/components/page-ui/header';
import { Button } from '@/components/ui/button';

export default function Home() {
  const data = [
    {
      title: '1XBet',
      img: '/services/1xbet.png',
      description: 'شحن رصيد لتطبيق 1XBet بأمان وسرعة وبأقل الأسعار.',
    },
    {
      title: 'Melbet',
      img: '/services/melbet.png',
      description: 'شحن رصيد لتطبيق Melbet بأمان وسرعة وبأقل الأسعار.',
    },
    {
      title: 'Binance',
      img: '/services/binance.png',
      description: 'شحن رصيد لتطبيق Binance بأمان وسرعة وبأقل الأسعار.',
    },
  ];
  return (
    <main className='relative flex min-h-screen flex-col items-center justify-start gap-2'>
      <Header />
      <div className='absolute left-0 top-0 z-0 grid h-[50vh] w-full grid-cols-1 md:h-[70vh] md:grid-cols-6'>
        <div className='col-span-4 h-full w-full rounded-bl-sm border-b border-dashed border-teal-800 bg-teal-600 shadow-lg md:border-none'></div>
      </div>
      <div
        id='about'
        className='relative z-10 mt-32 flex w-full max-w-6xl flex-col items-center justify-start px-4 md:mt-28 md:flex-row'
      >
        <div className='flex w-full flex-col gap-3 text-center md:w-1/2 md:text-right'>
          <h1 className='text-4xl font-bold text-white'>
            أفضل موقع لشحن الرصيد لتطبيقات الرهانات
          </h1>
          <p className='text-neutral-100'>
            موقعنا يمكنك من شحن رصيدك لتطبيقات الرهانات OneXBet و Malbet بسرعة
            وموثوقية عالية، وبأمان تام وبأقل الأسعار.
          </p>
          <div className='mt-3 flex w-full items-center justify-center gap-3 md:justify-start'>
            <Button className='w-fit rounded-full bg-teal-500'>شحن الآن</Button>
            <Button className='flex w-fit items-center justify-center gap-2 rounded-full bg-amber-400 hover:bg-amber-500/70'>
              تحويل رصيد من
              <svg
                className='h-4 w-4 text-white'
                viewBox='0 0 126.61 126.61'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g fill='#ffff'>
                  <path d='m38.73 53.2 24.59-24.58 24.6 24.6 14.3-14.31-38.9-38.91-38.9 38.9z' />
                  <path d='m0 63.31 14.3-14.31 14.31 14.31-14.31 14.3z' />
                  <path d='m38.73 73.41 24.59 24.59 24.6-24.6 14.31 14.29-38.9 38.91-38.91-38.88z' />
                  <path d='m98 63.31 14.3-14.31 14.31 14.3-14.31 14.32z' />
                  <path d='m77.83 63.3-14.51-14.52-10.73 10.73-1.24 1.23-2.54 2.54 14.51 14.5 14.51-14.47z' />
                </g>
              </svg>
            </Button>
          </div>
        </div>
        <div className='relative mr-12 mt-10 w-1/2 md:mt-0 md:w-[40%]'>
          <img src='/player.png' className='w-full drop-shadow-lg filter' />
        </div>
      </div>
      <div
        id='services'
        className='relative mt-10 flex w-full max-w-6xl flex-col items-start justify-start gap-4 px-6 md:px-4'
      >
        <h2 className='text-center text-lg font-semibold text-primary'>
          خدماتنا: نقدم لكم أفضل الحلول لتلبية احتياجاتكم
        </h2>

        <div className='grid w-full grid-cols-1 gap-5 pb-6 md:grid-cols-3'>
          {data.map((item, index) => (
            <div
              key={index}
              className='col-span-1 flex w-full flex-col items-start justify-start gap-2 overflow-hidden rounded border border-neutral-400/35 pb-2'
            >
              <div className='flex aspect-square max-h-52 w-full items-center justify-center overflow-hidden bg-neutral-100'>
                <img
                  src={item.img}
                  className='aspect-auto h-auto w-32 object-cover'
                />
              </div>
              <div className='flex flex-col gap-3 px-2'>
                <h2 className='text-lg font-bold text-primary'>{item.title}</h2>
                <p className='text-neutral-800'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
