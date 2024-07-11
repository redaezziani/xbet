import Image from 'next/image';
import { SparkIcon } from './icons';

export const HowITWork = () => {
  const steps = [
    {
      title: 'اختر منصة المراهنات',
      description:
        'ابدأ رحلتك باختيار منصة المراهنات التي تفضلها. هل أنت من محبي Linebet بتشكيلتها الواسعة من الألعاب الرياضية والافتراضية، أم تفضل 1xbet بخياراتها المتنوعة للمراهنات الحية والكازينو المباشر؟ القرار لك!',
      icon: '/usage/s-1.png', // استبدل بالمسار الفعلي للصورة
    },
    {
      title: 'اختر طريقة الدفع المفضلة',
      description:
        'نوفر لك مجموعة واسعة من طرق الدفع الآمنة والموثوقة لتختار ما يناسبك. سواء كنت تفضل البطاقات الائتمانية، المحافظ الإلكترونية، التحويلات البنكية، أو حتى العملات المشفرة، ستجد ما تبحث عنه لدينا.',
      icon: '/usage/s-2.png', // استبدل بالمسار الفعلي للصورة
    },
    {
      title: 'استمتع برصيدك على الفور',
      description:
        'بمجرد تأكيد عملية الدفع، ستتم إضافة الرصيد إلى حسابك على الفور. لا داعي للانتظار، يمكنك الآن الانغماس في عالم المراهنات المثير والبدء في تحقيق أرباحك!',
      icon: '/usage/s-3.png', // استبدل بالمسار الفعلي للصورة
    },
  ];

  return (
    <div
      id='how-it-works'
      className='mt-24 flex max-w-6xl flex-col items-center justify-center gap-2'
    >
      <h3 className='text-4xl font-bold text-primary'>كيف تعمل الخدمة</h3>
      <p className='flex text-center text-slate-400'>
        نحن نقدم خدمة شحن الرصيد لتطبيقات الرهان والتداول بأمان تام وبأسعار
        تنافسية.
        <SparkIcon />
      </p>

      <div className='relative mt-20 grid grid-cols-1 gap-3 md:grid-cols-3'>
        <div className='absolute grid h-full w-full grid-cols-1 md:grid-cols-3'>
          <hr className='col-start-2 h-[.00001rem] w-full border border-dashed border-slate-300/35 md:h-full md:w-[.00001rem]' />
          <hr className='hidden border border-dashed border-slate-300/35 md:block md:h-full md:w-[.00001rem]' />
        </div>
        {steps.map((step, index) => (
          <div
            key={index}
            className='border-bodder col-span-1 flex aspect-square flex-col items-start justify-start gap-3 border-b border-dashed bg-white p-7'
          >
            <div className='flex w-full items-center justify-between'>
              <div className='flex size-14 items-center justify-center rounded-full bg-slate-200/70 text-white'>
                <Image
                  width={40}
                  height={40}
                  alt='icon'
                  className='opacity-45'
                  src={step.icon}
                />
              </div>
              <p className='text-4xl font-semibold text-slate-200/50'>
                0{index + 1}
              </p>
            </div>
            <div className='mt-4 flex flex-col items-start justify-start gap-3'>
              <h4 className='text-xl font-bold text-slate-600'>{step.title}</h4>
              <p className='mt-3 text-slate-400'>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
