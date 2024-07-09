import { BinanceBtn } from '@/components/page-ui/bnc-btn';
import Footer from '@/components/page-ui/footer';
import Header from '@/components/page-ui/header';
import { WtsBtn } from '@/components/page-ui/wts-btn';

export default function USAGE() {
  return (
    <main className='relative flex min-h-screen flex-col items-center justify-start gap-2'>
      <Header />
      <div className="w-full h-full min-h-screen bg-gradient-to-b from-primary/20 via-amber-100/20 to-transparent absolute "/>
      <main className="flex min-h-[70vh] z-10 mt-32 w-full max-w-6xl flex-col gap-4 justify-center items-center">
        <h1
        className='text-3xl font-bold text-primary  text-center text-primary-900 w-full'
        >
            كيفية الاستخدام
        </h1>
        <p
        className='text-lg font-semibold text-primary-900 text-center w-full'
        >
            ارسل رسالة إلى رقم الواتساب الخاص بالمالك ثم اختر نوع الخدمة التي تريدها واختر البنك المفضل لديك.
        </p>
        <div className="w-80  aspect-[9/16] h-auto bordre border-slate-400 rounded-md overflow-hidden bg-slate-50">
        <img src='/usage/image-1.jpg' className=' w-full contrast-125 aspect-auto object-contain'/>
        </div>
        <div className="flex flex-wrap gap-2 justify-center items-center">
            <WtsBtn/>
            <BinanceBtn/>
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