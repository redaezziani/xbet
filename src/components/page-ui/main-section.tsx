'use client';
import { BinanceBtn } from './bnc-btn';
import { WtsBtn } from './wts-btn';
import { motion } from 'framer-motion';

export const MainSection = () => {
  return (
    <section
      id='about'
      className='relative z-10 mt-32 flex w-full max-w-6xl flex-col items-center justify-start px-4 md:mt-28 md:flex-row'
    >
      <div className='flex w-full flex-col gap-3 text-center md:w-1/2 md:text-right'>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='relative text-4xl font-bold leading-relaxed text-white'
        >
          أفضل موقع لشحن الرصيد لتطبيقات الرهانات
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='leading-relaxed text-neutral-100'
        >
          موقعنا يمكنك من شحن رصيدك لتطبيقات الرهانات{' '}
          <span className='font-roboto'>1XBet</span> و{' '}
          <span className='font-roboto'>LineBet</span> بسرعة وموثوقية عالية،
          وبأمان تام وبأقل الأسعار.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='text-sm text-neutral-100/45'
        >
          اختر طريقة الدفع الخاصة بك وقم بتعبئة حساب{' '}
          <span className='font-roboto'>1XBET</span> أو{' '}
          <span className='font-roboto'>LineBET</span> الخاص بك بسرعة وسهولة
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='mt-3 flex w-full flex-wrap items-center justify-center gap-3 md:justify-start'
        >
          <WtsBtn />
          <BinanceBtn />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className='relative mr-12 mt-10 w-1/2 md:mt-0 md:w-[40%]'
      >
        <img
          alt='player'
          src='/player.png'
          className='w-full drop-shadow-lg filter'
        />
      </motion.div>
    </section>
  );
};
