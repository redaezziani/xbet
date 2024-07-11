export const ServiceSection = () => {
    const data = [
        {
            title: '1XBet',
            img: '/services/1xbet.png',
            description: 'لا تدع الفرص تفوتك! اشحن رصيدك في 1XBet بسهولة وأمان تام عبر خدمتنا السريعة والموثوقة. نحن نعمل على مدار الساعة لضمان حصولك على أفضل تجربة ممكنة. انضم إلى الملايين الذين يثقون بنا للاستمتاع بالعالم المثير للرهانات الرياضية والألعاب المثيرة.',
        },
        {
            title: 'Linebet',
            img: '/services/linebet.png',
            description: 'ارفع مستوى حماسك مع Linebet! اشحن رصيدك الآن واستمتع بتجربة لا مثيل لها في عالم الرهانات الرياضية والألعاب الحية. خدمتنا السريعة والآمنة متاحة على مدار الساعة لضمان راحتك. لا تفوت فرصة الفوز الكبير وانضم إلى مجتمع Linebet المتنامي.',
        },
        {
            title: 'Binance',
            img: '/services/binance.png',
            description: 'استثمر بثقة في عالم العملات الرقمية مع Binance. اشترِ الرصيد بأفضل الأسعار المتاحة في السوق، وبأمان تام وسرعة فائقة. فريقنا المتخصص يعمل على مدار الساعة لضمان حصولك على أفضل خدمة ممكنة. انضم إلى منصة التداول الرائدة عالمياً وابدأ رحلتك الاستثمارية اليوم.',
        },
    ];
    

    return (
        <div className='z-0 mt-10 flex w-full max-w-7xl flex-col items-center justify-center gap-3 overflow-x-hidden'>
            <div className='flex flex-col items-center justify-center gap-2'>
                <h2 className='text-4xl font-bold text-primary'>خدماتنا</h2>
                <p className='flex text-center text-slate-400'>
   لا داعي للقلق بعد الآن! خدماتنا الرائدة توفر لكم الأمان التام والنتائج المضمونة التي تتجاوز توقعاتكم. <img src='/usage/shield.png' alt='spark' className='h-6 w-6 hidden md:block' />
</p>
            </div>
            <div className='mt-20 relative grid w-full max-w-6xl grid-cols-1 gap-y-4 md:grid-cols-3'>
                <div className='absolute grid h-full w-full grid-cols-1 md:grid-cols-3'>
                    <hr className='col-start-2  w-full border border-dashed border-border md:h-full md:w-[.00001rem]' />
                    <hr className='hidden border border-dashed border-border md:block md:h-full md:w-[.00001rem]' />
                </div>
                {data.map((item, index) => (
                    <div
                        key={index}
                        className='relative border-b p-7 border-dashed flex aspect-square flex-col items-center justify-center gap-3 overflow-hidden '
                    >
                        <div className="flex w-full justify-between items-center">
                            <div className={` size-20 ${index===2 ? "size-28 -mt-9" : ""}`} >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className='h-auto w-44 object-contain'
                                />
                            </div>
                        </div>
                        <div className='mt-2 flex flex-col gap-1 px-2'>
                            <h3 className='text-lg font-bold text-primary font-roboto'>{item.title}</h3>
                            <p className='text-sm text-slate-400'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
