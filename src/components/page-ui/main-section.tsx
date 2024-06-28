'use client'
import { Button } from '../ui/button'
import { WtsBtn } from './wts-btn'
import {motion } from 'framer-motion'


export const MainSection = () => {
    return (<section
        id='about'
        className='relative z-10 mt-32 flex w-full max-w-6xl flex-col items-center justify-start px-4 md:mt-28 md:flex-row'
    >
        <div className='flex w-full flex-col gap-3 text-center md:w-1/2 md:text-right'>
            <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}

            className='text-4xl font-bold text-white'>
                أفضل موقع لشحن الرصيد لتطبيقات الرهانات
            </motion.h1>
            <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 ,delay:0.2}}
            className='text-neutral-100'>
                موقعنا يمكنك من شحن رصيدك لتطبيقات الرهانات OneXBet و Malbet بسرعة
                وموثوقية عالية، وبأمان تام وبأقل الأسعار.
            </motion.p>
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 ,delay:0.4}}
            className='mt-3 flex w-full items-center justify-center gap-3 md:justify-start'>
                <WtsBtn />
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
            </motion.div>
        </div>
        <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className='relative mr-12 mt-10 w-1/2 md:mt-0 md:w-[40%]'>
            <img
                alt='player'
                src='/player.png'
                className='w-full drop-shadow-lg filter'
            />
        </motion.div>
    </section>)
}