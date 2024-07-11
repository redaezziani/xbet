import { BinanceBtn } from '@/components/page-ui/bnc-btn';
import Footer from '@/components/page-ui/footer';
import Header from '@/components/page-ui/header';
import { WtsBtn } from '@/components/page-ui/wts-btn';

export default function USAGE() {
  return (
    <main className='relative flex min-h-screen flex-col items-center justify-start gap-2'>
      <Header />
      <div className='absolute h-full min-h-screen w-full bg-gradient-to-b from-primary/20 via-amber-100/20 to-transparent' />
      <main className='z-10 mt-32 flex min-h-[70vh] w-full max-w-6xl flex-col items-center justify-center gap-4'>
        <h1 className='text-primary-900 w-full text-center text-3xl font-bold text-primary'>
          كيفية الاستخدام
        </h1>
        <p className='text-primary-900 w-full text-center text-lg font-semibold'>
          ارسل رسالة إلى رقم الواتساب الخاص بالمالك ثم اختر نوع الخدمة التي
          تريدها واختر البنك المفضل لديك.
        </p>
        <div className='bordre aspect-[9/16] h-auto w-80 overflow-hidden rounded-md border-slate-400 bg-slate-50'>
          <img
            src='/usage/image-1.jpg'
            className='aspect-auto w-full object-contain contrast-125'
          />
        </div>
        <div className='flex flex-wrap items-center justify-center gap-2'>
          <WtsBtn />
          <BinanceBtn />
        </div>
      </main>
      <Footer />
    </main>
  );
}

/*

 <p>
 ارسل رسالة إلى رقم الواتساب الخاص بالمالك ثم اختر نوع الخدمة التي تريدها واختر البنك المفضل لديك.
</p>
<p>
 ثم قم بإرسال المبلغ المالي إلى رقم الحساب المعطى وقم بالتقاط صورة للعملية وأرسلها إلى المالك.
</p>
<p>
 انتظر بضع دقائق ليتم إتمام العملية وسنقوم بشحن حسابك في 1xbet أو Linebet.
</p>
<p>
 بعد ذلك سنرسل لك رسالة بأن حسابك قد تم شحنه بنجاح.
</p>
*/
