import React from 'react';
import { Button } from '../ui/button';

const AccountCreationInfo = () => {
  return (
    <section className="w-full bg-amber-300 mt-24 h-60 p-4 flex items-center justify-center gap-2 flex-wrap">
      <div className="w-full max-w-7xl md:px-16 flex justify-between items-center flex-wrap gap-y-3">
        <div className="flex flex-col gap-3 justify-start items-start">
          <img src="quotation-right.svg" alt="quote" className="opacity-60 w-5 h-5" />
          <h3 className="relative text-2xl font-medium text-slate-800">
            <span className="w-12 bg-white absolute bottom-1 left-0 h-3 -z-[-1]" />
            افتح حسابًا جديدًا 
            <span className="font-bold z-10 mr-3 relative justify-end items-end">
              الآن!
            </span>
          </h3>
          <h3 className="flex gap-2 text-slate-600 ">
                ابدأ رحلتك مع تطبيقات الرهانات الرائعة واستمتع بالعروض والمكافآت الحصرية.
            <img src="quotation-left.svg" alt="quote" className="opacity-60 w-5 h-5" />
          </h3>
        </div>

        <div className="flex flex-col gap-3 justify-start items-start">
            <h3 className="text-lg font-semibold text-slate-800">

            </h3>
           <Button
            className=" group  flex justify-center items-center gap-2 text-white"
            >
                ابدأ الآن
                <svg
                className=' group-hover:ml-2 transition-all duration-300 ease-in-out'
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18}  fill={"none"}>
    <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.99996 17C8.99996 17 4.00001 13.3176 4 12C3.99999 10.6824 9 7 9 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
            </Button>
            </div>
      </div>
    </section>
  );
};

export default AccountCreationInfo;
