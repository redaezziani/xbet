export const ServiceSection = () => {
  const data = [
    {
      title: '1XBet',
      img: '/services/1xbet.png',
      description:
        'اشحن رصيدك لتطبيق 1XBet بسرعة وأمان مع خدمة مميزة على مدار الساعة. استمتع بتجربة سلسة وآمنة.',
    },
    {
      title: 'Linebet',
      img: '/services/linebet.png',
      description:
        'اشحن رصيدك لتطبيق Linebet بسرعة وأمان مع خدمة مميزة على مدار الساعة. استمتع بتجربة سلسة وآمنة.',
    },
    {
      title: 'Binance',
      img: '/services/binance.png',
      description:
        'اشترِ الرصيد بأفضل سعر وأسرع خدمة. نوفر لك خدمة موثوقة وآمنة على مدار الساعة لتلبية احتياجاتك.',
    },
  ];

  return (
    <div className='mt-10 flex w-full max-w-7xl flex-col items-center justify-center gap-3'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <h2 className='text-2xl font-bold text-primary'>خدماتنا</h2>
        <p className='text-center text-slate-400'>
          نقدم لكم أفضل الخدمات وبأمان تام.
        </p>
      </div>
      <div className='mt-10 grid w-full max-w-6xl grid-cols-1 gap-y-4 md:grid-cols-3'>
        {data.map((item, index) => (
          <div
            key={index}
            className='relative flex flex-col items-start justify-start gap-3 overflow-hidden px-5'
          >
            <div className='flex h-48 w-full items-center justify-center rounded-sm border border-slate-400/25 bg-slate-50 grayscale'>
              <img
                src={item.img}
                alt={item.title}
                className='h-auto w-36 object-contain'
              />
            </div>
            <div className='mt-2 flex flex-col gap-1 px-2'>
              <h3 className='text-lg font-bold text-primary'>{item.title}</h3>
              <p className='text-sm text-slate-400'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
