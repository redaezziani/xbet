import { BinanceBtn } from '@/components/page-ui/bnc-btn';
import Footer from '@/components/page-ui/footer';
import Header from '@/components/page-ui/header';
import { WtsBtn } from '@/components/page-ui/wts-btn';
import Image from 'next/image';

export default function Usage() {
  return (
    <div className='relative flex min-h-screen flex-col items-center justify-start gap-2'>
      <Header />
      <div className='absolute h-full min-h-screen w-full bg-gradient-to-b from-primary/20 via-amber-100/20 to-transparent' />
      <main className='z-10 mt-32 px-6 md:px-0 flex min-h-[70vh] w-full max-w-6xl flex-col items-center justify-center gap-4'>
      {/* this is for how to create a 1xbet and linebet accounts*/}
      <h1
      className='text-3xl text-center font-bold text-primary'
      >
        كيفية إنشاء حساب على موقعنا 1xbet و Linebet
      </h1>
      <p
      className='text-lg text-neutral-500 w-full max-w-3xl text-center'
      >
        يمكنك إنشاء حساب على موقعنا بسهولة وبسرعة، كل ما عليك هو اتباع الخطوات التالية:
      </p>
      <div className="w-full mt-5 place-items-center place-content-center grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="w-full flex-col flex justify-start items-center gap-2 col-span-1 ">
        <div className="w-full relative aspect-video border border-border rounded-md  overflow-hidden  bg-slate-100">
            <Image src={'/create-account/image-2.jpg'} fill   alt="1xbet" />
        </div>
       <div className="flex w-full flex-col gap-2">
       <h3
       className='text-lg font-semibold text-primary'
       >
            افتح حسابًا جديدًا الآن 1xbet
        </h3>
        <p
        className='text-neutral-500 '
        >
            ابدأ رحلتك مع تطبيقات الرهانات الرائعة واستمتع بالعروض والمكافآت الحصرية.
        </p>
       </div>
        </div>
        <div className="w-full flex-col flex justify-start items-center gap-2 col-span-1 ">
        <div className="w-full relative aspect-video border border-border rounded-md  overflow-hidden  bg-slate-100">
            <Image src={'/create-account/image-1.jpg'} fill   alt="Linebet" />
        </div>
         <div className="flex w-full flex-col gap-2">
         <h3
            className='text-lg font-semibold text-primary'
            >
                افتح حسابًا جديدًا الآن Linebet
            </h3>
            <p
            className='text-neutral-500 '
            >
                ابدأ رحلتك مع تطبيقات الرهانات الرائعة واستمتع بالعروض والمكافآت الحصرية.
            </p>
            </div>
        </div>

      </div>
      </main>
      <Footer />
    </div>
  );
}
