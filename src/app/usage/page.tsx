import { BinanceBtn } from '@/components/page-ui/bnc-btn';
import Footer from '@/components/page-ui/footer';
import Header from '@/components/page-ui/header';
import { WtsBtn } from '@/components/page-ui/wts-btn';

export default function Usage() {
  return (
    <div className='relative flex min-h-screen flex-col items-center justify-start gap-2'>
      <Header />
      <div className='absolute h-full min-h-screen w-full bg-gradient-to-b from-primary/20 via-amber-100/20 to-transparent' />
      <main className='z-10 mt-44 flex min-h-[70vh] w-full max-w-6xl flex-col items-center justify-center gap-4'>
        <section>
          {' '}
          {/* Use <section> to group related content */}
          <h1 className='text-primary-900 w-full text-center text-3xl font-bold text-primary'>
            اشحن رصيدك في خطوات بسيطة
          </h1>
          <p className='mt-2 w-full text-center text-lg font-semibold text-slate-700'>
            تواصل معنا عبر <span className='font-roboto'>WhatsApp،</span> واختر
            الخدمة التي تناسبك، ثم حدد طريقة الدفع المفضلة لديك. الأمر بهذه
            البساطة!
          </p>
        </section>

        <figure className='aspect-[9/16] h-auto w-80 overflow-hidden rounded-[4px] border-slate-400 bg-slate-50'>
          {' '}
          {/* Use <figure> for images */}
          <img
            src='/usage/image-1.jpg'
            alt='مثال على كيفية الاستخدام'
            className='aspect-auto w-full object-contain contrast-125'
          />
          <figcaption className='text-center text-sm text-gray-500'>
            {' '}
            {/* Add a caption for better context */}
            مثال توضيحي للعملية
          </figcaption>
        </figure>

        <div className='flex flex-wrap items-center justify-center gap-2 pb-10'>
          <WtsBtn />
          <BinanceBtn />
        </div>
      </main>
      <Footer />
    </div>
  );
}
