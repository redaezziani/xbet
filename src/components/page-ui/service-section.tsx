export const ServiceSection = () => {
  const data = [
    {
      title: '1XBet',
      img: '/services/1xbet.png',
      description: 'شحن رصيد لتطبيق 1XBet بأمان وسرعة .',
    },
    {
      title: 'Linebet',
      img: '/services/melbet.png',
      description: 'شحن رصيد لتطبيق Linelbet بأمان وسرعة .',
    },
    {
      title: 'Binance',
      img: '/services/binance.png',
      description: '   شراء الرصيد بافضل ثمن و اسرع خدمة .',
    },
  ];
  return (
    <div className='mt-5 flex w-full max-w-6xl flex-col items-center justify-center gap-3'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <h2 className='text-2xl font-bold text-primary'>خدماتنا</h2>
        <p className='text-center text-slate-400'>
          نقدم لكم أفضل الخدمات وبأمان تام.
        </p>
      </div>
      <div className='mt-10 grid w-full max-w-7xl grid-cols-1 gap-3 md:grid-cols-3'>
        {data.map((item, index) => (
          <div key={index} className='flex items-center justify-center gap-1'>
            <div className='flex size-14 items-center justify-center rounded-sm bg-slate-100 text-primary'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                width={25}
                height={25}
                fill={'none'}
              >
                <path
                  d='M17 10.8045C17 10.4588 17 10.286 17.052 10.132C17.2032 9.68444 17.6018 9.51076 18.0011 9.32888C18.45 9.12442 18.6744 9.02219 18.8968 9.0042C19.1493 8.98378 19.4022 9.03818 19.618 9.15929C19.9041 9.31984 20.1036 9.62493 20.3079 9.87302C21.2513 11.0188 21.7229 11.5918 21.8955 12.2236C22.0348 12.7334 22.0348 13.2666 21.8955 13.7764C21.6438 14.6979 20.8485 15.4704 20.2598 16.1854C19.9587 16.5511 19.8081 16.734 19.618 16.8407C19.4022 16.9618 19.1493 17.0162 18.8968 16.9958C18.6744 16.9778 18.45 16.8756 18.0011 16.6711C17.6018 16.4892 17.2032 16.3156 17.052 15.868C17 15.714 17 15.5412 17 15.1955V10.8045Z'
                  stroke='currentColor'
                  strokeWidth='1.5'
                />
                <path
                  d='M7 10.8046C7 10.3694 6.98778 9.97821 6.63591 9.6722C6.50793 9.5609 6.33825 9.48361 5.99891 9.32905C5.55001 9.12458 5.32556 9.02235 5.10316 9.00436C4.43591 8.9504 4.07692 9.40581 3.69213 9.87318C2.74875 11.019 2.27706 11.5919 2.10446 12.2237C1.96518 12.7336 1.96518 13.2668 2.10446 13.7766C2.3562 14.6981 3.15152 15.4705 3.74021 16.1856C4.11129 16.6363 4.46577 17.0475 5.10316 16.996C5.32556 16.978 5.55001 16.8757 5.99891 16.6713C6.33825 16.5167 6.50793 16.4394 6.63591 16.3281C6.98778 16.0221 7 15.631 7 15.1957V10.8046Z'
                  stroke='currentColor'
                  strokeWidth='1.5'
                />
                <path
                  d='M5 9C5 5.68629 8.13401 3 12 3C15.866 3 19 5.68629 19 9'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='square'
                  strokeLinejoin='round'
                />
                <path
                  d='M19 17V17.8C19 19.5673 17.2091 21 15 21H13'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <div className='flex flex-col items-start justify-start'>
              <h3 className='text-lg font-bold text-slate-600'>{item.title}</h3>
              <p className='text-center text-sm text-slate-400'>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
